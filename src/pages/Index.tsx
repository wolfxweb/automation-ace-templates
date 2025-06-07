
import React from 'react';
import { HeroSection } from '@/components/HeroSection';
import { PackagesComparison } from '@/components/PackagesComparison';
import { PackageCard } from '@/components/PackageCard';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { FAQSection } from '@/components/FAQSection';
import { CTASection } from '@/components/CTASection';

const Index = () => {
  const packages = [
    {
      id: 1,
      title: "Automação de WhatsApp e Comunicação",
      subtitle: "Transforme seu Atendimento e Vendas no WhatsApp",
      price: "79,90",
      icon: "💬",
      features: [
        "Busca inteligente de palavras-chave em grupos",
        "Disparos em massa eficientes",
        "Gestão avançada de grupos (Evolution e Z-API)",
        "Atendimento AI com agendamento e RAG",
        "Criação de grupos com landing page"
      ],
      benefits: [
        "Economia de tempo massiva",
        "Atendimento 24/7 com qualidade",
        "Aumento da produtividade",
        "Redução de erros",
        "Escalabilidade de atendimento"
      ]
    },
    {
      id: 2,
      title: "Automação de Instagram e Redes Sociais",
      subtitle: "Automatize interações, gerencie comentários e transforme seguidores em clientes",
      price: "79,90",
      icon: "📱",
      features: [
        "Comentários com Leadscore",
        "Respostas automáticas de DMs",
        "Scraping de perfis, hashtags e publicações",
        "Análise de engajamento automática",
        "Qualificação de leads por interação"
      ],
      benefits: [
        "Engajamento aumentado",
        "Geração de leads qualificados",
        "Economia de tempo",
        "Dados para decisões estratégicas",
        "Gestão de volume maior de interações"
      ]
    },
    {
      id: 3,
      title: "Automação Geral e Produtividade",
      subtitle: "Simplifique tarefas, aumente eficiência e ganhe mais tempo",
      price: "79,90",
      icon: "⚡",
      features: [
        "Resumos automáticos de reuniões",
        "Geração de vídeos dinâmicos",
        "Geração automática de contratos",
        "Backups no Google Drive",
        "Automação de documentos"
      ],
      benefits: [
        "Alta eficiência",
        "Menos erros",
        "Segurança de dados",
        "Mais tempo criativo e estratégico",
        "Processos padronizados"
      ]
    },
    {
      id: 4,
      title: "Marketing, Relatórios e Meta Ads",
      subtitle: "Otimize campanhas, gere relatórios inteligentes e tome decisões estratégicas",
      price: "79,90",
      icon: "📊",
      features: [
        "Relatórios detalhados de campanhas",
        "Coleta automática de métricas",
        "Criação e otimização de campanhas no Meta Ads",
        "Gestão de tráfego automatizada",
        "Dashboards em tempo real"
      ],
      benefits: [
        "Decisões rápidas baseadas em dados",
        "Tempo poupado na análise",
        "ROI maximizado",
        "Apresentação profissional para clientes",
        "Gestão eficiente de campanhas"
      ]
    },
    {
      id: 5,
      title: "Desenvolvimento e Integração",
      subtitle: "Simplifique credenciais, padronize processos e desenvolva com segurança",
      price: "79,90",
      icon: "🛠️",
      features: [
        "Front-end para criação de credenciais",
        "Gestão segura de APIs",
        "Templates de integração",
        "Configuração automatizada",
        "Processo padronizado"
      ],
      benefits: [
        "Processo acelerado e padronizado",
        "Segurança reforçada",
        "Redução de erros",
        "Mais foco na lógica do negócio",
        "Integrações mais rápidas"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <HeroSection />
      <PackagesComparison />
      
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Escolha Seu Pacote de Automação
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cada pacote foi cuidadosamente desenvolvido para resolver problemas específicos do seu negócio
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <PackageCard key={pkg.id} package={pkg} />
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </div>
  );
};

export default Index;
