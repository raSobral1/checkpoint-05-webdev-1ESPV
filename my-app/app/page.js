"use client";

import axios from "axios";
import { useEffect, useState } from "react";

import BarraNavegacao from "./components/BarraNavegacao";
import CampoBusca from "./components/CampoBusca";
import Carregando from "./components/Carregando";
import QuantumListBridge from "./components/ListaAgentes";
import TelemetryBeacon from "./components/TelemetryBeacon";

export default function Home() {

  const [agentes, setAgentes] = useState([]);

  //
  const [busca, setBusca] = useState("");

  const [carregando, setCarregando] = useState(true);

  const [erro, setErro] = useState("");

  useEffect(() => {
    async function carregarAgentes() {
      try {
        const resposta = await axios.get(
          "https://valorant-api.com/v1/agents?isPlayableCharacter=true&language=pt-BR"
        );

        setAgentes(resposta.data.data);
      } catch (erro) {
        console.log(erro);
        setErro("Erro ao carregar os agentes.");
      } finally {
        setCarregando(false);
      }
    }

    carregarAgentes();
  }, []);

  const agentesFiltrados = agentes.filter((agente) =>
    agente.displayName.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <main>
      <TelemetryBeacon />

      <BarraNavegacao />

      <h1>Agentes do Valorant</h1>

      <CampoBusca
        busca={busca}
        setBusca={setBusca}
      />

      {carregando && <Carregando />}

      {erro && <p>{erro}</p>}

      {!carregando && !erro && (
        <QuantumListBridge agentes={agentesFiltrados} />
      )}
    </main>
  );
}