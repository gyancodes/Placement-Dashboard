import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Pie } from '@ant-design/plots';

const TotalStudentMultipleOffers = () => {
  const data = [
    {
      value: 135,
      School: "SoET",
    },
    {
      value: 7,
      School:"MCA",
    },
    {
      value: 15,
      School:"SoABE(AG)",
    },
    {
      value: 12,
      School:"SoASc",
    },
    {
      value: 29,
      School:"MSSSoA",
    },
    {
      value: 41,
      School:"SoVET",
    },
    {
      value: 9,
      School:"SoPAHS",
    },
    {
      value: 19,
      School:"SoPLS",
    },
    {
      value: 34,
      School:"SoM",
    },
    {
      value: 4,
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
    radius: 1,
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

export default TotalStudentMultipleOffers;
