import React from 'react'
import ReactDOM from 'react-dom/client'
import { GardenRouter } from './router/GardenRouter'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './store'

const root = document.getElementById('root')

if (root !== null) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <Provider store={store}>
        <GardenRouter />
      </Provider>
    </React.StrictMode>
  )
}
