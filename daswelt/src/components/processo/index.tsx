export function Processo() {
    return (
        <div id="processo" className="w-full py-20 bg-gray-50">
            <div className="w-[90%] max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center text-gray-900 mb-10">
                    Nosso Processo
                </h2>
                <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
                    {/* Passo 1 */}
                    <div className="flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                            1
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mt-4">Análise de Mercado</h3>
                        <p className="text-gray-600 mt-2">
                            Identificamos as melhores oportunidades para o seu negócio.
                        </p>
                    </div>

                    {/* Seta (md:visible md:flex) */}
                    <div className="hidden md:flex items-center justify-center">
                        <span className="text-4xl text-gray-400">→</span>
                    </div>

                    {/* Passo 2 */}
                    <div className="flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                            2
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mt-4">Estratégia Personalizada</h3>
                        <p className="text-gray-600 mt-2">
                            Desenvolvemos um plano de ação sob medida para suas necessidades.
                        </p>
                    </div>

                    {/* Seta (md:visible md:flex) */}
                    <div className="hidden md:flex items-center justify-center">
                        <span className="text-4xl text-gray-400">→</span>
                    </div>

                    {/* Passo 3 */}
                    <div className="flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                            3
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mt-4">Execução</h3>
                        <p className="text-gray-600 mt-2">
                            Cuidamos de toda a logística, documentação e negociação.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}