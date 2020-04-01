import React from 'react';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';
import StatsBox from './StatsBox';

const Stats = ({ data }) => {
  const {
    corona_tests: coronaTests,
    corona_cases: coronaCases,
    corona_recovered: coronaRecovered,
    corona_deaths: coronaDeaths,
  } = data;

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} lg={3}>
        <StatsBox title='Tests' content={coronaTests} />
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <StatsBox title='Confirmed' content={coronaCases} />
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <StatsBox title='Recovered' content={coronaRecovered} />
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <StatsBox title='Deaths' content={coronaDeaths} />
      </Grid>
    </Grid>
  );
};

const mapStateToProps = state => {
  return {
    data: state.statsData.daily,
  };
};

export default connect(mapStateToProps)(Stats);
