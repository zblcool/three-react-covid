import React,{useState,useEffect} from 'react';

import { Card, Col, Row } from "react-bootstrap";

function TwoDimensionMap() {

  return (
    <Card className="my-3 mx-4 text-white bg-dark three-js-card" >
    <Card.Header>
    Heatmap ( under construction)
    </Card.Header>
    <Card.Body>
      <Card.Title> </Card.Title>
      <Row>
        <Col >
        <iframe
        title="map"
          width="900"
          height="600"
          src="https://api.maptiler.com/maps/b0cd528b-f6b4-40a6-a7ec-3ad68ff85365/?key=LLaGF9mARrE3KmfAEcZd#11.2/-33.91679/151.23810"
        ></iframe>
        </Col>
      </Row>
    </Card.Body>
  </Card>
  
  );
}

export default TwoDimensionMap;