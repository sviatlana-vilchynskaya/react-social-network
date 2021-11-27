import profileReducer from './profile-reducer'
import dialogsReducer from './dialogs-reduser'
import sidebarRedcer from './sidebar-reduser'
import usersReducer from './users-reducer'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import authReducer from './auth-reducer'
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarRedcer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store
