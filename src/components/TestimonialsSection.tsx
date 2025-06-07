
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Carlos Silva",
      role: "CEO, TechStart",
      content: "Economizei mais de 20 horas por semana com os templates de WhatsApp. Meu atendimento ficou 24/7 sem aumentar custos!",
      rating: 5,
      avatar: "👨‍💼"
    },
    {
      name: "Ana Costa",
      role: "Influenciadora Digital",
      content: "O pacote do Instagram transformou meu engajamento. Agora gero leads qualificados automaticamente e tenho mais tempo para criar conteúdo.",
      rating: 5,
      avatar: "👩‍💻"
    },
    {
      name: "Roberto Lima",
      role: "Gestor de Tráfego",
      content: "Os relatórios automatizados de Meta Ads me fazem economizar horas de análise. Agora posso focar em estratégia e otimização.",
      rating: 5,
      avatar: "📊"
    },
    {
      name: "Marina Santos",
      role: "Empreendedora",
      content: "O pacote completo foi o melhor investimento que fiz. Automatizei praticamente tudo no meu negócio e dobrei minha produtividade!",
      rating: 5,
      avatar: "🚀"
    }
  ];

  return (
    <section className="py-20 px-4 bg-black/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-green-500/20 text-green-300 border-green-500/30">
            ✅ Resultados Comprovados
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Veja o que Nossos Clientes Dizem
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Mais de 1.000 profissionais já transformaram seus negócios com nossos templates
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-4xl">{testimonial.avatar}</div>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">⭐</span>
                  ))}
                </div>
                
                <p className="text-gray-300 leading-relaxed">
                  "{testimonial.content}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto border border-white/10">
            <div className="text-4xl font-bold text-white mb-2">4.9/5</div>
            <div className="flex justify-center mb-2">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-xl">⭐</span>
              ))}
            </div>
            <p className="text-gray-400">Baseado em 247 avaliações</p>
          </div>
        </div>
      </div>
    </section>
  );
};
