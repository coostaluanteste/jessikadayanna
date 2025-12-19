
import React, { useState } from 'react';
import { EXPERT_INFO, IMAGES } from './constants.ts';
import { WhatsAppButton } from './components/Button.tsx';
import { Lightbox } from './components/Lightbox.tsx';

const App: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <main className="min-h-screen">
      {/* 1. HERO - Layout Ajustado: Foto ao lado da Headline no Desktop */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-b from-[#e7e1d5] to-[#fafafa] overflow-hidden pt-12 pb-16">
        <div className="container mx-auto px-6 z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            
            {/* Bloco de Imagem (Aparece primeiro no mobile, ao lado no desktop) */}
            <div className="w-full md:w-1/2 flex justify-center order-1 md:order-2">
              <div className="relative group">
                <div className="absolute -inset-6 bg-[#a68a56]/15 rounded-full blur-3xl group-hover:bg-[#a68a56]/25 transition-all duration-700 -z-10"></div>
                <img 
                  src={IMAGES.hero} 
                  alt={`Dra. ${EXPERT_INFO.name}`} 
                  className="w-64 md:w-full max-w-md h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)] transform transition-transform duration-700 hover:scale-[1.02]"
                />
              </div>
            </div>

            {/* Bloco de Texto */}
            <div className="w-full md:w-1/2 text-center md:text-left order-2 md:order-1">
              <span className="inline-block px-3 py-1 bg-white/50 backdrop-blur-sm border border-[#a68a56]/20 text-[#a68a56] font-medium rounded-full text-xs uppercase tracking-[0.2em] mb-6">
                Odontologia Premium em Natal
              </span>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 leading-[1.1] mb-6">
                Olá, eu sou <span className="text-[#a68a56]">Jessika Dayanna</span>, sua dentista em Natal.
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-lg mx-auto md:mx-0 leading-relaxed font-light">
                Combinando tecnologia de ponta e cuidado humanizado para devolver não apenas o seu sorriso, mas a sua confiança.
              </p>
              <div className="flex flex-col items-center md:items-start">
                <WhatsAppButton text="Agendar primeira consulta gratuita" showMicrotext={true} />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. QUEM SOU EU */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2 relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-[#a68a56] z-0"></div>
              <img 
                src={IMAGES.authority[0]} 
                alt="Dra. Jessika Dayanna" 
                className="rounded-3xl shadow-2xl w-full h-[500px] object-cover relative z-10"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 leading-snug">
                Um olhar cuidadoso sobre a sua saúde bucal.
              </h2>
              <div className="text-gray-600 space-y-6 text-lg leading-relaxed">
                <p>
                  Com registro <span className="font-semibold text-gray-800">{EXPERT_INFO.cro}</span>, dedico minha carreira a oferecer um atendimento que prioriza o conforto do paciente.
                </p>
                <p>
                  Minha missão é desmistificar o medo de dentista através de um ambiente acolhedor e técnicas que minimizam qualquer desconforto, sempre buscando a estética mais natural possível.
                </p>
                <div className="grid grid-cols-1 gap-4 pt-4">
                  {[
                    "Atendimento personalizado do início ao fim",
                    "Foco em Odontologia Estética e Restauradora",
                    "Cuidado especial com pacientes que têm medo",
                    "Transparência total nos orçamentos"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-4 group">
                      <div className="w-8 h-8 rounded-full bg-[#f5f1e8] flex items-center justify-center text-[#a68a56] group-hover:bg-[#a68a56] group-hover:text-white transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. RESULTADOS REAIS */}
      <section className="py-24 bg-[#f9f9f9]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6 italic">Galeria de Resultados</h2>
            <div className="w-24 h-1 bg-[#a68a56] mx-auto mb-8"></div>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              Veja algumas das transformações realizadas em nosso consultório.
            </p>
          </div>

          <div className="space-y-20">
            {/* Categorias da Galeria */}
            {[
              { title: "Transformações Estéticas", data: IMAGES.gallery.antesDepois },
              { title: "Harmonização e Botox", data: IMAGES.gallery.botox },
              { title: "Odontopediatria", data: IMAGES.gallery.children }
            ].map((section, sIdx) => (
              <div key={sIdx}>
                <h3 className="text-xl font-bold text-gray-800 mb-8 uppercase tracking-widest flex items-center gap-4">
                  <span className="w-8 h-[1px] bg-gray-300"></span>
                  {section.title}
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {section.data.map((img, idx) => (
                    <div 
                      key={idx} 
                      className="group aspect-square overflow-hidden rounded-2xl shadow-sm cursor-pointer relative"
                      onClick={() => setSelectedImage(img)}
                    >
                      <img src={img} alt={section.title} className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400 text-sm mt-16 italic">
            *Resultados individuais podem variar de acordo com cada caso clínico.
          </p>
        </div>
      </section>

      {/* 4. POR QUE CONFIAR EM MIM? */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-20">Diferenciais que você sente.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Atendimento Exclusive",
                desc: "Minha agenda é limitada para que eu possa dedicar o tempo necessário a cada detalhe do seu caso.",
                icon: <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              },
              {
                title: "Tecnologia e Segurança",
                desc: "Uso materiais de primeira linha e tecnologia digital para resultados mais rápidos e precisos.",
                icon: <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              },
              {
                title: "Localização Privilegiada",
                desc: "Consultório em Capim Macio, com fácil acesso e estacionamento para sua total comodidade.",
                icon: <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              }
            ].map((card, idx) => (
              <div key={idx} className="text-center group">
                <div className="w-20 h-20 bg-[#f5f1e8] rounded-3xl flex items-center justify-center text-[#a68a56] mb-8 mx-auto transform transition-transform group-hover:-translate-y-2 group-hover:bg-[#a68a56] group-hover:text-white">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {card.icon}
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{card.title}</h3>
                <p className="text-gray-600 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA INTERMEDIÁRIO */}
      <section className="py-20 bg-[#a68a56] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Vamos dar o primeiro passo?</h2>
          <p className="text-xl mb-12 opacity-90 font-light">Agende sua avaliação gratuita e tire todas as suas dúvidas.</p>
          <WhatsAppButton text="Falar no WhatsApp" className="mx-auto" />
        </div>
      </section>

      {/* 6. COMO FUNCIONA */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Sua primeira consulta é um presente.</h2>
              <p className="text-gray-600 text-lg mb-8">
                Nesta primeira visita, meu objetivo é te ouvir. Sem pressa, sem julgamentos e com total foco no que você deseja mudar.
              </p>
              <div className="space-y-8">
                {[
                  { n: "1", t: "Agendamento Online", d: "Rápido e prático pelo WhatsApp." },
                  { n: "2", t: "Boas Vindas", d: "Receção calorosa em nosso consultório." },
                  { n: "3", t: "Plano de Tratamento", d: "Saia com clareza total sobre o que fazer." }
                ].map((step, i) => (
                  <div key={i} className="flex gap-6">
                    <span className="flex-shrink-0 w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold">{step.n}</span>
                    <div>
                      <h4 className="font-bold text-gray-800 text-lg">{step.t}</h4>
                      <p className="text-gray-500">{step.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#fafafa] p-10 rounded-[40px] border border-gray-100 shadow-xl">
               <img src={IMAGES.authority[1]} alt="Consultório" className="rounded-2xl mb-8 w-full h-64 object-cover shadow-md" />
               <p className="text-center font-serif text-2xl text-gray-800 italic mb-6">
                 "Cuidamos de sorrisos, transformamos pessoas."
               </p>
               <WhatsAppButton text="GARANTIR MINHA VAGA" className="w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* 7. MAIS PROVAS (Bastidores) */}
      <section className="py-24 bg-[#f9f9f9]">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap -mx-3">
             {IMAGES.authority.map((img, i) => (
               <div key={i} className="w-full md:w-1/3 px-3 mb-6">
                 <div className="h-96 rounded-2xl overflow-hidden shadow-lg group">
                   <img src={img} alt="Expert" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                 </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 8. CTA FINAL */}
      <section className="py-32 bg-white text-center">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-10">
            Você está a uma mensagem de distância do seu <span className="text-[#a68a56]">melhor sorriso</span>.
          </h2>
          <WhatsAppButton text="Agendar agora com a Dra. Jessika" className="scale-110" />
          <p className="mt-12 text-gray-400 font-medium tracking-widest uppercase text-xs italic">
            Atendimento humanizado • Ética • Resultados Reais
          </p>
        </div>
      </section>

      {/* 9. RODAPÉ */}
      <footer className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start border-b border-gray-800 pb-16">
            <div>
              <h3 className="text-2xl font-bold mb-4">Dra. {EXPERT_INFO.name}</h3>
              <p className="text-gray-400 max-w-xs leading-relaxed mb-6">
                {EXPERT_INFO.profession} - Especialista em transformar vidas através da odontologia de alto padrão.
              </p>
              <p className="text-sm text-[#a68a56] font-bold tracking-widest">{EXPERT_INFO.cro}</p>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm uppercase tracking-widest text-gray-500 font-bold mb-6">Onde estamos</h4>
              <p className="text-gray-300 leading-relaxed">{EXPERT_INFO.address}</p>
              <div className="flex gap-4 pt-4">
                <a href={EXPERT_INFO.instagram} target="_blank" className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center hover:bg-[#a68a56] hover:border-[#a68a56] transition-all">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.332 2.633-1.308 3.608-.975.975-2.242 1.245-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.245-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.245 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <p className="mt-12 text-center text-gray-600 text-sm">
            © 2024 Dra. {EXPERT_INFO.name}. Todos os direitos reservados. Design de Alta Conversão.
          </p>
        </div>
      </footer>

      {/* Lightbox for Gallery */}
      <Lightbox imageUrl={selectedImage} onClose={() => setSelectedImage(null)} />
    </main>
  );
};

export default App;
