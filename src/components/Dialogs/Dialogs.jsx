import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Dialogs.module.css'

const Dialogs = (props) => {
  return (
    <div>
      <div className={s.dialogs}>
        <div className={s.dialogsItem}>
          <div className={s.dialog}>
            <NavLink to="/dialogs/1">Sveta</NavLink>
          </div>
          <div className={s.dialog}>
            <NavLink to="/dialogs/2">Dima</NavLink>
          </div>
          <div className={s.dialog}>
            <NavLink to="/dialogs/3">Aleksandr</NavLink>
          </div>
          <div className={s.dialog}>
            <NavLink to="/dialogs/4">Mihail</NavLink>
          </div>
          <div className={s.dialog}>
            <NavLink to="/dialogs/5">Ekaterina</NavLink>
          </div>
          <div className={s.dialog}>
            <NavLink to="/dialogs/6">Diana</NavLink>
          </div>
        </div>
        <div className={s.messages}>
          <div className={s.message}>Hi</div>
          <div className={s.message}>How are you</div>
          <div className={s.message}>I'm ok</div>
          <div className={s.message}>Good</div>
        </div>
      </div>
    </div>
  )
}

export default Dialogs
