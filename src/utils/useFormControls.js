import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup/dist/yup'
import * as yup from 'yup'

const useFormControls = () => {
    const validator = yup.object().shape({
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

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: yupResolver(validator),
    })

    function submitRegisterForm(data) {
        console.log(data)
        reset()
    }

    return { register, handleSubmit, errors, submitRegisterForm }
}

export default useFormControls
