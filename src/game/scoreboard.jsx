import React from 'react';
import {Container,Row,Col} from 'reactstrap';

const ScoreBoard = (props) =>
         <Container>
             <br/>
                <Row>
                    <Col lg={{size:6,offset:3}} md= {{size:6,offset:3}} sm={{size:12}} xs="12">
                    <Row>
                        <Col lg={{size:5}} md= {{size:5}} sm={{size:4}} xs="4">
                           <b> {props.playingTeam.name}</b>
                        </Col>
                        <Col lg="1" md ="1" sm="1" xs="2">
                        </Col>
                        <Col style ={{textAlign:"right"}}>
                           <b> {props.playingTeam.score}/{props.playingTeam.wickets}
                               &nbsp;in {props.playingTeam.overs}/20</b> 
                        </Col>
                    </Row>
                    </Col>
                </Row>
                <br/>
                <Row>
                <Col lg={{size:6,offset:3}} md= {{size:6,offset:3}} sm={{size:12}} xs="12">
                    <Row>
                        <Col lg={{size:5}} md= {{size:5}} sm={{size:4}} xs="4">
                            {props.OpponentTeam.name}
                        </Col>
                        <Col lg="1" md ="1" sm="1" xs="2">
                        </Col>
                        <Col style ={{textAlign:"right"}}>
                       {props.OpponentTeam.score === 0 && props.OpponentTeam.overs === 0?" Yet to play": props.OpponentTeam.score
                                                    +"/"+props.OpponentTeam.wickets 
                                                    +" in "+ props.OpponentTeam.overs +"/20 "}
                        </Col>
                    </Row>
                    </Col>
                </Row>
                
        </Container>

export default ScoreBoard;