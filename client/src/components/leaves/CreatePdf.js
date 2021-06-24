import React, { Component } from "react";

import ReactToPrint from "react-to-print";
import { Col, Row } from "react-bootstrap";

class ComponentToPrint extends Component {
  render() {
    return (
        <div>
          <Row style={{"marginTop":"5px"}}>
            <Col sm={4} style={{ "margin":"10px"}}>
            <h6 className="lead">Applicant Name:</h6>
            </Col>
            <Col sm={7} style={{"backgroundColor": "#b0bec5", "padding":"5px", "borderRadius":"3px", "margin":"10px"}}>
            {/* <h6>{post.applicantName}</h6> */}
            </Col>
            </Row>

            <Row style={{"marginTop":"5px"}}>
            <Col sm={4} style={{ "margin":"10px"}}>
            <h6 className="lead">Applicant Type :</h6>
            </Col>
            <Col sm={7} style={{"backgroundColor": "#b0bec5", "padding":"5px", "borderRadius":"3px", "margin":"10px"}}>
            {/* <h6>{post.applicantUserType}</h6> */}
            </Col>
            </Row>



            <Row style={{"marginTop":"5px"}}>
            <Col sm={4} style={{ "margin":"10px"}}>
            <h6 className="lead">Reason :</h6>
            </Col>
            <Col sm={7} style={{"backgroundColor": "#b0bec5", "padding":"5px", "borderRadius":"3px", "margin":"10px"}}>
            {/* <h6>{post.reason}</h6> */}
            </Col>
            </Row>

            <Row style={{"marginTop":"5px"}}>
            <Col sm={4} style={{ "margin":"10px"}}>
            <h6 className="lead">Name of Actor :</h6>
            </Col>
            <Col sm={7} style={{"backgroundColor": "#b0bec5", "padding":"5px", "borderRadius":"3px", "margin":"10px"}}>
            {/* <h6>{post.nameOfActor}</h6> */}
            </Col>
            </Row>
            
            <Row style={{"marginTop":"5px"}}>
            <Col sm={4} style={{ "margin":"10px"}}>
            <h6 className="lead">actor email : </h6>
            </Col>
            <Col sm={7} style={{"backgroundColor": "#b0bec5", "padding":"5px", "borderRadius":"3px", "margin":"10px"}}>
            {/* <h6>{post.actorEmail}</h6> */}
            </Col>
            </Row>
            
            <Row style={{"marginTop":"5px"}}>
            <Col sm={4} style={{ "margin":"10px"}}>
            <h6 className="lead">leave type : </h6>
            </Col>
            <Col sm={7} style={{"backgroundColor": "#b0bec5", "padding":"5px", "borderRadius":"3px", "margin":"10px"}}>
            {/* <h6>{post.leaveType}</h6> */}
            </Col>
            </Row>
            
           
            
            <Row style={{"marginTop":"5px"}}>
            <Col sm={4} style={{ "margin":"10px"}}>
            <h6 className="lead">Location to : </h6>
            </Col>
            <Col sm={7} style={{"backgroundColor": "#b0bec5", "padding":"5px", "borderRadius":"3px", "margin":"10px"}}>
            {/* <h6>{post.location}</h6> */}
            </Col>
            </Row>
            <Row style={{"marginTop":"5px"}}>
            <Col sm={4} style={{ "margin":"10px"}}>
            <h6 className="lead">Duration : </h6>
            </Col>
            <Col sm={7} style={{"backgroundColor": "#b0bec5", "padding":"5px", "borderRadius":"3px", "margin":"10px"}}>
            <h6></h6>
            </Col>
            </Row>
            
            <Row style={{"marginTop":"5px"}}>
            <Col sm={4} style={{ "margin":"10px"}}>
            <h6 className="lead">Institute : </h6>
            </Col>
            <Col sm={7} style={{"backgroundColor": "#b0bec5", "padding":"5px", "borderRadius":"3px", "margin":"10px"}}>
            <h6></h6>
            </Col>
            </Row>
        </div>
    );
  }
}

export default class example extends Component {
  render() {
    return (
      <div>
        <ReactToPrint
          trigger={() => {
            return <button>Print</button>;
          }}
          content={() => this.componentRef}
          copyStyles
          pageStyle={false}
        />
        <ComponentToPrint ref={(e1) => (this.componentRef = e1)} />
      </div>
    );
  }
}
