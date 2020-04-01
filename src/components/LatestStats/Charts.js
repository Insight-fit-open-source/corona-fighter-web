import React from 'react';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';
import format from 'date-format';
import colors from 'src/app/theme/colors';
import ChartLine from './ChartLine';
import Styled from './styles';

const keyNames = {
  date: 'Date',
  testCount: 'Tests',
  confirmedCasesCount: 'Confirmed Cases',
  recoveriesCount: 'Recoveries',
  fatalityCount: 'Fatalities',
};

const chartColors = [
  colors.pink,
  colors.blueLight,
  colors.orange,
  colors.green,
];

const formatData = data => {
  const newObj = {
    fatalityCount: [],
    recoveriesCount: [],
    confirmedCasesCount: [],
    testCount: [],
  };

  data.forEach(dObj => {
    Object.entries(dObj).forEach(([key, value]) => {
      const thisDate =
        dObj.date !== null
          ? format('yyyy-MM-dd', new Date(parseInt(`${dObj.date}000`, 10)))
          : 0;
      if (key !== 'date') {
        newObj[key].push({
          x: thisDate,
          y: value,
        });
      }
    });
  });

  let newData = [];
  Object.entries(newObj).forEach(([key, value], index) => {
    newData = [
      ...newData,
      { id: keyNames[key], color: chartColors[index], data: value },
    ];
  });

  return newData;
};

const Charts = ({ data }) => {
  const chartData = formatData(data);

  const chartSettings = {
    data: chartData,
    isInteractive: true,
    useMesh: true,
    offsetType: 'none',
    fillOpacity: 0.85,
    enableArea: true,
    areaOpacity: 1,
    enablePoints: false,
    colors: { datum: 'color' },
    margin: { top: 50, right: 140, bottom: 50, left: 60 },
    areaBaselineValue: 0,
    axisTop: null,
    axisRight: null,
    enableCrosshair: false,
    enableSlices: 'x',
    xScale: { type: 'point' },
    yScale: {
      type: 'linear',
      min: 'auto',
      max: 'auto',
      stacked: true,
      reverse: false,
    },
    axisBottom: {
      orient: 'bottom',
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'Date',
      legendOffset: 36,
      legendPosition: 'middle',
    },
    legends: [
      {
        anchor: 'bottom-right',
        direction: 'column',
        justify: false,
        translateX: 100,
        translateY: 0,
        itemsSpacing: 0,
        itemDirection: 'left-to-right',
        itemWidth: 80,
        itemHeight: 20,
        itemOpacity: 0.75,
        symbolSize: 12,
        symbolShape: 'circle',
        symbolBorderColor: 'rgba(0, 0, 0, .5)',
        effects: [
          {
            on: 'hover',
            style: {
              itemBackground: 'rgba(0, 0, 0, .03)',
              itemOpacity: 1,
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
          <ChartLine settings={chartSettings} />
        </Styled.ChartContainer>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = state => {
  return {
    data: state.statsData.cumulative,
  };
};

export default connect(mapStateToProps)(Charts);
