import React from 'react'
// styles
import './CredListItem-styles.scss'
import { useCredItemControls } from '../../utils'

const CredListItem = ({ item }) => {
    const {
        nameValue,
        loginValue,
        passwordValue,
        setNameValue,
        setLoginValue,
        setPasswordValue,
        isEditingMode,
        isPassHidden,
        handleEdit,
        handleDelete,
        handleRevealPassword,
        encodePass,
    } = useCredItemControls(item)

    return (
        <div className={'cred-list-item'}>
            <div className="cred-list-item__inputs">
                {isEditingMode ? (
                    <input
                        type="text"
                        className={'input cred-list-item__input'}
                        value={nameValue}
                        onChange={(e) => setNameValue(e.target.value)}
                    />
                ) : (
                    <span>
                        <b>Name:</b> {nameValue}
                    </span>
                )}
                {isEditingMode ? (
                    <input
                        type="text"
                        className={'input cred-list-item__input'}
                        value={loginValue}
                        onChange={(e) => setLoginValue(e.target.value)}
                    />
                ) : (
                    <span>
                        <b>Login:</b> {loginValue}
                    </span>
                )}
                {isEditingMode ? (
                    <input
                        type="text"
                        className={'input cred-list-item__input'}
                        value={passwordValue}
                        onChange={(e) => setPasswordValue(e.target.value)}
                    />
                ) : (
                    <span>
                        <b>Password:</b>{' '}
                        {isPassHidden ? encodePass() : passwordValue}
                    </span>
                )}
            </div>
            <div className="cred-list-item__buttons">
                <button
                    className={'button cred-list-item__button'}
                    onClick={handleRevealPassword}
                >
                    {isPassHidden ? 'Show' : 'Hide'}
                </button>
                <button
                    className={'button cred-list-item__button'}
                    onClick={handleEdit}
                >
                    {isEditingMode ? 'Save' : 'Edit'}
                </button>
                <button
                    className={'button cred-list-item__button'}
                    onClick={handleDelete}
                >
                    Delete
                </button>
            </div>
        </div>
    )
}

export { CredListItem }
