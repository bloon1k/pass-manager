import React, { useEffect } from 'react'
// redux
import { useDispatch } from 'react-redux'
import { login } from '../redux/features/authSlice'

const WithCheckedAuth = (component) => {
    const dispatch = useDispatch()

    useEffect(() => {
        if (localStorage.getItem('isAuth') === 'true') {
            dispatch(login())
        }
    }, [])

    return component.children
}

export default WithCheckedAuth
