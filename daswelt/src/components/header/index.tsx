'use client'
import { motion, AnimatePresence} from "framer-motion"
import Link from "next/link";
import { useState } from "react";

// Subcomponente para os links de navegação
function NavLinks({ mobile = false }) {
    return (
        <ul className={`${mobile ? "flex flex-col items-center gap-4" : "flex items-center gap-8"}`}>
            <li>
                <Link className="hover:text-gray-300 transition-colors duration-200" href="#">
                    Início
                </Link>
            </li>
            <li>
                <Link className="hover:text-gray-300 transition-colors duration-200" href="#">
                    Serviços
                </Link>
            </li>
            <li>
                <Link className="hover:text-gray-300 transition-colors duration-200" href="#">
                    Sobre Nós
                </Link>
            </li>
            <li>
                <Link className="hover:text-gray-300 transition-colors duration-200" href="#">
                    Contato
                </Link>
            </li>
        </ul>
    );
}

// Subcomponente para o botão de CTA
function CTAButton() {
    return (
        <Link
            href="#"
            className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200"
        >
            Login
        </Link>
    );
}

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-blue-600 shadow-lg">
            <nav className="flex justify-between items-center w-[92%] mx-auto py-4">
                {/* Logo */}
                <div className="flex items-center gap-4">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="bi bi-airplane w-12 md:w-16 text-white"
                        viewBox="0 0 16 16"
                    >
                        <path d="M6.428 1.151C6.708.591 7.213 0 8 0s1.292.592 1.572 1.151C9.861 1.73 10 2.431 10 3v3.691l5.17 2.585a1.5 1.5 0 0 1 .83 1.342V12a.5.5 0 0 1-.582.493l-5.507-.918-.375 2.253 1.318 1.318A.5.5 0 0 1 10.5 16h-5a.5.5 0 0 1-.354-.854l1.319-1.318-.376-2.253-5.507.918A.5.5 0 0 1 0 12v-1.382a1.5 1.5 0 0 1 .83-1.342L6 6.691V3c0-.568.14-1.271.428-1.849m.894.448C7.111 2.02 7 2.569 7 3v4a.5.5 0 0 1-.276.447l-5.448 2.724a.5.5 0 0 0-.276.447v.792l5.418-.903a.5.5 0 0 1 .575.41l.5 3a.5.5 0 0 1-.14.437L6.708 15h2.586l-.647-.646a.5.5 0 0 1-.14-.436l.5-3a.5.5 0 0 1 .576-.411L15 11.41v-.792a.5.5 0 0 0-.276-.447L9.276 7.447A.5.5 0 0 1 9 7V3c0-.432-.11-.979-.322-1.401C8.458 1.159 8.213 1 8 1s-.458.158-.678.599" />
                    </svg>
                    <span className="text-white text-xl font-bold">Das Welt</span>
                </div>

                {/* Links de Navegação (Desktop) */}
                <div className="hidden md:flex items-center gap-8">
                    <NavLinks />
                    <CTAButton />
                </div>

                {/* Botão de Menu Para Mobile */}
                <button
                    className="text-white focus:outline-none md:hidden"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
                    aria-expanded={isMenuOpen}
                >
                    {isMenuOpen ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    )}
                </button>
            </nav>

            {/* Menu Mobile */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="md:hidden bg-blue-600"
                    >
                        <div className="flex flex-col items-center gap-4 py-4">
                            <NavLinks mobile />
                            <CTAButton />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}