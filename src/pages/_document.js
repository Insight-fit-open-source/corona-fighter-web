import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet as StyledComponentSheets } from 'styled-components';
import { ServerStyleSheets as MaterialUiServerStyleSheets } from '@material-ui/styles';
import config from 'src/app/publicSettings';
import theme from 'src/app/theme';

export default class MyDocument extends Document {
  render() {
    return (
      <html lang='en'>
        <Head>
          <title>Corona Fighter</title>
          <meta
            name='description'
            content='Join us to reduce pressure on medical facilities, reduce deaths and track the evolution of the Corona Virus in South Africa.'
          />
          <meta name='application-name' content='Corona Fighter' />
          <meta name='apple-mobile-web-app-capable' content='yes' />
          <meta
            name='apple-mobile-web-app-status-bar-style'
            content='default'
          />
          <meta name='apple-mobile-web-app-title' content='Corona Fighter' />
          <meta name='mobile-web-app-capable' content='yes' />
          <meta name='twitter:card' content='summary' />
          <meta name='twitter:url' content='https://testforcovid.co.za' />
          <meta name='twitter:title' content='CoronaFighter' />
          <meta
            name='twitter:description'
            content='Join us to reduce pressure on medical facilities, reduce deaths and track the evolution of the Corona Virus in South Africa.'
          />
          <meta
            name='viewport'
            content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, maximum-scale=1, viewport-fit=cover'
          />
          <meta name='theme-color' content={theme.palette.primary.main} />
          <link
            rel='apple-touch-icon'
            sizes='180x180'
            href='/apple-touch-icon.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href='/favicon-32x32.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='16x16'
            href='/favicon-16x16.png'
          />
          <link rel='manifest' href='/site.webmanifest' />
          <style>
            {`html {
                font-size: 12px;
              }
              @media  (min-height: 450px) {
                html {
                  font-size: 14px;
                }
              }

              @media  (min-height: 650px) {
                html {
                  font-size: 16px;
                }
              }

              @media (min-height: 650px), (min-width: 1140px) {
                html {
                  font-size: 16px;
                }
              }
          `}
          </style>
          <script
            src={`https://maps.googleapis.com/maps/api/js?key=${config.GOOGLE_API_KEY}&libraries=places`}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

MyDocument.getInitialProps = async ctx => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.
  const styledComponentSheet = new StyledComponentSheets();
  const materialUiSheets = new MaterialUiServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  try {
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: App => props =>
          styledComponentSheet.collectStyles(
            materialUiSheets.collect(<App {...props} />),
          ),
      });

    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: [
        ...React.Children.toArray(initialProps.styles),
        materialUiSheets.getStyleElement(),
        styledComponentSheet.getStyleElement(),
      ],
    };
  } finally {
    styledComponentSheet.seal();
  }
};
