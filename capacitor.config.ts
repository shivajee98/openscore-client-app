import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.openscore.sbs',
  appName: 'OpenScore',
  webDir: 'www',
  android: {
    loggingBehavior: 'debug',
    webContentsDebuggingEnabled: true
  },
  server: {
    url: 'https://openscore.msmeloan.sbs/',
    allowNavigation: ['openscore.msmeloan.sbs'],
    androidScheme: 'https'
  },
  plugins: {
    CapacitorHttp: {
      enabled: false
    },
    CapacitorCookies: {
      enabled: false
    },
    StatusBar: {
      overlaysWebView: false,
      style: 'DARK',
      backgroundColor: '#000000'
    },
    PushNotifications: {
      presentationOptions: ["badge", "sound", "alert"]
    }
  }
};

export default config;
