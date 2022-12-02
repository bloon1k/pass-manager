import React from 'react'
// Styles
import './styles/index.scss'
// Children
import { WithCheckedAuth, Routes } from './utils'
import { Header } from './components'

const App = () => {
    return (
        <div className={'app'}>
            <WithCheckedAuth>
                <Header />
                <Routes />
            </WithCheckedAuth>
        </div>
    )
}

export default App
