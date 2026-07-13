import "./globals.css";

export const metadata = {
  title: "Chá de Bebê - Luiz Otávio",
  description: "Site do chá de bebê do Luiz Otávio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}