import React from 'react'
import reportWebVitals from './reportWebVitals'
import state, { subscribe } from './redux/state'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import store, { addPost, updateNewPostText } from './redux/state'
import { BrowserRouter } from 'react-router-dom'

let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} dispatch={store.dispatch.bind(store)} />
    </BrowserRouter>,
    document.getElementById('root')
  )
}

rerenderEntireTree(store.getState())

store.subscribe(rerenderEntireTree)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
reportWebVitals()
