import React from 'react';
import { Grid } from '@material-ui/core';
import format from 'date-format';
import FirebaseFactory from 'src/app/lib/firebase';
import ChartLine from './ChartLine';
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
    data: [],
  };

  async componentDidMount() {
    try {
      const { firestore } = await FirebaseFactory.get();
      const firebaseData = firestore
        .collection('cumulative')
        .get()
        .then(function(querySnapshot) {
          const { data } = querySnapshot.docs[0].data();

          console.log(data);

          this.setState({
            data,
          });

          // querySnapshot.forEach(function(doc) {
          //   const { data } = doc.data();
          //   // console.log(data);
          //   // this.setState({
          //   //   data,
          //   // });
          // });
        });

      console.log(firebaseData);
    } catch (error) {
      console.log('Error creating new draft options:', error);
      return Promise.reject(new Error());
    }
  }

  formatData = data => {
    const newObj = {
      testCount: [{ x: 0, y: 0 }],
      confirmedCasesCount: [{ x: 0, y: 0 }],
      recoveriesCount: [{ x: 0, y: 0 }],
      fatalityCount: [{ x: 0, y: 0 }],
    };

    data.map(dObj => {
      Object.entries(dObj).forEach(([key, value]) => {
        const thisDate = format(
          'yyyy-MM-dd',
          new Date(parseInt(`${dObj.date}000`, 10)),
        );
        if (key !== 'date') {
          newObj[key].push({
            x: thisDate,
            y: value,
          });
        }
      });
    });

    let newData = [];
    Object.entries(newObj).forEach(([key, value]) => {
      newData = [...newData, { id: keyNames[key], data: value }];
    });

    return newData;
  };

  render() {
    const { data } = this.state;
    const chartData = this.formatData(data);

    const chartSettings = {
      data: chartData,
      isInteractive: true,
      useMesh: true,
      offsetType: 'none',
      fillOpacity: 0.85,
      enableArea: true,
      areaOpacity: 1,
      enablePoints: false,
      colors: { scheme: 'blues' },
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
  }
}

export default Charts;
