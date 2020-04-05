import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import { Typography } from '@material-ui/core';
import ReactMarkdown from 'react-markdown';

import content from 'src/app/forestry/data/Content_Pages/privacy-policy.json';
import Styled from './styles';

export default ({ open, close }) => (
  <Styled.Wrap open={open}>
    <Styled.PageHeader>
      <Typography variant='h4'>{content.pageTitle}</Typography>
      <Styled.CloseButton onClick={close}>
        <CloseIcon />
      </Styled.CloseButton>
    </Styled.PageHeader>
    <Styled.Content>
      {content && content.intro ? (
        <ReactMarkdown
          source={content.intro}
          parserOptions={{ commonMark: true }}
        />
      ) : null}
      {content ? (
        <ReactMarkdown
          source={content.pageBody}
          parserOptions={{ commonMark: true }}
          escapeHtml={false}
          transformLinkUri={null}
        />
      ) : null}
      {content && content.content_section
        ? content.content_section.map(block => (
            <ReactMarkdown
              source={block.content}
              parserOptions={{ commonMark: true }}
              escapeHtml={false}
              transformLinkUri={null}
            />
          ))
        : null}
    </Styled.Content>
  </Styled.Wrap>
);
