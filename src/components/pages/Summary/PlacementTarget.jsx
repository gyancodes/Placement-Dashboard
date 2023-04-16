import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Bar } from '@ant-design/plots';

const PlacementTarget = () => {
  const data = [
    {
      value: 400,
      School: "SoET",
    },
    {
      value: 0,
      School:"MCA",
    },
    {
      value: 50,
      School:"SoABE(AG)",
    },
    {
      value: 185,
      School:"SoASc",
    },
    {
      value: 130,
      School:"MSSSoA",
    },
    {
      value: 250,
      School:"SoVET",
    },
    {
      value: 125,
      School:"SoPAHS",
    },
    {
      value: 200,
      School:"SoPLS",
    },
    {
      value: 110,
      School:"SoM",
    },
    {
      value: 14,
      School:"SoFisheries",
    },
    {
      value: 24,
      School:"SoForensic",
    },
    {
      value: 8,
      School:"SoF (Cybersecurity)",
    },
    {
      value: 4,
      School:"MSc-Geo",
    },
  ];
  const config = {
    data,
    xField: 'value',
    yField: 'School',
    seriesField: 'School',
    legend: {
      position: 'top-left',
    },
  };
  return <Bar {...config} height={550} />;
};

export default PlacementTarget;
