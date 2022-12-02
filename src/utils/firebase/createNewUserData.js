import { doc, setDoc } from 'firebase/firestore'
import { database } from './firebase'

export async function createNewUserData(userId) {
    await setDoc(doc(database, 'credentialsLists', userId), {})
        .then(() => 'success')
        .catch((error) => {
            const errorCode = error.code
            alert('Error: ' + errorCode)
        })
}
