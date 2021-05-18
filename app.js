// Initialize Firebase


///Edit Under This only

var firebaseConfig = {
  apiKey: "api-key",
  authDomain: "project-id.firebaseapp.com",
  databaseURL: "https://project-id.firebaseio.com",
  projectId: "project-id",
  storageBucket: "project-id.appspot.com",
  messagingSenderId: "sender-id",
  appId: "app-id",
  measurementId: "G-measurement-id",
  <!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/8.6.1/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->

<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAbn9TUBPQHJsH5R-P2WOPqQD1h3yeNV40",
    authDomain: "deneme-194ae.firebaseapp.com",
    projectId: "deneme-194ae",
    storageBucket: "deneme-194ae.appspot.com",
    messagingSenderId: "75403386082",
    appId: "1:75403386082:web:38d0ed650fe7830a0892bb"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
</script>
};

     
 
////Do Not Edit Below This

firebase.initializeApp(firebaseConfig);
var database = firebase.database();
