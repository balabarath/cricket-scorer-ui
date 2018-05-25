import { createMockStore, mockAxios } from "../testHelpers/mockHelpers";
import { GET_BATTING_DETAILS ,getBattingDetails} from './actions';

const mock = mockAxios();
let store;

const gameData = {
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


  const battingDetails = [
    {
        "name": "Player 1.1",
        "runs": 17,
        "balls": 5,
        "fours": 4,
        "sixes": 0,
        "strikeRate": 300
    },
    {
        "name": "Player 1.2",
        "runs": 1,
        "balls": 1,
        "fours": 0,
        "sixes": 0,
        "strikeRate": 100
    }
 ];

  describe("scorerdetails/actions", () => {
    beforeEach(() => {
      store = createMockStore({ game: gameData, battingDetails: battingDetails })
    });
  
    

    it('should dispatch battingDetailsFetched', async () => {
      mock
        .onGet('http://localhost:9090/game/16a2e158-5bdb-11e8-9c2d-fa7ae01bbeba/scoredetails')
        .reply(200, battingDetails);
  
      store.dispatch(getBattingDetails('16a2e158-5bdb-11e8-9c2d-fa7ae01bbeba',1)).then(() => {
        expect(store.getActions()[0]).toEqual({
          type: GET_BATTING_DETAILS,
          payload: {
            battingDetails: battingDetails
          }
        });
      });
    });
});