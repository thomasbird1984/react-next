import React from 'react';
import { AppProps } from 'next/app';
import * as Sentry from '@sentry/node';
import 'react-rangeslider/lib/index.css';

import { Layout } from '~/components/layout';

import '~/styles/index.css';

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  release: process.env.SENTRY_RELEASE,
  enabled: process.env.NODE_ENV === 'production',
  environment: process.env.ENV,
});

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
);

export default App;
