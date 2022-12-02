import React from 'react'
// Router
import { Route, Routes as BrowserRoutes } from 'react-router-dom'
// Children
import { Dashboard, Login, Register } from '../components'
// HOCs
import { WithAuth, WithoutAuth } from '../utils'

const Routes = () => {
    return (
        <BrowserRoutes>
            <Route
                path={'/'}
                element={
                    <WithAuth>
                        <Dashboard />
                    </WithAuth>
                }
            />
            <Route
                path={'login'}
                element={
                    <WithoutAuth>
                        <Login />
                    </WithoutAuth>
                }
            />
            <Route
                path={'register'}
                element={
                    <WithoutAuth>
                        <Register />
                    </WithoutAuth>
                }
            />
        </BrowserRoutes>
    )
}

export { Routes }
