import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';
import moment from 'moment';
import StatsBox from './StatsBox';

const Stats = ({ data, children }) => {
  const count = _.values(data).length;
  const stats = count > 0 ? _.values(data)[count - 1] : null;

  if (!stats) {
    return null;
  }

  const {
    date,
    testCount,
    confirmedCasesCount,
    recoveriesCount,
    fatalityCount,
  } = stats;

  return (
    <Grid container spacing={3}>
      {children}
      <Grid item xs={12} lg={4}>
        <StatsBox title='Tests' content={testCount} />
      </Grid>
      <Grid item xs={12} lg={4}>
        <StatsBox title='Confirmed' content={confirmedCasesCount} />
      </Grid>
      <Grid item xs={12} lg={4}>
        <StatsBox
          title='Percentage Positive'
          content={`${Math.round(
            (confirmedCasesCount / testCount) * 100 * 100,
          ) / 100}%`}
        />
      </Grid>
      <Grid item xs={12} lg={4}>
        <StatsBox title='Recovered' content={recoveriesCount} />
      </Grid>
      <Grid item xs={12} lg={4}>
        <StatsBox title='Fatalities' content={fatalityCount} />
      </Grid>
      <Grid item xs={12} lg={4}>
        <StatsBox title='Last Updated' content={moment.unix(date).fromNow()} />
      </Grid>
    </Grid>
  );
};

const mapStateToProps = state => {
  return {
    data: state.statsData.cumulative,
  };
};

export default connect(mapStateToProps)(Stats);
