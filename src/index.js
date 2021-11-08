import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

let dialogs = [
  { id: 1, name: 'Sveta' },
  { id: 2, name: 'Dima' },
  { id: 3, name: 'Aleksandr' },
  { id: 4, name: 'Mihail' },
  { id: 5, name: 'Ekaterina' },
  { id: 6, name: 'diana' },
]

let messages = [
  { id: 1, message: 'Hi' },
  { id: 2, message: 'How are you' },
  { id: 3, message: 'OK' },
  { id: 4, message: 'Hello' },
]

let posts = [
  { id: 1, message: 'Hi, how are you?', likesCount: 12 },
  { id: 2, message: 'My first post=)', likesCount: 6 },
  { id: 3, message: 'Hello', likesCount: 2 },
]

ReactDOM.render(
  <React.StrictMode>
    <App dialogs={dialogs} messages={messages} posts={posts} />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
