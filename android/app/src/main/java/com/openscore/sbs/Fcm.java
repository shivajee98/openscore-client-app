package com.openscore.sbs;

import android.Manifest;
import android.util.Log;
import androidx.annotation.RequiresPermission;
import com.google.firebase.messaging.RemoteMessage;
import com.capacitorjs.plugins.pushnotifications.MessagingService;

public class Fcm extends MessagingService {
    
    @Override
    public void onNewToken(String token) {
        super.onNewToken(token);
        Log.e("SbsFirebase", "------------------------------------------");
        Log.e("SbsFirebase", "NEW TOKEN RECEIVED: " + token);
        Log.e("SbsFirebase", "------------------------------------------");
    }

    @Override
    @RequiresPermission(Manifest.permission.POST_NOTIFICATIONS)
    public void onMessageReceived(RemoteMessage remoteMessage) {
        super.onMessageReceived(remoteMessage);
        
        // --- THIS IS THE TEST LOG YOU REQUESTED ---
        Log.e("SbsFirebase", "ON_MESSAGE_RECEIVED TRIGGERED!");
        Log.e("SbsFirebase", "Data Received: " + remoteMessage.getData().toString());
        
        if (remoteMessage.getNotification() != null) {
            String title = remoteMessage.getNotification().getTitle();
            String body = remoteMessage.getNotification().getBody();
            Log.e("SbsFirebase", "Notification: " + title + " - " + body);
            
            // This builds the manual notification for foreground
            sendLocalNotification(title, body);
        }
    }

    private void sendLocalNotification(String title, String messageBody) {
        try {
            android.content.Intent intent = new android.content.Intent(this, MainActivity.class);
            intent.addFlags(android.content.Intent.FLAG_ACTIVITY_CLEAR_TOP);
            android.app.PendingIntent pendingIntent = android.app.PendingIntent.getActivity(this, 0, intent,
                    android.app.PendingIntent.FLAG_ONE_SHOT | android.app.PendingIntent.FLAG_IMMUTABLE);

            String channelId = "fcm_test_channel";
            android.app.NotificationManager notificationManager =
                    (android.app.NotificationManager) getSystemService(android.content.Context.NOTIFICATION_SERVICE);

            if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.O) {
                android.app.NotificationChannel channel = new android.app.NotificationChannel(channelId,
                        "FCM Test Channel",
                        android.app.NotificationManager.IMPORTANCE_HIGH);
                notificationManager.createNotificationChannel(channel);
            }

            androidx.core.app.NotificationCompat.Builder notificationBuilder =
                    new androidx.core.app.NotificationCompat.Builder(this, channelId)
                            .setSmallIcon(getApplicationInfo().icon)
                            .setContentTitle(title)
                            .setContentText(messageBody)
                            .setAutoCancel(true)
                            .setPriority(androidx.core.app.NotificationCompat.PRIORITY_HIGH)
                            .setContentIntent(pendingIntent);

            notificationManager.notify(1, notificationBuilder.build());
            Log.e("SbsFirebase", "✅ Manual Notification Shown on Screen!");
        } catch (Exception e) {
            Log.e("SbsFirebase", "Failed to show manual notification: " + e.getMessage());
        }
    }
}
