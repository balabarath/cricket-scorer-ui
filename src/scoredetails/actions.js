import axios from 'axios';
import config from '../config';

export const GET_BATTING_DETAILS='GET_BATTING_DETAILS';



export const getBattingDetails = (gameid) => async (dispatch) =>{
    const response = await axios.get(`${config.apiUrl}/game/`+gameid+'/scoredetails');
    dispatch({
        type: GET_BATTING_DETAILS,
        payload:{
             battingDetails:response.data
            }
    });
}
