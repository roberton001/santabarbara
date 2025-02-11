"use client"

import { useState } from "react"
import Header from "./components/Header"
import NavBar from "./components/NavBar"
import MenuItem from "./components/MenuItem"

const categories = ["Completas", "Bebidas", "Menú", "Postres"]

const menuItems = [
  { id: 1, name: "Hamburguesa Clásica", price: 10.99, image: "/hamburguesa.jpg", category: "Completas" },
  { id: 2, name: "Refresco de Cola", price: 2.5, image: "/refresco.jpg", category: "Bebidas" },
  { id: 3, name: "Menú del Día", price: 15.99, image: "/menu-dia.jpg", category: "Menú" },
  { id: 4, name: "Tarta de Chocolate", price: 5.99, image: "/tarta.jpg", category: "Postres" },
  // Agrega más elementos según sea necesario
]

export default function Home() {
  const [activeCategory, setActiveCategory] = useState(categories[0])

  const filteredItems = menuItems.filter((item) => item.category === activeCategory)

  return (
    <div className="min-h-screen bg-food-background">
      <Header />
      <NavBar categories={categories} activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
      <main className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <MenuItem key={item.id} name={item.name} price={item.price} image={item.image} />
          ))}
        </div>
      </main>
    </div>
  )
}

