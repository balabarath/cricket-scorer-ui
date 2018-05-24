import { GAME_DETAILS_FETCHED } from "./actions";
import {SWITCH_ONSTRIKE_BATSMAN, SCORE_UPDATED} from '../scorer/actions'

const reducer = (state = {}, action) => {
  switch(action.type)
  {
    case GAME_DETAILS_FETCHED: 
    return action.payload.gameDetails;
    case SWITCH_ONSTRIKE_BATSMAN:
    return {...state,currentBatsmen:state.currentBatsmen.map((bm)=>{
      bm.onStrike = !bm.onStrike;
      return bm;
    })}
    case SCORE_UPDATED:
    return {...state,teams:state.teams.map((team)=>{
      if(team.isPlaying)
      {
        team.score += action.payload.score;
         let newOverParams = team.overs.toString().split('.').map(ele=> parseInt(ele));
         let balls = ((newOverParams[0]*6)+(newOverParams[1]||0)+1);
         team.overs = parseFloat(Math.floor(balls/6).toString()+'.'+ (balls%6).toString());
      }
      return team;
    })}
    default: return state;
  }
  
};

export default reducer;