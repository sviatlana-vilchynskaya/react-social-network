import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

const Dialogs = (props) => {
  let dialogsElements = props.state.dialogs.map((d) => (
    <DialogItem id={d.id} name={d.name} />
  ))

  let messagesElements = props.state.messages.map((m) => (
    <Message message={m.message} name={m.name} />
  ))
  let newMessageElement = React.createRef()

  let addMessage = () => {
    let text = newMessageElement.current.value
    alert(text)
  }

  return (
    <div>
      <div className={s.dialogsBlock}>
        <div className={s.dialogsItem}>{dialogsElements}</div>
        <div className={s.messages}>{messagesElements}</div>
        <div>
          <textarea ref={newMessageElement}></textarea>
        </div>
        <div>
          <button onClick={addMessage}>Send message</button>
        </div>
      </div>
    </div>
  )
}

export default Dialogs
