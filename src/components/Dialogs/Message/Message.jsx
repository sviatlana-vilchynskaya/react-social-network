import React from 'react'
import s from './Message.module.css'

const Message = (props) => {
  return (
    <div>
      <div className={s.messageBlock}>
        <div className={s.userBlock}>
          <div className={s.avatar}>
            <img src="https://whatsism.com/uploads/posts/2018-07/1530546590_tx962vdsiqi.jpg" />
          </div>
          <div className={s.userName}>
            <a>{props.name}</a>
          </div>
        </div>

        <div className={s.message}>{props.message}</div>
      </div>
    </div>
  )
}

export default Message
