import React from 'react'
// Styles
import './Register-styles.scss'
// Form
import { useFormControls } from '../../utils'
// Router
import { Link } from 'react-router-dom'

const Register = () => {
    const { register, handleSubmit, errors, submitRegisterForm } =
        useFormControls('login')

    return (
        <section className={'register'}>
            <form
                className={'register__form'}
                onSubmit={handleSubmit(submitRegisterForm)}
            >
                <input
                    className={'input'}
                    type="email"
                    placeholder={'Email'}
                    {...register('email')}
                />
                {errors.email && (
                    <span className={'error'}>{errors.email.message}</span>
                )}
                <input
                    className={'input'}
                    type="password"
                    placeholder={'Password'}
                    {...register('password')}
                />
                {errors.password && (
                    <span className={'error'}>{errors.password.message}</span>
                )}
                <input
                    className={'input'}
                    type="password"
                    placeholder={'Confirm password'}
                    {...register('confirmPassword')}
                />
                {errors.confirmPassword && (
                    <span className={'error'}>
                        {errors.confirmPassword.message}
                    </span>
                )}
                <button className={'button'} type={'submit'}>
                    Register
                </button>
                <span>
                    already have account? <Link to={'/login'}>log in!</Link>
                </span>
            </form>
        </section>
    )
}

export { Register }
