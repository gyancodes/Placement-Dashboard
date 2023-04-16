import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Bar } from '@ant-design/plots';

const TotalOffers = () => {
  const data = [
    {
      value: 539,
      School: "SoET",
    },
    {
      value: 43,
      School:"MCA",
    },
    {
      value: 60,
      School:"SoABE(AG)",
    },
    {
      value: 87,
      School:"SoASc",
    },
    {
      value: 176,
      School:"MSSSoA",
    },
    {
      value: 212,
      School:"SoVET",
    },
    {
      value: 51,
      School:"SoPAHS",
    },
    {
      value: 99,
      School:"SoPLS",
    },
    {
      value: 152,
      School:"SoM",
    },
    {
      value: 24,
      School:"SoFisheries",
    },
    {
      value: 10,
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

export default TotalOffers;
