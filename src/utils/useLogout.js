import { useDispatch } from 'react-redux'
import { logout, clearUserData } from '../redux'

const useLogout = () => {
    const dispatch = useDispatch()

    function logoutHandler() {
        dispatch(logout())
        dispatch(clearUserData())
        localStorage.clear()
    }
    return logoutHandler
}

export { useLogout }
