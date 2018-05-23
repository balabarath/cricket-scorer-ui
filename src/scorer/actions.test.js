import { createMockStore, mockAxios } from "../testHelpers/mockHelpers";
import { switchOnStrikeBatsman, SWITCH_ONSTRIKE_BATSMAN } from './actions';

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
    overs: 10.4
  }],
  currentBatsmen: [{ player: { name: 'Bala', Id: '123456' }, onStrike: false }
    , { player: { name: 'Siddartha', Id: '123456' }, onStrike: true }]
};

describe("scorer/actions", () => {
  beforeEach(() => {
    store = createMockStore({ game: apiData })
  });

  it('should update batsman onstrike when switching player', () => {
    store.dispatch(switchOnStrikeBatsman()).then(() => {
      expect(store.getActions()[0]).toEqual({
        type: SWITCH_ONSTRIKE_BATSMAN,
        payload: {
          currentBatsmen: [{ player: { name: 'Bala', Id: '123456' }, onStrike: true }
            , { player: { name: 'Siddartha', Id: '123456' }, onStrike: false }]
        }
      });
    });
  });
})