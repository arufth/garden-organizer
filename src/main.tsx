import React from 'react'
import ReactDOM from 'react-dom/client'
import { GardenRouter } from './router/GardenRouter'
import './index.css'
import { GardenContextProvider } from './context/GardenContextProvider'
import { Provider } from 'react-redux'
import { store } from './store'

const root = document.getElementById('root')

if (root !== null) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <Provider store={store}>
        <GardenContextProvider>
          <GardenRouter />
        </GardenContextProvider>
      </Provider>
    </React.StrictMode>
  )
}
