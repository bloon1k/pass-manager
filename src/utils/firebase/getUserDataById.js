import { doc, getDoc } from 'firebase/firestore'
import { database } from '../../utils'

export async function getUserDataById(userId) {
    const docRef = doc(database, 'credentialsLists', userId)
    const docSnap = await getDoc(docRef)
    return docSnap.data()
}
