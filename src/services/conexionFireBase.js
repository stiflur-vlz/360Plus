
  // Import the functions you need from the SDKs you need
  
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCGovHZ28qTHbbq_hDvjBKpTQ580hUyz7c",
    authDomain: "tiendasuracharlyp.firebaseapp.com",
    projectId: "tiendasuracharlyp",
    storageBucket: "tiendasuracharlyp.appspot.com",
    messagingSenderId: "1035139119530",
    appId: "1:1035139119530:web:cfb096548b55b869c913d3",
    measurementId: "G-ZWTY5J2FHT"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
