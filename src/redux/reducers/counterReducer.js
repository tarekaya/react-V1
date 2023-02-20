import { INCREMENT, DECREMENT } from '../actions/types';

const counterReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case INCREMENT:
      // ...state pour importer tout le state
      return { ...state, count: count + 1 };
    case DECREMENT:
      return { ...state, count: count - 1 };
    default:
      return state;
  }
};
export default counterReducer;
