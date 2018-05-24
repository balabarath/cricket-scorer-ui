import reducer from './reducer';
import { GET_BATTING_DETAILS } from './actions';


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
describe('reducer',()=>{

   
    it('should return empty intital battingDetails',()=>{
       
        expect(reducer({},{type:GET_BATTING_DETAILS,payload:{battingDetails:[]}})).toEqual([]);
    });


    it('should return empty  battingDetails',()=>{
       
        expect(reducer({},{type:GET_BATTING_DETAILS,payload:{battingDetails:battingDetails}})).toEqual(battingDetails);
    });
    
    
});