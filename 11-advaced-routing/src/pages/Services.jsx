import React from "react";
import { Link, Outlet } from "react-router-dom";

const Services = () => {
  return (
    <div>
      <div className="service">
        <Link to="/services/frontend">Frontend</Link>
        <Link to="/services/backend">Backend</Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Services;
