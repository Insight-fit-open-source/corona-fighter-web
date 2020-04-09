import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Styled from './styles';

const Alert = props => {
  return <MuiAlert elevation={6} variant='filled' {...props} />;
};

const NotificationSnackbar = ({
  openNotification,
  message,
  handleCloseNotification,
}) => {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    setOpen(openNotification);
  }, [openNotification]);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
    handleCloseNotification();
  };

  return (
    <Styled.Container>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity='info'>
          {message}
        </Alert>
      </Snackbar>
    </Styled.Container>
  );
};

export default NotificationSnackbar;
