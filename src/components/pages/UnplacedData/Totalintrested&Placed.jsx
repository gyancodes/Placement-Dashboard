import React, { useState, useEffect } from 'react';
import { Card, Title, BarChart, Subtitle,LineChart, DonutChart,Divider   } from "@tremor/react"
import ReactDOM from 'react-dom';
import { Bar } from '@ant-design/plots';

const InterestedStudentPlaced = () => {
  const data = [
    {

        'Interested': 1179,

        'UnPlaced': 1006,
         school: "BBSR",
      },

      {

        'Interested': 140,

         'UnPlaced': 97,
         school: "BLS",
      },
      {

        'Interested': 814,

        'UnPlaced' : 314,
         school: "PKD",
      },
      {

        'Interested': 108,

       'UnPlaced': 99,
        school: "BLGR",
      },
      {

        'Interested': 103,

        'UnPlaced': 65,
        school: "VIZAG",
      },
      {

        'Interested': 121,

        'UnPlaced': 88,
        school: "RGD",
      },
  ];
  const config = {
    data,
    xField: ["Interested"],
    yField: 'school',
    seriesField: 'school',

    legend: {
      position: 'top-left',
    },
  };
  const un = {
    data,
    xField: ["UnPlaced"],
    yField: 'school',
    seriesField: 'school',

    legend: {
      position: 'top-left',
    },
  };

  return(
    <>
    <Title className='text-cyan-400 text-3xl font-bold'>This in Intrested student graph</Title>
   <Bar {...config} height={300}/ >
<Title className='text-cyan-400 text-3xl font-bold'>This in unplaced student graph</Title>
  <Bar {...un} height={300} /></>);


};

export default InterestedStudentPlaced;
