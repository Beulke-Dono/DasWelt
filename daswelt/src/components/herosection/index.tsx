import Link from "next/link";
import Image from "next/image";

// Subcomponente para o botão de CTA
function CTAButton() {
    return (
        <Link
            href="#formulario"
            className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-lg"
        >
            Solicite uma Consultoria
        </Link>
    );
}

export function Hero() {
    return (
        <div id="inicio" className="w-full min-h-screen flex items-center justify-center bg-gray-50">
            <div className="w-[90%] max-w-6xl flex flex-col md:flex-row items-center gap-10">
                {/* Texto e CTA */}
                <div className="flex-1 space-y-6 text-center md:text-left">
                    <div className="space-y-4">
                        <span className="text-4xl md:text-6xl font-bold text-gray-900">
                            Facilitando Seu <span className="text-amber-500">Negócio!</span>
                        </span>
                        <p className="pt-3 text-lg md:text-xl text-gray-600">
                            Conectamos empresas a oportunidades com intermediação de negócios e consultorias especializadas.
                        </p>
                    </div>
                    <hr className="border-t-2 border-gray-200" />
                    <p className="text-base md:text-lg text-gray-600">
                        Na Das Welt, oferecemos soluções para importação, exportação e licitações, garantindo eficiência e segurança em cada etapa.
                    </p>
                    <div className="flex justify-center md:justify-start">
                        <CTAButton />
                    </div>
                </div>

                {/* Imagem */}
                <div className="flex-1 hidden md:flex justify-center mt-8 md:mt-0">
                    <div className="relative w-full h-64 md:h-[500px]">
                        <Image
                            src="/images/shaking.jpg"
                            alt="Aperto de mãos simbolizando negócios"
                            fill
                            style={{ objectFit: "cover" }}
                            className="rounded-lg shadow-2xl"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}