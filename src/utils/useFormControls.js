import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup/dist/yup'
// firebase
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from 'firebase/auth'
import {
    auth as authObject,
    getUserDataById,
    createNewUserData,
    addCredentialsToDatabase,
    addCredentialsValidator,
    loginValidator,
} from '../utils'
// redux
import { useDispatch, useSelector } from 'react-redux'
import { login, setId, setEmail, setCredentialsList } from '../redux'
// router
import { useNavigate } from 'react-router-dom'

const useFormControls = (credentialType) => {
    function defineValidator() {
        switch (credentialType) {
            case 'login':
                return loginValidator
            case 'credentials':
                return addCredentialsValidator
        }
    }

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: yupResolver(defineValidator()),
    })

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const auth = authObject

    function signUserIn(user) {
        dispatch(setEmail(user.email))
        dispatch(setId(user.uid))
        dispatch(login())
        localStorage.setItem('isAuth', 'true')
        localStorage.setItem('id', user.uid)
        localStorage.setItem('email', user.email)
        navigate('/')
    }

    function submitRegisterForm(data) {
        createUserWithEmailAndPassword(auth, data.email, data.password)
            .then(({ user }) => {
                // Registered, signed in
                createNewUserData(user.uid).then(() => signUserIn(user))
            })
            .catch((error) => alert('Error: ' + error.code))
        reset()
    }

    function submitLoginForm(data) {
        signInWithEmailAndPassword(auth, data.email, data.password)
            .then(({ user }) => {
                // Signed in
                getUserDataById(user.uid).then((userData) => {
                    signUserIn(user)
                    dispatch(setCredentialsList(userData.credentialsList))
                })
            })
            .catch((error) => alert('Error: ' + error.code))
        reset()
    }

    const credentialsList = useSelector((state) => state.user.credentialsList)
    const userId = useSelector((state) => state.user.id)

    function submitAddCredentialsForm({ name, login, password }) {
        const newCredentialsList = [
            ...credentialsList,
            { name, login, password },
        ]
        dispatch(setCredentialsList(newCredentialsList))
        addCredentialsToDatabase(userId, newCredentialsList)
        reset()
    }

    return {
        register,
        handleSubmit,
        errors,
        submitRegisterForm,
        submitLoginForm,
        submitAddCredentialsForm,
        credentialsList,
    }
}

export { useFormControls }
