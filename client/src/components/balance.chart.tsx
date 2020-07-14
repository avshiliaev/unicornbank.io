import React from 'react';
import { Donut, Rose } from '@ant-design/charts';

const BalanceChart = ({ data, balance }) => {

  const config = {
    forceFit: true,
    title: {
      visible: true,
      text: `Balance: ${balance.toFixed(2)} €`,
    },
    description: {
      visible: true,
      text:
        'Description',
    },
    radius: 0.8,
    data,
    color: ['green', 'red'],
    radiusField: 'value',
    categoryField: 'title',
    stackField: 'type',
    label: {
      visible: true,
      type: 'outer',
      autoRotate: false,
    },
  };
  return <Rose {...config} />;
};

export default BalanceChart;
