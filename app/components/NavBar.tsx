interface NavBarProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function NavBar({ categories, activeCategory, onCategoryChange }: NavBarProps) {
  return (
    <nav className="bg-food-secondary p-4">
      <ul className="flex justify-center">
        {categories.map((category) => (
          <li key={category} className="flex-1 mx-1">
            <button
              className={`w-full px-4 py-2 rounded-md transition-all duration-300 ${
                activeCategory === category
                  ? "bg-food-primary text-white shadow-lg"
                  : "bg-food-accent text-food-text hover:bg-food-primary hover:text-white"
              }`}
              onClick={() => onCategoryChange(category)}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}