"use client";

import Header from "./components/Header";
import { useEffect, useState } from "react";
import { Great_Vibes } from "next/font/google";

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {


  const [tempo, setTempo] = useState({
    dias: 0,
    horas: 0,
    minutos: 0,
    segundos: 0,
  });
const [testeReact, setTesteReact] = useState(false);


  useEffect(() => {

  setTesteReact(true);

  console.log("USE EFFECT RODOU");

  document.title = "FUNCIONOU";

  const dataParto = new Date("2026-09-11T03:00:00Z");



  function atualizarContador() {

    const agora = new Date();

    const diferenca = dataParto.getTime() - agora.getTime();


    if (diferenca <= 0) {

      setTempo({
        dias: 0,
        horas: 0,
        minutos: 0,
        segundos: 0,
      });

      return;

    }


    setTempo({

      dias: Math.floor(
        diferenca / (1000 * 60 * 60 * 24)
      ),

      horas: Math.floor(
        (diferenca / (1000 * 60 * 60)) % 24
      ),

      minutos: Math.floor(
        (diferenca / (1000 * 60)) % 60
      ),

      segundos: Math.floor(
        (diferenca / 1000) % 60
      ),

    });

  }


  atualizarContador();


  const intervalo = setInterval(
    atualizarContador,
    1000
  );


  return () => clearInterval(intervalo);


}, []);






  return (


    <main
  className="min-h-screen bg-[#F7F9FC] text-gray-800 flex flex-col"
  style={{
    backgroundImage: "url('/ancoras-pattern.png')",
    backgroundRepeat: "repeat",
    backgroundSize: "350px",
  }}
>


      {/* DECORAÇÃO DE FUNDO */}

      <div className="absolute top-0 left-0 w-72 h-72 bg-[#0b1f3a]/5 rounded-full blur-3xl -z-0"></div>

      <div className="absolute bottom-40 right-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl -z-0"></div>




      <div className="relative z-10">


      <Header />






      {/* HERO */}


      <section className="w-full">


        <img
          src="/ursoantigo1.png"
          alt="Chá do Luiz Otávio"
          className="w-full h-auto object-cover"
        />


      </section>







{/* FAIXA DE APRESENTAÇÃO */}

<section className="bg-[#0b1f3a] text-white py-10 px-6 text-center shadow-lg">

  <h1 className="text-4xl font-bold text-white">
    Seja bem-vindo(a) 💙
  </h1>

  <p className="mt-3 text-white/90 text-lg">
    Estamos muito felizes em compartilhar este momento tão especial com vocês.
  </p>

  <p className="mt-3 text-white/90 text-lg">
    Criamos este espaço para compartilhar com vocês sobre a chegada do nosso segundo filho.
  </p>

</section>







      {/* CONTAGEM REGRESSIVA */}



      <section
  className="py-14 px-6 bg-[#F7F9FC]"
  style={{
    backgroundImage: "url('/ancoras-pattern-contagem.png')",
    backgroundRepeat: "repeat",
    backgroundSize: "350px",
  }}
>



        <div className="max-w-4xl mx-auto text-center">



          <div className="text-[#0b1f3a] text-2xl mb-5">

            ⚓

          </div>





          <div className="flex items-center justify-center gap-4 mb-8">


            <div className="h-px bg-[#0b1f3a] w-20"></div>



            <h2 className="text-2xl font-bold text-[#0b1f3a]">

              Faltam apenas

            </h2>



            <div className="h-px bg-[#0b1f3a] w-20"></div>



          </div>






          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">



            <div className="border-2 border-[#0b1f3a] bg-white rounded-2xl p-5 shadow-md">

              <strong className="text-4xl text-[#0b1f3a]">

                {tempo.dias}

              </strong>


              <p className="mt-2 text-[#0b1f3a] font-medium">

                Dias

              </p>


            </div>





            <div className="border-2 border-[#0b1f3a] bg-white rounded-2xl p-5 shadow-md">

              <strong className="text-4xl text-[#0b1f3a]">

                {tempo.horas}

              </strong>


              <p className="mt-2 text-[#0b1f3a] font-medium">

                Horas

              </p>


            </div>





            <div className="border-2 border-[#0b1f3a] bg-white rounded-2xl p-5 shadow-md">

              <strong className="text-4xl text-[#0b1f3a]">

                {tempo.minutos}

              </strong>


              <p className="mt-2 text-[#0b1f3a] font-medium">

                Minutos

              </p>


            </div>





            <div className="border-2 border-[#0b1f3a] bg-white rounded-2xl p-5 shadow-md">

              <strong className="text-4xl text-[#0b1f3a]">

                {tempo.segundos}

              </strong>


              <p className="mt-2 text-[#0b1f3a] font-medium">

                Segundos

              </p>


            </div>



          </div>





<div className="mt-8">

  <div className="flex items-center justify-center gap-4 mb-5">

    <div className="h-px bg-[#0b1f3a] w-20"></div>

    <h2 className="text-2xl font-bold text-[#0b1f3a]">
      Para conhecermos o Luiz 💙
    </h2>

    <div className="h-px bg-[#0b1f3a] w-20"></div>

  </div>

  <div className="text-[#0b1f3a] text-2xl">
    ⚓
  </div>

</div>
        </div>



      </section>


{/* MENSAGEM DE BOAS-VINDAS */}

<section className="px-6 py-14">

  <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-sm rounded-3xl shadow-md p-8 text-center border border-[#0b1f3a]/10">


    <h2 className="text-3xl font-bold text-[#0b1f3a]">

      Um momento que ficará para sempre em nossos corações ⚓

    </h2>



    <p className="mt-5 text-gray-700 leading-relaxed text-lg">

      A chegada do Luiz Otávio representa o início de uma nova história,
      cheia de amor, descobertas e momentos inesquecíveis.

      <br /><br />
      Preparamos este espaço com muito carinho para compartilhar essa fase
      tão especial e permitir que cada pessoa faça parte dessa caminhada conosco.

      <br /><br />

      Explore os espaços abaixo para conhecer um pouco mais sobre o Luiz,
      conferir as sugestões de presentes e deixar uma mensagem especial
      para nossa família.

    </p>


  </div>

</section>







{/* CARDS DE NAVEGAÇÃO */}

<section className="max-w-7xl mx-auto px-6 py-16">

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">


    {/* INÍCIO */}

    <a href="/" className="group">

      <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300">

        <div className="relative h-73 overflow-hidden">

          <img
            src="/urso-home.png"
            alt="Início"
            className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
          />

        </div>

        <div className="p-4 text-center">

          <h3 className="text-lg font-bold text-[#0b1f3a]">
            Início
          </h3>

          <p className="mt-2 text-gray-600 text-sm">
            Acompanhe a contagem regressiva para a chegada do Luiz Otávio.
          </p>

          <span className="inline-block mt-4 bg-[#0b1f3a] text-white px-5 py-2 rounded-full text-sm font-medium">
            Acessar
          </span>

        </div>

      </div>

    </a>



    {/* SOBRE O LUIZ */}

    <a href="/sobre-o-luiz" className="group">

      <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300">

        <div className="relative h-73 overflow-hidden">

          <img
            src="/ursinho-receptivo.png"
            alt="Sobre o Luiz"
            className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
          />

        </div>

        <div className="p-4 text-center">

          <h3 className="text-lg font-bold text-[#0b1f3a]">
            Sobre o Luiz
          </h3>

          <p className="mt-2 text-gray-600 text-sm">
            Conheça um pouco mais sobre a história do nosso Luiz.
          </p>

          <span className="inline-block mt-4 bg-[#0b1f3a] text-white px-5 py-2 rounded-full text-sm font-medium">
            Acessar
          </span>

        </div>

      </div>

    </a>




    {/* SUGESTÃO DE PRESENTES */}

    <a href="/sugestoes-presentes" className="group">

      <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300">

        <div className="relative h-73 overflow-hidden">

          <img
            src="/ursinhopresente.png"
            alt="Sugestão de Presentes"
            className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
          />

        </div>

        <div className="p-4 text-center">

          <h3 className="text-lg font-bold text-[#0b1f3a]">
            Sugestão de Presentes
          </h3>

          <p className="mt-2 text-gray-600 text-sm">
            Veja algumas sugestões preparadas com carinho para o Luiz.
          </p>

          <span className="inline-block mt-4 bg-[#0b1f3a] text-white px-5 py-2 rounded-full text-sm font-medium">
            Acessar
          </span>

        </div>

      </div>

    </a>




    {/* DEIXE UMA MENSAGEM */}

    <a href="/deixe-uma-mensagem" className="group">

      <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300">

        <div className="relative h-73 overflow-hidden">

          <img
            src="/ursinhocarta.png"
            alt="Deixe uma Mensagem"
            className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
          />

        </div>

        <div className="p-4 text-center">

          <h3 className="text-lg font-bold text-[#0b1f3a]">
            Deixe uma Mensagem
          </h3>

          <p className="mt-2 text-gray-600 text-sm">
            Compartilhe uma mensagem carinhosa que ficará guardada para o Luiz.
          </p>

          <span className="inline-block mt-4 bg-[#0b1f3a] text-white px-5 py-2 rounded-full text-sm font-medium">
            Acessar
          </span>

        </div>

      </div>

    </a>


  </div>

</section>

















      {/* FRASE FINAL */}

<section className="w-full">

  <img
    src="/ursinho-frasefinal.png"
    alt="Mensagem final Chá do Luiz Otávio"
    className="w-full h-auto object-cover"
  />

</section>












      </div>


    </main>


  );


}