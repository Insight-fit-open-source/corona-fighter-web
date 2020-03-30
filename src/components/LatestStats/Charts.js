import React from 'react';
import { Grid } from '@material-ui/core';
import ChartStream from './ChartStream';
import Styled from './styles';

import graph from './graph';

const keyNames = {
  date: 'Date',
  testCount: 'Tests',
  confirmedCasesCount: 'Confirmed Cases',
  recoveriesCount: 'Recoveries',
  fatalityCount: 'Fatalities',
};

class Charts extends React.Component {
  state = {
    data: graph,
  };

  formatData = data => {
    const formatedData = data.map(dataObj => {
      const obj = {};
      Object.entries(dataObj).forEach(([key, value]) => {
        obj[keyNames[key]] = value;
      });
      return obj;
    });
    return formatedData;
  };

  render() {
    const { data } = this.state;
    const chartData = this.formatData(data);

    const chartSettings = {
      data: chartData,
      keys: Object.values(keyNames).filter(key => key !== 'Date'),
      indexBy: 'Date',
      offsetType: 'none',
      fillOpacity: 0.85,
      margin: { top: 25, right: 150, bottom: 50, left: 60 },
      axisBottom: {
        orient: 'bottom',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Date',
        legendPosition: 'middle',
        legendOffset: 36,
      },
      axisLeft: {
        orient: 'left',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: '',
        legendOffset: -40,
      },
      legends: [
        {
          anchor: 'bottom-right',
          direction: 'column',
          translateX: 100,
          itemWidth: 80,
          itemHeight: 20,
          itemTextColor: '#999999',
          symbolSize: 12,
          effects: [
            {
              on: 'hover',
              style: {
                itemTextColor: '#000000',
              },
            },
          ],
        },
      ],
    };

    return (
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Styled.ChartContainer>
            <ChartStream settings={chartSettings} />
          </Styled.ChartContainer>
        </Grid>
      </Grid>
    );
  }
}

export default Charts;
