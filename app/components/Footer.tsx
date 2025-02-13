import { Facebook, Instagram, Twitter } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-food-text text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-display font-bold mb-4">La Santa Barbara</h3>
            <p className="mb-2">Disfruta de la mejor comida en Manicaragua</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Contacto</h4>
            <p className="mb-2">Dirección: Manuel Fajardo # 1, Manicaragua</p>
            <p className="mb-2">Teléfono: +53 59639321</p>
            <p>Email: info@elbuensabor.com</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Síguenos</h4>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" className="hover:text-food-primary transition-colors">
                <Facebook size={24} />
              </Link>
              <Link href="https://instagram.com" className="hover:text-food-primary transition-colors">
                <Instagram size={24} />
              </Link>
              <Link href="https://twitter.com" className="hover:text-food-primary transition-colors">
                <Twitter size={24} />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; {new Date().getFullYear()} La Santa Barbara. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

