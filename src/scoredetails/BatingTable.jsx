import React from 'react';
import { Table } from 'reactstrap';


const BattingTable = (props) =>

    <div>
        <br />
        <b>Batting Table</b>
        <Table size="sm" responsive>
            <thead bgcolor='#D3D3D3'>
                <tr>
                    <th>Batsman</th>
                    <th>Runs</th>
                    <th>Balls</th>
                    <th>Fours</th>
                    <th>Sixes</th>
                    <th>Strike Rate</th>
                </tr>
            </thead>
            <tbody>
                
                {props.battingDetails.map((battingDetail,index) => (
                <tr key={index}>
                    <td> {battingDetail.name}</td>
                    <td> {battingDetail.runs}</td>
                    <td> {battingDetail.balls}</td>
                    <td> {battingDetail.fours}</td>
                    <td> {battingDetail.sixes}</td>
                    <td> {battingDetail.strikeRate}</td>
                </tr>    
                ))}
        

            </tbody>
        </Table>
    </div>

export default BattingTable;