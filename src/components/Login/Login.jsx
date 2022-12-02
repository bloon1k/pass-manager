import React from 'react'
// Styles
import './Login-styles.scss'
import { useFormControls } from '../../utils'
// Router
import { Link } from 'react-router-dom'

const Login = () => {
    const { register, handleSubmit, errors, submitLoginForm } =
        useFormControls('login')

    return (
        <section className={'register'}>
            <form
                className={'login__form'}
                onSubmit={handleSubmit(submitLoginForm)}
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
                <button className={'button'} type={'submit'}>
                    Login
                </button>
                <span>
                    don't have an account?{' '}
                    <Link to={'/register'}>register!</Link>
                </span>
            </form>
        </section>
    )
}

export { Login }
