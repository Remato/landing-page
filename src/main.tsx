import React from 'react'
import ReactDOM from 'react-dom/client'
import './css/tailwind.css'
import { App } from './App'
import { Cursor } from './components'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <Cursor />
  </React.StrictMode>,
)
