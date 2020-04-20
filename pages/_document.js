import Document, { Html, Head, Main, NextScript } from "next/document"

class AppDocument extends Document {
  render() {
    return (
      <Html lang="es">
        <Head>
          {/* Chrome, Firefox OS and Opera */}
          <meta name="theme-color" content="#38006b"></meta>
          <meta name="description" content="José Cabarcas: FrontEnd Developer"></meta>
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta key="viewport" name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
          <style>{`
            #__next { height: 100vh; width: 100vw; }
          `}</style>
          <link href="https://unpkg.com/sanitize.css" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;500;700&display=swap" rel="stylesheet"></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default AppDocument
