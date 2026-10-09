export default function CampoBusca({ busca, setBusca }) {
    return (
        <div>
            <label>Buscar agente: </label>

            <input
                type="text"
                value={busca}
                onChange={(evento) => setBusca(evento.target.value)}
                placeholder="Digite o nome exato"
            />
        </div>
    );
}