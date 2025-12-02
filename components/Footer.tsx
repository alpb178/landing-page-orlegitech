import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1a4d3a] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col gap-4">
            <Link href="#home" className="hover:text-green-300 transition">
              Inicio
            </Link>
            <Link href="#about-us" className="hover:text-green-300 transition">
              Sobre nosotros
            </Link>
            <Link href="#services" className="hover:text-green-300 transition">
              Servicios
            </Link>
            <Link href="#pricing" className="hover:text-green-300 transition">
              Precios
            </Link>
            <Link
              href="#contact-us"
              className="hover:text-green-300 transition"
            >
              Contactános
            </Link>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full flex items-center justify-center">
                <Image
                  src="/icons.svg"
                  alt="orlegitech logo"
                  width={32}
                  height={32}
                />
              </div>
              <span className="text-xl font-semibold">orlegitech</span>
            </div>
            <p className="text-sm text-green-200 text-center">
              Copyright © 2025 Orlegitech. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
