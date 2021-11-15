import profileReducer from './profile-reducer'
import dialogsReducer from './dialogs-reduser'
import sidebarRedcer from './sidebar-reduser'
import { createStore, combineReducers } from 'redux'

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarRedcer,
})

let store = createStore(reducers)

export default store
