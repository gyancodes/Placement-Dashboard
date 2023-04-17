import React, { useState, useEffect } from 'react';
import { Card, Title, BarChart, Subtitle,LineChart, DonutChart,Divider   } from "@tremor/react"
import ReactDOM from 'react-dom';
import { Bar } from '@ant-design/plots';

const InterestedStudentPlaced = () => {
  const data = [
    {
        
        'Interested': 1165,
       
        'Placed': 394,
         school: "BBSR",
      },
     
      {
        
        'Interested': 140,
       
         'Placed': 43,
         school: "BLS",
      },
      {
        
        'Interested': 814,
       
        'Placed' : 500,
         school: "PKD",
      },
      {
       
        'Interested': 122,
       
       'Placed': 17,
        school: "BLGR",
      },
      {
       
        'Interested': 107,
       
        'Placed': 42,
        school: "VIZAG",
      },
      {
       
        'Interested': 121,
       
        'Placed': 33,
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
    xField: ["Placed"],
    yField: 'school',
    seriesField: 'school',
   
    legend: {
      position: 'top-left',
    },
  };
  
  return( 
    <>
    <Title className='text-cyan-400 text-3xl font-bold'>This in Intrested student graph</Title>
   <Bar {...config}/>
<Title className='text-cyan-400 text-3xl font-bold'>This in Placed student graph</Title>
  <Bar {...un} /></>);
  
 
};

export default InterestedStudentPlaced;
