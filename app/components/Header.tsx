import Image from "next/image"

export default function Header() {
  return (
    <header className="relative h-64 w-full">
      <Image
        src="/restaurant-background.jpg"
        alt="Fondo del restaurante"
        layout="fill"
        objectFit="cover"
        className="absolute"
      />
      <div className="absolute inset-0 bg-food-primary bg-opacity-70 flex items-center justify-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white text-center drop-shadow-lg">Sanra Barbara</h1>
      </div>
    </header>
  )
}

