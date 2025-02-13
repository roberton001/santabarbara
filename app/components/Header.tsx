import Image from "next/image"

export default function Header() {
  return (
    <header className="relative h-96 w-full overflow-hidden">
      <Image
        src="/images/portada.jpg"
        alt="Fondo del restaurante"
        layout="fill"
        objectFit="cover"
        className="absolute transform scale-110 animate-pulse-slow"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-food-primary/70 to-food-secondary/70 flex items-center justify-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white text-center drop-shadow-lg font-display tracking-wide">
          La Santa Barbara
        </h1>
      </div>
    </header>
  )
}

