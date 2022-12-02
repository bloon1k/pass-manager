import * as yup from 'yup'

export const loginValidator = yup.object().shape({
    email: yup
        .string()
        .email('Please enter a valid email')
        .required('Email is required'),
    password: yup
        .string()
        .min(3, 'At least 3 characters')
        .max(25, 'Maximum 25 characters')
        .required('Password is required'),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password'), null], 'Passwords must match'),
})

export const addCredentialsValidator = yup.object().shape({
    name: yup.string().required('Name is required'),
    login: yup.string().required('Login is required'),
    password: yup.string().required('Password is required'),
})
