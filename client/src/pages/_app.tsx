import '@fortawesome/fontawesome-svg-core/styles.css'; // import Font Awesome CSS
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

import theme from '../theme';
import '../styles/index.css';
import Head from 'next/head';
import { Provider, createClient } from 'urql';

import { CSSReset, ThemeProvider } from '@chakra-ui/core';

const client = createClient({ url: 'http://localhost:4000/graphql ' });

function MyApp({ Component, pageProps }): any {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Head>
        <title>TutorU</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossOrigin="anonymous"
        />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.11.0/mdb.min.css"
          rel="stylesheet"
        />
        <script
          type="text/javascript"
          src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.11.0/mdb.min.js"
        ></script>
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
