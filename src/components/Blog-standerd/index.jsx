/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import blogArticles from "../../data/blog-articles";

const BlogStanderd = () => {
  const reversedArticles = blogArticles.slice().reverse();
  return (
    <section className="blog-pg section-padding pt-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="posts">
              {reversedArticles.map((article, index) => (
                <div className="item mb-80" key={index}>
                  {/* Image Section - Start */}
                  <div className="img">
                    <Link href={article.articleUrl}>
                      <img
                        src={article.articleImage}
                        alt={article.articleTitle}
                      />
                    </Link>
                  </div>
                  {/* Image Section - End */}

                  {/* Content Section - Start */}
                  <div className="content">
                    <div className="row">
                      <div className="col-10">
                        <Link href="#0" className="date">
                          <span className="num">{article.articleDate}</span>
                        </Link>
                        <div className="tags">
                          {article.keyWords.map((word, index) => (
                            <Link href="#0" key={index}>{word}</Link>
                          ))}
                        </div>
                        <h4 className="title">
                          <Link href={article.articleUrl}>
                            {article.articleTitle}
                          </Link>
                        </h4>
                        <p>{article.articleSnippet}</p>
                        <Link href={article.articleUrl} className="simple-btn mt-30">
                          Read More
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
                    <Link href="#0">1</Link>
                  </span>
                  <span>
                    <Link href="#0">2</Link>
                  </span>
                  <span>
                    <Link href="#0">
                      <i className="fas fa-angle-right"></i>
                    </Link>
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
