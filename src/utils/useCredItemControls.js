import { useState } from 'react'
// redux
import { useDispatch, useSelector } from 'react-redux'
import { setCredentialsList } from '../redux'
// firebase
import { addCredentialsToDatabase } from '../utils'

const useCredItemControls = (item) => {
    const { name, login, password } = item
    const dispatch = useDispatch()

    const [isPassHidden, setIsPassHidden] = useState(true)
    const [isEditingMode, setIsEditingMode] = useState(false)

    const [nameValue, setNameValue] = useState(name)
    const [loginValue, setLoginValue] = useState(login)
    const [passwordValue, setPasswordValue] = useState(password)

    const userId = useSelector((state) => state.user.id)
    const credentialsList = useSelector((state) => state.user.credentialsList)

    function handleEdit() {
        if (isEditingMode) {
            const newCredentialsList = credentialsList.map((el) => {
                if (el === item) {
                    return {
                        name: nameValue,
                        login: loginValue,
                        password: passwordValue,
                    }
                } else {
                    return el
                }
            })
            dispatch(setCredentialsList(newCredentialsList))
            addCredentialsToDatabase(userId, newCredentialsList)
        }
        setIsEditingMode(!isEditingMode)
    }

    function handleDelete() {
        const newCredentialsList = credentialsList.filter((el) => el !== item)
        dispatch(setCredentialsList(newCredentialsList))
        addCredentialsToDatabase(userId, newCredentialsList)
    }

    function handleRevealPassword() {
        setIsPassHidden(!isPassHidden)
    }

    function encodePass() {
        let res = ''
        let pass = [...passwordValue]
        pass.forEach(() => (res = `${res}*`))
        return res
    }

    return {
        nameValue,
        loginValue,
        passwordValue,
        setNameValue,
        setLoginValue,
        setPasswordValue,
        isEditingMode,
        isPassHidden,
        handleEdit,
        handleDelete,
        handleRevealPassword,
        encodePass,
    }
}

export { useCredItemControls }
