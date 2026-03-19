const { WebSocket } = require('ws');
const ws = new WebSocket('ws://localhost:9333/devtools/page/679DC94BC571A8CCF45E0DE3C318A6B2');

ws.on('open', () => {
  ws.send(JSON.stringify({ id: 0, method: 'Runtime.enable' }));
  ws.send(JSON.stringify({
    id: 1,
    method: 'Runtime.evaluate',
    params: {
      expression: `(async () => {
        try {
          const { PushNotifications } = Capacitor.Plugins;
          console.log('[DEBUG] Setting up registration listener...');
          PushNotifications.addListener('registration', (token) => {
            console.log('[DEBUG] REGISTRATION EVENT RECEIVED:', token.value);
            window.__fcm_token_received = token.value;
          });
          PushNotifications.addListener('registrationError', (error) => {
            console.log('[DEBUG] REGISTRATION ERROR EVENT:', JSON.stringify(error));
            window.__fcm_error_received = JSON.stringify(error);
          });
          console.log('[DEBUG] Calling PushNotifications.register()...');
          await PushNotifications.register();
          console.log('[DEBUG] register() call finished.');
          return JSON.stringify({ success: true });
        } catch (e) {
          return JSON.stringify({ error: e.message });
        }
      })()`,
      returnByValue: true,
      awaitPromise: true
    }
  }));
});

ws.on('message', (data) => {
  const r = JSON.parse(data.toString());
  if (r.method === 'Runtime.consoleAPICalled') {
    const args = r.params.args.map(a => a.value || a.description || 'null');
    console.log('[CONSOLE]', ...args);
    return;
  }
  if (r.id === 1) {
    const val = r.result?.result?.value;
    if (val) console.log('State:', JSON.stringify(JSON.parse(val), null, 2));
    else console.log('Raw:', JSON.stringify(r, null, 2));
    // Don't exit yet, wait for console logs
    setTimeout(() => {
      ws.close();
      process.exit(0);
    }, 5000);
  }
});
