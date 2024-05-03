import React from "react";
import { Col, Row } from "react-bootstrap";

import {
  

  DiPython,
  
  DiJava,
} from "react-icons/di";


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      
      
      
     
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
    </Row>
  );
}

export default Techstack;
