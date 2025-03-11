'use client';
import { useState, FormEvent } from "react";

export function Formulario() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [mensagem, setMensagem] = useState("");
    const [enviado, setEnviado] = useState(false);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

    const response = await fetch("/api/contato/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ nome, email, mensagem }),
    });

    if (response.ok) {
        setNome("");
        setEmail("");
        setMensagem("");
        setEnviado(true);
        setTimeout(() => setEnviado(false), 3000);
    } else {
        alert("Erro ao enviar a mensagem. Tente novamente.");
    }
};

    return (
        <div id="formulario" className="w-full py-20 bg-gradient-to-r from-blue-600 to-blue-400">
            <div className="w-[90%] max-w-4xl mx-auto bg-white rounded-lg shadow-2xl p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                    Entre em Contato
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Campo Nome */}
                    <div>
                        <label htmlFor="nome" className="block text-sm font-medium text-gray-700">
                            Nome
                        </label>
                        <input
                            type="text"
                            id="nome"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>

                    {/* Campo E-mail */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            E-mail
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>

                    {/* Campo Mensagem */}
                    <div>
                        <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700">
                            Mensagem
                        </label>
                        <textarea
                            id="mensagem"
                            value={mensagem}
                            onChange={(e) => setMensagem(e.target.value)}
                            rows={4}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>

                    {/* Botão de Envio */}
                    <div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
                        >
                            Enviar Mensagem
                        </button>
                    </div>

                    {/* Mensagem de Sucesso */}
                    {enviado && (
                        <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg text-center">
                            Mensagem enviada com sucesso!
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
}