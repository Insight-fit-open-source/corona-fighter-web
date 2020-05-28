import { AppBar, Button, Tab, Tabs } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Alert } from '@material-ui/lab';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { default as React } from 'react';
import IsProtectedPage from 'src/app/lib/firebase/auth/IsProtectedPage';
import Symptoms from 'src/components/Symptoms';
import Admin from 'src/layout/Admin';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  customTabs: {
    backgroundColor: 'white',
    boxShadow: 'none',
    borderBottom: '1px solid lightgray',
  },
  appbar: {
    marginTop: '2rem',
  },
  tabContent: {
    backgroundColor: 'white',
    boxShadow: 'box-shadow: 0 0 12px 0 rgba(53,64,82,.05);',
  },
}));

export const Home = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Admin pageTitle='Survey History'>
      <Alert
        severity='success'
        action={
          <Link href='/survey/[step]' as='/survey/welcome'>
            <Button color='inherit' size='small'>
              Take the Survey
            </Button>
          </Link>
        }>
        <span className='hide-on-mobile'>
          Take the symptoms survey daily and Help Fight COVID19.
        </span>
      </Alert>

      <AppBar position='static' className={classes.appbar}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label='simple tabs example'
          indicatorColor='primary'
          textColor='primary'
          className={classes.customTabs}>
          <Tab label='My History' {...a11yProps(0)} />
          <Tab label='Organisation History' {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel className={classes.tabContent} value={value} index={0}>
        <Symptoms />
      </TabPanel>
      <TabPanel className={classes.tabContent} value={value} index={1}>
        Item Two
      </TabPanel>
    </Admin>
  );
};

export default IsProtectedPage(Home);
