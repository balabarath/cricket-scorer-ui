import { GET_BATTING_DETAILS } from "./actions";

const reducer = (state={} , action) => {
  switch(action.type)
  {
    case GET_BATTING_DETAILS: return {...state,battingDetails:action.payload.battingDetails};
    default: return state;
  }
  
};

export default reducer;