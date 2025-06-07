
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Crown, Shield, Zap, ArrowRight } from 'lucide-react';

export const CTASection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-purple-900/30 to-pink-900/30">
      <div className="max-w-4xl mx-auto text-center">
        {/* Urgency Badge */}
        <Badge className="mb-6 bg-red-500/20 text-red-300 border-red-500/30 px-6 py-3 text-lg animate-pulse">
          🚨 Últimas Horas - Oferta Expira em Breve!
        </Badge>

        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Não Deixe Seu Negócio
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            {" "}Ficar Para Trás
          </span>
        </h2>

        <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
          Enquanto você hesita, seus concorrentes estão automatizando e ganhando vantagem. 
          <strong className="text-white"> Faça a escolha inteligente AGORA!</strong>
        </p>

        {/* Benefits Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <Zap className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-white font-bold mb-2">Implementação Instantânea</h3>
              <p className="text-gray-400 text-sm">Templates prontos para usar em minutos, não semanas</p>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <Shield className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-white font-bold mb-2">Garantia de 7 Dias</h3>
              <p className="text-gray-400 text-sm">Satisfação garantida ou seu dinheiro de volta</p>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <Crown className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-white font-bold mb-2">Economia Máxima</h3>
              <p className="text-gray-400 text-sm">Mais de 50% OFF apenas por tempo limitado</p>
            </CardContent>
          </Card>
        </div>

        {/* Final CTA */}
        <div className="bg-black/30 backdrop-blur-sm rounded-3xl p-8 mb-8 border border-white/10">
          <div className="mb-6">
            <div className="text-sm text-gray-400 line-through mb-2">De R$ 399,50</div>
            <div className="text-5xl md:text-6xl font-bold text-white mb-2">R$ 198,80</div>
            <Badge className="bg-green-500 text-white font-bold text-lg px-4 py-2">
              ECONOMIZE R$ 200,70 (50% OFF)
            </Badge>
          </div>

          <div className="space-y-4">
            <Button 
              size="lg" 
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 text-xl rounded-2xl transform hover:scale-105 transition-all duration-300 shadow-2xl font-bold"
            >
              🚀 SIM! QUERO AUTOMATIZAR MEU NEGÓCIO AGORA
              <ArrowRight className="ml-3 w-6 h-6" />
            </Button>

            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <span>✅ Acesso Imediato</span>
              <span>✅ Garantia de 7 Dias</span>
              <span>✅ Suporte Incluído</span>
              <span>✅ Atualizações Gratuitas</span>
            </div>
          </div>
        </div>

        {/* Security and Trust */}
        <div className="text-center">
          <p className="text-gray-400 text-sm mb-4">🔒 Compra 100% Segura e Protegida</p>
          <div className="flex justify-center items-center gap-4 text-xs text-gray-500">
            <span>Pagamento Seguro</span>
            <span>•</span>
            <span>SSL Certificado</span>
            <span>•</span>
            <span>Privacidade Garantida</span>
          </div>
        </div>

        {/* Final Urgency Message */}
        <div className="mt-12 p-6 bg-red-500/10 border border-red-500/30 rounded-2xl backdrop-blur-sm">
          <p className="text-red-300 font-bold text-lg">
            ⚠️ Esta oferta especial expira em breve e não sabemos quando voltará!
          </p>
          <p className="text-gray-300 text-sm mt-2">
            Mais de 1.000 profissionais já transformaram seus negócios. Seja o próximo!
          </p>
        </div>
      </div>
    </section>
  );
};
