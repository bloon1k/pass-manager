import { useDispatch } from 'react-redux'
import { logout } from '../redux/features/authSlice'

const dispatch = useDispatch()
function logoutHandler() {
    dispatch(logout())
    localStorage.setItem('isAuth', 'false')
}
