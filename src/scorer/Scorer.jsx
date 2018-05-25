import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import { connect } from 'react-redux';
import { switchOnStrikeBatsman,updateThisBall } from './actions';

import CurrentBatsmen from './CurrentBatsmen';
import RunsPerBall from './RunsPerBall';

import './scorer.css';
 
const Scorer = (props) => (

    <Container>
        <br/>
        <br/>
        <Row>
        <Col lg={{ size: 6, offset: 3 }} md={{ size: 6, offset: 3 }} sm="12" xs="12">
        <h7> This ball </h7>
        </Col>
        </Row>
        <br/>
        <CurrentBatsmen batsmen = {props.currentBatsmen} setBatsManOnStrike = {props.setBatsManOnStrike}/>
        <br/>
        <RunsPerBall score = {props.thisBall.score} updateThisBall={props.updateThisBall}/>
        <br/>
        <Row>
            <Col  lg={{ size: 6, offset: 3 }} md={{ size: 6, offset: 3 }} sm="12" xs="12">
                <button type="button" className="btn btn-outline-success next-ball" > Next Ball </button>
            </Col>
        </Row>
        
    </Container>

) ;

const mapState = (state) => {
   return {team:state.game.teams.filter(team => team.isPlaying)[0],
           currentBatsmen: state.game.currentBatsmen,
           thisBall: state.thisBall}

};

const mapDispatch = (dispatch) => {
    return { updateThisBall: (evt) => { dispatch(updateThisBall(parseInt(evt.target.id, 10))) },
             setBatsManOnStrike: (evt) => dispatch(switchOnStrikeBatsman(evt.target.id)),
            }};
 

export default connect(mapState, mapDispatch) (Scorer); 

