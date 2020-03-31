import React from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';
import { Button, Typography } from '@material-ui/core';
import ButtonIcon from '@material-ui/icons/ChevronRight';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import steps from 'src/components/Survey/config';
import { actions } from 'src/store/definitions/profile';
import data from 'forestry/data/popover.json';
import Styled from './styles';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

const Popover = props => {
  const { checkin } = props;
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    checkin();
    setOpen(false);
  };

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}>
      <Styled.PopoverContent
        layoutActive={steps.welcome && steps.welcome.layout !== 'question'}>
        <Styled.PopoverBody>
          <Typography variant='h1'>{data.heading}</Typography>
          <Typography variant='body1'>{data.body}</Typography>
          <Button variant='contained' color='secondary' onClick={handleClose}>
            {data.ok_button_text}
          </Button>
          <Link href='/survey/[step]' as='/survey/feeling'>
            <Button
              variant='contained'
              color='secondary'
              endIcon={<ButtonIcon />}>
              {data.not_ok_button_text}
            </Button>
          </Link>
        </Styled.PopoverBody>
      </Styled.PopoverContent>
    </Dialog>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    checkin: () => dispatch(actions.checkin()),
  };
};

export default connect(null, mapDispatchToProps)(Popover);
