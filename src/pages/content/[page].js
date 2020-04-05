import React from 'react';
import Admin from 'src/layout/Admin';
import { withRouter } from 'next/router';
import ReactMarkdown from 'react-markdown';
import Social from 'src/components/common/Social';
import howToHelp from 'src/app/forestry/data/Content_Pages/how-to-help.json';
import staySafe from 'src/app/forestry/data/Content_Pages/how-to-stay-safe.json';
import privacy from 'src/app/forestry/data/Content_Pages/privacy-policy.json';
import shouldTest from 'src/app/forestry/data/Content_Pages/should-you-test.json';
import getInvolved from 'src/app/forestry/data/Content_Pages/get-involved.json';

export class Content extends React.PureComponent {
  state = {
    content: '',
  };

  routeMapping = {
    'how-to-help': howToHelp,
    'how-to-stay-safe': staySafe,
    'privacy-policy': privacy,
    'should-you-test': shouldTest,
    'get-involved': getInvolved,
  };

  componentDidMount() {
    const { page } = this.props.router.query;
    this.path = this.routeMapping[page];

    const content = this.routeMapping[page];
    this.setState(() => ({
      content: this.routeMapping[page],
    }));

    const script = document.createElement('script');
    script.src = 'https://paperform.co/__embed';
    document.body.appendChild(script);
  }

  render() {
    const { page } = this.props.router.query;
    this.path = this.routeMapping[page];
    this.setState(() => ({
      content: this.routeMapping[page],
    }));

    const { content } = this.state;
    return (
      <Admin pageTitle={`${content && content.pageTitle}`}>
        <div className='inner-content'>
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
          <Social />
        </div>
      </Admin>
    );
  }
}

export default withRouter(Content);
