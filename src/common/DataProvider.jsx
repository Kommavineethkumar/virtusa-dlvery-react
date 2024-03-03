import React, { createContext, useState, useContext } from "react";
import axios from "axios";
// Step 1: Define your context
const AppContext = createContext();

// Step 2: Create a provider component
export const DataProvider = ({ children }) => {
  // Step 3: Implement the provider component
  const [data, setData] = useState({}); // You can initialize with your initial data

  const updateData = (newData) => {
    setData((prevData) => ({ ...prevData, ...newData }));
  };

  const getValueFromContext = async (key) => {
    if (data[key]) {
      return data[key];
    } else {
      let res = await getDataFromServer(key);
      let obj = {};
      obj[key] = res;
      updateData(obj);
    }
  };

  return (
    <AppContext.Provider value={{ data, updateData, getValueFromContext }}>
      {children}
    </AppContext.Provider>
  );
};

// Step 4: Use the provider in your application
// Example usage:
// In any child component, you can use useContext to access the data and updateData function
export const useAppContext = () => useContext(AppContext);

export default DataProvider;

export const getDataFromServer = async (key) => {
  let baseUrl = "http://localhost:8080/";
  switch (key) {
    case "categories": {
      let res = await axios.get(baseUrl + "api/categories");
      return res.data;
      break;
    }
    case "products": {
      let res = await axios.get(baseUrl + "api/products");
      return res.data;
    }
    default:
      return null;
  }
  return null;
};
