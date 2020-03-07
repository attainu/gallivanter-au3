import React from "react";
import { stateMapper } from "../../redux/store/store";
import { connect } from "react-redux";
import moment from "moment";
import { Link } from "react-router-dom";
function BlogBody(props) {
  return (
    <div className="container">
      <div className="row d-flex">
        {props.blogData.length > 0 ? (
          props.blogData.map(blog => {
            let time = moment(blog.updatedAt).format("Do MMM YY");
            return (
              <div className="col-md-4 float-right d-flex" key={blog.blogId}>
                <div className="blog-entry justify-content-end">
                  <Link to={`/articles/${blog.blogId}`}>
                    <img
                      src={blog.cover}
                      className="block-20 embed-responsive"
                      alt={blog.title}
                    ></img>
                  </Link>
                  <div className="text p-4  d-block">
                    <div className="topper d-flex align-items-center">
                      <div className="py-2 pl-3 pr-3 align-self-stretch">
                        {time}
                      </div>
                    </div>
                    <Link
                      className="text-dark"
                      style={{ "text-decoration": "none" }}
                      to={`/articles/${blog.blogId}`}
                    >
                      <h3 className="heading mb-3 text-capitalize">
                        {blog.title}
                      </h3>
                    </Link>
                    <p className="text-secondary">{blog.body}</p>
                    <p>
                      <Link
                        className="btn-custom"
                        to={`/articles/${blog.blogId}`}
                      >
                        <ion-icon name="chevron-forward-outline"></ion-icon>
                        &nbsp;&nbsp;
                        <span className="pb-3">read more</span>
                      </Link>
                    </p>
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
  );
}

export default connect(stateMapper)(BlogBody);
