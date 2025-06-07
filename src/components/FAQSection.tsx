
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export const FAQSection = () => {
  const faqs = [
    {
      question: "O que exatamente eu recebo ao comprar um pacote?",
      answer: "Você recebe templates n8n prontos para usar, com fluxos de trabalho completamente configurados. Cada template inclui documentação detalhada, instruções de instalação e customização."
    },
    {
      question: "Preciso ter conhecimento técnico para usar os templates?",
      answer: "Não! Nossos templates são projetados para serem user-friendly. Incluímos guias passo a passo e vídeos explicativos para que qualquer pessoa possa implementar as automações."
    },
    {
      question: "Os templates funcionam com outras ferramentas que já uso?",
      answer: "Sim! Os templates são desenvolvidos para integrar com as principais ferramentas do mercado como WhatsApp, Instagram, Meta Ads, Google Drive, e muitas outras plataformas populares."
    },
    {
      question: "Posso customizar os templates para minha necessidade específica?",
      answer: "Absolutamente! Todos os templates são totalmente customizáveis. Você pode modificar, adicionar ou remover funcionalidades conforme sua necessidade específica."
    },
    {
      question: "Oferecem suporte após a compra?",
      answer: "Sim! Incluímos suporte por email e acesso a uma comunidade exclusiva onde você pode tirar dúvidas e compartilhar experiências com outros usuários."
    },
    {
      question: "Qual a diferença entre os pacotes individuais e o pacote completo?",
      answer: "Os pacotes individuais focam em áreas específicas (WhatsApp, Instagram, etc.) por R$79,90 cada. O pacote completo inclui TODOS os 5 pacotes por R$198,80, gerando uma economia de mais de 50%."
    },
    {
      question: "Os templates recebem atualizações?",
      answer: "Sim! Mantemos nossos templates sempre atualizados com as últimas funcionalidades do n8n e das integrações. Todas as atualizações são gratuitas para quem já adquiriu."
    },
    {
      question: "Existe garantia de satisfação?",
      answer: "Sim! Oferecemos 7 dias de garantia incondicional. Se não ficar satisfeito por qualquer motivo, devolvemos 100% do seu investimento."
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-gray-300">
            Tire suas dúvidas antes de fazer seu investimento
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-white/5 border-white/10 backdrop-blur-sm rounded-lg px-6"
            >
              <AccordionTrigger className="text-white hover:text-purple-400 text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
