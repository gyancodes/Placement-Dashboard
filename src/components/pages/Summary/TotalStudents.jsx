import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Bar } from '@ant-design/plots';

const TotalStudents = () => {
  const data = [
    {
      school: 'SOET',
      value: 582,
    },
    {
      school: 'MCA',
      value: 131,
    },
    {
      school: 'SoABE(AG)',
      value: 86,
    },
    {
      school: 'SoASc',
      value: 459,
    },
    {
      school: 'MSSSoA',
      value: 310,
    },
    {
      school: 'SoVET',
      value: 427,
    },
    {
      school: 'SoPAHS',
      value: 387,
    },
    {
      school: 'SoPLS',
      value: 400,
    },
    {
      school: 'SoM',
      value: 243,
    },
    {
      school: 'SoFisheries',
      value: 36,
    },
    {
      school: 'SoForensic',
      value: 54,
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

export default TotalStudents;
