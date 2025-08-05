import Document, { Html, Head, Main, NextScript } from "next/document";

const SEO_IMAGE =
  "https://res.cloudinary.com/starprince-dev/image/upload/w_500/v1742314227/princenweke.com/prince_profile_dx5xdx.jpg";

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
          <meta name="author" content="Starprince.dev" />
          <meta name="og:title" content="Starprince Software developer" />
          <meta name="og:type" content="website" />
          <meta name="og:site_name" content="starprince" />
          <meta
            name="og:description"
            content="Prince Nweke is an accomplished software engineer
            based in Lagos, Nigeria. He specialises in web
            development and standard practices with an emphasis on
            offering practical solutions to people and small
            enterprises."
          />
          <meta name="og:image" content={SEO_IMAGE} />
          <meta name="twitter:card" content="summary_large_image" />{" "}
          {/* Specifies the type of card for Twitter */}
          <meta name="twitter:site" content="@hey_starprince" />{" "}
          {/* Replace with your Twitter handle */}
          <meta name="twitter:title" content="Starprince Software developer" />
          <meta
            name="twitter:description"
            content="Prince Nweke is an accomplished software engineer based in Lagos, Nigeria. He specialises in custom mobile and web development and standard practices with an emphasis on offering practical solutions to people and small enterprises."
          />
          <meta name="twitter:image" content={SEO_IMAGE} />
          <link rel="canonical" href="https://www.starprince.dev/" />
          <link rel="shortcut icon" href="/img/favicon.ico" />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
          />
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
