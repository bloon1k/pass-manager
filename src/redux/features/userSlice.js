import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    id: null,
    email: '',
    credentialsList: [],
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setId: (state, action) => {
            state.id = action.payload
        },
        setEmail: (state, action) => {
            state.email = action.payload
        },
        setCredentialsList: (state, action) => {
            state.credentialsList = action.payload
        },
        clearUserData: (state) => {
            state.id = null
            state.email = ''
            state.credentialsList = []
        },
    },
})

export const { setId, setEmail, setCredentialsList, clearUserData } =
    userSlice.actions
export const userReducer = userSlice.reducer
