import { useEffect } from 'react'
// redux
import { useDispatch } from 'react-redux'
import { login, setId, setEmail, setCredentialsList } from '../../redux'
// firebase
import { getUserDataById } from '../../utils'

const WithCheckedAuth = (component) => {
    const dispatch = useDispatch()

    useEffect(() => {
        const { id, isAuth, email } = localStorage
        if (isAuth === 'true') {
            dispatch(login())
            dispatch(setId(id))
            dispatch(setEmail(email))
            getUserDataById(id).then((userData) => {
                if (userData !== undefined) {
                    dispatch(setCredentialsList(userData.credentialsList))
                } else {
                    alert('Error: data is undefined')
                }
            })
        }
    }, [])

    return component.children
}

export { WithCheckedAuth }
