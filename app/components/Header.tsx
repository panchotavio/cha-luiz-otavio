import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#0b1f3a] text-white shadow-md">

      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-center">

        <nav className="flex flex-wrap justify-center gap-2">

          <Link
            href="/"
            className="px-3 py-2 rounded-full border border-white/30 hover:bg-white hover:text-[#0b1f3a] transition text-sm"
          >
            Início
          </Link>


          <Link
            href="/sobre-o-luiz"
            className="px-4 py-2 rounded-full border border-white/30 hover:bg-white hover:text-[#0b1f3a] transition text-sm"
          >
            Sobre o Luiz
          </Link>


          <Link
            href="/sugestoes-presentes"
            className="px-4 py-2 rounded-full border border-white/30 hover:bg-white hover:text-[#0b1f3a] transition text-sm"
          >
            Sugestão de Presentes
          </Link>


          <Link
            href="/deixe-uma-mensagem"
            className="px-4 py-2 rounded-full border border-white/30 hover:bg-white hover:text-[#0b1f3a] transition text-sm"
          >
            Deixe uma Mensagem
          </Link>


        </nav>

      </div>

    </header>
  );
}