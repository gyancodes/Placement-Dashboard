import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Pie } from '@ant-design/plots';

const DemoPie = () => {
  const data = [
    {
      type: 'Lamborghini',
      value: 27,
    },
    {
      type: 'Ferrari',
      value: 25,
    },
    {
      type: 'Bugatti',
      value: 18,
    },
    {
      type: 'Mclaren',
      value: 15,
    },
    {
      type: 'Mercedes',
      value: 10,
    },
    {
      type: 'Porche',
      value: 5,
    },
  ];
  const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.8,
    label: {
      type: 'outer',
      content: '{name} {percentage}',
    },
    interactions: [
      {
        type: 'pie-legend-active',
      },
      {
        type: 'element-active',
      },
    ],
  };
  return <Pie {...config} />;
};

export default DemoPie;