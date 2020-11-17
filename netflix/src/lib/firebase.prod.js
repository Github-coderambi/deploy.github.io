import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
//import { seedDatabase} from '../seed';


const config ={
  apiKey: "AIzaSyC5qSj4CnVhtn8mV-XSWKPkqrhNgMp6gWI",
  authDomain: "netflix-86f4b.firebaseapp.com",
  databaseURL: "https://netflix-86f4b.firebaseio.com",
  projectId: "netflix-86f4b",
  storageBucket: "netflix-86f4b.appspot.com",
  messagingSenderId: "649091655578",
  appId: "1:649091655578:web:94e3a25724916765827c23",
  measurementId: "G-4LJR50J1BF"
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

//seedDatabase(firebase);
export { firebase };

/*


<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/8.0.0/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/8.0.0/firebase-analytics.js"></script>

<script>
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyC5qSj4CnVhtn8mV-XSWKPkqrhNgMp6gWI",
    authDomain: "netflix-86f4b.firebaseapp.com",
    databaseURL: "https://netflix-86f4b.firebaseio.com",
    projectId: "netflix-86f4b",
    storageBucket: "netflix-86f4b.appspot.com",
    messagingSenderId: "649091655578",
    appId: "1:649091655578:web:94e3a25724916765827c23",
    measurementId: "G-4LJR50J1BF"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
</script>

*/