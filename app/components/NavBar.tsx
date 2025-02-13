"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

interface NavBarProps {
  categories: string[]
  activeCategory: string
  onCategoryChange: (category: string) => void
}

export default function NavBar({ categories, activeCategory, onCategoryChange }: NavBarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center md:justify-center py-4 md:py-6">
          <button className="md:hidden text-food-text focus:outline-none" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <ul
            className={`${
              isMenuOpen ? "block" : "hidden"
            } md:flex md:items-center md:w-auto w-full md:space-x-6 space-y-2 md:space-y-0 mt-4 md:mt-0`}
          >
            {categories.map((category) => (
              <li key={category} className="md:inline-block">
                <button
                  className={`w-full px-6 py-2 rounded-full transition-all duration-300 font-semibold text-sm md:text-base ${
                    activeCategory === category
                      ? "bg-food-primary text-white shadow-neon"
                      : "bg-food-background text-food-text hover:bg-food-accent hover:text-white"
                  }`}
                  onClick={() => {
                    onCategoryChange(category)
                    setIsMenuOpen(false)
                  }}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

