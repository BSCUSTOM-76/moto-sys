importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js');

const firebaseConfig = {
    apiKey: "AIzaSyBr_NKOSzmh2CwbR7SYaLAk_0TsYe39VTY",
    authDomain: "moto-sys.firebaseapp.com",
    projectId: "moto-sys",
    storageBucket: "moto-sys.firebasestorage.app",
    messagingSenderId: "267462641413",
    appId: "1:267462641413:web:f4d176ae31a2bdf970596c"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// Manipula e exibe notificações recebidas em segundo plano
messaging.onBackgroundMessage((payload) => {
    console.log('[firebase-messaging-sw.js] Notificação recebida em segundo plano: ', payload);
    
    const notificationTitle = payload.notification.title || 'Alerta BS.CUSTOM';
    const notificationOptions = {
        body: payload.notification.body,
        icon: '/logo.png', // Garanta que a logo esteja na raiz
        badge: '/logo.png'
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
