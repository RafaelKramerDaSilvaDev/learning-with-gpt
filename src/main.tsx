import React from 'react'
import ReactDOM from 'react-dom/client'
import { GlobalStyle } from './styles/global-styles'
import { Main } from './pages/main'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />
    <Main />
  </React.StrictMode>,
)
