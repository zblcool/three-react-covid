import React, { useState, useEffect } from "react";
import { Area } from "@ant-design/charts";

const AreaChartCustom = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    fetch(
      "https://gw.alipayobjects.com/os/bmw-prod/55424a73-7cb8-4f79-b60d-3ab627ac5698.json"
    )
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log("fetch data failed", error);
      });
  };
  var config = {
    data: data,
    xAxis: {
      type: "time",
      mask: "YYYY",
      label: {
        style: {
          fill: "#FFFFFF",
          opacity: 1,
        },
      },
    },
    yAxis: {
      label: {
        style: {
          fill: "#FFFFFF",
          opacity: 1,
        },
        formatter: (v) =>
          `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`),
      },
    },
    xField: "year",
    yField: "value",
    seriesField: "category",
    color: [
      "#6897a7",
      "#8bc0d6",
      "#60d7a7",
      "#dedede",
      "#fedca9",
      "#fab36f",
      "#d96d6f",
    ],
    legend: {
      position: "top",
      flipPage: false,
      title: {
        style: {
          fill: "#FFFFFF",
          opacity: 1,
        },
      },
      itemName:{
        style: {
            fill: "#FFFFFF",
            opacity: 1,
          },
      },
      label: {
        style: {
          fill: "#FFFFFF",
          opacity: 1,
        },
      },
    },
  };
  return <Area {...config} />;
};

export default AreaChartCustom;
