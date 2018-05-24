import React from 'react';
import { Col, Row, ButtonGroup } from 'reactstrap';
import { connect } from 'react-redux';
import { switchOnStrikeBatsman } from './actions';

const CurrentBatsmen = (props) => (

  <Row>
    <Col lg={{ size: 6, offset: 3 }} md={{ size: 6, offset: 3 }} sm="12" xs="12">
      <ButtonGroup style={{ width: "100%" }}>
        <button type="button" 
                id={props.batsmen[0].id} 
                className={props.batsmen[0].onStrike ? 'btn btn-info'
                                                      : 'btn btn-outline-info'} 
                style={{ width: "50%" }} onClick={props.setBatsManOnStrike}>
          {props.batsmen[0].name}
        </button>
        <button type="button" 
                id={props.batsmen[1].id}
                className={props.batsmen[1].onStrike ? 'btn btn-info'
                : 'btn btn-outline-info'} style={{ width: "50%" }}
                onClick = {props.setBatsManOnStrike} >
          {props.batsmen[1].name}
        </button>
      </ButtonGroup>
    </Col>
  </Row>
);
const mapState = (state) => {
  return { batsmen: state.game.currentBatsmen };
}

const mapDispatch= (dispatch) => {
  return { setBatsManOnStrike: (evt) => dispatch(switchOnStrikeBatsman(evt.target.id)) };
}

export default connect(mapState,mapDispatch)(CurrentBatsmen);