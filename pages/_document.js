import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  
  render() {
    const adSenseEnabled = false // process.env.NEXT_PUBLIC_ADSENSE_ENABLED === 'true'

    return (
      <Html>
        <Head>
          {adSenseEnabled && 
            <script data-ad-client='ca-pub-123' async src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js' />}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument