import React from 'react';
import { Container, Col, Row, ButtonGroup } from 'reactstrap';
import './scorer.css';
import CurrentBatsmen from './CurrentBatsmen';
import RunsPerBall from './RunsPerBall';
 
const Scorer = () => (

    <Container>
        <br/>
        <br/>
        <Row>
        <Col lg={{ size: 6, offset: 3 }} md={{ size: 6, offset: 3 }} sm="12" xs="12">
        <h7> This ball </h7>
        </Col>
        </Row>
        <br/>
        <CurrentBatsmen/>
        <br/>
        <RunsPerBall/>
        <br/>
        <Row>
            <Col  lg={{ size: 6, offset: 3 }} md={{ size: 6, offset: 3 }} sm="12" xs="12">
                <button type="button" className="btn btn-outline-success next-ball" > Next Ball </button>
            </Col>
        </Row>
        
    </Container>

) ;
export default Scorer; 

