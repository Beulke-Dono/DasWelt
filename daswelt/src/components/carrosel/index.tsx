'use client';
import Link from "next/link";
import { useState, useEffect } from "react";

export function Carrossel() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            image: "/images/concept.jpg",
            title: "Intermediação de Negócios",
            description: "Conectamos empresas a novas oportunidades.",
        },
        {
            image: "/images/production.jpg",
            title: "Licitações",
            description: "Maximize suas chances de sucesso em licitações públicas e privadas.",
        },
        {
            image: "/images/consulting.jpg",
            title: "Consultoria de Negócios",
            description: "Aumentamos .",
        },
    ];

    // Função para ir para o próximo slide
    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    // Função para voltar ao slide anterior
    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    // Configura o autoplay com setInterval
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);

        return() => clearInterval(interval);
    }, [currentSlide]);

    return (
        <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
            {/* Slides */}
            <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className="w-full flex-shrink-0 relative h-[400px] md:h-[500px] bg-cover bg-center"
                        style={{ backgroundImage: `url(${slide.image})`}}
                    >
                        <div className="absolute inset-0 bg-opacity-50 flex items-center justify-center">
                            <div className="bg-white/10 backdrop-blur-md p-8 rounded-lg border border-white/10 text-center">
                                <h2 className="text-2xl md:text-5xl font-bold">{slide.title}</h2>
                                <p className="mt-4 text-lg pb-6 md:text-xl">{slide.description}</p>
                                <Link href={"#formulario"} className="mt-8 bg-blue-600 text-white px-6 py-2 rounded-full font-semibold">
                                    Saiba Mais
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Botões de Navegação */}
            <button
                className="absolute top-1/2 left-4 transform 
                -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-gray-200 transition-colors duration-200"
                onClick={prevSlide}
            >
                &lt;
            </button>
            <button
                className="absolute top-1/2 right-4 transform 
                -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-gray-200 transition-colors duration-200"
                onClick={nextSlide}
            >
                &gt;
            </button>

            {/* Indicadores de Slide */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`w-3 h-3 rounded-full ${currentSlide === index ? "bg-blue-600" : "bg-white"}`}
                        onClick={() => setCurrentSlide(index)}
                    />
                ))}
            </div>
        </div>
    );
}