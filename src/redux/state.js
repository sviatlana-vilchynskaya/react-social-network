import profileReducer from './profile-reducer'
import dialogsReducer from './dialogs-reduser'
import sidebarReducer from './sidebar-reduser'

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: 12 },
        { id: 2, message: 'My first post=)', likesCount: 6 },
        { id: 3, message: 'Hello', likesCount: 2 },
      ],
      newPostText: 'it-kamasutra.com',
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: 'Sveta' },
        { id: 2, name: 'Dima' },
        { id: 3, name: 'Aleksandr' },
        { id: 4, name: 'Mihail' },
        { id: 5, name: 'Ekaterina' },
        { id: 6, name: 'diana' },
      ],
      messages: [
        { id: 1, message: 'Hi', name: 'Sveta' },
        { id: 2, message: 'How are you', name: 'Aleksandr' },
        { id: 3, message: 'OK', name: 'Sveta' },
        { id: 4, message: 'Hello', name: 'Diana' },
      ],
      newMessageBody: '',
    },
    sidebar: {},
  },

  _callSubscriber() {
    console.log('State changed')
  },

  getState() {
    return this._state
  },

  subscribe(observer) {
    this._callSubscriber = observer // observer
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    this._state.sidebar = sidebarReducer(this._state.sidebar, action)

    this._callSubscriber(this._state)
  },
}

export default store

window.store = store
