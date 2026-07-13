"use client";

import Header from "../components/Header";
import { useEffect, useState } from "react";


export default function SobreOLuiz() {


  const [gestacao, setGestacao] = useState({
    semanas: 31,
    dias: 0,
  });




  useEffect(() => {


    const inicioSemana31 = new Date("2026-07-10T00:00:00");

    const hoje = new Date();



    const diferenca =
      hoje.getTime() - inicioSemana31.getTime();



    const diasPassados = Math.floor(
      diferenca / (1000 * 60 * 60 * 24)
    );



    const semanasCalculadas = Math.floor(
      diasPassados / 7
    );



    const diasCalculados = diasPassados % 7;



    setGestacao({

      semanas: 31 + semanasCalculadas,

      dias: diasCalculados,

    });



  }, []);








  return (

    <main
      className="min-h-screen bg-[#f5f7fa]"
      style={{
        backgroundImage: "url('/ancoras-pattern.png')",
        backgroundRepeat: "repeat",
        backgroundSize: "350px",
      }}
    >



      <Header />






      {/* BANNER */}



      <section className="w-full overflow-hidden bg-white">


        <img

          src="/banner-sobre-o-luiz.png"

          alt="Sobre o Luiz"

          className="w-full h-auto object-cover"

        />


      </section>









      {/* INFORMAÇÕES DO LUIZ */}




      <section className="px-6 py-16">



        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-md p-8 text-center border border-[#0b1f3a]/10">





          <h1 className="text-3xl font-bold text-[#0b1f3a]">

            Sobre o Luiz 💙

          </h1>





          <div className="grid md:grid-cols-3 gap-6 mt-10">







            <div className="bg-[#f5f7fa] rounded-2xl p-6">


              <span className="text-3xl">

                ⚓

              </span>



              <h3 className="font-bold text-[#0b1f3a] mt-3">

                Nome

              </h3>



              <p className="mt-2 text-gray-600">

                Luiz Otávio Mattos Prudente de Melo

              </p>


            </div>









            <div className="bg-[#f5f7fa] rounded-2xl p-6">


              <span className="text-3xl">

                📅

              </span>



              <h3 className="font-bold text-[#0b1f3a] mt-3">

                Previsão de nascimento

              </h3>



              <p className="mt-2 text-gray-600">

                11 de setembro de 2026

              </p>


            </div>









            <div className="bg-[#f5f7fa] rounded-2xl p-6">


              <span className="text-3xl">

                🤰

              </span>



              <h3 className="font-bold text-[#0b1f3a] mt-3">

                Idade gestacional

              </h3>



              <p className="mt-2 text-gray-600">

                {gestacao.semanas} semanas e {gestacao.dias} dias

              </p>



              <p className="text-sm text-gray-500 mt-1">

                Aproximadamente 7 meses

              </p>


            </div>







          </div>





        </div>





      </section>







      {/* COMO TUDO COMEÇOU */}



      <section className="px-6 py-16">



        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-md p-8 text-center border border-[#0b1f3a]/10">



          <h2 className="text-3xl font-bold text-[#0b1f3a]">

            Como tudo começou 💙

          </h2>



<div className="mt-6 text-gray-700 leading-relaxed text-lg">

  <h3 className="text-2xl font-bold text-[#0b1f3a] mb-6">
    A História do Luiz Otávio
  </h3>

  <p>
    Em outubro de 2025, após uma perda muito difícil para nossa família, a Liz disse algo que ninguém esperava:
  </p>

  <blockquote className="my-6 border-l-4 border-[#0b1f3a] pl-5 italic text-xl text-[#0b1f3a] font-semibold">
    "A minha irmãzinha vai estar na barriga da minha mãe hoje."
  </blockquote>

  <p>
    Naquele momento, todos riram. Parecia apenas mais uma das tantas frases espontâneas das crianças. Afinal, ter outro filho ainda não era um plano que fazia parte da nossa realidade.
  </p>

  <p className="mt-6">
    Mas, em <strong>03 de janeiro de 2026</strong>, dois pontinhos apareceram no teste...
  </p>

  <p className="mt-6">
    A mamãe, sem conseguir acreditar no que estava vendo, guardou aquele segredo durante o dia inteiro. Somente mais tarde compartilhou a notícia com o papai.
  </p>

  <p className="mt-6">
    Quando finalmente entendemos o que estava acontecendo, uma verdadeira mistura de sentimentos tomou conta de nós. Vieram a felicidade, o medo, a insegurança, a esperança... felicidade de novo, medo outra vez, mais felicidade, mais medo... e, para ser sincero, um pouquinho de medo a mais. 😂
  </p>

  <p className="mt-6">
    Foi somente após o primeiro ultrassom que a ficha realmente caiu. Aquilo não era um sonho. Era real. Existia mais um pequeno coração batendo, crescendo e mudando nossas vidas para sempre.
  </p>

  <h4 className="text-xl font-bold text-[#0b1f3a] mt-10 mb-4">
    A descoberta
  </h4>

  <p>
    Desde o começo, por causa daquela frase da Liz em outubro de 2025 dizendo que teria uma irmãzinha — que ela até já chamava de Lívia — nós tínhamos quase certeza de que seria uma menina.
  </p>

  <p className="mt-6">
    Mas o papai, ansioso como sempre, não conseguiu esperar até as 20 semanas para descobrir o sexo do bebê. Fizemos a sexagem fetal e, em menos de 24 horas, o resultado já estava pronto.
  </p>

  <p className="mt-6">
    Entregamos o envelope ao nosso grande amigo e padrinho do Luiz Otávio, Marques, para que ele preparasse uma revelação simples e cheia de significado.
  </p>

  <p className="mt-6">
    Estávamos apenas nós cinco. Ele e sua digníssima, Aline, vestiriam a Liz com uma roupa na cor que representasse o resultado: azul para menino e rosa para menina.
  </p>

  <p className="mt-6">
    Foi assim que descobrimos que estávamos esperando um menino.
  </p>

  <h4 className="text-xl font-bold text-[#0b1f3a] mt-10 mb-4">
    A escolha do nome
  </h4>

  <p>
    A partir daquele momento, começou outra missão importante: escolher o nome.
  </p>

  <p className="mt-6">
    Depois de muitos nomes entrarem e saírem da lista de favoritos, chegamos a um consenso. Luiz era um nome bonito, simples e que, de certa forma, combinava com Liz. Apenas uma letra fazia a diferença.
  </p>

  <p className="mt-6">
    Então a mamãe teve a ideia de completar o nome com <strong>Otávio</strong>, formando <strong>Luiz Otávio</strong>.
  </p>

  <p className="mt-6">
    Essa escolha também carrega um significado muito especial. Além de soar exatamente como sonhávamos, ela representa a continuidade da família do papai.
  </p>

  <p className="mt-6">
    É uma forma de mostrar ao nosso filho que ele tem um pai amoroso, presente e carinhoso, em quem poderá se inspirar ao longo da vida, escrevendo a própria história e, quem sabe, dando continuidade a esse legado de amor.
  </p>

</div>



        </div>



      </section>












      {/* NOSSA JORNADA */}



     <section className="pb-16">


  <div className="w-full bg-[#0b1f3a] text-white py-10 px-6 text-center shadow-md mb-12">


    <h2 className="text-3xl font-bold">

    ⚓  Nossa jornada ⚓

    </h2>


    <p className="mt-3 text-white/80 text-lg">

      Alguns momentos que marcaram o caminho antes da chegada do Luiz Otávio

    </p>


  </div>




  <div className="max-w-5xl mx-auto px-6">












          {/* DESCOBERTA DA GRAVIDEZ */}



          <div className="bg-white rounded-3xl shadow-md p-8 border border-[#0b1f3a]/10 mb-12">





            <img

              src="/teste-gravidez.png"

              alt="Teste de gravidez"

              className="w-full max-w-xl mx-auto rounded-3xl shadow-sm"

            />





            <div className="text-center mt-8">



              <h3 className="text-2xl font-bold text-[#0b1f3a]">

                🍼 A descoberta da gravidez

              </h3>




              <p className="mt-4 text-gray-700 leading-relaxed text-lg">


                Um teste simples marcou o começo dessa nova fase.


                <br /><br />


                Uma notícia inesperada que trouxe novos planos,
                dúvidas e muita expectativa para os próximos meses.


              </p>



            </div>




          </div>












          {/* SEXAGEM FETAL */}



          <div className="bg-white rounded-3xl shadow-md p-8 border border-[#0b1f3a]/10 mb-12">





            <img

              src="/sexagem-fetal.png"

              alt="Sexagem fetal"

              className="w-full max-w-xl mx-auto rounded-3xl shadow-sm"

            />





            <div className="text-center mt-8">



              <h3 className="text-2xl font-bold text-[#0b1f3a]">

                📄 A descoberta do Luiz

              </h3>




              <p className="mt-4 text-gray-700 leading-relaxed text-lg">


                O resultado da sexagem fetal confirmou
                que estávamos esperando um menino.


                <br /><br />


                Foi o primeiro registro dessa nova fase
                e o começo dos preparativos para a chegada do Luiz Otávio.


              </p>



            </div>




          </div>










          {/* REVELAÇÃO */}


<div className="bg-white rounded-3xl shadow-md p-8 border border-[#0b1f3a]/10 mb-12 text-center">



  <h3 className="text-2xl font-bold text-[#0b1f3a]">

    🎉 Revelação 🎉

  </h3>




  <p className="mt-4 text-gray-700 leading-relaxed text-lg">

    O momento em que descobrimos juntos
    quem estava chegando.

  </p>





  <div className="mt-8 flex justify-center">



    <div className="w-full max-w-sm rounded-3xl overflow-hidden shadow-md">



      <iframe
  src="https://www.instagram.com/p/DYVmESwIPZQ/embed"
  className="w-full aspect-[9/16]"
  frameBorder="0"
  scrolling="no"
></iframe>



    </div>



  </div>




</div>










          {/* LIZ */}



          <div className="bg-white rounded-3xl shadow-md p-8 border border-[#0b1f3a]/10 mb-12">





            <img

              src="/liz-luiz.png"

              alt="Liz"

              className="w-full max-w-xl mx-auto rounded-3xl shadow-sm"

            />





            <div className="text-center mt-8">



              <h3 className="text-2xl font-bold text-[#0b1f3a]">

                👧 A irmã mais velha

              </h3>




              <p className="mt-4 text-gray-700 leading-relaxed text-lg">


                A chegada do Luiz também marca uma nova fase para a Liz,
                que em breve terá a experiência de ser irmã mais velha.


              </p>



            </div>




          </div>













          {/* ULTRASSOM */}



          <div className="bg-white rounded-3xl shadow-md p-8 border border-[#0b1f3a]/10 mb-12">





            <img

              src="/ultrassom-luiz.png"

              alt="Ultrassom do Luiz"

              className="w-full max-w-xl mx-auto rounded-3xl shadow-sm"

            />





            <div className="text-center mt-8">



              <h3 className="text-2xl font-bold text-[#0b1f3a]">

                👶 Acompanhando cada etapa

              </h3>




              <p className="mt-4 text-gray-700 leading-relaxed text-lg">


                Durante a gestação, cada acompanhamento trouxe
                um novo registro do crescimento do Luiz.


              </p>



            </div>




          </div>













          {/* FOTO DA FAMÍLIA */}



          <div className="bg-white rounded-3xl shadow-md p-8 border border-[#0b1f3a]/10 mb-12">





            <img

              src="/familia.png"

              alt="Família esperando o Luiz"

              className="w-full max-w-xl mx-auto rounded-3xl shadow-sm"

            />





            <div className="text-center mt-8">



              <h3 className="text-2xl font-bold text-[#0b1f3a]">

                Um registro dessa fase

              </h3>




              <p className="mt-4 text-gray-700 leading-relaxed text-lg">


                Uma foto para guardar do exato momento que descobrimos que seria o Luiz Otávio.


              </p>



            </div>




          </div>







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




      {/* FRASE FINAL */}

<section className="w-full overflow-hidden">

  <img
    src="/ursinho-frasefinal.png"
    alt="Mensagem final"
    className="w-full h-auto object-cover"
  />

</section>


    </main>

  );

}