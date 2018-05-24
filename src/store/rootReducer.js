import { combineReducers } from 'redux';
import game from '../game/reducer';
import scorer from '../scorer/reducer';

const rootReducer = combineReducers({
  game: game,
  thisBall:scorer
});

export default rootReducer;