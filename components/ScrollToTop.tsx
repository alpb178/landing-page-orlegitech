"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export const ScrollToTop = (): null => {
  const pathname = usePathname();

  useEffect(() => {
    // Solo hacer scroll al top si no hay un hash en la URL
    // Si hay hash, ScrollToSection se encargará del scroll
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}
