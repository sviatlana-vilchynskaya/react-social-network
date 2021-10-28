import React from 'react'
import s from './Dialogs.module.css'

const Dialogs = (props) => {
  return (
    <div>
      <div className={s.dialogs}>
        <div className={s.dialogsItem}>
          <div className={s.dialog}>Sveta</div>
          <div className={s.dialog}>Dima</div>
          <div className={s.dialog}>Aleksandr</div>
          <div className={s.dialog}>Mihail</div>
          <div className={s.dialog}>Ekaterina</div>
          <div className={s.dialog}>Diana</div>
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
