import React, { useState, useEffect } from 'react';

import ReactDOM from 'react-dom';
import { Line } from '@ant-design/plots';

const TotalEligible = () => {
  const data = [

    {
      value: 348,
      School: "SoET",
    },
    {
      value: 0,
      School:"MCA",
    },
    {
      value: 74,
      School:"SoABE(AG)",
    },
    {
      value: 320,
      School:"SoASc",
    },
    {
      value: 265,
      School:"MSSSoA",
    },
    {
      value: 250,
      School:"SoVET",
    },
    {
      value: 197,
      School:"SoPAHS",
    },
    {
      value: 267,
      School:"SoPLS",
    },
    {
      value: 173,
      School:"SoM",
    },
    {
      value: 22,
      School:"SoFisheries",
    },
    {
      value: 40,
      School:"SoForensic",
    },
    {
      value: 15,
      School:"SoF (Cybersecurity)",
    },
    {
      value: 7,
      School:"MSc-Geo",
    },
  ];

  const config = {
    data,
    xField: 'School',
    yField: 'value',
    label: {},
    point: {
      size: 5,
      shape: 'diamond',
      style: {
        fill: 'red',
        stroke: 'green',
        lineWidth: 2,
      },
    },
    tooltip: {
      showMarkers: false,
    },
    state: {
      active: {
        style: {
          shadowBlur: 4,
          stroke: '#000',
          fill: 'red',
        },
      },
    },
    interactions: [
      {
        type: 'marker-active',
      },
    ],
  };
  return <Line {...config} />;
};

export default TotalEligible;
