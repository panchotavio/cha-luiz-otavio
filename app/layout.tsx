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


        <footer className="bg-[#0b1f3a] text-white text-center py-5">

          <p className="text-sm">
            Site feito com ❤️ pelo papai Otávio
          </p>


        </footer>


      </body>
    </html>
  );
}