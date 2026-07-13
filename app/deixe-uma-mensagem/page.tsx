
"use client";

import { useEffect, useState } from "react";
import Header from "../components/Header";
import EmojiPicker from "emoji-picker-react";


type Message = {
  nameInternal: string;
  message: string;
  date: string;
};


export default function DeixeUmaMensagem() {


  const [nameInternal, setNameInternal] = useState("");

  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState<Message[]>([]);

  const [showEmoji, setShowEmoji] = useState(false);





  useEffect(() => {


    const saved = localStorage.getItem("messages");


    if (saved) {

      setMessages(JSON.parse(saved));

    }


  }, []);








  function handleSend() {


    if (!message.trim()) return;



    const newMessage: Message = {


      nameInternal: nameInternal || "Anônimo",


      message: message.slice(0, 300),


      date: new Date().toLocaleDateString(),


    };





    const updated = [newMessage, ...messages];



    setMessages(updated);



    localStorage.setItem(
      "messages",
      JSON.stringify(updated)
    );




    setMessage("");

    setNameInternal("");

    setShowEmoji(false);



  }








  function handleDelete(index: number) {


    const updated = messages.filter(
      (_, i) => i !== index
    );



    setMessages(updated);



    localStorage.setItem(
      "messages",
      JSON.stringify(updated)
    );


  }








  function addEmoji(emojiData: any) {


    setMessage(
      (prev) =>
        (prev + emojiData.emoji).slice(0, 300)
    );


  }









  return (


    <main
  className="min-h-screen bg-repeat"
  style={{
    backgroundImage: "url('/ancoras-pattern.png')",
    backgroundSize: "350px"
  }}
>



      <Header />





      {/* BANNER */}


      <section className="w-full">


        <img
          src="/banner-mensagem.png"
          alt="Livro de mensagens Chá do Luiz Otávio"
          className="w-full h-auto object-cover"
        />


      </section>









      {/* FORMULÁRIO */}


      <section className="max-w-3xl mx-auto px-6 py-10">



        <div className="
bg-white 
rounded-3xl 
shadow-xl 
p-8 
border 
border-[#0b1f3a]/10
">





          <input

            type="text"

            placeholder="Como devemos chamar você? 💙"

            value={nameInternal}

            onChange={(e) =>
              setNameInternal(e.target.value)
            }

            className="w-full border p-3 rounded mb-3 text-[#0b1f3a] placeholder-gray-400"

          />






          <textarea

            placeholder="Escreva sua mensagem (máx 300 caracteres)"

            value={message}

            onChange={(e) =>
              setMessage(
                e.target.value.slice(0, 300)
              )
            }

            maxLength={300}

            className="w-full border p-3 rounded h-28 text-[#0b1f3a] placeholder-gray-400 resize-none"

          />






          <p className="text-xs text-gray-400 mt-1 text-right">

            {message.length}/300

          </p>









          {/* EMOJI */}


          <div className="flex gap-2 mt-2">



            <button

              onClick={() =>
                setShowEmoji(!showEmoji)
              }

              className="text-sm px-3 py-1 border rounded hover:bg-gray-100"

            >

              😊 Emoji

            </button>



          </div>








          {showEmoji && (


            <div className="mt-3">


              <EmojiPicker
                onEmojiClick={addEmoji}
              />


            </div>


          )}








          <button

            onClick={handleSend}

            className="mt-4 w-full bg-[#d62828] text-white py-3 rounded-lg font-medium hover:opacity-90"

          >

            Enviar mensagem 💙

          </button>





        </div>


      </section>



{/* SEPARADOR DOS RECADOS */}

<section className="bg-[#0b1f3a] py-8 shadow-lg">

  <div className="max-w-4xl mx-auto text-center">

    <div className="flex items-center justify-center gap-4">

      <div className="h-px bg-white w-20"></div>

      <h2 className="text-2xl font-bold text-white">
        Recados deixados 💬
      </h2>

      <div className="h-px bg-white w-20"></div>

    </div>

  </div>

</section>





{/* MURAL */}


{/* MURAL */}

<section className="max-w-7xl mx-auto px-6 pt-10 pb-20">


<div className="flex justify-center mb-8">

  <div className="bg-white rounded-full shadow-md border border-[#0b1f3a]/10 px-8 py-3 text-center">

    <p className="text-[#0b1f3a] font-bold">
       {messages.length} mensagens deixadas para o Luiz Otávio e família.
    </p>

  </div>

</div>

{messages.length === 0 && (


    <div className="bg-white p-6 rounded-xl text-center text-gray-500 shadow-sm border">


      Ainda não há mensagens. Seja o primeiro 💙


    </div>


  )}






  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">



    {messages.map((msg, index) => (


      <div

        key={index}

        className="bg-white 
p-5 
rounded-3xl 
shadow-lg 
border border-[#0b1f3a]/10
hover:shadow-xl
transition relative"

      >



        <div className="absolute left-0 top-0 h-full w-1 bg-[#0b1f3a] rounded-l-2xl"></div>





        <p className="text-[#0b1f3a] font-bold text-base mb-3">

          👤 {msg.nameInternal}

        </p>





        <p className="text-[#0b1f3a] text-sm leading-relaxed break-words whitespace-pre-wrap">

          {msg.message}

        </p>





        <div className="flex justify-between items-center mt-3">


          <p className="text-[10px] text-gray-400">

            📅 {msg.date}

          </p>




          <button

            onClick={() => handleDelete(index)}

            className="text-[10px] text-red-500 hover:underline"

          >

            Excluir

          </button>


        </div>




      </div>



    ))}



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






    </main>


  );


}