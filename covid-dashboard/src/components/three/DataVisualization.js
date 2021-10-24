import React from 'react';
import { Line } from '@ant-design/charts';

const DataVisualization = () => {
  const data = [
    { year: 'Jan', value: 28460 },
    { year: 'Feb', value: 28806 },
    { year: 'Mar', value: 28975 },
    { year: 'Apr', value: 29656 },
    { year: 'May', value: 30083 },
    { year: 'June', value: 30018 },
    { year: 'July', value: 30642 },
    { year: 'Aug', value: 34130 },
    { year: 'Sep', value: 55090 },
    { year: 'Oct', value: 105131 },
  ];

  const config = {
    data,
    height: 200,
    width:100,
    xAxis: {
        label:{
          style:{
            fill: '#FFFFFF',
            opacity: 1,
          }
          
        },
        title:{
          text:'Total cases in Australia in 2021',
          style:{
            fill: '#FFFFFF',
            opacity: 1,
          }
        }
    },
    yAxis: {
        label:{
          style:{
            fill: '#FFFFFF',
            opacity: 1,
          }
          
        }
    },
    xField: 'year',
    yField: 'value',
  
    point: {
      size: 5,
      shape: 'diamond',
    },
  };
  return <Line {...config} />;
};
export default DataVisualization;