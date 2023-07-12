/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import blogArticles from "../../data/blog-articles";

const BlogStanderd = () => {
  return (
    <section className="blog-pg section-padding pt-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="posts">
              {blogArticles.map((article, index) => (
                <div className="item mb-80" key={index}>
                  {/* Image Section - Start */}
                  <div className="img">
                    <Link href={article.articleUrl}>
                      <a>
                        <img
                          src={article.articleImage}
                          alt={article.articleTitle}
                        />
                      </a>
                    </Link>
                  </div>
                  {/* Image Section - End */}

                  {/* Content Section - Start */}
                  <div className="content">
                    <div className="row">
                      <div className="col-10">
                        <a href="#0" className="date">
                          <span className="num">{article.articleDate}</span>
                        </a>
                        <div className="tags">
                          {article.keyWords.map((word, index) => (
                            <a href="#0" key={index}>{word}</a>
                          ))}
                        </div>
                        <h4 className="title">
                          <Link href="/blog-details/blog-details-dark">
                            <a>{article.articleTitle}</a>
                          </Link>
                        </h4>
                        <p>{article.articleSnippet}</p>
                        <Link href={article.articleUrl}>
                          <a className="simple-btn mt-30">Read More</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  {/* Content Section - End */}
                </div>
              ))}

              {blogArticles.length > 10 && (
                <div className="pagination">
                  <span className="active">
                    <a href="#0">1</a>
                  </span>
                  <span>
                    <a href="#0">2</a>
                  </span>
                  <span>
                    <a href="#0">
                      <i className="fas fa-angle-right"></i>
                    </a>
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogStanderd;
