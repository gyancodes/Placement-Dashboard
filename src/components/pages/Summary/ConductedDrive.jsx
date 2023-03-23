import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Pie } from '@ant-design/plots';

const ConductedDrive = () => {
  const data = [
    {
      school: 'SOET',
      value: 77,
    },
    {
      school: 'MCA',
      value: 14,
    },
    {
      school: 'SoABE(AG)',
      value: 18,
    },
    {
      school: 'SoASc',
      value: 29,
    },
    {
      school: 'MSSSoA',
      value: 26,
    },
    {
      school: 'SoVET',
      value: 17,
    },
    {
      school: 'SoPAHS',
      value: 17,
    },
    {
      school: 'SoPLS',
      value: 18,
    },
    {
      school: 'SoM',
      value: 39,
    },
    {
      school: 'SoFisheries',
      value: 8,
    },
    {
      school: 'SoForensic',
      value: 10,
    },
    {
      school: 'SoF (Cybersecurity)',
      value: 8,
    },
    {
      school: 'MSc-Geo',
      value: 8,
    },
  ];
  const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'school',
    radius: 0.75,
    label: {
      type: 'spider',
      labelHeight: 28,
      content: '{name}\n{percentage}',
    },
    interactions: [
      {
        type: 'element-selected',
      },
      {
        type: 'element-active',
      },
    ],
  };
  return <Pie {...config} />;
};

export default ConductedDrive;