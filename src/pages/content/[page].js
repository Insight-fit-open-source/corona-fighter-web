import React from 'react';
import Admin from 'src/layout/Admin';
import { withRouter } from 'next/router';
import ReactMarkdown from 'react-markdown';
import howToHelp from 'src/app/forestry/data/Content_Pages/how-to-help.json';

export class Content extends React.PureComponent {
  state = {
    content: '',
  };

  routeMapping = {
    'how-to-help': howToHelp,
  };

  componentDidMount() {
    const { page } = this.props.router.query;
    this.path = this.routeMapping[page];

    const content = this.routeMapping[page];
    this.setState(() => ({
      content: this.routeMapping[page],
    }));
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
            />
          ) : null}
          {content && content.content_section
            ? content.content_section.map(block => (
                <ReactMarkdown
                  source={block.content}
                  parserOptions={{ commonMark: true }}
                />
              ))
            : null}
        </div>
      </Admin>
    );
  }
}

export default withRouter(Content);
