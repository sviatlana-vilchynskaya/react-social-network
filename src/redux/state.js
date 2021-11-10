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
    },
  },

  getState() {
    return this._state
  },

  callSubscriber() {
    console.log('State changed')
  },

  addPost() {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCount: 0,
    }
    this._state.profilePage.posts.push(newPost)
    this._state.profilePage.newPostText = ''
    this._callSubscriber(this._state)
  },

  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText
    this._callSubscriber(this._state)
  },

  subscribe(observer) {
    this._callSubscriber = observer // observer
  },
}

export default store

window.store = store
