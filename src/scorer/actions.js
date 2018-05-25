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
            payload: { batsmanId: id }
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



export const updateScore = () => async (dispatch, getState) => {
    try {
        let state = getState();
        let playingTeam = state.game.teams.filter(team => team.isPlaying)[0];
        let scoreTobeUpdated = {
            over: playingTeam.overs, score: state.thisBall.score,
            currentBatsmen: state.game.currentBatsmen
        };
        let gameid = state.game.gameId;
        
        const response = await axios.post(`${config.apiUrl}/game/${gameid}`, scoreTobeUpdated);
        if (response.status === 200) {
            dispatch(createScoreUpdatedAction(scoreTobeUpdated))
        }
    } catch (error) {
        console.log(error);
        dispatch({
            type: SCORE_UPDATE_FAILED
        }

        );
    }
}