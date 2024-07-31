const firebaseConfig = {
    apiKey: "AIzaSyATOhn9qvznmG8NjmT-Hcw9jHkTGcp0Dl8",
    authDomain: "show-crafters-939ae.firebaseapp.com",
    databaseURL: "https://show-crafters-939ae-default-rtdb.firebaseio.com",
    projectId: "show-crafters-939ae",
    storageBucket: "show-crafters-939ae.appspot.com",
    messagingSenderId: "24872296878",
    appId: "1:24872296878:web:58ad386466f7cdbc42683f",
    measurementId: "G-8FGNQ8EQHZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();



function login() {


    var uemail = document.getElementById("email");
    var upassword = document.getElementById("password");

    const promise = auth.signInWithEmailAndPassword(uemail.value, upassword.value);
    promise.catch(e => alert(e.message));
    window.alert("logedin")
}