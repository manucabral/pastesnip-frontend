import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/global.css'

import { ApolloProvider } from '@apollo/client'
import { NotificationProvider } from './context/NotificationContext'
import { UserProvider } from './context/UserContext'
import { client } from './libs/apollo'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
    <ApolloProvider client={client}>
        <BrowserRouter basename="/pastesnip-frontend">
            <NotificationProvider>
                <UserProvider>
                    <App />
                </UserProvider>
            </NotificationProvider>
        </BrowserRouter>
    </ApolloProvider>
)
