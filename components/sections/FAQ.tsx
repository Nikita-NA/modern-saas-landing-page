'use client';

import { motion } from 'framer-motion';
import FAQItem from '@/components/ui/faq-item';

export default function FAQ() {
  const faqs = [
    {
      question: 'How does the AI content generation work?',
      answer: 'Our AI uses advanced machine learning models trained on vast datasets of high-performing marketing content. Simply provide a brief description of what you need, and our AI will generate compelling, brand-consistent content in seconds.',
    },
    {
      question: 'Can I integrate ADmyBRAND AI with my existing tools?',
      answer: 'Yes! We offer integrations with over 50+ popular marketing tools including HubSpot, Salesforce, Google Analytics, Facebook Ads, and more. Our API allows for custom integrations as well.',
    },
    {
      question: 'Is there a free trial available?',
      answer: 'Absolutely! We offer a 14-day free trial with full access to all features. No credit card required to start. You can upgrade to a paid plan anytime during or after your trial.',
    },
    {
      question: 'How accurate is the AI-powered analytics?',
      answer: 'Our AI analytics achieve over 95% accuracy by analyzing millions of data points and using predictive modeling. The system continuously learns from your campaigns to improve accuracy over time.',
    },
    {
      question: 'What kind of support do you provide?',
      answer: 'We offer comprehensive support including live chat, email support, extensive documentation, video tutorials, and webinar training sessions. Enterprise customers get dedicated account managers.',
    },
    {
      question: 'Can I customize the AI models for my brand?',
      answer: 'Yes, our Professional and Enterprise plans allow you to train custom AI models with your brand\'s voice, style, and specific industry knowledge for more personalized content generation.',
    },
    {
      question: 'Is my data secure with ADmyBRAND AI?',
      answer: 'Security is our top priority. We use enterprise-grade encryption, comply with GDPR and CCPA regulations, and never share your data with third parties. All data is processed securely in our SOC 2 certified infrastructure.',
    },
    {
      question: 'How quickly can I see results?',
      answer: 'Most customers see improvements in their marketing metrics within the first week of using our platform. Content creation time is reduced by 80% immediately, and campaign performance typically improves within 2-4 weeks.',
    },
  ];

  return (
    <section id="faq" className="py-24 bg-gradient-to-b from-white/50 to-transparent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Get answers to common questions about our AI marketing suite.
          </p>
        </motion.div>

        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}