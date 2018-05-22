import { createMockStore, mockAxios } from "../testHelpers/mockHelpers";
import { fetchGameDetails, GAME_DETAILS_FETCHED } from './actions';

const mock = mockAxios();
let store;
const apiData = {
  totalOvers:20,
  teams: [{name: 'team1', Players:[{
    id:'1122',
    name:'Sarang'
  }],
    isPlaying:false,
    score: 210,
    wickets:5,
    overs:20
  },
  {name: 'team2', Players:[{
    id:'1122',
    name:'Siddartha'
  }],
    isPlaying:true,
    score: 115,
    wickets:5,
    overs:10.4
  }]
};


describe("game/actions", () => {
  beforeEach(() => {
    store = createMockStore({})
  });

  it('should dispatch gameDetailsFetched', async () => {
    mock
      .onGet('http://localhost:9090/game')
      .reply(200, apiData);

    store.dispatch(fetchGameDetails()).then(() => {
      expect(store.getActions()[0]).toEqual({
        type: GAME_DETAILS_FETCHED,
        payload: {
          gameDetails: apiData
        }
      });
    });
  });


})
