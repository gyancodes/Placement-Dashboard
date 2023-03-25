import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Pie } from '@ant-design/plots';

const TotalInternships = () => {
  const data = [
    {
      value: 7,
      School: "SoET",
    },
    {
      value: 0,
      School:"MCA",
    },
    {
      value: 0,
      School:"SoABE(AG)",
    },
    {
      value: 0,
      School:"SoASc",
    },
    {
      value: 22,
      School:"MSSSoA",
    },
    {
      value: 0,
      School:"SoVET",
    },
    {
      value: 0,
      School:"SoPAHS",
    },
    {
      value: 0,
      School:"SoPLS",
    },
    {
      value: 15,
      School:"SoM",
    },
    {
      value: 0,
      School:"SoFisheries",
    },
    {
      value: 0,
      School:"SoForensic",
    },
    {
      value: 0,
      School:"SoF (Cybersecurity)",
    },
    {
      value: 0,
      School:"MSc-Geo",
    },
  ];
  const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'School',
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

export default TotalInternships;
