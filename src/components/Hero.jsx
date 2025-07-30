import React from "react";

export default function Hero({
  img,
  title,
  subtitle,
  btnDisplay = false,
  reverse = false,
}) {
  return (
    <div className="container col-xxl-10 px-4 py-5">
      <div
        className={`row flex-lg-row${reverse ? "-reverse " : " "
          } align-items-center justify-content-center g-5 py-5`}
      >
        <div className="col-10 col-sm-8 col-lg-6">
          <img
            src={img}
            className="d-block mx-lg-auto img-fluid"
            alt="Bootstrap Themes"
            width="700"
            height="500px"
            loading="lazy"
          />
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold lh-1 mb-3">{title}</h1>
          <p className="lead">{subtitle}</p>
          {btnDisplay && (
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button
                type="button"
                className="btn btn-primary btn-lg px-4 me-md-2"
              >
                Explore
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary btn-lg px-4"
              >
                Contact
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
