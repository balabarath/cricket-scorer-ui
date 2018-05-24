
export const SWITCH_ONSTRIKE_BATSMAN = 'SWITCH_ONSTRIKE_BATSMAN';
export const BALL_SCORE_CAPTURED = 'BALL_SCORE_CAPTURED';

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
        type: BALL_SCORE_CAPTURED,
        payload: {
            score: scoreTobeUpdated
        }
    });
}