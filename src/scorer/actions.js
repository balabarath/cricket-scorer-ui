import axios from 'axios';
import config from '../config';

export const SWITCH_ONSTRIKE_BATSMAN = 'SWITCH_ONSTRIKE_BATSMAN';
export const RUNS_BUTTON_CLICKED = 'RUNS_BUTTON_CLICKED';
export const SCORE_UPDATED = 'SCORE_UPDATED';
export const SCORE_UPDATE_FAILED = 'SCORE_UPDATE_FAILED';

export const switchOnStrikeBatsman = () => async (dispatch, getState) => {
    let batsMen = getState().game.currentBatsmen;
    dispatch(
        {
            type: SWITCH_ONSTRIKE_BATSMAN,
            payload: {
                currentBatsmen: batsMen.map((bm) => {
                    bm.onStrike = !bm.onStrike;
                    return bm;
                })
            }
        }
    );
}

export const updateThisBall = (scoreTobeUpdated) => async (dispatch) => {

    dispatch({
        type: RUNS_BUTTON_CLICKED,
        payload: {
            score: scoreTobeUpdated
        }
    });
}

export const updateScore = (gameid, scoreTobeUpdated) => async (dispatch) => {
    const response = await axios.post(`${config.apiUrl}/game/${gameid}`, scoreTobeUpdated)
        .then((response) => {
            if (response.status === 200)
                dispatch({
                    type: SCORE_UPDATED,
                    payload: {
                        score: scoreTobeUpdated.score, over: scoreTobeUpdated.over
                    }
                })
        })
        .catch((error) => {
            dispatch({
                type: SCORE_UPDATE_FAILED
            });
        });
}