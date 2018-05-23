import { GAME_DETAILS_FETCHED } from "./actions";

const reducer = (state = {}, action) => {
  switch(action.type)
  {
    case GAME_DETAILS_FETCHED: 
    return action.payload.gameDetails;
    default: return state;
  }
  
};

export default reducer;