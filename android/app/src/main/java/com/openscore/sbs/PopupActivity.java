package com.openscore.sbs;

import android.app.Activity;
import android.app.KeyguardManager;
import android.content.Context;
import android.content.Intent;
import android.media.AudioAttributes;
import android.media.AudioFocusRequest;
import android.media.AudioManager;
import android.os.Build;
import android.os.Bundle;
import android.os.PowerManager;
import android.util.Log;
import android.view.View;
import android.view.WindowManager;
import android.widget.Button;
import android.widget.TextView;
import android.media.AudioFormat;
import android.media.AudioTrack;

import com.k2fsa.sherpa.onnx.OfflineTts;
import com.k2fsa.sherpa.onnx.OfflineTtsConfig;
import com.k2fsa.sherpa.onnx.OfflineTtsModelConfig;
import com.k2fsa.sherpa.onnx.OfflineTtsVitsModelConfig;
import com.k2fsa.sherpa.onnx.GeneratedAudio;

public class PopupActivity extends Activity {

    private OfflineTts tts;
    private AudioTrack audioTrack;
    private String speechText;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        
        Log.e("SbsPopup", "PopupActivity created. Setting window flags to wake device.");

        // Wake screen and bypass keyguard flags
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O_MR1) {
            setShowWhenLocked(true);
            setTurnScreenOn(true);
            KeyguardManager km = (KeyguardManager) getSystemService(Context.KEYGUARD_SERVICE);
            if (km != null) km.requestDismissKeyguard(this, null);
        } else {
            getWindow().addFlags(
                    WindowManager.LayoutParams.FLAG_SHOW_WHEN_LOCKED |
                    WindowManager.LayoutParams.FLAG_TURN_SCREEN_ON |
                    WindowManager.LayoutParams.FLAG_DISMISS_KEYGUARD |
                    WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON
            );
        }

        // Additional manual wake lock to guarantee screen stays on during TTS
        PowerManager pm = (PowerManager) getSystemService(Context.POWER_SERVICE);
        if (pm != null) {
            PowerManager.WakeLock wakeLock = pm.newWakeLock(
                PowerManager.SCREEN_BRIGHT_WAKE_LOCK | PowerManager.ACQUIRE_CAUSES_WAKEUP,
                "Sbs:PopupWakeLock"
            );
            wakeLock.acquire(10000); // Hold for 10 seconds
        }

        setContentView(R.layout.activity_popup);

        String title = getIntent().getStringExtra("title");
        String message = getIntent().getStringExtra("message");
        speechText = getIntent().getStringExtra("speech_text");

        TextView tvTitle = findViewById(R.id.title);
        TextView tvMessage = findViewById(R.id.message);
        Button btnClose = findViewById(R.id.btn_close);
        Button btnOpen = findViewById(R.id.btn_open);

        if (title != null) tvTitle.setText(title);
        if (message != null) tvMessage.setText(message);

        btnClose.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                finish();
            }
        });

        btnOpen.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent mainIntent = new Intent(PopupActivity.this, MainActivity.class);
                mainIntent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK | Intent.FLAG_ACTIVITY_CLEAR_TOP);
                startActivity(mainIntent);
                finish();
            }
        });

        if (speechText != null && !speechText.isEmpty()) {
            initTTS(speechText);
        }
    }

    private void requestAudioFocus() {
        try {
            AudioManager audioManager = (AudioManager) getSystemService(Context.AUDIO_SERVICE);
            if (audioManager != null) {
                if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
                    AudioFocusRequest focusRequest = new AudioFocusRequest.Builder(AudioManager.AUDIOFOCUS_GAIN_TRANSIENT_MAY_DUCK)
                            .setAudioAttributes(new AudioAttributes.Builder()
                                    .setUsage(AudioAttributes.USAGE_NOTIFICATION)
                                    .setContentType(AudioAttributes.CONTENT_TYPE_SPEECH)
                                    .build())
                            .build();
                    audioManager.requestAudioFocus(focusRequest);
                } else {
                    audioManager.requestAudioFocus(null, AudioManager.STREAM_NOTIFICATION, AudioManager.AUDIOFOCUS_GAIN_TRANSIENT_MAY_DUCK);
                }
            }
        } catch (Exception e) {
            Log.e("SbsPopup", "Audio focus error: " + e.getMessage());
        }
    }

    private void initTTS(final String text) {
        requestAudioFocus();
        new Thread(new Runnable() {
            @Override
            public void run() {
                try {
                    Log.e("SbsPopup", "Initializing Piper TTS via Sherpa-ONNX...");
                    
                    OfflineTtsVitsModelConfig vitsConfig = new OfflineTtsVitsModelConfig(
                        "vits-piper-en_US-amy-low/en_US-amy-low.onnx",
                        "",
                        "vits-piper-en_US-amy-low/tokens.txt",
                        "vits-piper-en_US-amy-low/espeak-ng-data",
                        "",
                        1.0f,
                        1.0f,
                        1.0f
                    );
                    
                    OfflineTtsModelConfig modelConfig = new OfflineTtsModelConfig(
                        vitsConfig,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        1,
                        true,
                        "cpu"
                    );

                    OfflineTtsConfig ttsConfig = new OfflineTtsConfig(
                        modelConfig,
                        "",
                        "",
                        1,
                        1.0f
                    );

                    tts = new OfflineTts(getAssets(), ttsConfig);
                    
                    Log.e("SbsPopup", "Piper TTS initialized. Generating audio for: " + text);
                    GeneratedAudio audio = tts.generate(text, 0, 1.0f);
                    
                    if (audio != null && audio.getSamples() != null) {
                        playAudio(audio.getSamples(), audio.getSampleRate());
                    } else {
                        Log.e("SbsPopup", "TTS Generation failed (null audio)");
                    }
                } catch (Exception e) {
                    Log.e("SbsPopup", "Error in PIPER TTS: " + e.getMessage());
                    e.printStackTrace();
                }
            }
        }).start();
    }

    private void playAudio(float[] samples, int sampleRate) {
        try {
            int bufferSizeInBytes = AudioTrack.getMinBufferSize(
                sampleRate,
                AudioFormat.CHANNEL_OUT_MONO,
                AudioFormat.ENCODING_PCM_FLOAT
            );

            audioTrack = new AudioTrack.Builder()
                .setAudioAttributes(new AudioAttributes.Builder()
                        .setUsage(AudioAttributes.USAGE_NOTIFICATION)
                        .setContentType(AudioAttributes.CONTENT_TYPE_SPEECH)
                        .build())
                .setAudioFormat(new AudioFormat.Builder()
                        .setEncoding(AudioFormat.ENCODING_PCM_FLOAT)
                        .setSampleRate(sampleRate)
                        .setChannelMask(AudioFormat.CHANNEL_OUT_MONO)
                        .build())
                .setBufferSizeInBytes(bufferSizeInBytes)
                .setTransferMode(AudioTrack.MODE_STREAM)
                .build();

            audioTrack.play();
            audioTrack.write(samples, 0, samples.length, AudioTrack.WRITE_BLOCKING);
            Log.e("SbsPopup", "Audio playback finished.");
            
            // Release track when done
            audioTrack.stop();
            audioTrack.release();
            audioTrack = null;

        } catch (Exception e) {
            Log.e("SbsPopup", "Error playing AudioTrack: " + e.getMessage());
        }
    }

    @Override
    protected void onDestroy() {
        if (tts != null) {
            tts.release();
        }
        if (audioTrack != null) {
            try {
                audioTrack.stop();
                audioTrack.release();
            } catch (Exception e) {}
        }
        super.onDestroy();
    }
}
