import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import { store } from './store'
import './index.css'
import './styles/global.css'
import { Toaster } from 'react-hot-toast';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Provider store={store}>
        <div>
          <Toaster position="top-center" reverseOrder={false} />
        </div>
        <App />
      </Provider>
  </React.StrictMode>
)
