import "./globals.css";
import Script from "next/script";

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



        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-D3M4B75DLM"
        />


        <Script
          id="google-analytics"
          strategy="afterInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-D3M4B75DLM');
          `}
        </Script>


      </body>
    </html>
  );
}