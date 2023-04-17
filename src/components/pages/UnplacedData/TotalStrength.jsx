import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Bar } from '@ant-design/plots';

const Strength = () => {
  const data = [
    {
      school: 'BBSR',
      value: 1573,
    },
    {
      school: 'BLGR',
      value: 191,
    },
    {
      school: 'RGD',
      value: 123,
    },
    {
      school: 'BLS',
      value: 174,
    },
    {
      school: 'PKD',
      value: 921,
    },
    {
      school: 'VZG',
      value: 166,
    },
   
  ];
  const config = {
    data,
    xField: 'value',
    yField: 'school',
    seriesField: 'school',
    legend: {
      position: 'top-left',
    },
  };
  return <Bar {...config} />;
};

export default Strength;

