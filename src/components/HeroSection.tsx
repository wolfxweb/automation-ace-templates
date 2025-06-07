
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Clock, TrendingUp, Zap } from 'lucide-react';

export const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 59, seconds: 59 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Urgency Badge */}
        <Badge className="mb-6 bg-red-500/20 text-red-300 border-red-500/30 px-4 py-2 text-sm animate-bounce">
          🔥 Oferta Limitada - Mais de 50% OFF
        </Badge>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Desbloqueie o Poder da
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            {" "}Automação
          </span>
          <br />
          com n8n
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
          Chega de tarefas repetitivas! Nossos templates n8n prontos para usar vão 
          <strong className="text-white"> liberar seu tempo, reduzir erros e aumentar sua produtividade</strong> 
          com apenas alguns cliques.
        </p>

        {/* Value Props */}
        <div className="flex flex-wrap justify-center gap-6 mb-10">
          <div className="flex items-center gap-2 text-green-400">
            <Zap className="w-5 h-5" />
            <span>Implementação Instantânea</span>
          </div>
          <div className="flex items-center gap-2 text-blue-400">
            <TrendingUp className="w-5 h-5" />
            <span>Resultados Imediatos</span>
          </div>
          <div className="flex items-center gap-2 text-purple-400">
            <Clock className="w-5 h-5" />
            <span>Economia de Tempo Massiva</span>
          </div>
        </div>

        {/* Countdown Timer */}
        <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 mb-10 max-w-md mx-auto border border-white/10">
          <p className="text-yellow-400 text-sm font-semibold mb-3">⏰ OFERTA EXPIRA EM:</p>
          <div className="flex justify-center gap-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">{String(timeLeft.hours).padStart(2, '0')}</div>
              <div className="text-xs text-gray-400">HORAS</div>
            </div>
            <div className="text-white text-3xl">:</div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">{String(timeLeft.minutes).padStart(2, '0')}</div>
              <div className="text-xs text-gray-400">MIN</div>
            </div>
            <div className="text-white text-3xl">:</div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">{String(timeLeft.seconds).padStart(2, '0')}</div>
              <div className="text-xs text-gray-400">SEG</div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg rounded-xl transform hover:scale-105 transition-all duration-300 shadow-2xl"
          >
            Quero o Pacote Completo por R$ 198,80
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg rounded-xl backdrop-blur-sm"
          >
            Ver Pacotes Individuais
          </Button>
        </div>

        {/* Social Proof */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm mb-4">Mais de 1.000 profissionais já transformaram seus negócios</p>
          <div className="flex justify-center items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-yellow-400 text-lg">⭐</span>
            ))}
            <span className="text-white ml-2 text-sm">(4.9/5 - 247 avaliações)</span>
          </div>
        </div>
      </div>
    </section>
  );
};
