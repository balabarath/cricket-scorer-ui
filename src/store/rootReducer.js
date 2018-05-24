import { combineReducers } from 'redux';
import game from '../game/reducer';
import scorer from '../scorer/reducer';
import scoreDetails from '../scoredetails/reducer';

const rootReducer = combineReducers({
  game: game,
  thisBall:scorer,
  battingDetails:scoreDetails
});

export default rootReducer;