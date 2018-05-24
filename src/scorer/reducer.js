import { SCORE_UPDATED, RUNS_BUTTON_CLICKED } from './actions';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case SCORE_UPDATED:
      return {};
    case RUNS_BUTTON_CLICKED:
      return action.payload;
    default: return state;
  }
}

export default reducer;