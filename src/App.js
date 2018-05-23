
import React,{Component}  from 'react';
import { connect } from 'react-redux';
import {fetchGameDetails} from './game/actions';
import ScoreBoard from './game/scoreboard';
import SwipeableView from 'react-swipeable-views';
import Scorer from './scorer/scorer';
import ScoreDetails from './scoredetails/ScoreDetails';
import Scorer from './scorer/scorer';
class App extends Component 
{
 componentDidMount()
 {
   this.props.getData();
 }
  render()
  {
    if(this.props.game.teams)
    return (
      <div>
        <ScoreBoard playingTeam = {this.props.game.teams.filter(team=> team.isPlaying)[0]}
                    OpponentTeam = {this.props.game.teams.filter(team=> !team.isPlaying)[0]}/>
            <div>
                <SwipeableView enableMouseEvents>
                      <Scorer/>
                      <ScoreDetails/>
                </SwipeableView>
            </div>
      </div>
   
  );
  else 
  return (<div></div>); }
  };

const mapsState= (state) =>
{
  
  return {game :state.game};
}
const mapDispatch= (dispatch) =>
{
  return { getData: () => dispatch(fetchGameDetails())};
}
export default connect(mapsState,mapDispatch)(App);
