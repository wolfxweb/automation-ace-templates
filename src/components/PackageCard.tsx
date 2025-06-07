
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, ArrowRight } from 'lucide-react';

interface Package {
  id: number;
  title: string;
  subtitle: string;
  price: string;
  icon: string;
  features: string[];
  benefits: string[];
}

interface PackageCardProps {
  package: Package;
}

export const PackageCard = ({ package: pkg }: PackageCardProps) => {
  return (
    <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 transform hover:scale-105 group">
      <CardHeader className="text-center">
        <div className="text-6xl mb-4">{pkg.icon}</div>
        <CardTitle className="text-xl text-white mb-2 group-hover:text-purple-400 transition-colors">
          {pkg.title}
        </CardTitle>
        <p className="text-gray-400 text-sm leading-relaxed">{pkg.subtitle}</p>
        
        <div className="mt-6">
          <div className="text-3xl font-bold text-white mb-2">
            R$ {pkg.price}
          </div>
          <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">
            Templates Prontos
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <div>
          <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
            🎯 O que você recebe:
          </h4>
          <ul className="space-y-2">
            {pkg.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2 text-sm">
                <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
            💎 Benefícios:
          </h4>
          <ul className="space-y-2">
            {pkg.benefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-2 text-sm">
                <Check className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        <Button className="w-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 hover:from-purple-600 hover:to-pink-600 text-white border border-purple-500/30 hover:border-purple-500 transition-all duration-300">
          Adquirir Este Pacote
          <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </CardContent>
    </Card>
  );
};
