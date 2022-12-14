import { configureStore } from '@reduxjs/toolkit'
import { authReducer, userReducer } from '../../redux'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        user: userReducer,
    },
})
