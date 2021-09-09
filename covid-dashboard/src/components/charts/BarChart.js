import React from 'react';
import { Column } from '@ant-design/charts';

const BarChart = () => {
  const data = [
    {
      type: 'cat1',
      sales: 38,
    },
    {
      type: 'cat2',
      sales: 52,
    },
    {
      type: 'cat3',     
       sales: 0,
    },
    {
      type: 'cat4',     
      sales: 145,
    },
    {
      type: 'cat5',
      sales: 48,
    },
    {
      type: 'cat6',
      sales: 38,
    },
    {
      type: 'cat7',
      sales: 38,
    },
    {
      type: 'cat8',
      sales: 38,
    },
  ];

  const config = {
    data,
    height:300,
    xField: 'type',
    xAxis: {
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
    yField: 'sales',
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
      sales: { alias: 'Sales' },
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