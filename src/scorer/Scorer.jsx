import React from 'react';
import { Container, Col, Row, ButtonGroup } from 'reactstrap';
import './scorer.css';
import CurrentBatsmen from './CurrentBatsmen';

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
        <Row>
            <Col  className="scores" lg={{ size: 6, offset: 3 }} md={{ size: 6, offset: 3 }} sm="12" xs="12">
                <ButtonGroup style={{width:"100%"}}>
                    <button type="button" className="btn btn-outline-primary"> 0 </button>
                    <button type="button" className="btn btn-outline-primary"> 1 </button>
                    <button type="button" className="btn btn-outline-primary"> 2 </button>
                    <button type="button" className="btn btn-outline-primary"> 3 </button>
                    <button type="button" className="btn btn-outline-primary"> 4 </button>
                    <button type="button" className="btn btn-outline-primary"> 5 </button>
                </ButtonGroup>
            </Col>
        </Row>

         <Row>
            <Col  className="secondline" lg={{ size: 6, offset: 3 }} md={{ size: 6, offset: 3 }} sm="12" xs="12">
                <ButtonGroup style={{width:"100%"}}>
                    <button type="button" className="btn btn-outline-primary"> 6 </button>
                    <button type="button" className="btn btn-outline-primary"> 7 </button>
                </ButtonGroup>
            </Col>
        </Row>
        <br/>
        <Row>
            <Col  lg={{ size: 6, offset: 3 }} md={{ size: 6, offset: 3 }} sm="12" xs="12">
                <button type="button" className="btn btn-outline-success next-ball" > Next Ball </button>
            </Col>
        </Row>

    </Container>

) ;
export default Scorer; 

