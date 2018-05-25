
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchGameDetails } from './game/actions';
import ScoreBoard from './game/Scoreboard';
import SwipeableView from 'react-swipeable-views';
import ScoreDetails from './scoredetails/ScoreDetails';
import Scorer from './scorer/Scorer';
import { getBattingDetails } from './scoredetails/actions';
class App extends Component {
  componentDidMount() {
    this.props.getData();
  }
  render() {
    if (this.props.game.teams)
      return (
        <div>
          <ScoreBoard playingTeam={this.props.game.teams.filter(team => team.isPlaying)[0]}
            OpponentTeam={this.props.game.teams.filter(team => !team.isPlaying)[0]} />
          <div>
            <SwipeableView enableMouseEvents onChangeIndex={this.props.getBattingData}>
              <Scorer />
            
              <ScoreDetails battingDetails={ this.props.battingDetails}  currentBatsmen ={this.props.game.currentBatsmen}/>
            </SwipeableView>
          </div>
        </div>

      );
    else
      return (<div></div>);
  }
};

const mapsState = (state) => ({ 
  game: state.game,
  battingDetails: state.battingDetails 
});

const mapDispatch = (dispatch) => {
  return { getData: () => dispatch(fetchGameDetails()), 
           getBattingData: (index) =>  dispatch(getBattingDetails('16a2e158-5bdb-11e8-9c2d-fa7ae01bbeba',index))
  };
}
export default connect(mapsState, mapDispatch)(App);
