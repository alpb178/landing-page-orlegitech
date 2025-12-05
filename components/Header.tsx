"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isInSection2, setIsInSection2] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const servicesSection = document.getElementById("services");
    if (!servicesSection) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInSection2(true);
          } else {
            const rect = entry.boundingClientRect;
            if (rect.top > window.innerHeight) {
              setIsInSection2(false);
            }
          }
        });
      },
      {
        threshold: 0.1, // Se activa cuando el 10% de la sección es visible
        rootMargin: "-100px 0px 0px 0px", // Offset para activar antes de llegar
      }
    );

    observer.observe(servicesSection);

    return () => {
      observer.disconnect();
    };
  }, []);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  const navLinks = [
    { href: "#about-us", label: "Sobre nosotros" },
    { href: "#services", label: "Servicios" },
    { href: "#pricing", label: "Precios" },
    { href: "#contact-us", label: "Contáctanos" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isInSection2
            ? "bg-white/80 backdrop-blur-sm text-gray-800 shadow-md"
            : isScrolled
            ? "bg-white text-gray-800 shadow-md"
            : "bg-transparent text-white"
        }`}
      >
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
              isInSection2 || isScrolled
                ? "bg-gray-200"
                : "bg-gray-200/90 backdrop-blur-sm"
            }`}
            href="#home"
          >
            <Image
              src="/icons.svg"
              alt="orlegitech logo"
              width={24}
              height={24}
              className="w-6 h-6"
            />
            <span className="text-[#1a4d3a] text-lg font-semibold">
              Orlegitech
            </span>
          </Link>

          {/* Desktop Navigation - Dark green rounded bar */}
          <div className="hidden md:block bg-[#1a4d3a] px-6 py-2 rounded-lg">
            <ul className="flex gap-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`transition text-lg ${
                      isScrolled
                        ? "text-white hover:text-green-300"
                        : "text-white hover:text-green-300"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleDrawer}
            className="md:hidden bg-[#1a4d3a] p-2 rounded-lg text-white hover:bg-[#2d6b52] transition-colors"
            aria-label="Toggle menu"
          >
            {isDrawerOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </nav>
      </header>

      {/* Mobile Drawer Overlay */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={closeDrawer}
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-[#1a4d3a] z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Drawer Header */}
          <div className="flex items-center justify-between p-4 border-b border-green-700">
            <div className="flex items-center gap-2">
              <Image
                src="/icons.svg"
                alt="orlegitech logo"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <span className="text-white text-lg font-semibold">
                Orlegitech
              </span>
            </div>
            <button
              onClick={closeDrawer}
              className="p-2 text-white hover:bg-green-700 rounded-lg transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Drawer Navigation Links */}
          <nav className="flex-1 p-4">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={closeDrawer}
                    className="block text-white text-lg py-3 px-4 rounded-lg hover:bg-green-700 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
