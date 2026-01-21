"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToSection() {
  const pathname = usePathname();

  useEffect(() => {
    // Función para hacer scroll a la sección
    const scrollToHash = () => {
      const hash = window.location.hash;
      
      if (hash) {
        // Esperar a que el DOM esté completamente renderizado
        const timer = setTimeout(() => {
          const element = document.querySelector(hash);
          if (element) {
            // Calcular el offset del header fijo (ajustar según la altura de tu header)
            const headerOffset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            });
          }
        }, 300); // Delay para asegurar que el contenido esté renderizado

        return timer;
      }
      return null;
    };

    // Ejecutar cuando cambia el pathname
    let timer = scrollToHash();

    // También escuchar cambios en el hash (navegación dentro de la misma página)
    const handleHashChange = () => {
      if (timer) clearTimeout(timer);
      timer = scrollToHash();
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      if (timer) clearTimeout(timer);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [pathname]);

  return null;
}
