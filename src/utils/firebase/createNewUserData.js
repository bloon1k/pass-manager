import { doc, setDoc } from 'firebase/firestore'
import { database } from '../../utils'

export async function createNewUserData(userId) {
    await setDoc(doc(database, 'credentialsLists', userId), {
        credentialsList: [],
    }).catch((error) => alert('Error: ' + error.code))
}
