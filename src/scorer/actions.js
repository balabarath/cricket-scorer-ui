
export const SWITCH_ONSTRIKE_BATSMAN = 'SWITCH_ONSTRIKE_BATSMAN';

export const switchOnStrikeBatsman = () => async (dispatch, getState) => {
    let batsMen = getState().game.currentBatsmen;
    dispatch(
        {
            type: SWITCH_ONSTRIKE_BATSMAN,
            payload:{
                currentBatsmen: batsMen.map((bm)=>{
                   bm.onStrike = !bm.onStrike;
                   return bm;
                })
            }
        }
    );
}