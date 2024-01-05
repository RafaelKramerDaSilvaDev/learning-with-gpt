import React from 'react'
import ReactDOM from 'react-dom/client'
import { TodoPage } from './pages/TodoPage'
import { GlobalStyle } from './styles/GlobalStyles'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />
    <TodoPage />
  </React.StrictMode>,
)
