import React from 'react'
// Styles
import './Header-styles.scss'
// redux
import { useSelector } from 'react-redux'
import { useLogout } from '../../utils'

const Header = () => {
    const isAuth = useSelector((state) => state.auth.isAuth)
    const logoutHandler = useLogout()

    return (
        <section className={'header'}>
            <h2 className={'header__title'}>Pass-Manager</h2>
            {isAuth && (
                <button
                    className={'button header__button'}
                    onClick={logoutHandler}
                >
                    Logout
                </button>
            )}
        </section>
    )
}

export { Header }
