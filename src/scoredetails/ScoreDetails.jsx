import React, { Component } from 'react';
import {Container,Row,Col} from 'reactstrap';
import BattingTable from './BatingTable';

class ScoreDetails extends Component{


    render() {

        return (      
        <Container>
            <br/>
               <Row>
                   <Col lg={{size:6,offset:3}} md= {{size:6,offset:3}} >
                       <BattingTable/>
                   </Col>
               </Row>
       </Container>);
    }

}

  

export default ScoreDetails;