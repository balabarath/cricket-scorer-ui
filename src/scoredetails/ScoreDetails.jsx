import React from 'react';
import {Container,Row,Col} from 'reactstrap';
import BattingTable from './BatingTable';


const ScoreDetails = () => 
        <Container>
             <br/>
                <Row>
                    <Col lg={{size:6,offset:3}} md= {{size:6,offset:3}} >
                        <BattingTable/>
                    </Col>
                </Row>
        </Container>

export default ScoreDetails;