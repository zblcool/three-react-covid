import React, { useState, useEffect } from "react";
import { Card, Col, Row } from "react-bootstrap";
import Map from "./Map";
import DataVisualization from "./DataVisualization";
import BarChart from "../charts/BarChart";
import AreaChartCustom from "../charts/AreaChartCustom";
import PieChartCustom from "../charts/PieChartCustom";

function MapContainer() {
  const [data, setData] = useState([]);
  const getData = () => {
    fetch("Final_data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        // console.log(response)
        return response.json();
      })
      .then(function (myJson) {
        // console.log(myJson);
        setData(myJson);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <Card className="my-3 mx-4 text-white bg-dark three-js-card">
      <Card.Header>Dashboard</Card.Header>
      <Card.Body>
        <Card.Title> </Card.Title>
        <div
        id="three-root"
        className="justify-content-md-center three-container"
      >
        {data &&
          data.length > 0 &&
          data.map((item, i) => <p key={i}>{item.about}</p>)}
        {data && data.length > 0 && <Map data={data}></Map>}
      </div>
        <Row>
          <Col md={4}>
            <DataVisualization />
          </Col>
          <Col >

          </Col>
          <Col>
          <BarChart></BarChart>
          </Col>
        </Row>
        <Row>
        <Col md={4}>
          <AreaChartCustom></AreaChartCustom>
        </Col>
        <Col >

        </Col>
        <Col>
         <PieChartCustom></PieChartCustom>
        </Col>
      </Row>
      </Card.Body>
    </Card>
  );
}

export default MapContainer;
