import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, signInAnonymously } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBmscGwOdYc8PmgXr3MLg_5VGD_955BHPI",
    authDomain: "react-typescript-firebas-2b5f2.firebaseapp.com",
    projectId: "react-typescript-firebas-2b5f2",
    storageBucket: "react-typescript-firebas-2b5f2.firebasestorage.app",
    messagingSenderId: "258825711000",
    appId: "1:258825711000:web:424fc4c85234448a0c8fed",
    measurementId: "G-M3DD1CBZ9C"
};

const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);
export const auth = getAuth();
export const signInAnonymouslyWithFirebase = () => {
    signInAnonymously(auth)
        .then(() => {
            console.log("Signed in anonymously");
        })
        .catch((error) => {
            console.error("Error during anonymous sign-in", error);
        });
};