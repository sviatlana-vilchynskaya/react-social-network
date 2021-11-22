import profileReducer from './profile-reducer'
import dialogsReducer from './dialogs-reduser'
import sidebarRedcer from './sidebar-reduser'
import usersReducer from './users-reducer'
import { createStore, combineReducers } from 'redux'
import authReducer from './auth-reducer'

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarRedcer,
  usersPage: usersReducer,
  auth: authReducer,
})

let store = createStore(reducers)

export default store
