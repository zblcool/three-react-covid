import React, { useState, useEffect } from "react";
import { Area } from "@ant-design/charts";

const AreaChartCustom = () => {
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   asyncFetch();
  // }, []);
  // const asyncFetch = () => {
  //   fetch(
  //     "https://gw.alipayobjects.com/os/bmw-prod/55424a73-7cb8-4f79-b60d-3ab627ac5698.json"
  //   )
  //     .then((response) => response.json())
  //     .then((json) => setData(json))
  //     .catch((error) => {
  //       console.log("fetch data failed", error);
  //     });
  // };
  var data = [
    {
     date:"Sep 24",
     value: 839,
     category:"Victoria"
    },    {
      date:"Sep 25",
      value: 767,
      category:"Victoria"
     },
     {
      date:"Sep 26",
      value: 695,
      category:"Victoria"
     },    {
      date:"Sep 27",
      value: 986,
      category:"Victoria"
     },    {
      date:"Sep 28",
      value: 938,
      category:"Victoria"
     },    {
      date:"Sep 29",
      value: 1425,
      category:"Victoria"
     },    {
      date:"Sep 30",
      value: 1135,
      category:"Victoria"
     },    {
      date:"Oct 1",
      value: 1466,
      category:"Victoria"
     },{
      date:"Oct 2",
      value: 1213,
      category:"Victoria"
     },{
      date:"Oct 3",
      value: 1375,
      category:"Victoria"
     },{
      date:"Oct 4",
      value: 1747,
      category:"Victoria"
     },{
      date:"Oct 5",
      value: 1391,
      category:"Victoria"
     },{
      date:"Oct 6",
      value: 1614,
      category:"Victoria"
     },{
      date:"Oct 7",
      value: 1783,
      category:"Victoria"
     },{
      date:"Oct 8",
      value: 1939,
      category:"Victoria"
     },{
      date:"Oct 9",
      value: 1856,
      category:"Victoria"
     },{
      date:"Oct 10",
      value: 1585,
      category:"Victoria"
     },   {
      date:"Sep 24",
      value: 1,
      category:"Queensland"
     },    {
       date:"Sep 25",
       value: 0,
       category:"Queensland"
      },
      {
       date:"Sep 26",
       value: 0,
       category:"Queensland"
      },    {
       date:"Sep 27",
       value: 6,
       category:"Queensland"
      },    {
       date:"Sep 28",
       value: 1,
       category:"Queensland"
      },    {
       date:"Sep 29",
       value: 6,
       category:"Queensland"
      },    {
       date:"Sep 30",
       value: 4,
       category:"Queensland"
      },    {
       date:"Oct 1",
       value: 3,
       category:"Queensland"
      },{
       date:"Oct 2",
       value: 1,
       category:"Queensland"
      },{
       date:"Oct 3",
       value: 3,
       category:"Queensland"
      },{
       date:"Oct 4",
       value: 2,
       category:"Queensland"
      },{
       date:"Oct 5",
       value: 3,
       category:"Queensland"
      },{
       date:"Oct 6",
       value: 5,
       category:"Queensland"
      },{
       date:"Oct 7",
       value: 0,
       category:"Queensland"
      },{
       date:"Oct 8",
       value: 3,
       category:"Queensland"
      },{
       date:"Oct 9",
       value: 1,
       category:"Queensland"
      },{
       date:"Oct 10",
       value: 0,
       category:"Queensland"
      },   {
        date:"Sep 24",
        value: 995,
        category:"New South Wales"
       },    {
         date:"Sep 25",
         value: 948,
         category:"New South Wales"
        },
        {
         date:"Sep 26",
         value: 778,
         category:"New South Wales"
        },    {
         date:"Sep 27",
         value: 852,
         category:"New South Wales"
        },    {
         date:"Sep 28",
         value: 859,
         category:"New South Wales"
        },    {
         date:"Sep 29",
         value: 933,
         category:"New South Wales"
        },    {
         date:"Sep 30",
         value: 802,
         category:"New South Wales"
        },    {
         date:"Oct 1",
         value: 654,
         category:"New South Wales"
        },{
         date:"Oct 2",
         value: 622,
         category:"New South Wales"
        },{
         date:"Oct 3",
         value: 597,
         category:"New South Wales"
        },{
         date:"Oct 4",
         value: 580,
         category:"New South Wales"
        },{
         date:"Oct 5",
         value: 568,
         category:"New South Wales"
        },{
         date:"Oct 6",
         value: 645,
         category:"New South Wales"
        },{
         date:"Oct 7",
         value: 577,
         category:"New South Wales"
        },{
         date:"Oct 8",
         value: 466,
         category:"New South Wales"
        },{
         date:"Oct 9",
         value: 493,
         category:"New South Wales"
        },{
         date:"Oct 10",
         value: 347,
         category:"New South Wales"
        }
  ]
  var config = {
    data: data,
    xAxis: {
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
    xField: "date",
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
