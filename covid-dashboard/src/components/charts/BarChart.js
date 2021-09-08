import React from 'react';
import { Column } from '@ant-design/charts';

const BarChart = () => {
  const data = [
    {
      type: 'Furniture appliances',
      sales: 38,
    },
    {
      type: 'Cereals, Oils and Non-staple food',
      sales: 52,
    },
    {
      type: 'Fresh fruits',
      sales: 0,
    },
    {
      type: 'Beauty care',
      sales: 145,
    },
    {
      type: 'Baby products',
      sales: 48,
    },
    {
      type: 'Imported food',
      sales: 38,
    },
    {
      type: 'Food and drink',
      sales: 38,
    },
    {
      type: 'Home cleaning',
      sales: 38,
    },
  ];

  const config = {
    data,
    height:300,
    xField: 'type',
    yField: 'sales',
    label: {
      position: 'middle',
      style: {
        fill: '#FFFFFF',
        opacity: 0.6,
      },
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