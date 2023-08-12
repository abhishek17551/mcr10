import React, { useEffect, useState } from "react";
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

function DashBoard() {
  const [totalStock, setTotalStock] = useState(0);
  const [delivered, setDelivered] = useState(0);
  const [lowStockItems, setLowStockItems] = useState(0);

  useEffect(() => {
    let presentStock = 0;
    let deliveredItems = 0;
    let lowstock = 0;
    if (localStorage.getItem("InventoryData")) {
      const data = JSON.parse(localStorage.getItem("InventoryData"));
      data.forEach((item) => {
        presentStock += item.stock;
        deliveredItems += item.delivered;
        if (item.stock <= 10) {
          lowstock += 1;
        }
      });
    }
    setTotalStock(presentStock);
    setDelivered(deliveredItems);
    setLowStockItems(lowstock);
  }, []);

  return (
    <>
      <div className={CardStyles.cards}>
        <Card align="center" width="30%">
          <CardBody>
            <Text>{totalStock}</Text>
          </CardBody>
          <CardFooter>
            <Heading size="md"> Total Stock</Heading>
          </CardFooter>
        </Card>
        <Card align="center" width="30%">
          <CardBody>
            <Text>{delivered}</Text>
          </CardBody>
          <CardFooter>
            <Heading size="md"> Total Delivered</Heading>
          </CardFooter>
        </Card>
        <Card align="center" width="30%">
          <CardBody>
            <Text>{lowStockItems}</Text>
          </CardBody>
          <CardFooter>
            <Heading size="md"> Low Stock Item</Heading>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}

export default DashBoard;
