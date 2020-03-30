import React from 'react';
import { Grid } from '@material-ui/core';

import StatsBox from './StatsBox';
import covid from './covid';

class Stats extends React.Component {
  state = {
    stats: covid,
  };

  // async componentDidMount() {
  //   // try {
  //   //   const res = await axios('https://blakey.co/covid.php', {
  //   //     headers: {
  //   //       'Access-Control-Allow-Origin': '*',
  //   //       'Content-Type': 'application/json',
  //   //     },
  //   //   });
  //   //   console.log(res);
  //   // } catch (e) {
  //   //   console.log(e);
  //   // }
  // }

  render() {
    const { stats } = this.state;
    const {
      corona_tests: coronaTests,
      corona_cases: coronaCases,
      corona_recovered: coronaRecovered,
      corona_deaths: coronaDeaths,
    } = stats;

    return (
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <StatsBox title='Tests' content={coronaTests} />
        </Grid>
        <Grid item xs={3}>
          <StatsBox title='Confirmed' content={coronaCases} />
        </Grid>
        <Grid item xs={3}>
          <StatsBox title='Recovered' content={coronaRecovered} />
        </Grid>
        <Grid item xs={3}>
          <StatsBox title='Deaths' content={coronaDeaths} />
        </Grid>
      </Grid>
    );
  }
}

export default Stats;
