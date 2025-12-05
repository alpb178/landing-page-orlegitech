import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#1a4d3a] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col  justify-center items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full flex items-center justify-center">
              <Image
                src="/icons.svg"
                alt="orlegitech logo"
                width={32}
                height={32}
              />
            </div>
            <span className="text-xl font-semibold">Orlegitech</span>
          </div>
          <p className="text-sm text-green-200 text-center">
            Copyright © 2025 Orlegitech. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
