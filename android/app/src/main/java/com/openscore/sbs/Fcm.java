package com.openscore.sbs;

import android.Manifest;
import android.content.Context;
import android.os.PowerManager;
import android.util.Log;
import androidx.annotation.RequiresPermission;
import com.google.firebase.messaging.RemoteMessage;
import com.google.firebase.messaging.FirebaseMessagingService;

public class Fcm extends FirebaseMessagingService {
    
    @Override
    public void onNewToken(String token) {
        super.onNewToken(token);
        Log.e("SbsFirebase", "------------------------------------------");
        Log.e("SbsFirebase", "NEW TOKEN RECEIVED: " + token);
        Log.e("SbsFirebase", "------------------------------------------");
    }

    private static android.speech.tts.TextToSpeech tts;
    private static String pendingSpeech;
    private static PowerManager.WakeLock wakeLock;

    @Override
    @RequiresPermission(Manifest.permission.POST_NOTIFICATIONS)
    public void onMessageReceived(RemoteMessage remoteMessage) {
        super.onMessageReceived(remoteMessage);
        
        Log.e("SbsFirebase", "ON_MESSAGE_RECEIVED TRIGGERED!");
        Log.e("SbsFirebase", "Data Received: " + remoteMessage.getData().toString());
        
        // --- Acquire WakeLock to prevent device from sleeping during processing ---
        try {
            PowerManager pm = (PowerManager) getSystemService(Context.POWER_SERVICE);
            if (wakeLock == null) {
                wakeLock = pm.newWakeLock(PowerManager.PARTIAL_WAKE_LOCK, "Sbs:NotificationWakeLock");
            }
            if (!wakeLock.isHeld()) {
                wakeLock.acquire(15000); // 15 seconds max
            }
        } catch (Exception e) {
            Log.e("SbsFirebase", "WakeLock acquisition failed: " + e.getMessage());
        }

        String title = null;
        String body = null;
        String type = remoteMessage.getData().get("type");
        String amount = remoteMessage.getData().get("amount");
        String ref = remoteMessage.getData().get("ref");

        if (remoteMessage.getNotification() != null) {
            title = remoteMessage.getNotification().getTitle();
            body = remoteMessage.getNotification().getBody();
        } else if (remoteMessage.getData().size() > 0) {
            title = remoteMessage.getData().get("title");
            body = remoteMessage.getData().get("body");
        }

        if (title != null && body != null) {
            String isFullScreen = remoteMessage.getData().get("is_fullscreen");
            Log.e("SbsFirebase", ">>> VALID NOTIFICATION: " + title + " (FullScreen: " + isFullScreen + ")");
            
            String speechText = null;
            if ("payment_received".equals(type)) {
                String payerName = remoteMessage.getData().get("payer_name");
                Log.e("SbsFirebase", "Payment Received From: " + payerName + ", Amount: " + amount);
                if (payerName != null && !payerName.isEmpty()) {
                    speechText = "Received " + amount + " rupees from " + payerName;
                } else if (amount != null) {
                    speechText = "Received " + amount + " rupees";
                }
            } else if ("cashback".equals(type) || "receiver_cashback".equals(type)) {
                Log.e("SbsFirebase", "Cashback Received: " + amount);
                if (amount != null) speechText = "Received " + amount + " rupees as cashback";
            } else if (type != null && (type.contains("commission") || type.contains("reward") || type.contains("bonus"))) {
                Log.e("SbsFirebase", "Reward/Bonus Received: " + type + ", Amount: " + amount);
                if (amount != null) speechText = "Received " + amount + " rupees reward";
            }

            // Fallback for general alerts when isFullScreen is requested
            if (speechText == null && "true".equals(isFullScreen)) {
                speechText = body;
            }

            sendLocalNotification(title, body, "true".equals(isFullScreen), speechText);
            
        } else {
            Log.e("SbsFirebase", "⚠️ Message missing title/body in data!");
        }
    }

    private void sendLocalNotification(String title, String messageBody, boolean isFullScreen, String speechText) {
        try {
            android.content.Context context = getApplicationContext();
            android.content.Intent targetIntent;
            
            if (isFullScreen) {
                targetIntent = new android.content.Intent(context, PopupActivity.class);
                targetIntent.putExtra("title", title);
                targetIntent.putExtra("message", messageBody);
                targetIntent.putExtra("speech_text", speechText);
            } else {
                targetIntent = new android.content.Intent(context, MainActivity.class);
                targetIntent.setAction(android.content.Intent.ACTION_MAIN);
                targetIntent.addCategory(android.content.Intent.CATEGORY_LAUNCHER);
            }
            targetIntent.addFlags(android.content.Intent.FLAG_ACTIVITY_NEW_TASK | android.content.Intent.FLAG_ACTIVITY_SINGLE_TOP | android.content.Intent.FLAG_ACTIVITY_CLEAR_TOP);
            
            android.app.PendingIntent pendingIntent = android.app.PendingIntent.getActivity(
                context, 
                (int) System.currentTimeMillis(), 
                targetIntent,
                android.app.PendingIntent.FLAG_UPDATE_CURRENT | android.app.PendingIntent.FLAG_IMMUTABLE
            );

            String channelId = "fcm_high_priority_channel";
            android.app.NotificationManager notificationManager =
                    (android.app.NotificationManager) getSystemService(android.content.Context.NOTIFICATION_SERVICE);

            if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.O) {
                android.app.NotificationChannel channel = new android.app.NotificationChannel(channelId,
                        "High Priority Alerts",
                        android.app.NotificationManager.IMPORTANCE_HIGH);
                channel.setLockscreenVisibility(android.app.Notification.VISIBILITY_PUBLIC);
                channel.enableLights(true);
                channel.enableVibration(true);
                channel.setBypassDnd(true); // Allow breaking through DND if possible
                notificationManager.createNotificationChannel(channel);
            }

            androidx.core.app.NotificationCompat.Builder notificationBuilder =
                    new androidx.core.app.NotificationCompat.Builder(this, channelId)
                            .setSmallIcon(getApplicationInfo().icon)
                            .setContentTitle(title)
                            .setContentText(messageBody)
                            .setAutoCancel(true)
                            .setDefaults(android.app.Notification.DEFAULT_ALL)
                            .setPriority(androidx.core.app.NotificationCompat.PRIORITY_MAX)
                            .setVisibility(androidx.core.app.NotificationCompat.VISIBILITY_PUBLIC)
                            .setContentIntent(pendingIntent);

            if (isFullScreen) {
                notificationBuilder.setCategory(androidx.core.app.NotificationCompat.CATEGORY_CALL)
                        .setFullScreenIntent(pendingIntent, true);
            }

            int notificationId = (int) System.currentTimeMillis();
            notificationManager.notify(notificationId, notificationBuilder.build());
            Log.e("SbsFirebase", "✅ High Priority Notification Sent ID: " + notificationId);
        } catch (Exception e) {
            Log.e("SbsFirebase", "Failed to show manual notification: " + e.getMessage());
        }
    }
}
