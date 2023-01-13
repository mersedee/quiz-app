import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { StepsProvider } from 'react-step-builder'
import { store } from './redux/store'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <StepsProvider>
        <App />
      </StepsProvider>
    </Provider>
  </React.StrictMode>
)
