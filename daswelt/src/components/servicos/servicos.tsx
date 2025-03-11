export function Servicos() {
    const servicos = [
        {
            icone: "🌍",
            titulo: "Intermediação de Negócios",
            descricao: "Conectamos empresas a oportunidades globais com segurança e eficiência.",
        },
        {
            icone: "📑",
            titulo: "Licitações",
            descricao: "Maximize suas chances de sucesso em licitações públicas e privadas.",
        },
        {
            icone: "📈",
            titulo: "Consultorias",
            descricao: "Ajudamos sua empresa a crescer e explorar novos mercados.",
        },
    ];

    return (
        <div id="servicos" className="w-full py-20 bg-white">
            <div className="w-[90%] max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center text-gray-900 mb-10">
                    Nossos Serviços
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {servicos.map((servico, index) => (
                        <div key={index} className="p-6 bg-gray-50 rounded-lg shadow-md text-center">
                            <span className="text-4xl">{servico.icone}</span>
                            <h3 className="text-2xl font-semibold text-gray-900 mt-4">
                                {servico.titulo}
                            </h3>
                            <p className="text-gray-600 mt-2">{servico.descricao}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}