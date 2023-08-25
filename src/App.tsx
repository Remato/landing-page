import { Provider as ReduxProvider } from 'react-redux'
import './App.css'
import Home from './pages/Home'
import { store } from './store'

export function App() {
  return (
    <ReduxProvider store={store}>
      <Home />
    </ReduxProvider>
  )
}
