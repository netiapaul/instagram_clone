// Import the functions you need from the SDKs you need
import InitializeApp from "firebase/app";
// import GetAnalytics  from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCo1TYucKUS1Hwb9kuTiIhjOd6wfUc6FWU",
  authDomain: "instagram-api-ced26.firebaseapp.com",
  projectId: "instagram-api-ced26",
  storageBucket: "instagram-api-ced26.appspot.com",
  messagingSenderId: "925473818552",
  appId: "1:925473818552:web:fd22e4ce77372c9314714d",
  measurementId: "G-Z7NGVE8JE4",
};

// Initialize Firebase
const firebase = InitializeApp(firebaseConfig);
// const analytics = GetAnalytics(app);

export default firebase;
