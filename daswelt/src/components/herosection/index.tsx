import Link from "next/link";

// Subcomponente para o botão de CTA
function CTAButton() {
    return (
        <Link
            href="#"
            className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold
             hover:bg-blue-400 transition-colors duration-200"
        >
            Solicite uma Consultoria
        </Link>
    );
}

export function Hero() {
    return (
        <div className="w-[60%]">
            <div className="flex flex-col">
                <span className="text-4xl text-amber-500 font-bold">Facilitando Sua Importação/Exporação!</span>
                <span className="font-bold pb-0.5">Mediação de Negócios e licitações com eficiência e segurança</span>
            </div>
            <hr className="py-0.5" />
            <section className="pb-4">
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem cumque nobis illum rerum, voluptatem necessitatibus. Ad at eaque, nisi perferendis ea dignissimos, rerum nulla, veritatis laboriosam consequatur corrupti sint illum?</span>
            </section>
            <CTAButton/>
        </div>
    )
}