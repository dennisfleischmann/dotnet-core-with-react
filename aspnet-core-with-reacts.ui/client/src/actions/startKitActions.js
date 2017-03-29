/*
 * action types
 */

export const CHANGE_BUTTON_MESSAGE = 'CHANGE_BUTTON_MESSAGE';
export const CHANGE_INPUT_TEXT = 'CHANGE_INPUT_TEXT';

/*
 * action creators
 */

export function changeButtonMsg(text) {
  return {
    type: CHANGE_BUTTON_MESSAGE,
    text,
  };
}

export function changeInputText(text) {
  return {
    type: CHANGE_INPUT_TEXT,
    text,
  };
}

