import React from 'react'
// Styles
import './Dashboard-styles.scss'
// children
import { CredListItem } from '../../components'
// uuid
import { v4 as uuid } from 'uuid'
import { useFormControls } from '../../utils'

const Dashboard = () => {
    const {
        register,
        handleSubmit,
        errors,
        submitAddCredentialsForm,
        credentialsList,
    } = useFormControls('credentials')

    return (
        <section className={'dashboard'}>
            <span className={'dashboard__title'}>Add new credentials</span>
            <form
                className={'dashboard__form'}
                onSubmit={handleSubmit(submitAddCredentialsForm)}
            >
                <div className="dashboard__wrapper">
                    <input
                        className={'input'}
                        type="text"
                        placeholder={'Name'}
                        {...register('name')}
                    />
                    {errors.name && (
                        <span className={'error'}>{errors.name.message}</span>
                    )}
                </div>
                <div className="dashboard__wrapper">
                    <input
                        className={'input'}
                        type="text"
                        placeholder={'Login'}
                        {...register('login')}
                    />
                    {errors.login && (
                        <span className={'error'}>{errors.login.message}</span>
                    )}
                </div>
                <div className="dashboard__wrapper">
                    <input
                        className={'input'}
                        type="text"
                        placeholder={'Password'}
                        {...register('password')}
                    />
                    {errors.password && (
                        <span className={'error'}>
                            {errors.password.message}
                        </span>
                    )}
                </div>
                <button className={'button'} type={'submit'}>
                    Add
                </button>
            </form>
            <span className={'dashboard__title'}>Your credentials list</span>
            {credentialsList.length
                ? credentialsList.map((item) => (
                      <CredListItem item={item} key={uuid()} />
                  ))
                : 'You have no added credentials yet'}
        </section>
    )
}

export { Dashboard }
