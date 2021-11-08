import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './DialogItem.module.css'

const DialogItem = (props) => {
  let path = '/dialogs/' + props.id

  return (
    <div className={s.dialog}>
      <div className={s.avatar}>
        <img src="https://whatsism.com/uploads/posts/2018-07/1530546590_tx962vdsiqi.jpg" />
      </div>
      <div className={s.userName}>
        <NavLink to={path}>{props.name}</NavLink>
      </div>
    </div>
  )
}

export default DialogItem
