
import reducer from './reducer'
import { SWITCH_ONSTRIKE_BATSMAN,SCORE_UPDATED, RUNS_BUTTON_CLICKED } from '../scorer/actions';

describe("reducer", () => {
  it('should set the score once runs are selected',()=>{
        expect(reducer({},{type:RUNS_BUTTON_CLICKED,payload:{score:3}}))
        .toEqual({score:3});

  });
  it('should refresh thisball state once score updated', () => {
    expect(reducer({score:6},
       {type: SCORE_UPDATED, payload:{score:6}})).toEqual({});
  })
});