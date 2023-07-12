import React from "react";
import BlogDetails from "../../components/Blog-details";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import DarkTheme from "../../layouts/Dark";
import blogArticles from "../../data/blog-articles";
import NavbarFullMenu from "../../components/Navbar-full-menu/navbar-full-menu";

export function getServerSideProps(context) {
  const { titleSlug } = context.query;
  const article = blogArticles.find(
    (article) => article.slug === titleSlug
  );

  if (!article) {
    return {
      props: {
        article: {},
      },
    };
  }
  return {
    props: {
      titleSlug,
      article: JSON.parse(JSON.stringify(article)),
    },
  };
}

const BlogDetailsDark = ({ titleSlug, article }) => {
  const { articleTitle } = article;

  return (
    <DarkTheme>
      <NavbarFullMenu />
      <section className="page-header blg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 col-md-9">
              <div className="cont text-center">
                <h2>{articleTitle}</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <BlogDetails article={article} />
      <Footer />
    </DarkTheme>
  );
};

export default BlogDetailsDark;
