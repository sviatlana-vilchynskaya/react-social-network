const SEND_MESSAGE = 'SEND_MESSAGE'

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let body = action.newMessageBody
      return {
        ...state,
        messages: [...state.messages, { id: 6, message: body }],
      }

    default:
      return state
  }
}

export const sendMessageCreator = (newMessageBody) => ({
  type: SEND_MESSAGE,
  newMessageBody,
})

export default dialogsReducer
