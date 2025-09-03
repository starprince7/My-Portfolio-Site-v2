/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { Formik, Form, Field } from "formik";

const BlogDetails = ({ article }) => {
  const {
    articleImage,
    articleBody,
    articleTitle,
    slug,
    articleDate,
    keyWords,
  } = article;
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
                <img src={articleImage} alt="" />
              </div>
              <div className="content pt-20">
                <div className="row justify-content-center">
                  <div className="col-lg-10">
                    <div className="cont">
                      <div className="spacial">
                        <p>
                          We've all made mistakes while working on a codebase as
                          developers and needed to undo a recent Git pull.
                          Undoing a Git pull can be a difficult operation,
                          whether it's because of an issue with the code that
                          was pulled or a conflict with local changes. But with
                          some knowledge and comprehension of Git's inner
                          workings, it's a process that can be readily
                          accomplished.
                        </p>
                      </div>
                      <p>
                        Understanding the distinction between a merging and a
                        rebase is the first step in redoing a Git pull. While
                        Git replays changes from one branch on top of another
                        during a rebase, it merges changes from one branch with
                        another during a merge. In most situations, removing a
                        pull entails redoing a merging.
                      </p>
                      <p>
                        The first step in undoing a merge is to locate the
                        commit that the merge resulted in. To do this, use the
                        git log command and search for the commit with the term
                        "Merge" in the message. The command git revert must be
                        used after you've located the offending commit and its
                        hash. By doing this, a new commit will be made that
                        reverses the modifications made in the initial merging
                        commit.
                      </p>
                      <p>
                        The procedure becomes slightly more difficult if the
                        pull was performed using rebase. You must use the git
                        reset command with the commit hash of the previous state
                        you want to return to in order to undo a rebase. This
                        will erase any modifications made after then and return
                        the branch to its original condition. Remember that any
                        modifications made following the rebase will be
                        irretrievably lost.
                      </p>
                      <p>
                        Another way to reverse a pull is to use the commands git
                        stash to save your modifications, git pull --rebase to
                        get them, and git stash apply to reapply them.
                      </p>

                      <h6>- Conclusion.</h6>

                      <p>
                        To sum up, undoing a Git pull can be difficult, but with
                        a little expertise and understanding of Git's inner
                        workings, it's a task that can be readily accomplished.
                        Make a copy of your code, use the right command
                        depending on whether the pull was a merge or a rebase,
                        and test your code in a development environment before
                        sending it to production, just to name a few things.
                      </p>

                      {/* <ul>
                        <li>
                          <span>01</span> Integer in volutpat libero.
                        </li>
                        <li>
                          <span>02</span> Vivamus maximus ultricies pulvinar.
                        </li>
                        <li>
                          <span>03</span> priorities that will pop up in any
                          particular month.
                        </li>
                        <li>
                          <span>04</span> We all intend to plan ahead.
                        </li>
                        <li>
                          <span>05</span> The main component of a healthy env
                          for self esteem.
                        </li>
                      </ul>

                      <div className="quotes text-left">
                        <code>
                          const x = "foo";
                        </code>
                      </div> */}

                      {/* <div className="quotes text-center">
                        <p>
                          Never ever think of giving up. Winners never quit and
                          quitters never win. Take all negative words out of
                          your mental dictionary and focus on the solutions with
                          utmost conviction and patience. The battle is never
                          lost until you’ve abandon your vision.
                        </p>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="mb-10">
                            <img src="/img/blog/single.jpg" alt="" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-10">
                            <img src="/img/blog/single.jpg" alt="" />
                          </div>
                        </div>
                      </div>
                      <p>
                        We all intend to plan ahead, but too often let the
                        day-to-day minutia get in the way of making a calendar
                        for the year. Sure, you can’t know every detail to
                        anticipate. Heck, you can’t know half the priorities
                        that will pop up in any particular month. But you can
                        plan for big picture seasonality, busy-times, and
                        events.
                      </p> */}
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
                          {keyWords?.map((word, index) => (
                            <React.Fragment key={index}>
                              <Link href={`/blog/tag/${word.toLowerCase()}`} className="tag-link">
                                {word}
                              </Link>
                              {index < keyWords.length - 1 ? ',' : ''}
                            </React.Fragment>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="author">
                      <div className="author-img">
                        <img
                          src="https://res.cloudinary.com/starprince-dev/image/upload/ar_1:1,c_fill,e_art:refresh,g_auto,w_1000/v1689117129/princenweke.com/IMG_1183_rmxolk.jpg"
                          alt="author"
                        />
                      </div>
                      <div className="info">
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
                          <a href="https://twitter.com/@dev_starprince" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-twitter"></i>
                          </a>
                          <a href="https://github.com/starprince7" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github"></i>
                          </a>
                          <a href="https://www.linkedin.com/in/prince-nweke-295a5b191/" target="_blank" rel="noopener noreferrer">
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

export default BlogDetails;
