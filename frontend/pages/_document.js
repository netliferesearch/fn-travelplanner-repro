import Document, { Html, Head, Main, NextScript } from 'next/document'; // main eventually

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
