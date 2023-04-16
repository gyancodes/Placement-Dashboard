import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Bar } from '@ant-design/plots';

const InterestedStudents = () => {
  const data = [
    {
      school: 'SOET',
      value: 517,
    },
    {
      school: 'MCA',
      value: 115,
    },
    {
      school: 'SoABE(AG)',
      value: 79,
    },
    {
      school: 'SoASc',
      value: 314,
    },
    {
      school: 'MSSSoA',
      value: 301,
    },
    {
      school: 'SoVET',
      value: 332,
    },
    {
      school: 'SoPAHS',
      value: 216,
    },
    {
      school: 'SoPLS',
      value: 324,
    },
    {
      school: 'SoM',
      value: 181,
    },
    {
      school: 'SoFisheries',
      value: 23,
    },
    {
      school: 'SoForensic',
      value: 40,
    },
    {
      school: 'SoF (Cybersecurity)',
      value: 15,
    },
    {
      school: 'MSc-Geo',
      value: 7,
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
  return <Bar {...config} height={550} />;
};

export default InterestedStudents;
