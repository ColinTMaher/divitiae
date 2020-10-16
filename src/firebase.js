import firebase from "firebase"
import "firebase/auth"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAnPRSqiRUt51nr3XNEld3MvuZ7AHjBoo0",
    authDomain: "divitiae-8b4f0.firebaseapp.com",
    databaseURL: "https://divitiae-8b4f0.firebaseio.com",
    projectId: "divitiae-8b4f0",
    storageBucket: "divitiae-8b4f0.appspot.com",
    messagingSenderId: "846076850100",
    appId: "1:846076850100:web:2ea8edceb0e0c3d56acce1",
    measurementId: "G-8SB1V4HCDX"
}

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const db = firebase.firestore()


 