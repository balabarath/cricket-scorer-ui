import { createMockStore, mockAxios } from "../testHelpers/mockHelpers";
import {
  switchOnStrikeBatsman,
  updateThisBall, updateScore,
  SWITCH_ONSTRIKE_BATSMAN,
  RUNS_BUTTON_CLICKED, SCORE_UPDATED,
  SCORE_UPDATE_FAILED
} from './actions';

const mock = mockAxios();
let store;

const apiData = {
  totalOvers: 20,
  teams: [{
    name: 'team1', Players: [{
      id: '1122',
      name: 'Sarang'
    }],
    isPlaying: false,
    score: 210,
    wickets: 5,
    overs: 20
  },
  {
    name: 'team2', Players: [{
      id: '1122',
      name: 'Siddartha'
    }],
    isPlaying: true,
    score: 115,
    wickets: 5,
    overs: 10
  }],
  currentBatsmen: [{ name: 'Bala', Id: '10' , onStrike: false }
    , { name: 'Siddartha', Id: '10' , onStrike: true }],
  gameId: '1'
};

const thisBallData = { score: 6 };



describe("scorer/actions", () => {
  beforeEach(() => {
    store = createMockStore({ game: apiData, thisBall: thisBallData })
  });

  it('should update batsman onstrike when switching player', () => {
    store.dispatch(switchOnStrikeBatsman(1)).then(() => {
      expect(store.getActions()[0]).toEqual({
        type: SWITCH_ONSTRIKE_BATSMAN,
        payload:{batsmanId:1}
      });
    });
  });

  it('should update current ball value', () => {
    store.dispatch(updateThisBall(6)).then(() => {
      expect(store.getActions()[0]).toEqual({
        type: RUNS_BUTTON_CLICKED,
        payload: {
          score: 6
        }
      }
      );
    });
  });
  it('should send score details to api and update score state', () => {
    mock
      .onPost('http://localhost:9090/game/1', { over: 10, score: 6, currentBatsmen: [{ name: 'Bala', Id: '10' , onStrike: false }
      , { name: 'Siddartha', Id: '10' , onStrike: true }]})
      .reply(200)
    store.dispatch(updateScore()).then(() => {
      expect(store.getActions()[0]).toEqual({
        type: SCORE_UPDATED,
        payload: { score: 6 }
      })
    });

  });
  it('should dispatch score update failed when api returns non 200', () => {
    mock
      .onPost('http://localhost:9090/game/1', { over: 10, score: 6,  currentBatsmen: [{ name: 'Bala', Id: '10' , onStrike: false }
      , { name: 'Siddartha', Id: '10' , onStrike: true }] })
      .reply(500)
    store.dispatch(updateScore()).then(() => {
      expect(store.getActions()[0]).toEqual({
        type: SCORE_UPDATE_FAILED
      })
    });

  });

})