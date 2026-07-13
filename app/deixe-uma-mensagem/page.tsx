"use client";

import { useEffect, useState } from "react";
import Header from "../components/Header";
import EmojiPicker from "emoji-picker-react";


type Message = {
  nome: string;
  mensagem: string;
  data: string;
};


const API_URL =
  "https://script.google.com/macros/s/AKfycbwjM1OEV9EYYPMEnoKcD5QZS1Ua584MuR7bKJlW-PhLraylJdulEiOLx6sA0QK6fHlB/exec";



export default function DeixeUmaMensagem() {


  const [nome, setNome] = useState("");

  const [mensagem, setMensagem] = useState("");

  const [messages, setMessages] = useState<Message[]>([]);

  const [showEmoji, setShowEmoji] = useState(false);





  async function loadMessages() {

    try {

      const response = await fetch(API_URL);

      const data = await response.json();


      setMessages(data.reverse());


    } catch (error) {

      console.log(
        "Erro ao carregar mensagens:",
        error
      );

    }

  }





  useEffect(() => {

    loadMessages();

  }, []);








  async function handleSend() {


    if (!mensagem.trim()) return;



    const newMessage = {

      nome:
        nome.trim() || "Anônimo",

      mensagem:
        mensagem.slice(0, 300),

    };





    try {


      await fetch(
        API_URL,
        {

          method: "POST",

          body: JSON.stringify(newMessage),

        }
      );



      setMensagem("");

      setNome("");

      setShowEmoji(false);



      setTimeout(() => {

        loadMessages();

      }, 1000);



    } catch (error) {


      console.log(
        "Erro ao enviar mensagem:",
        error
      );


    }



  }






  function addEmoji(emojiData: any) {


    setMensagem(

      (prev) =>
        (
          prev + emojiData.emoji
        ).slice(0, 300)

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



      <section className="w-full">

        <img
          src="/banner-mensagem.png"
          alt="Livro de mensagens Chá do Luiz Otávio"
          className="w-full h-auto object-cover"
        />

      </section>





      <section className="max-w-3xl mx-auto px-6 py-10">


        <div
          className="
          bg-white 
          rounded-3xl 
          shadow-xl 
          p-8 
          border 
          border-[#0b1f3a]/10
          "
        >


          <input

            type="text"

            placeholder="Como devemos chamar você? 💙"

            value={nome}

            onChange={(e) =>
              setNome(e.target.value)
            }

            className="w-full border p-3 rounded mb-3 text-[#0b1f3a] placeholder-gray-400"

          />





          <textarea

            placeholder="Escreva sua mensagem (máx 300 caracteres)"

            value={mensagem}

            onChange={(e) =>
              setMensagem(
                e.target.value.slice(0, 300)
              )
            }

            maxLength={300}

            className="w-full border p-3 rounded h-28 text-[#0b1f3a] placeholder-gray-400 resize-none"

          />





          <p className="text-xs text-gray-400 mt-1 text-right">

            {mensagem.length}/300

          </p>





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

              className="bg-white p-5 rounded-3xl shadow-lg border border-[#0b1f3a]/10 hover:shadow-xl transition relative"

            >


              <div className="absolute left-0 top-0 h-full w-1 bg-[#0b1f3a] rounded-l-2xl"></div>




              <p className="text-[#0b1f3a] font-bold text-base mb-3">

                👤 {msg.nome}

              </p>




              <p className="text-[#0b1f3a] text-sm leading-relaxed break-words whitespace-pre-wrap">

                {msg.mensagem}

              </p>




              <p className="text-[10px] text-gray-400 mt-3">

                📅 {msg.data}

              </p>


            </div>


          ))}



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