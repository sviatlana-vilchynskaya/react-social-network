import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { required } from '../../../utils/validators/validators'
import { Input } from '../../common/FormControls/FormsControls'

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder={'Email'}
          name={'email'}
          component={Input}
          validate={[required]}
        />
      </div>
      <div>
        <Field
          placeholder={'Password'}
          name={'password'}
          type={'password'}
          component={Input}
          validate={[required]}
        />
      </div>
      <div>
        <Field component={Input} name={'rememberMe'} type={'checkbox'} />
        remember me
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  )
}

export default reduxForm({ form: 'login' })(LoginForm)
