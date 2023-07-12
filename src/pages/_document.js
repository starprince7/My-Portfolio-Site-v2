import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
    };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="keywords"
            content="Prince Nweke, starprince, dev_starprince, @dev_starprince, Starprince, prince, nweke, prince nweke, javascript developer, software developer, software engineer, fullstack, developer"
          />
          <meta
            name="description"
            content="Prince Nweke is an accomplished software engineer
            based in Lagos, Nigeria. He specialises in web
            development and standard practices with an emphasis on
            offering practical solutions to people and small
            enterprises."
          />
          <meta name="author" content="Prince Nweke A." />
          <meta name="og:title" content="Prince Nweke Software developer" />
          <meta name="og:type" content="website" />
          <meta name="og:site_name" content="princenweke" />
          <meta
            name="og:description"
            content="Prince Nweke is an accomplished software engineer
            based in Lagos, Nigeria. He specialises in web
            development and standard practices with an emphasis on
            offering practical solutions to people and small
            enterprises."
          />
          <meta
            name="og:image"
            content="https://res.cloudinary.com/starprince-dev/image/upload/w_700/v1688904351/princenweke.com/prince_white_bg_siqub6.jpg"
          />
          <link rel="shortcut icon" href="/img/favicon.ico" />
          {/* Google Fonts */}
          <link
            href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Barlow:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Playfair+Display:400,500,600,700,800,900&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@200;300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
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
