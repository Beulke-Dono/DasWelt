import Link from "next/link";
import { FaLinkedin, FaInstagram, FaFacebook, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Sobre Nós */}
                    <section className="text-center md:text-left">
                        <h3 className="font-bold text-lg mb-4">Sobre Nós</h3>
                        <p className="text-sm text-gray-300">
                            Somos especialistas em intermediação de negócios, licitações e consultorias, com mais de 10 anos de experiência no mercado.
                        </p>
                    </section>

                    {/* Links Rápidos */}
                    <section className="text-center md:text-left">
                        <h3 className="font-bold text-lg mb-4">Links Rápidos</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="#inicio" className="text-sm text-gray-300 hover:text-blue-500 transition-colors">
                                    Sobre Nós
                                </Link>
                            </li>
                            <li>
                                <Link href="#servicos" className="text-sm text-gray-300 hover:text-blue-500 transition-colors">
                                    Serviços
                                </Link>
                            </li>
                            <li>
                                <Link href="#processo" className="text-sm text-gray-300 hover:text-blue-500 transition-colors">
                                    Nosso Processo
                                </Link>
                            </li>
                        </ul>
                    </section>

                    {/* Contato */}
                    <section id="contato" className="text-center md:text-left">
                        <h3 className="font-bold text-lg mb-4">Contato</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center justify-center md:justify-start space-x-2">
                                <FaEnvelope className="text-blue-500" />
                                <span className="text-sm text-gray-300">contato@suempresa.com</span>
                            </li>
                            <li className="flex items-center justify-center md:justify-start space-x-2">
                                <FaPhone className="text-blue-500" />
                                <span className="text-sm text-gray-300">(XX) XXXX-XXXX</span>
                            </li>
                        </ul>
                    </section>

                    {/* Redes Sociais */}
                    <section className="text-center md:text-left">
                        <h3 className="font-bold text-lg mb-4">Redes Sociais</h3>
                        <div className="flex space-x-4 justify-center md:justify-start">
                            <a href="#" className="text-gray-300 hover:text-blue-500 transition-colors">
                                <FaLinkedin size={24} />
                            </a>
                            <a href="#" className="text-gray-300 hover:text-blue-500 transition-colors">
                                <FaInstagram size={24} />
                            </a>
                            <a href="#" className="text-gray-300 hover:text-blue-500 transition-colors">
                                <FaFacebook size={24} />
                            </a>
                        </div>
                    </section>
                </div>

                {/* Divisor */}
                <hr className="my-8 border-gray-700" />

                {/* Direitos Autorais */}
                <div className="text-center text-sm text-gray-400">
                    © {new Date().getFullYear()} Das Welt. Todos os direitos reservados.
                </div>
            </div>
        </footer>
    );
}