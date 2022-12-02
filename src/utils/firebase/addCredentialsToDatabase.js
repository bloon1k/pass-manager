import { doc, setDoc } from 'firebase/firestore'
import { database } from './firebase'

export async function addCredentialsToDatabase(userId, data) {
    await setDoc(doc(database, 'credentialsLists', userId), {
        credentialsList: [...data],
    })
        .then(() => 'success')
        .catch((error) => {
            const errorCode = error.code
            alert('Error: ' + errorCode)
        })
}
