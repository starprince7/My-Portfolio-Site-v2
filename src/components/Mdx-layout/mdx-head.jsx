import Head from "next/head";

export default function MdxHead({
  title,
  keyWords,
  description,
  ogDescription,
  ogImage,
}) {
  return (
    <Head>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <title>{title}</title>
      <meta name="keywords" content={keyWords} />
      <meta name="description" content={description} />
      <meta name="author" content="Prince Nweke Agezi." />
      <meta name="og:title" content="Article" />
      <meta name="og:type" content="website" />
      <meta name="og:site_name" content="princenweke" />
      <meta name="og:description" content={ogDescription} />
      <meta name="og:image" content={ogImage} />
    </Head>
  );
}
