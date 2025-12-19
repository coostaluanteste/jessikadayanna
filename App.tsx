
import React, { useState } from 'react';
import { EXPERT_INFO, IMAGES } from './constants.ts';
import { WhatsAppButton } from './components/Button.tsx';
import { Lightbox } from './components/Lightbox.tsx';

const App: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <main className="min-h-screen">
      {/* 1. HERO - Layout: Foto ao lado da Headline no Desktop */}
      <section className="relative min-h-[90vh] md:min-h-[85vh] flex items-center bg-gradient-to-b from-[#e7e1d5] to-[#fafafa] overflow-hidden pt-12 pb-10">
        <div className="container mx-auto px-6 z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
            
            {/* Lado do Texto */}
            <div className="w-full md:w-3/5 text-center md:text-left order-2 md:order-1">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight mb-6">
                Olá, eu sou <span className="text-[#a68a56]">Jessika Dayanna</span>, sua dentista em Natal.
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
                Transformo sorrisos através de um atendimento humanizado, focado na sua saúde e autoestima. O cuidado que você merece, do jeito que você sempre sonhou.
              </p>
              <div className="flex justify-center md:justify-start">
                <WhatsAppButton text="Agendar primeira consulta gratuita" showMicrotext={true} />
              </div>
            </div>

            {/* Lado da Imagem */}
            <div className="w-full md:w-2/5 flex justify-center order-1 md:order-2">
              <div className="relative">
                <div className="absolute -inset-4 bg-[#a68a56]/10 rounded-full blur-3xl -z-10"></div>
                <img 
                  src={IMAGES.hero} 
                  alt={`Dra. ${EXPERT_INFO.name}`} 
                  className="w-56 md:w-full max-w-sm h-auto object-contain drop-shadow-2xl"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. QUEM SOU EU */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <img 
                src={IMAGES.authority[0]} 
                alt="Dra. Jessika Dayanna em atendimento" 
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
            <div className="w-full md:w-1/2">
              <span className="inline-block px-4 py-1 bg-[#f5f1e8] text-[#a68a56] font-semibold rounded-full text-sm mb-4 uppercase tracking-widest">
                Sobre Mim
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Mais que uma dentista, uma parceira do seu bem-estar.
              </h2>
              <div className="text-gray-600 space-y-4 leading-relaxed">
                <p>
                  Sou a Jessika, apaixonada por devolver sorrisos e autoconfiança aos meus pacientes. Acredito que a odontologia vai muito além de procedimentos técnicos — é sobre entender pessoas e seus medos.
                </p>
                <ul className="space-y-3 pt-4">
                  {[
                    "Especialista focada em resultados estéticos naturais",
                    "Atendimento humanizado para quem tem medo de dentista",
                    "Consultório equipado com o que há de mais moderno",
                    "Clareza e transparência em cada etapa do tratamento"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-[#a68a56] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. RESULTADOS REAIS */}
      <section className="py-20 bg-[#f9f9f9]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">Resultados que inspiram</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Clique nas imagens para ver os detalhes da transformação que podemos alcançar juntos.</p>
          </div>

          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold text-[#a68a56] mb-6 border-l-4 border-[#a68a56] pl-4 uppercase tracking-wider text-sm">Transformações Estéticas</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {IMAGES.gallery.antesDepois.map((img, idx) => (
                  <div key={idx} className="aspect-square overflow-hidden rounded-xl shadow-md cursor-pointer hover:opacity-90 transition-opacity" onClick={() => setSelectedImage(img)}>
                    <img src={img} alt="Antes e Depois" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#a68a56] mb-6 border-l-4 border-[#a68a56] pl-4 uppercase tracking-wider text-sm">Harmonização e Botox</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {IMAGES.gallery.botox.map((img, idx) => (
                  <div key={idx} className="aspect-square overflow-hidden rounded-xl shadow-md cursor-pointer hover:opacity-90 transition-opacity" onClick={() => setSelectedImage(img)}>
                    <img src={img} alt="Procedimento Botox" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#a68a56] mb-6 border-l-4 border-[#a68a56] pl-4 uppercase tracking-wider text-sm">Odontopediatria (Crianças)</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {IMAGES.gallery.children.map((img, idx) => (
                  <div key={idx} className="aspect-square overflow-hidden rounded-xl shadow-md cursor-pointer hover:opacity-90 transition-opacity" onClick={() => setSelectedImage(img)}>
                    <img src={img} alt="Paciente Infantil" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p className="text-center text-gray-400 text-sm mt-12 italic">
            *Resultados podem variar de pessoa para pessoa conforme cada caso clínico.
          </p>
        </div>
      </section>

      {/* 4. POR QUE CONFIAR EM MIM? */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16">O seu sorriso em mãos seguras</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Avaliação Honesta",
                desc: "Nada de empurrar tratamentos desnecessários. Só o que você realmente precisa.",
                icon: <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              },
              {
                title: "Atendimento Comigo",
                desc: "Do começo ao fim, você será atendido(a) diretamente por mim, sem intermediários.",
                icon: <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              },
              {
                title: "Tecnologia de Ponta",
                desc: "Equipamentos modernos para diagnósticos precisos e tratamentos indolores.",
                icon: <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              },
              {
                title: "Clareza Total",
                desc: "Explico cada detalhe do seu tratamento para que você se sinta seguro(a) e no controle.",
                icon: <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              },
              {
                title: "Conforto e Calma",
                desc: "Ambiente planejado para que sua visita ao dentista seja um momento de relaxamento.",
                icon: <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              },
              {
                title: "Segurança CRO",
                desc: "Profissional devidamente registrada (CRO 5470 RN) e em dia com as normas de saúde.",
                icon: <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              }
            ].map((card, idx) => (
              <div key={idx} className="bg-[#fafafa] p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-[#f5f1e8] rounded-xl flex items-center justify-center text-[#a68a56] mb-6">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {card.icon}
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{card.title}</h3>
                <p className="text-gray-600 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA INTERMEDIÁRIO */}
      <section className="py-16 bg-[#a68a56] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto(a) para começar a sua transformação?</h2>
          <p className="text-lg mb-10 opacity-90">Não deixe para amanhã o sorriso que você pode ter hoje.</p>
          <WhatsAppButton text="Agendar por WhatsApp" className="mx-auto" />
        </div>
      </section>

      {/* 6. COMO FUNCIONA A PRIMEIRA CONSULTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Sua jornada para um novo sorriso</h2>
            <p className="text-gray-500 mt-4">Simples, rápido e totalmente gratuito.</p>
          </div>
          <div className="flex flex-col md:flex-row gap-8 max-w-4xl mx-auto relative">
            {[
              { step: "01", title: "Mensagem no WhatsApp", desc: "Clique nos botões desta página para falar comigo agora." },
              { step: "02", title: "Escolha seu Horário", desc: "Agendaremos um dia e hora que fiquem melhores para você." },
              { step: "03", title: "Avaliação Completa", desc: "Virei até o consultório para conversarmos sobre seus desejos e necessidades." }
            ].map((item, idx) => (
              <div key={idx} className="flex-1 text-center p-6 bg-[#fafafa] rounded-2xl relative z-10">
                <span className="text-5xl font-bold text-[#a68a56]/10 absolute top-4 left-1/2 -translate-x-1/2 -z-10">{item.step}</span>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-[#a68a56] font-semibold">Lembre-se: a primeira consulta é gratuita e sem compromisso!</p>
          </div>
        </div>
      </section>

      {/* 7. MAIS PROVAS (Expert + Bastidores) */}
      <section className="py-20 bg-[#f9f9f9] overflow-hidden">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12 uppercase tracking-widest text-sm">Bastidores e Cuidado</h2>
          <div className="flex flex-col md:flex-row gap-6">
            {IMAGES.authority.map((img, idx) => (
              <div key={idx} className="flex-1 rounded-2xl overflow-hidden shadow-xl hover:scale-[1.02] transition-transform">
                <img src={img} alt="Bastidores Dra Jessika" className="w-full h-80 object-cover" />
                <div className="p-4 bg-white text-center">
                  <p className="text-gray-500 italic text-sm">
                    {idx === 0 ? "Atendimento personalizado" : idx === 1 ? "Equipamentos modernos" : "Cuidado em cada detalhe"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CTA FINAL */}
      <section className="py-24 bg-gradient-to-br from-[#e7e1d5] to-[#f5f1e8]">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 italic">
              "Um sorriso bonito abre portas, um sorriso saudável muda vidas."
            </h2>
            <p className="text-xl text-gray-600 mb-10">
              Estou te esperando para darmos o primeiro passo juntos. Clique abaixo e agende sua <strong>consulta gratuita</strong> agora mesmo.
            </p>
            <WhatsAppButton text="QUERO MEU NOVO SORRISO" className="scale-110" />
          </div>
        </div>
      </section>

      {/* 9. RODAPÉ */}
      <footer className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-b border-gray-800 pb-12 mb-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">Dra. {EXPERT_INFO.name}</h3>
              <p className="text-gray-400">{EXPERT_INFO.profession} | {EXPERT_INFO.cro}</p>
            </div>
            <div className="flex gap-6">
              <a href={EXPERT_INFO.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-[#a68a56] transition-colors">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.332 2.633-1.308 3.608-.975.975-2.242 1.245-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.245-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.245 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
          <div className="text-center md:flex md:justify-between text-gray-500 text-sm">
            <p className="mb-4 md:mb-0 max-w-sm mx-auto md:mx-0">
              {EXPERT_INFO.address}
            </p>
            <p>© 2024 Dra. {EXPERT_INFO.name}. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Lightbox for Gallery */}
      <Lightbox imageUrl={selectedImage} onClose={() => setSelectedImage(null)} />
    </main>
  );
};

export default App;
