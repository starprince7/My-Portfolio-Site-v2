/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Formik, Form, Field } from "formik";

const MdxContentBody = ({
  children,
  articleTitle,
  keyWords = [],
  articleImageSrc = "",
}) => {
  const router = useRouter();
  const [, slug] = router.pathname.split("/blog/"); // or const slug = router.pathname.split("/blog/")[1]

  function validateEmail(value) {
    let error;
    if (!value) {
      error = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    }
    return error;
  }

  const sendComment = (ms) => new Promise((r) => setTimeout(r, ms));

  return (
    <section className="blog-pg single section-padding pt-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="post">
              <div className="img">
                <img src={articleImageSrc} alt={slug} style={{maxHeight: 650, objectFit: 'cover'}} />
              </div>
              <div className="content pt-20">
                <div className="row justify-content-center">
                  <div className="col-lg-10">
                    <div className="cont">
                      {children}

                      <div className="share-info">
                        <div className="social">
                          <a>Share:</a>
                          <a
                            href={`https://twitter.com/intent/tweet?url=https://princenweke.com/blog/${slug}&text=I just read ${articleTitle} by @dev_Starprince`}
                          >
                            <i className="fab fa-twitter"></i>
                          </a>
                          <a
                            href={`https://www.linkedin.com/sharing/share-offsite/?url=https://princenweke.com/${slug}&title=I just read ${articleTitle} by @Prince Nweke`}
                          >
                            <i className="fab fa-linkedin"></i>
                          </a>
                          {/* <a href="#0">
                            <i className="fab fa-github"></i>
                          </a> */}
                        </div>
                        <div className="tags">
                          {keyWords.map((word, index) => (
                            <a href="#0" key={index}>
                              {word},
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="author row">
                      <div className="author-img col-12 mb-3 col-md-6">
                        <img
                          src="https://res.cloudinary.com/starprince-dev/image/upload/ar_1:1,c_fill,e_art:refresh,g_auto,w_1000/v1689117129/princenweke.com/IMG_1183_rmxolk.jpg"
                          alt="author"
                        />
                      </div>
                      <div className="info col-sm-12 col-md-6">
                        <h6>
                          <span>author :</span> Prince A. Nweke
                        </h6>
                        <p>
                          Prince Nweke is an accomplished software engineer
                          based in Lagos, Nigeria. He specialises in web
                          development and standard practices with an emphasis on
                          offering practical solutions to people and small
                          enterprises.
                        </p>
                        <div className="social">
                          <a href="https://twitter.com/@dev_starprince">
                            <i className="fab fa-twitter"></i>
                          </a>
                          <a href="https://github.com/starprince7">
                            <i className="fab fa-github"></i>
                          </a>
                          <a href="https://www.linkedin.com/in/prince-nweke-295a5b191/">
                            <i className="fab fa-linkedin"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="comment-form">
                <h5>Add Comment :</h5>
                <div className="form">
                  <Formik
                    initialValues={{
                      name: "",
                      email: "",
                      comment: "",
                    }}
                    onSubmit={async (values) => {
                      await sendComment(500);
                      alert(JSON.stringify(values, null, 2));

                      // Reset the values
                      values.name = "";
                      values.email = "";
                      values.comment = "";
                    }}
                  >
                    {({ errors, touched }) => (
                      <Form>
                        <div className="row">
                          <div className="col-12">
                            <div className="form-group">
                              <Field
                                as="textarea"
                                placeholder="Your Comment"
                                name="comment"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <Field
                                type="text"
                                placeholder="Your Name"
                                name="name"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <Field
                                type="email"
                                validate={validateEmail}
                                placeholder="Your Email"
                                name="email"
                              />
                              {errors.email && touched.email && (
                                <div>{errors.email}</div>
                              )}
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-group">
                              <button className="btn-curve btn-color btn-lg">
                                <span>Submit</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </Form>
                    )}
                  </Formik>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MdxContentBody;
