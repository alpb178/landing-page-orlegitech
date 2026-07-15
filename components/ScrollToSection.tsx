"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const HEADER_OFFSET = 100;
const HOME_SCROLL_DELAY_MS = 100;
const SECTION_SCROLL_DELAY_MS = 300;
const HASH_CLEANUP_DELAY_MS = 500;

export const ScrollToSection = (): null => {
  const pathname = usePathname();

  useEffect(() => {
    // Función para hacer scroll a la sección
    const scrollToHash = () => {
      const hash = window.location.hash;

      if (hash) {
        // Si el hash es #home, ir al top absoluto
        if (hash === "#home") {
          const timer = setTimeout(() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            // Limpiar el hash de la URL para no interferir con el scroll manual
            history.replaceState(null, "", window.location.pathname);
          }, HOME_SCROLL_DELAY_MS);
          return timer;
        }

        // Esperar a que el DOM esté completamente renderizado
        const timer = setTimeout(() => {
          const element = document.querySelector(hash);
          if (element) {
            // Calcular el offset del header fijo (ajustar según la altura de tu header)
            const headerOffset = HEADER_OFFSET;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            });

            // Limpiar el hash de la URL para no interferir con el scroll manual
            setTimeout(() => {
              history.replaceState(null, "", window.location.pathname);
            }, HASH_CLEANUP_DELAY_MS);
          }
        }, SECTION_SCROLL_DELAY_MS);

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
