'use client';

import { motion } from 'framer-motion';
import PricingCalculatorComponent from '@/components/ui/pricing-calculator';

export default function PricingCalculatorSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white/50 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Calculate Your{' '}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Perfect Plan
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Use our interactive calculator to find the ideal pricing plan for your business needs. 
            Customize features and see real-time pricing updates.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <PricingCalculatorComponent />
        </motion.div>
      </div>
    </section>
  );
}