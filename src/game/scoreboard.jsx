import React from 'react';
import {Container,Row,Col} from 'reactstrap';

const ScoreBoard = () =>
         <Container>
                <Row>
                    <Col lg={{size:6,offset:3}} md= {{size:6,offset:3}} sm={{size:12}} xs="12">
                    <Row>
                        <Col>
                            Team 1
                        </Col>
                        <Col lg="1" md ="1" sm="2" xs="3">
                            
                        </Col>
                        <Col>
                            110/5 in 10.4
                        </Col>
                    </Row>
                    </Col>
                </Row>
        </Container>

export default ScoreBoard;