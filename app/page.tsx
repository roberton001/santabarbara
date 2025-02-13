"use client";

import { useState } from "react";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import MenuItem from "./components/MenuItem";
import menuData from "../data/products.json";
import { MenuData } from "../types";
import Footer from "./components/Footer";

export default function Home() {
  const { categories, menuItems } = menuData as MenuData;
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const filteredItems = menuItems.filter(
    (item) => item.category === activeCategory
  );

  return (
    <div className="min-h-screen bg-food-background font-body flex flex-col">
    <Header />
    <NavBar categories={categories} activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
    <main className="container mx-auto py-8 px-4 flex-grow">
      <h2 className="text-2xl md:text-3xl font-display font-bold text-food-text mb-6 md:mb-8 text-center">
        {activeCategory}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-items-center">
        {filteredItems.map((item) => (
          <MenuItem key={item.id} name={item.name} price={item.price} image={item.image} />
        ))}
      </div>
    </main>
    <Footer />
  </div>
  );
}

//{ "id": 2, "name": "Refresco de Cola", "price": 2.5, "image": "/images/20210915_123440.jpg", "category": "Bebidas" },
