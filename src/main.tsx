import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Header from './Header.tsx'
import ChatComponent from './components/ui/chatbot.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
    <App />
    <h1>Lexテスト</h1>
    <ChatComponent />
  </React.StrictMode>
)
