import React from 'react';
import { Column } from '@ant-design/charts';

const BarChart = () => {
  const data = [
    {
      type: '0-9',
      fatalities: 0,
    },
    {
      type: '10-19',
      fatalities: 1,
    },
    {
      type: '20-29',     
       fatalities: 6,
    },
    {
      type: '30-39',     
      fatalities: 10,
    },
    {
      type: '40-49',
      fatalities: 22,
    },
    {
      type: '50-59',
      fatalities: 57,
    },
    {
      type: '60-69',
      fatalities: 90,
    },
    {
      type: '70-79',
      fatalities: 133,
    },
    {
      type: '80-89',
      fatalities: 163,
    },
    {
      type: '90+',
      facilities: 71,
    },
  ];

  const config = {
    data,
    height:300,
    xField: 'type',
    xAxis: {
      title:{
        text:"Lives lost by age group",
        style:{
          fill: '#FFFFFF',
          opacity: 1,
        }
      },
        label:{
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
    yField: 'fatalities',
    theme: {
        colors10: [
          '#FF6B3B',
          '#626681',
          '#FFC100',
          '#9FB40F',
          '#76523B',
          '#DAD5B5',
          '#0E8E89',
          '#E19348',
          '#F383A2',
          '#247FEA',
        ]
      },
    label: {
      position: 'middle',
      style: {
        fill: '#FFFFFF',
        opacity: 1,
      },
    },
    statistic: {
        style:{
          fontSize: 80,
          fontWeight: 500,
          textAlign: 'center',
          textBaseline: 'middle',
          shadowColor: 'white',
          fill:'white',
          shadowBlur: 10,
        }
      },
    meta: {
      type: { alias: 'Category' },
      fatalities: { alias: 'Fatalities' },
    },
  };

  return (
    <Column
      {...config}
      onReady={(plot) => {
        plot.on('plot:click', (evt) => {
          const { x, y } = evt;
          const { xField } = plot.options;
          const tooltipData = plot.chart.getTooltipItems({ x, y });
          console.log(tooltipData);
        });
      }}
    />
  );
};

export default BarChart;