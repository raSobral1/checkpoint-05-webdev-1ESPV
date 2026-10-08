import CartaoAgente from "./CartaoAgente";

export default function QuantumListBridge({ agentes }) {
    return (
        <div>
            {agentes.map((agente) => (
                <CartaoAgente
                    key={agente.uuid}
                    agente={agente}
                />
            ))}
        </div>
    );
}