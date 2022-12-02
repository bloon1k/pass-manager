import React from 'react'
// router
import { Navigate } from 'react-router-dom'
// redux
import { useSelector } from 'react-redux'

export const WithAuth = (component) => {
    const isAuth = useSelector((state) => state.auth.isAuth)

    if (!isAuth) {
        return <Navigate to={'/login'} />
    }

    return component.children
}
