import Image from "next/image"

interface MenuItemProps {
  name: string
  price: number
  image: string
}

export default function MenuItem({ name, price, image }: MenuItemProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
      <Image
        src={image || "/placeholder.svg"}
        alt={name}
        width={300}
        height={200}
        className="w-full h-[300px] object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-food-text">{name}</h3>
        <p className="text-food-primary font-bold mt-2">${price.toFixed(2)}</p>
      </div>
    </div>
  )
}

