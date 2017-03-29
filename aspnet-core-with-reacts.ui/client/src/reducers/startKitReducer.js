import {
  CHANGE_BUTTON_MESSAGE,
  CHANGE_INPUT_TEXT,
} from '../actions/startKitActions';

/*
initial state
 */

const initialState = {
  msg: 'This is my initial message',
  inputText: '',
};

export default function startKitReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_BUTTON_MESSAGE:
      return Object.assign({}, state, { msg: action.text });
    case CHANGE_INPUT_TEXT:
      return Object.assign({}, state, { inputText: action.text });
    default:
      return state;
  }
}
