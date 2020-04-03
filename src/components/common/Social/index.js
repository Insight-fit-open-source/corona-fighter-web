import React from 'react';
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from 'react-share';
import { IconButton } from '@material-ui/core';
import {
  Email,
  Facebook,
  LinkedIn,
  Twitter,
  WhatsApp,
} from '@material-ui/icons';
import Styled from './style';

export default ({ invert, left, right, hideOnMobile }) => (
  <Styled.SocialWrapper invert={invert} left={left} right={right} hideOnMobile={hideOnMobile}>
    <EmailShareButton
      url='http://testforcovid.co.za'
      subject='Start your COVID-19 symptom assessment now'
      body='CoronaFighter is a tool and an initiative: a tool for you to track symptoms and an initiative to reduce pressure on medical facilities, reduce deaths and track the evolution of the disease in our country.'>
      <IconButton>
        <Email />
      </IconButton>
    </EmailShareButton>
    <FacebookShareButton
      url='http://testforcovid.co.za'
      quote='Start your COVID-19 symptom assessment now'
      hashtag='COVID19'>
      <IconButton>
        <Facebook />
      </IconButton>
    </FacebookShareButton>
    <LinkedinShareButton
      url='http://testforcovid.co.za'
      title='Start your COVID-19 symptom assessment now'
      summary='CoronaFighter is a tool and an initiative: a tool for you to track symptoms and an initiative to reduce pressure on medical facilities, reduce deaths and track the evolution of the disease in our country'
      source='Corona Fighter'>
      <IconButton>
        <LinkedIn />
      </IconButton>
    </LinkedinShareButton>
    <TwitterShareButton
      url='http://testforcovid.co.za'
      title='Start your COVID-19 symptom assessment now'>
      <IconButton>
        <Twitter />
      </IconButton>
    </TwitterShareButton>
    <WhatsappShareButton
      url='http://testforcovid.co.za'
      title='Start your COVID-19 symptom assessment now'>
      <IconButton>
        <WhatsApp />
      </IconButton>
    </WhatsappShareButton>
  </Styled.SocialWrapper>
);
