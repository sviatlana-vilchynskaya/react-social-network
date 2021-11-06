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
  let dialogsData = [
    { id: 1, name: 'Sveta' },
    { id: 2, name: 'Dima' },
    { id: 3, name: 'Aleksandr' },
    { id: 4, name: 'Mihail' },
    { id: 5, name: 'Ekaterina' },
    { id: 6, name: 'diana' },
  ]

  let messagesData = [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'How are you' },
    { id: 3, message: 'OK' },
    { id: 4, message: 'Hello' },
  ]
  return (
    <div>
      <div className={s.dialogs}>
        <div className={s.dialogsItem}>
          <DialogItem id={dialogsData[0].id} name={dialogsData[0].name} />
          <DialogItem id={dialogsData[1].id} name={dialogsData[1].name} />
          <DialogItem id={dialogsData[2].id} name={dialogsData[2].name} />
          <DialogItem id={dialogsData[3].id} name={dialogsData[3].name} />
          <DialogItem id={dialogsData[4].id} name={dialogsData[4].name} />
          <DialogItem id={dialogsData[5].id} name={dialogsData[5].name} />
        </div>
        <div className={s.messages}>
          <Message message={messagesData[0].message} />
          <Message message={messagesData[1].message} />
          <Message message={messagesData[2].message} />
          <Message message={messagesData[3].message} />
        </div>
      </div>
    </div>
  )
}

export default Dialogs
