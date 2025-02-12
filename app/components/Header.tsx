import Image from "next/image"

export default function Header() {
  return (
    <header className="relative h-64 w-full">
      <Image
        src="/images/portada.jpg"
        alt="Fondo del restaurante"
        layout="fill"
        objectFit="cover"
        className="absolute"
      />
      <div className="absolute inset-0 bg-food-primary bg-opacity-30 flex items-center justify-center">
        <h1 className="text-4xl md:text-8xl font-bold text-white text-center drop-shadow-lg">La Santa Barbara</h1>
      </div>
    </header>
  )
}

