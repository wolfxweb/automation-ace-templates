
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, CheckCircle, Zap } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-slate-900 to-pink-900/20" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />
      
      <div className="relative max-w-6xl mx-auto text-center">
        {/* Urgency Badge */}
        <Badge className="mb-6 bg-red-500/20 text-red-300 border-red-500/30 px-6 py-3 text-lg animate-pulse">
          🔥 Oferta Especial - Economia de até 45%
        </Badge>

        {/* Main Headlines */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Templates N8N
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            {" "}Profissionais
          </span>
        </h1>

        <h2 className="text-2xl md:text-3xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
          6 Pacotes Especializados de Automação Prontos para Revolucionar Seu Negócio
        </h2>

        <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
          Mais de 50 templates N8N cuidadosamente desenvolvidos para diferentes setores e necessidades. 
          Automatize marketing, vendas, operações, tecnologia e muito mais com soluções prontas para usar.
        </p>

        {/* Key Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
          <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
            <CheckCircle className="w-8 h-8 text-green-400 flex-shrink-0" />
            <div className="text-left">
              <h3 className="text-white font-semibold">Templates Prontos</h3>
              <p className="text-gray-400 text-sm">Implementação em minutos</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
            <Zap className="w-8 h-8 text-yellow-400 flex-shrink-0" />
            <div className="text-left">
              <h3 className="text-white font-semibold">6 Setores Cobertos</h3>
              <p className="text-gray-400 text-sm">Soluções especializadas</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
            <CheckCircle className="w-8 h-8 text-purple-400 flex-shrink-0" />
            <div className="text-left">
              <h3 className="text-white font-semibold">45% de Economia</h3>
              <p className="text-gray-400 text-sm">Pacote completo</p>
            </div>
          </div>
        </div>

        {/* Price Highlight */}
        <div className="bg-black/30 backdrop-blur-sm rounded-3xl p-8 mb-8 max-w-2xl mx-auto border border-white/10">
          <div className="mb-6">
            <div className="text-sm text-gray-400 line-through mb-2">De R$ 539,40 (individual)</div>
            <div className="text-5xl md:text-6xl font-bold text-white mb-2">R$ 299,90</div>
            <Badge className="bg-green-500 text-white font-bold text-lg px-4 py-2">
              PACOTE COMPLETO - ECONOMIZE R$ 239,50
            </Badge>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="space-y-4">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 text-xl rounded-2xl transform hover:scale-105 transition-all duration-300 shadow-2xl"
          >
            🚀 QUERO O PACOTE COMPLETO AGORA
            <ArrowRight className="ml-3 w-6 h-6" />
          </Button>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400 mt-4">
            <span>✅ Acesso Imediato</span>
            <span>✅ Garantia de 7 Dias</span>
            <span>✅ Suporte Incluído</span>
            <span>✅ Atualizações Gratuitas</span>
          </div>
        </div>

        {/* Social Proof */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">Mais de 1.000 profissionais já automatizaram seus negócios</p>
          <div className="flex justify-center items-center gap-2">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-yellow-400 text-xl">⭐</span>
            ))}
            <span className="text-white ml-2 font-semibold">4.9/5</span>
            <span className="text-gray-400">(247 avaliações)</span>
          </div>
        </div>
      </div>
    </section>
  );
};
