import React, { useState } from "react";
import HeadingSection from "./headingSection";
import ProductCatalog from "./productCatalog";
import SortFilter from "./sortFilter";

import tiktok from "../assets/media/tiktok.png";
import textmessage from "../assets/media/textmessage.png";
import contentmarketing from "../assets/media/content-marketing.png";
import digitalpr from "../assets/media/digital-pr.png";
import emailmarketing from "../assets/media/email-marketing.png";
import growthmarketing from "../assets/media/growth-marketing.png";

const HomePage = () => {
  const initialProducts = [
    {
      id: 1,
      image: tiktok,
      name: "Create a TikTok marketing strategy",
      price: 1200,
    },
    {
      id: 2,
      image: textmessage,
      name: "Send text message campaigns",
      price: 1000,
    },
    {
      id: 3,
      image: contentmarketing,
      name: "Start a content marketing program",
      price: 3100,
    },
    { id: 4, image: digitalpr, name: "Digital PR", price: 3500 },
    { id: 5, image: emailmarketing, name: "Email marketing", price: 300 },
    { id: 6, image: growthmarketing, name: "Growth marketing", price: 5000 },
  ];

  const [products, setProducts] = useState(initialProducts);
  const [filteredProducts, setFilteredProducts] = useState(initialProducts);

  const handleSort = (event) => {
    const value = event.target.value;
    let sortedProducts = [...filteredProducts];
    if (value === "price-asc") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (value === "price-desc") {
      sortedProducts.sort((a, b) => b.price - a.price);
    } else if (value === "name-asc") {
      sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
    } else if (value === "name-desc") {
      sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
    }
    setFilteredProducts(sortedProducts);
  };

  const handleFilter = (event) => {
    const value = event.target.value.toLowerCase();
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(value)
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className="app">
      <HeadingSection />
      <SortFilter onSort={handleSort} onFilter={handleFilter} />
      <ProductCatalog products={filteredProducts} />
    </div>
  );
};

export default HomePage;
