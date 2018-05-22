import axios from 'axios';
import config from '../config';

export const GAME_DETAILS_FETCHED = 'GAME_DETAILS_FETCHED';

export const fetchGameDetails = () => async (dispatch) => {
  //const response = await axios.get(`${config.apiUrl}/game`);
  dispatch({
    type: GAME_DETAILS_FETCHED,
    payload: {
      gameDetails: {
        totalOvers:20,
        teams: [{name: 'team1', Players:[{
          id:'1122',
          name:'Sarang'
        }],
          isPlaying:false,
          score: 210,
          wickets:5,
          overs:20
        },
        {name: 'team2', Players:[{
          id:'1122',
          name:'Siddartha'
        }],
          isPlaying:true,
          score: 115,
          wickets:5,
          overs:10.4
        }]
      },
    }
  })
};