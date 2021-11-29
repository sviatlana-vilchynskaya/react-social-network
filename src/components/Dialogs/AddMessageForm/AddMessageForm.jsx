import React from 'react'
import { Field, reduxForm } from 'redux-form'

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder="Enter your message"
          name="newMessageBody"
          component={'textarea'}
        />
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  )
}

export default reduxForm({ form: 'dialog-add-message-form' })(AddMessageForm)
