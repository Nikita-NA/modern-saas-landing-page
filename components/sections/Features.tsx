'use client';

import { motion } from 'framer-motion';
import { 
  Brain, 
  Target, 
  BarChart3, 
  MessageSquare, 
  Image, 
  Zap,
  Users,
  Shield
} from 'lucide-react';
import FeatureCard from '@/components/ui/feature-card';

export default function Features() {
  const features = [
    {
      icon: Brain,
      title: 'AI Content Generation',
      description: 'Create compelling copy, blogs, and social media content in seconds with advanced AI algorithms trained on marketing best practices.',
    },
    {
      icon: Target,
      title: 'Smart Campaign Optimization',
      description: 'Automatically optimize your ad campaigns across platforms using machine learning to maximize ROI and reduce costs.',
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Get deep insights into campaign performance with AI-powered analytics that predict trends and suggest improvements.',
    },
    {
      icon: MessageSquare,
      title: 'Conversational AI Chatbots',
      description: 'Deploy intelligent chatbots that understand context and provide personalized customer experiences 24/7.',
    },
    {
      icon: Image,
      title: 'Visual Content Creator',
      description: 'Generate stunning graphics, social media posts, and marketing materials using AI-powered design tools.',
    },
    {
      icon: Zap,
      title: 'Workflow Automation',
      description: 'Automate repetitive marketing tasks and workflows to save time and ensure consistency across campaigns.',
    },
    {
      icon: Users,
      title: 'Audience Intelligence',
      description: 'Discover hidden audience segments and optimize targeting with AI-driven customer behavior analysis.',
    },
    {
      icon: Shield,
      title: 'Brand Safety Monitoring',
      description: 'Protect your brand reputation with AI-powered content monitoring and sentiment analysis across all channels.',
    },
  ];

  return (
    <section id="features" className="py-24 bg-gradient-to-b from-transparent to-white/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Powerful AI Features for{' '}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Modern Marketing
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the comprehensive suite of AI-powered tools designed to transform 
            your marketing strategy and accelerate business growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}