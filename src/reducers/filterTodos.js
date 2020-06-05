import * as types from '../actions/actionTypes';
const inititalState = {
  filter: 'SHOW_ALL',
};
export default function filterTodosReducer(state = inititalState, action = {}) {
  switch (action.filter) {
    case 'SHOW_ALL':
      return {
        ...state,
        filter: 'SHOW_ALL',
      };
    case 'SHOW_COMPLETE':
      return {
        ...state,
        filter: 'SHOW_COMPLETE',
      };
    case 'SHOW_INCOMPLETE':
      return {
        ...state,
        filter: 'SHOW_INCOMPLETE',
      };
    default:
      return state;
  }
}
