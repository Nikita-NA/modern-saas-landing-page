'use client';

import { motion } from 'framer-motion';
import PricingCard from '@/components/ui/pricing-card';

export default function Pricing() {
  const plans = [
    {
      title: 'Starter',
      price: '$29',
      period: 'month',
      description: 'Perfect for small businesses and startups',
      features: [
        'AI Content Generation (10,000 words/month)',
        'Basic Analytics Dashboard',
        'Email Campaign Automation',
        '2 Brand Profiles',
        'Standard Support',
        'API Access',
      ],
    },
    {
      title: 'Professional',
      price: '$99',
      period: 'month',
      description: 'Ideal for growing businesses and agencies',
      features: [
        'AI Content Generation (50,000 words/month)',
        'Advanced Analytics & Insights',
        'Multi-Channel Automation',
        '10 Brand Profiles',
        'AI Chatbot Builder',
        'Visual Content Creator',
        'Priority Support',
        'White-label Options',
      ],
      highlighted: true,
    },
    {
      title: 'Enterprise',
      price: '$299',
      period: 'month',
      description: 'For large organizations with custom needs',
      features: [
        'Unlimited AI Content Generation',
        'Custom AI Model Training',
        'Advanced Workflow Automation',
        'Unlimited Brand Profiles',
        'Dedicated Account Manager',
        'Custom Integrations',
        '24/7 Premium Support',
        'Advanced Security Features',
        'Custom Reporting',
      ],
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-white/50 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Choose Your{' '}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              AI Marketing Plan
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Flexible pricing options designed to scale with your business. 
            Start free and upgrade as you grow.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <PricingCard
              key={index}
              title={plan.title}
              price={plan.price}
              period={plan.period}
              description={plan.description}
              features={plan.features}
              highlighted={plan.highlighted}
              delay={index * 0.2}
            />
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 mb-4">
            All plans include a 14-day free trial. No credit card required.
          </p>
          <p className="text-sm text-gray-500">
            Need a custom solution? <a href="#contact" className="text-purple-600 hover:text-purple-700 font-medium">Contact our sales team</a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}