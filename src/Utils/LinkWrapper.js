import React from "react";
import { NavLink } from "react-router-dom";

const LinkWrapper = React.forwardRef((props, ref) => (
  <span ref={ref} >
    <NavLink activeStyle={{ fontWeight: "bold" }} {...props} />
  </span>
));

export default LinkWrapper;
