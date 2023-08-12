import React, { useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Heading,
} from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";
import { Button } from "@chakra-ui/react";

function Products() {
  const { productname } = useParams();
  const [products, setProducts] = useState([]);
  const [selectedOption, setSelectedOption] = useState("Kitchen");
  const [selectedSortOption, setSelectedSortOption] = useState("Name");
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (["Kitchen", "Clothing", "Toys"].includes(productname)) {
      setSelectedOption(productname);
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem("InventoryData")) {
      let data = JSON.parse(localStorage.getItem("InventoryData"));

      data = data.filter((item) => item.department === selectedOption);
      if (isChecked) {
        data = data.filter((item) => item.stock <= 10);
      }

      if (selectedSortOption === "Name") {
        data = data.sort((a, b) => a.name.localeCompare(b.name));
      } else if (selectedSortOption === "Price") {
        data = data.sort((a, b) => a.price - b.price);
      } else {
        data = data.sort((a, b) => a.stock - b.stock);
      }

      setProducts(data);
    }
  }, [selectedOption, selectedSortOption, isChecked]);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSortOptionChange = (event) => {
    setSelectedSortOption(event.target.value);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-around",
          marginBottom: "2rem",
        }}
      >
        <Heading>Products</Heading>
        <select
          style={{ border: "1px solid black", padding: "1px" }}
          value={selectedOption}
          onChange={handleOptionChange}
        >
          <option value="Kitchen">Kitchen</option>
          <option value="Clothing">Clothing</option>
          <option value="Toys">Toys</option>
        </select>

        <label>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          &nbsp;&nbsp;Low Stock Items
        </label>

        <select
          style={{ border: "1px solid black", padding: "1px" }}
          value={selectedSortOption}
          onChange={handleSortOptionChange}
        >
          <option value="Name">Name</option>
          <option value="Price">Price</option>
          <option value="Stock">Stock</option>
        </select>

        <Link to="/addProduct">
          <Button colorScheme="blue">Add Product +</Button>
        </Link>
      </div>
      <hr />
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Image</Th>
              <Th>Name</Th>
              <Th>Description</Th>
              <Th>Price</Th>
              <Th>Stock</Th>
              <Th>Supplier</Th>
            </Tr>
          </Thead>
          <Tbody>
            {products?.map((data) => (
              <Tr key={data.id}>
                <Td>
                  <img width="50%" src={data.imageUrl}></img>
                </Td>
                <Td>{data.name}</Td>
                <Td>{data.description}</Td>
                <Td>{data.price}</Td>
                <Td>{data.stock}</Td>
                <Td>{data.supplier}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}

export default Products;
