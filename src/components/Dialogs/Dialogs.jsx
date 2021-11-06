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
  return (
    <div>
      <div className={s.dialogs}>
        <div className={s.dialogsItem}>
          <DialogItem id="1" name="Sveta" />
          <DialogItem id="2" name="Dima" />
          <DialogItem id="3" name="Alrksandr" />
          <DialogItem id="4" name="Mihail" />
          <DialogItem id="5" name="Ekaterina" />
          <DialogItem id="6" name="Diana" />
        </div>
        <div className={s.messages}>
          <Message message="Hi" />
          <Message message="How are you" />
          <Message message="I'm ok" />
          <Message message="Good" />
          <Message message="Hi" />
        </div>
      </div>
    </div>
  )
}

export default Dialogs
