import React, { Fragment } from "react";
import Header from "../../Components/Header/Header";

export default function NotFound() {
  return (
    <Fragment>
      <Header />
      <div className="container">
        <h1>Page Not Found</h1>
      </div>
    </Fragment>
  );
}
