import axios from 'axios';
import config from '../config';

export const SWITCH_ONSTRIKE_BATSMAN = 'SWITCH_ONSTRIKE_BATSMAN';
export const RUNS_BUTTON_CLICKED = 'RUNS_BUTTON_CLICKED';
export const SCORE_UPDATED = 'SCORE_UPDATED';
export const SCORE_UPDATE_FAILED = 'SCORE_UPDATE_FAILED';


export const switchOnStrikeBatsman = (id) => async (dispatch, getState) => {
    dispatch(
        {
            type: SWITCH_ONSTRIKE_BATSMAN,
            payload: {batsmanId:id}
        }
    );
}

const createRunUpdatedAction = (score) => (
    {
        type: RUNS_BUTTON_CLICKED,
        payload: {
            score: score
        }
    });
export const updateThisBall = (scoreTobeUpdated) => async (dispatch) => {

    dispatch(createRunUpdatedAction(scoreTobeUpdated));
}

const createScoreUpdatedAction = (score) => ({
    
    type: SCORE_UPDATED,
    payload: {
        score: score.score
    }
});



export const updateScore = (gameid, scoreTobeUpdated) => async (dispatch) => {
    try {
        const response = await axios.post(`${config.apiUrl}/game/${gameid}`, scoreTobeUpdated);
        if (response.status === 200) {
            dispatch(createScoreUpdatedAction(scoreTobeUpdated))
        }
    } catch (error) {
        dispatch({
            type: SCORE_UPDATE_FAILED
        });
    }
}