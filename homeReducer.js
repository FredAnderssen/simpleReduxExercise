const initialState = {
  buttonEnabled: true
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case 'BUTTON_TRUE':
      return {
        buttonEnabled: state.buttonEnabled = true
      }
    case 'BUTTON_FALSE':
      return {
        buttonEnabled: state.buttonEnabled = false
      }
  }
  return state
}
