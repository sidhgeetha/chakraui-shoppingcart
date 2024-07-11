import React, { useState } from "react";
import "./App.css";
import Card from "../components/Card";
import Nav from "../components/Nav"
import { ChakraProvider } from "@chakra-ui/react";
import TabBar from "../components/TabBar";







const App = () => {
  const dataObj = [
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1nwXwZoUr2pD36VOdGHYG9dVw84DwIJAnHg&s",
      title: "product3",
      price: "€ 1560",
      reviews: "True",
      rating: "5",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1nwXwZoUr2pD36VOdGHYG9dVw84DwIJAnHg&s",
      title: "product3",
      price: "€ 1560",
      reviews: "True",
      rating: "3",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1nwXwZoUr2pD36VOdGHYG9dVw84DwIJAnHg&s",
      title: "product3",
      price: "€ 1560",
      reviews: "True",
      rating: "4",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1nwXwZoUr2pD36VOdGHYG9dVw84DwIJAnHg&s",
      title: "product3",
      price: "€ 1560",
      reviews: "True",
      rating: "5",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1nwXwZoUr2pD36VOdGHYG9dVw84DwIJAnHg&s",
      title: "product3",
      price: "€ 1560",
      reviews: "True",
      rating: "3",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1nwXwZoUr2pD36VOdGHYG9dVw84DwIJAnHg&s",
      title: "product3",
      price: "€ 1560",
      reviews: "True",
      rating: "4",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1nwXwZoUr2pD36VOdGHYG9dVw84DwIJAnHg&s",
      title: "product3",
      price: "€ 1560",
      reviews: "True",
      rating: "5",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1nwXwZoUr2pD36VOdGHYG9dVw84DwIJAnHg&s",
      title: "product3",
      price: "€ 1560",
      reviews: "True",
      rating: "3",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1nwXwZoUr2pD36VOdGHYG9dVw84DwIJAnHg&s",
      title: "product3",
      price: "€ 1560",
      reviews: "True",
      rating: "4",
    },
  ];

  const [cartCount, setCartCount] = useState(0);

  return (
    <div>
      <ChakraProvider>
        <Nav basket={cartCount} />

        <TabBar />

        <Card
          data={dataObj}
          cartCount={cartCount}
          setCartCount={setCartCount}
        />
      </ChakraProvider>
    </div>
  );
};

export default App;
