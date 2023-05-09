import firebase from "firebase/app";
import 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDfBAFpnvf0EJkasJnvQICfD_VPh1RMUA4",
    authDomain: "react-app-5fdd6.firebaseapp.com",
    projectId: "react-app-5fdd6",
    storageBucket: "react-app-5fdd6.appspot.com",
    messagingSenderId: "408240560306",
    appId: "1:408240560306:web:98af0bd5ee895b911f91ab"
};

// inicializamos la app
const app = firebase.initializeApp(firebaseConfig);

export const getFirestore = () => {
    return firebase.firestore(app);
}