import reducer from './reducer'
import { GAME_DETAILS_FETCHED } from './actions';
import { SWITCH_ONSTRIKE_BATSMAN,SCORE_UPDATED } from '../scorer/actions';

describe("reducer", () => {
  it('should set state to when game api called', () => {
    expect(reducer({}, {
      type: GAME_DETAILS_FETCHED, payload: {
        gameDetails: {
          teams: [],
          currentBatsmen: []
        }
      }
    })).toEqual({
      teams: [],
      currentBatsmen: []
    });
  });

  it('should change onstrike batsman state', () => {
    expect(reducer({
      currentBatsmen: [{ player: { name: 'Bala', Id: '123456' }, onStrike: false }
        , { player: { name: 'Siddartha', Id: '123456' }, onStrike: true }]
    }, { type: SWITCH_ONSTRIKE_BATSMAN })).toEqual({
      currentBatsmen: [{ player: { name: 'Bala', Id: '123456' }, onStrike: true }
        , { player: { name: 'Siddartha', Id: '123456' }, onStrike: false }]
    })
  });

  it('should update overs and score in game when update score api called', () => {
    expect(reducer({
      teams:[
        {name:'team1',players:[], score:200, overs:13, isPlaying:true, wickets:5},
        {name:'team2',players:[], score:0, overs:0, isPlaying:false, wickets:0}],
      currentBatsmen:[]
      }, {type: SCORE_UPDATED, payload:{score:6}})).toEqual({
        teams:[
          {name:'team1',players:[], score:206, overs:13.1, isPlaying:true, wickets:5},
          {name:'team2',players:[], score:0, overs:0, isPlaying:false, wickets:0}],
        currentBatsmen:[]
        });
        expect(reducer({
          teams:[
            {name:'team1',players:[], score:200, overs:13.5, isPlaying:true, wickets:5},
            {name:'team2',players:[], score:0, overs:0, isPlaying:false, wickets:0}],
          currentBatsmen:[]
          }, {type: SCORE_UPDATED, payload:{score:6}})).toEqual({
            teams:[
              {name:'team1',players:[], score:206, overs:14, isPlaying:true, wickets:5},
              {name:'team2',players:[], score:0, overs:0, isPlaying:false, wickets:0}],
            currentBatsmen:[] 
            });

    
  })
});