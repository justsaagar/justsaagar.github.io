importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js");

const firebaseConfig = {
      apiKey: 'AIzaSyDofCveYgox1Kq9-dGA1sO1q3kQZ00KKBM',
      authDomain: 'camlenio.firebaseapp.com',
      databaseURL: 'https://project-id.firebaseio.com',
      projectId: 'camlenio',
      storageBucket: 'camlenio.appspot.com',
      messagingSenderId: '63499017842',
      appId: '1:63499017842:web:621ceebd392509408ceceb',
      measurementId: 'G-measurement-id',
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((message) => {
    console.log("onBackgroundMessage", message);
});

