import React from "react";
import { Link } from "react-router-dom";
import NavigationStyles from "./Navigation.module.css";
import { Center } from "@chakra-ui/react";

function Navigation() {
  return (
    <div className={NavigationStyles.navigation}>
      <Link to="/">
        <div>Dashboard</div>
      </Link>
      <Link to="/department">
        <div>Departments</div>
      </Link>
      <Link to="/products">
        <div>Products</div>
      </Link>
    </div>
  );
}

export default Navigation;
