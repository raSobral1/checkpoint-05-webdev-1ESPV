import Link from "next/link";

export default function CartaoAgente({ agente }) {
    return (
        <div>
            <h2>{agente.displayName}</h2>

            <img
                src={agente.displayIcon}
                alt={agente.displayName}
                width="150"
            />

            <br />

            <Link href={`/details/${agente.uuid}`}>
                Ver detalhes
            </Link>
        </div>
    );
}