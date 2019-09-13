import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var firebaseConfig = {
    apiKey: "AIzaSyCH7M4T-GI_OQa1HEIkO0ylzcBrV3oCIGc",
    authDomain: "react-messaging-app-a7dcd.firebaseapp.com",
    databaseURL: "https://react-messaging-app-a7dcd.firebaseio.com",
    projectId: "react-messaging-app-a7dcd",
    storageBucket: "react-messaging-app-a7dcd.appspot.com",
    messagingSenderId: "631069968616",
    appId: "1:631069968616:web:71a5d19371fac060c2215d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
