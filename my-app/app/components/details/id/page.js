"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import BarraNavegacao from "../../../components/BarraNavegacao";
import Carregando from "../../../components/Carregando";
import CartaoDeralhes from "../../../components/CartaoDetalhes";

export default function Detalhes() {
    const parametros = useParams();
    const id = parametros.id;

    const [agente, setAgente] = useState(null);

    const [carregando, setCarregando] = useState(true);

    const [erro, setErro] = useState("");

    useEffect(() => {
        async function carregarAgente() {
            try {
                const resposta = await axios.get(
                    `https://valorant-api.com/v1/agents/${id}?language=pt-BR`
                );

                setAgente(resposta.data.data);
            } catch (erro) {
                console.log(erro);
                setErro("Erro ao carregar o agente.");
            } finally {
                setCarregando(false);
            }
        }

        if (id) {
            carregarAgente();
        }
    }, [id]);

    return (
        <main>
            <BarraNavegacao />

            {carregando && <Carregando />}

            {erro && <p>{erro}</p>}

            {agente && <CartaoDeralhes agente={agente} />}
        </main>
    );
}