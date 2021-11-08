import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Dialogs.module.css'

const DialogItem = (props) => {
  let path = '/dialogs/' + props.id

  return (
    <div className={s.dialog}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  )
}

const Message = (props) => {
  return <div className={s.message}>{props.message}</div>
}

const Dialogs = (props) => {
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

  let dialogsElements = dialogs.map((d) => (
    <DialogItem id={d.id} name={d.name} />
  ))

  let messagesElements = messages.map((m) => <Message message={m.message} />)

  return (
    <div>
      <div className={s.dialogs}>
        <div className={s.dialogsItem}>{dialogsElements}</div>
        <div className={s.messages}>{messagesElements}</div>
      </div>
    </div>
  )
}

export default Dialogs
