import React from 'react';
import Accordion from 'react-bootstrap/Accordion';


const UiFaqDropdown = (props) => {
    return (
        <Accordion style={{marginLeft: "15%", marginRight: "15%", marginBottom: "15px"}}>
            <Accordion.Item eventKey={props.eventKey}>
                <Accordion.Header style={{color: "#1A2B6B", fontSize: "20px"}}>{props.ques}</Accordion.Header>
                <Accordion.Body>
                   {props.ans}
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
};

export default UiFaqDropdown;