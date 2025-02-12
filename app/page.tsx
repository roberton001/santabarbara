"use client";

import { useState } from "react";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import MenuItem from "./components/MenuItem";
import menuData from "../data/products.json";
import { MenuData } from "../types"; // Importa el tipo

export default function Home() {
  const { categories, menuItems } = menuData as MenuData; // Especifica el tipo
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const filteredItems = menuItems.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-food-background">
      <Header />
      <NavBar
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      <main className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <MenuItem
              key={item.id}
              name={item.name}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

//{ "id": 2, "name": "Refresco de Cola", "price": 2.5, "image": "/images/20210915_123440.jpg", "category": "Bebidas" },