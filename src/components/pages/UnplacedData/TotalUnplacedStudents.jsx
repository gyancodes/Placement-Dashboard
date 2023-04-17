import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Pie } from '@ant-design/plots';

const UnplacedStudent = () => {
  const data = [
    {
      school: 'BPHARM',
      value: 126,
    },
    {
      school: 'M PHARM',
      value: 15,
    },
    {
      school: 'D PHARM',
      value: 110,
    },
    {
      school: 'BSC',
      value: 61,
    },
    {
      school: 'MSC',
      value: 167,
    },

    {
      school: 'BTECH -CSE',
      value: 91,
    },

    {
      school: 'BTECH -ECE',
      value: 16,
    },
    {
      school: 'BTECH -EEE',
      value: 4,
    },
    {
      school: 'BTECH -EE',
      value: 2,
    },
    {
      school: 'BTECH -CIVIL',
      value: 25,
    },
    {
      school: 'BTECH -MECH',
      value: 9,
    },
    {
      school: 'BTECH -AEROSPACE',
      value: 3,
    },
    {
      school: 'BTECH -MINING',
      value: 13,
    },
    {
        school: 'BTECH -CTIS',
        value: 5,
      },
      {
        school: 'BIOTECH',
        value: 2,
      },
      {
        school: 'DIPLOMA-MECH',
        value: 35,
      },
      {
        school: 'DIPLOMA-CSE',
        value: 34,
      },
      {
        school: 'DIPLOMA-CIVIL',
        value: 30,
      },
      {
        school: 'DIPLOMA-AU',
        value: 12,
      },
      {
        school: 'DIPLOMA-EL',
        value: 37,
      },
      {
        school: 'DIPLOMA-MINING',
        value: 21,
      },
      {
        school: 'MBA',
        value: 13,
      },
      {
        school: 'BBA',
        value: 43,
      },
      {
        school: 'B COM',
        value: 39,
      },
      {
        school: 'MCA',
        value: 80,
      },
      {
        school: 'BCA',
        value: 6,
      },
      {
        school: 'PARAMEDIC',
        value: 174,
      },
      {
        school: 'FORENSIC',
        value: 30,
      },
      {
        school: 'BSC-AGRI',
        value: 168,
      },
      {
        school: 'BSC-FISHERY',
        value: 6,
      },
      {
        school: 'BTECH-AG',
        value: 21,
      },
      {
        school: 'BTECH-DIARY',
        value: 3,
      },
      {
        school: 'BTECH-PHYTOPHARMA',
        value: 10,
      },
      {
        school: 'MSC-GEOINFORMATICS',
        value: 7,
      },
      {
        school: 'BSC-IT',
        value: 6,
      },
      {
        school: 'MSC-CYBER SECURITY',
        value: 15,
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

export default UnplacedStudent;
