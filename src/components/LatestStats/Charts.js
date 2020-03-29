import React from 'react';
import ChartStream from './ChartStream';

import graph from './graph';

class Charts extends React.Component {
  state = {
    data: graph,
  };

  formatData = data => {
    const noDate = data.map(dataObj => {
      const obj = {};
      Object.entries(dataObj).forEach(([key, value]) => {
        if (key !== 'date') {
          obj[key] = value;
        }
      });
      return obj;
    });

    return noDate;
  };

  render() {
    const { data } = this.state;
    const chartData = this.formatData(data);

    console.log(chartData);

    const chartSettings = {
      data: chartData,
      keys: [
        'testCount',
        'confirmedCasesCount',
        'recoveriesCount',
        'fatalityCount',
      ],
      offsetType: 'none',
      curve: 'linear',
    };

    return <ChartStream settings={chartSettings} />;
  }
}

export default Charts;
