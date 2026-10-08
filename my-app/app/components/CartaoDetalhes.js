export default function CartaoDeralhes({ agente }) {
    return (
        <div>
            <h1>{agente.displayName}</h1>

            <img
                src={agente.fullPortrait}
                alt={agente.displayName}
                width="300"
            />

            <p>{agente.description}</p>

            {agente.role && (
                <div>
                    <h2>Função</h2>
                    <p>{agente.role.displayName}</p>
                    <p>{agente.role.description}</p>
                </div>
            )}
        </div>
    );
}