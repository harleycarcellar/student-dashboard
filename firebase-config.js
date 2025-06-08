<script type="module">

  // Import the functions you need from the SDKs you need

  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.0/firebase-app.js";

  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.9.0/firebase-analytics.js";

  // TODO: Add SDKs for Firebase products that you want to use

  // https://firebase.google.com/docs/web/setup#available-libraries


  // Your web app's Firebase configuration

  // For Firebase JS SDK v7.20.0 and later, measurementId is optional

  const firebaseConfig = {

    apiKey: "AIzaSyB69Trl6vGFUM8Kyn8Q9eAZiQ89OcoEXXg",

    authDomain: "ley-db-391ce.firebaseapp.com",

    projectId: "ley-db-391ce",

    storageBucket: "ley-db-391ce.firebasestorage.app",

    messagingSenderId: "189292216935",

    appId: "1:189292216935:web:11395c17ee45e36d7ecac2",

    measurementId: "G-195Z88F9N3"

  };


  // Initialize Firebase

  const app = initializeApp(firebaseConfig);

  const analytics = getAnalytics(app);

</script>