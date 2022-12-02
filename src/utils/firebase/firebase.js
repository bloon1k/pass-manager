import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: 'AIzaSyBq72di5oV7cSgHlsqNnrdKfXqRvrjw6lk',
    authDomain: 'pass-manager-34932.firebaseapp.com',
    projectId: 'pass-manager-34932',
    storageBucket: 'pass-manager-34932.appspot.com',
    messagingSenderId: '977816456953',
    appId: '1:977816456953:web:02ba48c86568d4d4c25c28',
    measurementId: 'G-LZZS78BWG1',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const database = getFirestore(app)
