import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta charSet='UTF-8' />
          <meta httpEquiv='X-UA-Compatible' content='IE=edge' />

          {/* <meta
            name='viewport'
            content='width=device-width, initial-scale=1.0'
          /> */}

          {/* <title>Document</title>  */}

          {/* <link rel='stylesheet' type='text/css' href='css/bootstrap.css' /> */}

          <script
            src='https://kit.fontawesome.com/b37de7222d.js'
            crossOrigin='anonymous'
          ></script>

          {/* <link rel='stylesheet' href='../components/style.css' /> */}

          <link
            rel='stylesheet'
            href='https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css'
          />
          <script src='https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js'></script>
          <script src='https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js'></script>
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
