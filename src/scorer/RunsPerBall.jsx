import React from 'react';
import { Col, Row, ButtonGroup } from 'reactstrap';
import { connect } from 'react-redux';
import { updateThisBall } from './actions';

const RunsPerBall = (props) => (
  <div>
    <Row>
      <Col className="scores" lg={{ size: 6, offset: 3 }} md={{ size: 6, offset: 3 }} sm="12" xs="12">
        <ButtonGroup style={{ width: "100%" }}>
          <button type="button" id="0" className={props.score===0 ? "btn btn-primary": "btn btn-outline-primary"} onClick={props.scoreThisBall}> 0 </button>
          <button type="button" id="1" className={props.score===1 ? "btn btn-primary": "btn btn-outline-primary"} onClick={props.scoreThisBall}> 1 </button>
          <button type="button" id="2" className={props.score===2 ? "btn btn-primary": "btn btn-outline-primary"} onClick={props.scoreThisBall}> 2 </button>
          <button type="button" id="3" className={props.score===3 ? "btn btn-primary": "btn btn-outline-primary"} onClick={props.scoreThisBall}> 3 </button>
          <button type="button" id="4" className={props.score===4 ? "btn btn-primary": "btn btn-outline-primary"} onClick={props.scoreThisBall}> 4 </button>
          <button type="button" id="5" className={props.score===5 ? "btn btn-primary": "btn btn-outline-primary"} onClick={props.scoreThisBall}> 5 </button>
        </ButtonGroup>
      </Col>
    </Row>

    <Row>
      <Col className="secondline" lg={{ size: 6, offset: 3 }} md={{ size: 6, offset: 3 }} sm="12" xs="12">
        <ButtonGroup style={{ width: "100%" }}>
          <button type="button" id="6" className={props.score===6 ? "btn btn-primary": "btn btn-outline-primary"} onClick={props.scoreThisBall}> 6 </button>
          <button type="button" id="7" className={props.score===7 ? "btn btn-primary": "btn btn-outline-primary"} onClick={props.scoreThisBall}> 7 </button>
        </ButtonGroup>
      </Col>
    </Row>
  </div>
);

const mapState = (state) => {
  return state.thisBall;
};

const mapDispatch = (dispatch) => {
  return { scoreThisBall: (evt) => { dispatch(updateThisBall(parseInt(evt.target.id))) } }
};

export default connect(mapState,mapDispatch)(RunsPerBall);