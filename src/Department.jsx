import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Text,
  Button,
  Center,
} from "@chakra-ui/react";
import CardStyles from "./Card.module.css";
import { Link } from "react-router-dom";

function Department() {
  return (
    <>
      <div className={CardStyles.cards}>
        <Card align="center" width="30%">
          <CardFooter>
            <Heading size="md">
              <Link to="/products/Kitchen">Kitchen</Link>
            </Heading>
          </CardFooter>
        </Card>

        <Card align="center" width="30%">
          <CardFooter>
            <Heading size="md">
              <Link to="/products/Clothing">Clothing</Link>
            </Heading>
          </CardFooter>
        </Card>

        <Card align="center" width="30%">
          <CardFooter>
            <Heading size="md">
              <Link to="/products/Toys">Toys</Link>
            </Heading>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}

export default Department;
