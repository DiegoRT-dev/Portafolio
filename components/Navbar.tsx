"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () =>{
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 transition-all ${scrolled ? "bg-primary shadow-lg border-b border-white/10" : "bg-transparent"}`}>
      <div className="max-w-6xl mx-auto py-4 px-6 flex justify-end gap-8 text-sm font-medium">
        <a href="#inicio" className="hover:text-blue-400 transition">
          Inicio
        </a>
        <a href="#proyectos" className="hover:text-blue-400 transition">
          Proyectos
        </a>
        <a href="#tecnologias" className="hover:text-blue-400 transition">
          Tecnologias
        </a>
        <a href="#sobre" className="hover:text-blue-400 transition">
          Sobre mi
        </a>
        <a href="#contacto" className="hover:text-blue-400 transition">
          Contacto
        </a>
      </div>
    </nav>
  );
}
