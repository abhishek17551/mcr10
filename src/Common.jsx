import { Heading, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import commonStyles from "./Common.module.css";
import Navigation from "./Navigation";

function Common() {
  return (
    <>
      <Grid
        templateColumns="repeat(7, 1fr)"
        templateRows="repeat(1, 1fr)"
        gap={2}
      >
        <GridItem rowSpan={1} colSpan={1}>
          <Navigation />
        </GridItem>
        <GridItem rowSpan={1} colSpan={6}>
          <Outlet />
        </GridItem>
      </Grid>
    </>
  );
}

export default Common;
