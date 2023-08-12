import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Heading,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  FormHelperText,
  Textarea,
  Select,
  Center,
  Button,
} from "@chakra-ui/react";
import AddProductStyles from "./AddProduct.module.css";

function ItemForm() {
  const navigate = useNavigate();
  const initialItemState = {
    department: "",
    name: "",
    description: "",
    price: 0,
    stock: 0,
    sku: "",
    supplier: "",
    delivered: 0,
    imageUrl: "",
  };

  const departmentOptions = ["Kitchen", "Clothing", "Toys"];

  const [item, setItem] = useState(initialItemState);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setItem({
      ...item,
      [name]:
        name === "price" || name === "stock" || name === "delivered"
          ? parseFloat(value)
          : value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (localStorage.getItem("InventoryData")) {
      const itemToBeAdded = { ...item, id: generateGUID() };
      //console.log(itemToBeAdded);
      const data = JSON.parse(localStorage.getItem("InventoryData"));
      data.push(itemToBeAdded);
      localStorage.setItem("InventoryData", JSON.stringify(data));
      navigate("/products");
    }
    // You can perform additional actions here, like sending the data to a server
  };
  const generateGUID = useCallback(() => {
    const crypto = window.crypto || window.msCrypto; // For compatibility with older browsers
    if (crypto) {
      const buffer = new Uint8Array(16);
      crypto.getRandomValues(buffer);

      buffer[6] = (buffer[6] & 0x0f) | 0x40; // Version 4
      buffer[8] = (buffer[8] & 0x3f) | 0x80; // Variant

      const hexDigits = (value) => (value < 16 ? "0" : "") + value.toString(16);
      return (
        hexDigits(buffer[0]) +
        hexDigits(buffer[1]) +
        hexDigits(buffer[2]) +
        hexDigits(buffer[3]) +
        "-" +
        hexDigits(buffer[4]) +
        hexDigits(buffer[5]) +
        "-" +
        hexDigits(buffer[6]) +
        hexDigits(buffer[7]) +
        "-" +
        hexDigits(buffer[8]) +
        hexDigits(buffer[9]) +
        "-" +
        hexDigits(buffer[10]) +
        hexDigits(buffer[11]) +
        hexDigits(buffer[12]) +
        hexDigits(buffer[13]) +
        hexDigits(buffer[14]) +
        hexDigits(buffer[15])
      );
    } else {
      // Fallback for browsers without crypto support
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
        const r = (Math.random() * 16) | 0;
        const v = c === "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      });
    }
  }, []);
  return (
    <div>
      <Center>
        <Heading className={AddProductStyles.heading}>Add New Item</Heading>
      </Center>
      <Center>
        <form className={AddProductStyles.addProduct} onSubmit={handleSubmit}>
          <FormControl>
            <FormLabel>Department:</FormLabel>
            <Select
              required
              name="department"
              value={item.department}
              onChange={handleChange}
            >
              <option value="">Select Department</option>
              {departmentOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </FormControl>

          <FormControl>
            <FormLabel>Name:</FormLabel>
            <Input
              required
              type="text"
              name="name"
              value={item.name}
              onChange={handleChange}
            />
          </FormControl>

          <FormControl>
            <FormLabel>Description:</FormLabel>
            <Textarea
              required
              name="description"
              value={item.description}
              onChange={handleChange}
            />
          </FormControl>

          <FormControl>
            <FormLabel>Price:</FormLabel>
            <Input
              required
              type="number"
              name="price"
              value={item.price}
              min={0}
              onChange={handleChange}
            />
          </FormControl>

          <FormControl>
            <FormLabel>Stock:</FormLabel>
            <Input
              required
              type="number"
              name="stock"
              value={item.stock}
              min={0}
              onChange={handleChange}
            />
          </FormControl>

          <FormControl>
            <FormLabel>SKU:</FormLabel>
            <Input
              required
              type="text"
              name="sku"
              value={item.sku}
              onChange={handleChange}
            />
          </FormControl>

          <FormControl>
            <FormLabel>Supplier:</FormLabel>
            <Input
              required
              type="text"
              name="supplier"
              value={item.supplier}
              onChange={handleChange}
            />
          </FormControl>

          <FormControl>
            <FormLabel>Delivered:</FormLabel>
            <Input
              required
              type="number"
              name="delivered"
              value={item.delivered}
              min={0}
              onChange={handleChange}
            />
          </FormControl>

          <FormControl>
            <FormLabel>Image URL:</FormLabel>
            <Input
              required
              type="text"
              name="imageUrl"
              value={item.imageUrl}
              onChange={handleChange}
            />
          </FormControl>

          <Button
            colorScheme="blue"
            style={{ marginTop: "1rem", width: "30%" }}
            type="submit"
          >
            Add Product
          </Button>
        </form>
      </Center>
    </div>
  );
}

export default ItemForm;
