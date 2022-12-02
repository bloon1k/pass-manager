import { doc, setDoc } from 'firebase/firestore'
import { database } from '../../utils'

export async function addCredentialsToDatabase(userId, data) {
    await setDoc(doc(database, 'credentialsLists', userId), {
        credentialsList: [...data],
    }).catch((error) => alert('Error: ' + error.code))
}
