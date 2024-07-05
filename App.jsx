import { useState } from "react";
import "./App.css";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Home_item from "./Component/Home_item";

function App() {
  const item = {
    id: "001",
    image: "images/1.jpg",
    company: "Carlton London",
    item_name: "Rhodium-Plated CZ Floral Studs",
    original_price: 1045,
    current_price: 606,
    discount_percentage: 42,
    return_period: 14,
    delivery_date: "10 Oct 2023",
    rating: {
      stars: 4.5,
      count: 1400,
    },
  };

  return (
    <>
      <Header />
      <main>
        <div className="items-container"></div>
        <Home_item item={item} />
      </main>
      <Footer />
    </>
  );
}

export default App;
