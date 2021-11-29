import React from 'react'
import { Field, reduxForm } from 'redux-form'
import {
  maxLengthCreator,
  required,
} from '../../../../utils/validators/validators'
import { Textarea } from '../../../common/FormControls/FormsControls'

const maxLength10 = maxLengthCreator(10)

const AddPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Textarea}
          name="newPostText"
          placeholder={'Post message'}
          validate={[required, maxLength10]}
        />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  )
}

export default reduxForm({ form: 'profile-add-post' })(AddPostForm)
