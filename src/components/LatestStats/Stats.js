import React from 'react';
import axios from 'axios';
import { Grid } from '@material-ui/core';

import StatsBox from './StatsBox';
import covid from './covid';

class Stats extends React.Component {
  state = {
    stats: covid,
  };

  // async componentDidMount() {
  //   try {
  //     const res = await axios('https://blakey.co/covid.php', {
  //       headers: {
  //         'Access-Control-Allow-Origin': '*',
  //         'Content-Type': 'application/json',
  //       },
  //     });
  //     console.log(res);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }

  render() {
    const { stats } = this.state;
    const {
      corona_tests: coronaTests,
      corona_cases: coronaCases,
      corona_negative: coronaNeg,
    } = stats;

    const perCleared = ((coronaNeg / coronaTests) * 100).toFixed(2);

    return (
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <StatsBox title='# Tests' content={coronaTests} />
        </Grid>
        <Grid item xs={4}>
          <StatsBox title='# Confirmed' content={coronaCases} />
        </Grid>
        <Grid item xs={4}>
          <StatsBox title='% Cleared' content={perCleared} />
        </Grid>
      </Grid>
    );
  }
}

export default Stats;
