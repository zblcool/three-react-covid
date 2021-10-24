import React, { useState, useEffect } from 'react';
import { Pie, measureTextWidth } from '@ant-design/charts';

const PieChartCustom = () => {
  function renderStatistic(containerWidth, text, style) {
    var _measureTextWidth = (0, measureTextWidth)(text, style),
      textWidth = _measureTextWidth.width,
      textHeight = _measureTextWidth.height;
    var R = containerWidth / 2;
    var scale = 1;
    if (containerWidth < textWidth) {
      scale = Math.min(
        Math.sqrt(
          Math.abs(Math.pow(R, 2) / (Math.pow(textWidth / 2, 2) + Math.pow(textHeight, 2))),
        ),
        1,
      );
    }
    var textStyleStr = 'width:'.concat(containerWidth, 'px;');
    return '<div style="'
      .concat(textStyleStr, ';font-size:')
      .concat(scale, 'em;line-height:')
      .concat(scale < 1 ? 1 : 'inherit', ';">')
      .concat(text, '</div>');
  }
  var data = [
    {
      type: 'Fully vaccinated',
      value: 73.1,
    },
    {
      type: 'Only Had first Dose',
      value: 13.5,
    },{
      type:'Others',
      value:13.4
    }

  ];
  var config = {
    appendPadding: 10,
    data: data,
    angleField: 'value',
    colorField: 'type',
    radius: 1,
    innerRadius: 0.64,
    meta: {
      value: {
        formatter: function formatter(v) {
          return ''.concat(v, ' \xA5');
        },
      },
    },
    legend:{
        itemName:{
            style: {
                fill: "#FFFFFF",
                opacity: 1,
              },
        }
    },
    title:{
        style:{
            fill:'white'
        }
    },
    label: {
      type: 'inner',
      offset: '-50%',
      style: { textAlign: 'center', fill: '#ffffff' },
      autoRotate: false,
      content: '{value}',
    },
    statistic: {
      title: {
        text:"Percentage ",
        style:{
            fill:'#ffffff'
        },
        offsetY: -4,
        customHtml: function customHtml(container, view, datum) {
          var _container$getBoundin = container.getBoundingClientRect(),
            width = _container$getBoundin.width,
            height = _container$getBoundin.height;
          var d = Math.sqrt(Math.pow(width / 2, 2) + Math.pow(height / 2, 2));
          var text = datum ? datum.type : 'Total';
          return renderStatistic(d, text, { fontSize: 28 });
        },
      },
      content: {
        offsetY: 4,
        style: { fontSize: '32px',color:'white' },
        customHtml: function customHtml(container, view, datum, data) {
          var _container$getBoundin2 = container.getBoundingClientRect(),
            width = _container$getBoundin2.width;
          var text = datum
            ? ' '.concat(datum.value)
            : '  '.concat(
                data.reduce(function (r, d) {
                  return r + d.value;
                }, 0),
              );
          return renderStatistic(width, text, { fontSize: 32 });
        },
      },
    },
    interactions: [
      { type: 'element-selected' },
      { type: 'element-active' },
      {
        type: 'pie-statistic-active',
        cfg: {
          start: [
            { trigger: 'element:mouseenter', action: 'pie-statistic:change' },
            { trigger: 'legend-item:mouseenter', action: 'pie-statistic:change' },
            { trigger: 'element:mouseleave', action: 'pie-statistic:reset' },
            { trigger: 'legend-item:mouseleave', action: 'pie-statistic:reset' }          
          ]
        }
      }
    ],
  };
  return <Pie {...config} />;
};

export default PieChartCustom;