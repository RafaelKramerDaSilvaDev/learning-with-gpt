import React from 'react'
import ReactDOM from 'react-dom/client'
import { Main } from './pages/main/styles'
import { GlobalStyle } from './styles/global-styles'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />
    <Main />
  </React.StrictMode>,
)
