
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
      title: "Essencial de Marketing Digital e Vendas",
      subtitle: "Otimize suas estratégias de marketing digital e vendas com automação inteligente",
      price: "89,90",
      icon: "📈",
      features: [
        "Marketing & Advertising: Automação de campanhas e gestão de anúncios",
        "Social Media: Agendamento de posts e monitoramento de menções",
        "Email Automation: Sequências de e-mail marketing e newsletters",
        "Blog: Publicação automatizada e distribuição de conteúdo",
        "Creative Content: Gestão de ativos e processos de aprovação",
        "Sales: Automação de funis de vendas e qualificação de leads"
      ],
      benefits: [
        "Aumento da produtividade da equipe",
        "Melhor personalização da comunicação",
        "Escalabilidade das operações digitais",
        "Automação inteligente de vendas",
        "Otimização de campanhas"
      ]
    },
    {
      id: 2,
      title: "Otimização de Gestão e Operações",
      subtitle: "Aprimore seus processos internos desde atendimento até RH e finanças",
      price: "89,90",
      icon: "⚙️",
      features: [
        "Customer Service: Automação de tickets e respostas automáticas",
        "Human Resources: Onboarding e gestão de folha de pagamento",
        "Finance & Accounting: Conciliação bancária e relatórios financeiros",
        "Legal: Gestão de documentos e acompanhamento de processos",
        "Logistics: Otimização da cadeia de suprimentos",
        "Manufacturing: Automação de processos de produção",
        "DevOps: Integração contínua e monitoramento de sistemas"
      ],
      benefits: [
        "Otimização da operação interna",
        "Redução de erros manuais",
        "Melhor comunicação entre departamentos",
        "Conformidade em processos críticos",
        "Eficiência operacional"
      ]
    },
    {
      id: 3,
      title: "Inovação em Tecnologia e Dados",
      subtitle: "Ferramentas para extrair insights, automatizar tarefas complexas e construir soluções inovadoras",
      price: "89,90",
      icon: "🤖",
      features: [
        "AI/ML: Integração com modelos de IA e processamento de dados",
        "Data Analytics: Coleta, transformação e visualização de dados",
        "Software & IT: Automação de tarefas de TI e gestão de projetos",
        "Web Development: Deploy automatizado e monitoramento de performance"
      ],
      benefits: [
        "Aceleração do desenvolvimento tecnológico",
        "Extração máxima de valor dos dados",
        "Sistemas sempre otimizados",
        "Insights automatizados",
        "Soluções inovadoras"
      ]
    },
    {
      id: 4,
      title: "Especializado em E-commerce e Varejo",
      subtitle: "Otimize a experiência do cliente e o desempenho de vendas online",
      price: "89,90",
      icon: "🛒",
      features: [
        "E-commerce & Retail: Gestão completa de pedidos e estoque",
        "Recuperação de carrinho abandonado automatizada",
        "Personalização de ofertas para clientes",
        "Integração com plataformas de pagamento e envio",
        "Automação de processos de venda online"
      ],
      benefits: [
        "Aumento da taxa de conversão",
        "Melhoria da satisfação do cliente",
        "Otimização da gestão de estoque",
        "Escalabilidade de vendas online",
        "Redução de carrinho abandonado"
      ]
    },
    {
      id: 5,
      title: "Setorial: Indústria e Serviços Essenciais",
      subtitle: "Automações específicas para agricultura, saúde, energia, imóveis e mais",
      price: "89,90",
      icon: "🏭",
      features: [
        "Agriculture: Monitoramento de safras e gestão de equipamentos",
        "Healthcare: Gestão de agendamentos e prontuários eletrônicos",
        "Energy: Monitoramento de consumo e otimização de recursos",
        "Real Estate: Gestão de leads e agendamento de visitas",
        "Automotive: Gestão de estoque de peças e agendamento de serviços",
        "Travel & Hospitality: Gestão de reservas e experiência do hóspede",
        "Telecommunications: Gestão de serviços e atendimento ao cliente"
      ],
      benefits: [
        "Otimização de operações complexas",
        "Melhoria da eficiência setorial",
        "Qualidade superior dos serviços",
        "Conformidade regulatória",
        "Processos específicos automatizados"
      ]
    },
    {
      id: 6,
      title: "Setorial: Educação, Mídia e Governo",
      subtitle: "Soluções para educação, entretenimento, governo e organizações sem fins lucrativos",
      price: "89,90",
      icon: "🎓",
      features: [
        "Education: Gestão de matrículas e comunicação com alunos",
        "Gaming: Gestão de comunidades e análise de dados de jogadores",
        "Media & Entertainment: Produção de mídia e gestão de direitos autorais",
        "Government & NGO: Gestão de projetos sociais e comunicação com cidadãos",
        "Non-Profit: Gestão de doadores e campanhas de arrecadação",
        "Recruitment: Automação de processos de recrutamento e seleção"
      ],
      benefits: [
        "Eficiência em organizações públicas",
        "Melhor comunicação com stakeholders",
        "Otimização de recursos",
        "Gestão eficiente de projetos sociais",
        "Automação de processos educacionais"
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
              Escolha Seu Pacote de Templates N8N
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              6 pacotes especializados desenvolvidos para resolver problemas específicos do seu setor
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
