'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import GlassCard from './glass-card';
import AnimatedButton from './animated-button';

interface PricingCardProps {
  title: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  delay?: number;
}

export default function PricingCard({
  title,
  price,
  period,
  description,
  features,
  highlighted = false,
  delay = 0,
}: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className={highlighted ? 'scale-105' : ''}
    >
      <GlassCard className={`p-8 h-full ${highlighted ? 'ring-4 ring-purple-500/50' : ''}`}>
        {highlighted && (
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
              Most Popular
            </span>
          </div>
        )}
        
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
          <div className="flex items-baseline justify-center">
            <span className="text-5xl font-bold text-gray-900">{price}</span>
            <span className="text-gray-600 ml-2">/{period}</span>
          </div>
        </div>

        <ul className="space-y-4 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>

        <AnimatedButton
          variant={highlighted ? 'primary' : 'secondary'}
          className="w-full"
        >
          Get Started
        </AnimatedButton>
      </GlassCard>
    </motion.div>
  );
}