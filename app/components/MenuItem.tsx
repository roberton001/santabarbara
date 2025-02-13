import Image from "next/image"

interface MenuItemProps {
  name: string
  price: number
  image: string
}

export default function MenuItem({ name, price, image }: MenuItemProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2 w-full max-w-sm">
      <div className="relative h-[250px]">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
          <h3 className="text-xl font-semibold text-white font-display">{name}</h3>
        </div>
      </div>
      <div className="p-4 flex justify-between items-center">
        <p className="text-food-primary font-bold text-xl">${price.toFixed(2)}</p>
        <button className="bg-food-secondary text-white px-4 py-2 rounded-full hover:bg-food-primary transition-colors duration-300">
          Ordenar
        </button>
      </div>
    </div>
  )
}

