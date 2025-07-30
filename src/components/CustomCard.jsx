import React from "react";

export default function CustomCard({ img, title }) {
  return (
    // <div class="col">
    // {" "}
    <div
      class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
      style={{ background: `url(${img}) no-repeat center/cover` }}
    >
      {" "}
      <div className="parallax-overlay"></div>
      <div class=" d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1" style={{position:'relative'}}>
        {" "}
        <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
          {title}
        </h3>{" "}
        <ul class="d-flex list-unstyled mt-auto">
          {" "}
          {/* <li class="me-auto">
              <img
                src={img}
                alt="Bootstrap"
                width="32"
                height="32"
                class="rounded-circle border border-white"
              />{" "}
            </li>{" "} */}
          <li class="d-flex align-items-center me-3">
            {" "}
            <svg
              class="bi me-2"
              width="1em"
              height="1em"
              role="img"
              aria-label="Location"
            >
              <use xlink:href="#geo-fill"></use>
            </svg>{" "}
            <small >Earth</small>{" "}
          </li>{" "}
          <li class="d-flex align-items-center">
            {" "}
            <svg
              class="bi me-2"
              width="1em"
              height="1em"
              role="img"
              aria-label="Duration"
            >
              <use xlink:href="#calendar3"></use>
            </svg>{" "}
            <small>3d</small>{" "}
          </li>{" "}
        </ul>{" "}
      </div>{" "}
    </div>
    // </div>
  );
}
