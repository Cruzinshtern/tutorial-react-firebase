import {useCallback} from "react";
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import { useAuthState } from "react-firebase-hooks/auth";
// import { useCollectionData } from "react-firebase-hooks/firestore";

firebase.initializeApp({
    apiKey: "AIzaSyB1LV3FGaIUMo2e5lko-yQqZaMo2h8UiHw",
    authDomain: "test-todo-f4a7b.firebaseapp.com",
    projectId: "test-todo-f4a7b",
    storageBucket: "test-todo-f4a7b.appspot.com",
    messagingSenderId: "962938839489",
    appId: "1:962938839489:web:27e9827bf460dcf7f54f40",
    measurementId: "G-S2CFBCSTGH"
})

const firestore = firebase.firestore();


export const useAuth = () => {
    const register = useCallback((user) => {
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then((userCredential) => {
                // Signed in
                // let user = userCredential.user;
                firestore.collection('users').doc(user.email).set(user).then(() => {
                    console.log("Document successfully written!");
                }).catch((error) => {
                    console.error("Error writing document: ", error);
                })
            })
            .catch((error) => {
                console.log(error.message)
            });
    }, [])

    const login = useCallback((user) => {
        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then((userCredential) => {
                // Signed in
                let token = userCredential.user.za;
                localStorage.setItem('token', token);
            })
            .catch((error) => {
                console.log(error.message);
            });
    }, [])

    const logout = useCallback(() => {
        firebase.auth().signOut().then(() => {
            localStorage.removeItem("token");
        }).catch((error) => {
            console.log(error.message);
        });
    }, [])

    return {register, login, logout}
}