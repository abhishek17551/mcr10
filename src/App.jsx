import React, { useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom";
import AppRouter from "./AppRoutes";
import { inventoryData } from "./Data";

function App() {
  useEffect(() => {
    const localStorageKey = "InventoryData";

    // Check if the key exists in local storage
    if (!localStorage.getItem(localStorageKey)) {
      // If not, set the constant value
      localStorage.setItem(localStorageKey, JSON.stringify(inventoryData));
    }
  }, []);

  return (
    <ChakraProvider>
      <RouterProvider router={AppRouter} />
    </ChakraProvider>
  );
}

export default App;
