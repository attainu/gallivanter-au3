import React from "react";
import { stateMapper } from "../../redux/store/store";
import { connect } from "react-redux";
import moment from "moment";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton
} from "react-share";
import { Link } from "react-router-dom";

function HomeBlog(props, { url = String(window.location) }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          {props.blogData.length > 0 ? (
            props.blogData.map(blog => {
              let time = moment(blog.updatedAt).format("DD/MM/YYYY");
              return (
                <div className="case" key={blog.blogId}>
                  <div className="row">
                    <div className="col-md-6 col-lg-6 col-xl-8 d-flex">
                      <Link to={`/articles/${blog.blogId}`}>
                        <img
                          src={blog.cover}
                          className="img w-100 mb-3 mb-md-0"
                          atl={blog.title}
                        ></img>
                      </Link>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-4 d-flex">
                      <div className="text w-100 pl-md-3">
                        <Link
                          to={`/articles/${blog.blogId}`}
                          style={{ "text-decoration": "none" }}
                        >
                          <h2 className="text-capitalize">{blog.title}</h2>
                        </Link>
                        <ul className="media-social list-unstyled">
                          <li>
                            <FacebookShareButton
                              url={`${url}/articles/${blog.blogId}`}
                            >
                              <img
                                className="icon-share"
                                src="https://img.icons8.com/nolan/64/facebook.png"
                                alt="facebook"
                              ></img>
                            </FacebookShareButton>
                          </li>
                          <li>
                            <LinkedinShareButton
                              url={`${url}/articles/${blog.blogId}`}
                            >
                              <img
                                className="icon-share"
                                src="https://img.icons8.com/nolan/64/linkedin.png"
                                alt="linkedin"
                              ></img>
                            </LinkedinShareButton>
                          </li>
                          <li>
                            <TwitterShareButton
                              url={`${url}/articles/${blog.blogId}`}
                            >
                              <img
                                className="icon-share"
                                src="https://img.icons8.com/nolan/64/twitter-squared.png"
                                alt="twitter"
                              ></img>
                            </TwitterShareButton>
                          </li>
                        </ul>
                        <div className="meta">
                          <p className="mb-0 text-muted">{time}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="d-flex justify-content-center">
              <div className="spinner-border text-center" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default connect(stateMapper)(HomeBlog);
