import React from 'react'
import ReactDOM from 'react-dom/client'
import"./index.css"

import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import store from './redux/store/store'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
const storePersist=persistStore(store)

ReactDOM.createRoot(document.getElementById('root')).render(
  <PersistGate persistor={storePersist}>
  <Provider store={store}>
   <BrowserRouter>
   <App/>
   </BrowserRouter>
  </Provider>
 </PersistGate>
)
