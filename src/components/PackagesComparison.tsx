
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, X, Crown } from 'lucide-react';

export const PackagesComparison = () => {
  return (
    <section className="py-20 px-4 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Escolha a Melhor Opção para Você
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Compare nossas opções e veja como você pode economizar mais de 50% com o Pacote Completo
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Individual Packages */}
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl text-white mb-2">Pacotes Individuais</CardTitle>
              <p className="text-gray-400">Escolha apenas o que precisa</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">R$ 79,90</div>
                <div className="text-gray-400">por pacote</div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Foco em área específica</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Investimento menor inicial</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Ideal para necessidades pontuais</span>
                </div>
                <div className="flex items-center gap-3">
                  <X className="w-5 h-5 text-red-400" />
                  <span className="text-gray-400">Sem desconto por volume</span>
                </div>
                <div className="flex items-center gap-3">
                  <X className="w-5 h-5 text-red-400" />
                  <span className="text-gray-400">Total: R$ 399,50 (todos os 5)</span>
                </div>
              </div>

              <Button className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20">
                Escolher Pacote Individual
              </Button>
            </CardContent>
          </Card>

          {/* Complete Package */}
          <Card className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 border-purple-500/30 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <Badge className="bg-yellow-500 text-black font-bold px-3 py-1">
                <Crown className="w-4 h-4 mr-1" />
                MAIS POPULAR
              </Badge>
            </div>
            
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl text-white mb-2">Pacote Completo</CardTitle>
              <p className="text-gray-300">Automação total + economia máxima</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <div className="text-sm text-gray-400 line-through">De R$ 399,50</div>
                <div className="text-5xl font-bold text-white mb-2">R$ 198,80</div>
                <Badge className="bg-green-500 text-white font-bold">
                  ECONOMIZE R$ 200,70 (50% OFF)
                </Badge>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">TODOS os 5 pacotes inclusos</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Automação completa e integrada</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Economia de mais de 50%</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Cobertura total do seu negócio</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Melhor custo-benefício</span>
                </div>
              </div>

              <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 transform hover:scale-105 transition-all duration-300">
                🚀 QUERO O PACOTE COMPLETO AGORA
              </Button>

              <div className="text-center text-sm text-green-400 font-semibold">
                ⚡ Oferta por tempo limitado
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Comparison Summary */}
        <div className="mt-12 text-center">
          <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">Resumo da Comparação</h3>
            <div className="grid grid-cols-2 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-red-400 mb-2">R$ 399,50</div>
                <div className="text-gray-400">Comprando Separado</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400 mb-2">R$ 198,80</div>
                <div className="text-gray-300">Pacote Completo</div>
              </div>
            </div>
            <div className="mt-6 p-4 bg-green-500/20 rounded-lg border border-green-500/30">
              <div className="text-2xl font-bold text-green-400">Você Economiza R$ 200,70!</div>
              <div className="text-green-300">Mais de 50% de desconto</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
