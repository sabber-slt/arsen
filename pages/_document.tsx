import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <link rel="shortcut icon" href="/arsen.png" />

          <link rel="mask-icon" href="/arsen.png" color="#000000" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/arsen.png"></link>
          <meta name="theme-color" content="#000000" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="msapplication-tap-highlight" content="no" />

          <link rel="apple-touch-startup-image" href="/arsen.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
