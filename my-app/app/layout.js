export const metadata = {
    title: "Agentes do Valorant",
    description: "Projeto de consumo de API com Next.js",
};

export default function RootLayout({ children }) {
    return (
        <html lang="pt-BR">
            <body>{children}</body>
        </html>
    );
}