'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, 
  FileText, 
  BarChart3, 
  Bot, 
  Palette, 
  Zap, 
  Shield, 
  Headphones,
  Check,
  X,
  Calculator,
  TrendingUp,
  Sparkles,
  Crown,
  Star
} from 'lucide-react';
import GlassCard from './glass-card';
import AnimatedButton from './animated-button';

interface Feature {
  id: string;
  name: string;
  icon: any;
  description: string;
  basePrice: number;
  pricePerUser?: number;
  category: 'core' | 'advanced' | 'premium';
  popular?: boolean;
}

interface PricingTier {
  name: string;
  basePrice: number;
  maxUsers: number;
  color: string;
  gradient: string;
  icon: any;
  description: string;
  badge?: string;
}

export default function PricingCalculator() {
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
    'content-generation',
    'basic-analytics',
    'email-automation'
  ]);
  const [userCount, setUserCount] = useState(5);
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [selectedTier, setSelectedTier] = useState<string>('professional');
  const [showComparison, setShowComparison] = useState(false);

  const features: Feature[] = [
    {
      id: 'content-generation',
      name: 'AI Content Generation',
      icon: FileText,
      description: 'Generate unlimited marketing copy and content',
      basePrice: 29,
      pricePerUser: 5,
      category: 'core',
      popular: true
    },
    {
      id: 'basic-analytics',
      name: 'Basic Analytics',
      icon: BarChart3,
      description: 'Essential performance metrics and insights',
      basePrice: 19,
      pricePerUser: 3,
      category: 'core'
    },
    {
      id: 'email-automation',
      name: 'Email Automation',
      icon: Zap,
      description: 'Automated email campaigns and sequences',
      basePrice: 25,
      pricePerUser: 4,
      category: 'core'
    },
    {
      id: 'ai-chatbot',
      name: 'AI Chatbot Builder',
      icon: Bot,
      description: 'Create intelligent customer service bots',
      basePrice: 49,
      pricePerUser: 8,
      category: 'advanced',
      popular: true
    },
    {
      id: 'visual-creator',
      name: 'Visual Content Creator',
      icon: Palette,
      description: 'AI-powered graphic design and visual content',
      basePrice: 39,
      pricePerUser: 6,
      category: 'advanced'
    },
    {
      id: 'advanced-analytics',
      name: 'Advanced Analytics',
      icon: TrendingUp,
      description: 'Predictive analytics and custom reporting',
      basePrice: 59,
      pricePerUser: 10,
      category: 'advanced'
    },
    {
      id: 'white-label',
      name: 'White Label Solution',
      icon: Crown,
      description: 'Brand the platform as your own',
      basePrice: 199,
      pricePerUser: 15,
      category: 'premium'
    },
    {
      id: 'priority-support',
      name: 'Priority Support',
      icon: Headphones,
      description: '24/7 dedicated support with 1-hour response',
      basePrice: 99,
      pricePerUser: 8,
      category: 'premium'
    },
    {
      id: 'enterprise-security',
      name: 'Enterprise Security',
      icon: Shield,
      description: 'Advanced security features and compliance',
      basePrice: 149,
      pricePerUser: 12,
      category: 'premium'
    }
  ];

  const tiers: PricingTier[] = [
    {
      name: 'Starter',
      basePrice: 29,
      maxUsers: 3,
      color: 'text-blue-600',
      gradient: 'from-blue-500 to-cyan-500',
      icon: Star,
      description: 'Perfect for small teams getting started',
    },
    {
      name: 'Professional',
      basePrice: 99,
      maxUsers: 15,
      color: 'text-purple-600',
      gradient: 'from-purple-500 to-pink-500',
      icon: Sparkles,
      description: 'Ideal for growing businesses',
      badge: 'Most Popular'
    },
    {
      name: 'Enterprise',
      basePrice: 299,
      maxUsers: 100,
      color: 'text-orange-600',
      gradient: 'from-orange-500 to-red-500',
      icon: Crown,
      description: 'For large organizations with custom needs',
      badge: 'Best Value'
    }
  ];

  const calculatePrice = () => {
    let totalPrice = 0;
    
    selectedFeatures.forEach(featureId => {
      const feature = features.find(f => f.id === featureId);
      if (feature) {
        totalPrice += feature.basePrice;
        if (feature.pricePerUser) {
          totalPrice += feature.pricePerUser * Math.max(0, userCount - 1);
        }
      }
    });

    // Apply tier discount
    const tier = tiers.find(t => t.name.toLowerCase() === selectedTier);
    if (tier && totalPrice > tier.basePrice) {
      const discount = tier.name === 'Enterprise' ? 0.2 : tier.name === 'Professional' ? 0.1 : 0;
      totalPrice *= (1 - discount);
    }

    // Apply yearly discount
    if (billingCycle === 'yearly') {
      totalPrice *= 0.8; // 20% discount for yearly
    }

    return Math.round(totalPrice);
  };

  const toggleFeature = (featureId: string) => {
    setSelectedFeatures(prev => 
      prev.includes(featureId) 
        ? prev.filter(id => id !== featureId)
        : [...prev, featureId]
    );
  };

  const getFeaturesByCategory = (category: string) => {
    return features.filter(f => f.category === category);
  };

  const totalPrice = calculatePrice();
  const yearlyPrice = billingCycle === 'yearly' ? totalPrice * 12 : totalPrice * 12 * 0.8;
  const monthlySavings = billingCycle === 'yearly' ? Math.round((totalPrice * 12 * 0.2) / 12) : 0;

  return (
    <div className="max-w-6xl mx-auto">
      <GlassCard className="p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center">
              <Calculator className="w-6 h-6 text-white" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Interactive Pricing Calculator
          </h3>
          <p className="text-gray-600">
            Customize your plan and see real-time pricing updates
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Configuration Panel */}
          <div className="lg:col-span-2 space-y-8">
            {/* Billing Toggle */}
            <div className="flex items-center justify-center">
              <div className="bg-gray-100 p-1 rounded-xl flex">
                <button
                  onClick={() => setBillingCycle('monthly')}
                  className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
                    billingCycle === 'monthly'
                      ? 'bg-white shadow-md text-purple-600'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setBillingCycle('yearly')}
                  className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 relative ${
                    billingCycle === 'yearly'
                      ? 'bg-white shadow-md text-purple-600'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Yearly
                  <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                    20% OFF
                  </span>
                </button>
              </div>
            </div>

            {/* User Count Slider */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="text-lg font-semibold text-gray-900">
                  Team Size
                </label>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-purple-600" />
                  <span className="text-2xl font-bold text-purple-600">
                    {userCount}
                  </span>
                  <span className="text-gray-600">users</span>
                </div>
              </div>
              <div className="relative">
                <input
                  type="range"
                  min="1"
                  max="50"
                  value={userCount}
                  onChange={(e) => setUserCount(parseInt(e.target.value))}
                  className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  style={{
                    background: `linear-gradient(to right, #8b5cf6 0%, #8b5cf6 ${(userCount / 50) * 100}%, #e5e7eb ${(userCount / 50) * 100}%, #e5e7eb 100%)`
                  }}
                />
                <div className="flex justify-between text-sm text-gray-500 mt-2">
                  <span>1 user</span>
                  <span>50+ users</span>
                </div>
              </div>
            </div>

            {/* Tier Selection */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-900">Choose Your Tier</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {tiers.map((tier) => (
                  <motion.div
                    key={tier.name}
                    className={`relative p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                      selectedTier === tier.name.toLowerCase()
                        ? 'border-purple-500 bg-purple-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => setSelectedTier(tier.name.toLowerCase())}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {tier.badge && (
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                        <span className={`bg-gradient-to-r ${tier.gradient} text-white px-3 py-1 rounded-full text-xs font-medium`}>
                          {tier.badge}
                        </span>
                      </div>
                    )}
                    <div className="text-center">
                      <div className={`w-8 h-8 bg-gradient-to-r ${tier.gradient} rounded-lg flex items-center justify-center mx-auto mb-2`}>
                        <tier.icon className="w-4 h-4 text-white" />
                      </div>
                      <h5 className={`font-semibold ${tier.color} mb-1`}>
                        {tier.name}
                      </h5>
                      <p className="text-sm text-gray-600">
                        Up to {tier.maxUsers} users
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Feature Categories */}
            {['core', 'advanced', 'premium'].map((category) => (
              <div key={category} className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-semibold text-gray-900 capitalize">
                    {category} Features
                  </h4>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    category === 'core' ? 'bg-blue-100 text-blue-800' :
                    category === 'advanced' ? 'bg-purple-100 text-purple-800' :
                    'bg-orange-100 text-orange-800'
                  }`}>
                    {getFeaturesByCategory(category).length} available
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {getFeaturesByCategory(category).map((feature) => (
                    <motion.div
                      key={feature.id}
                      className={`relative p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                        selectedFeatures.includes(feature.id)
                          ? 'border-purple-500 bg-purple-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => toggleFeature(feature.id)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {feature.popular && (
                        <div className="absolute -top-2 -right-2">
                          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-1 rounded-full">
                            <Star className="w-3 h-3" />
                          </div>
                        </div>
                      )}
                      <div className="flex items-start space-x-3">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                          selectedFeatures.includes(feature.id)
                            ? 'bg-purple-500 text-white'
                            : 'bg-gray-100 text-gray-600'
                        }`}>
                          <feature.icon className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <h5 className="font-semibold text-gray-900">
                              {feature.name}
                            </h5>
                            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                              selectedFeatures.includes(feature.id)
                                ? 'border-purple-500 bg-purple-500'
                                : 'border-gray-300'
                            }`}>
                              {selectedFeatures.includes(feature.id) && (
                                <Check className="w-3 h-3 text-white" />
                              )}
                            </div>
                          </div>
                          <p className="text-sm text-gray-600 mb-2">
                            {feature.description}
                          </p>
                          <div className="text-sm font-medium text-purple-600">
                            ${feature.basePrice}/mo
                            {feature.pricePerUser && (
                              <span className="text-gray-500">
                                {' '}+ ${feature.pricePerUser}/user
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Pricing Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <GlassCard className="p-6 border-2 border-purple-200">
                <div className="text-center mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Your Custom Plan
                  </h4>
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-4xl font-bold text-purple-600">
                      ${totalPrice}
                    </span>
                    <div className="text-left">
                      <div className="text-gray-600">/{billingCycle === 'monthly' ? 'month' : 'year'}</div>
                      {billingCycle === 'yearly' && (
                        <div className="text-sm text-green-600 font-medium">
                          Save ${monthlySavings}/mo
                        </div>
                      )}
                    </div>
                  </div>
                  {billingCycle === 'yearly' && (
                    <div className="mt-2 text-sm text-gray-600">
                      Billed annually: ${yearlyPrice}
                    </div>
                  )}
                </div>

                {/* Selected Features Summary */}
                <div className="space-y-3 mb-6">
                  <h5 className="font-semibold text-gray-900">
                    Included Features ({selectedFeatures.length})
                  </h5>
                  <div className="max-h-48 overflow-y-auto space-y-2">
                    {selectedFeatures.map((featureId) => {
                      const feature = features.find(f => f.id === featureId);
                      return feature ? (
                        <div key={featureId} className="flex items-center justify-between text-sm">
                          <div className="flex items-center space-x-2">
                            <Check className="w-4 h-4 text-green-500" />
                            <span className="text-gray-700">{feature.name}</span>
                          </div>
                          <span className="text-gray-500">
                            ${feature.basePrice + (feature.pricePerUser ? feature.pricePerUser * Math.max(0, userCount - 1) : 0)}
                          </span>
                        </div>
                      ) : null;
                    })}
                  </div>
                </div>

                {/* Pricing Breakdown */}
                <div className="border-t border-gray-200 pt-4 mb-6">
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="text-gray-900">
                        ${Math.round(calculatePrice() / (billingCycle === 'yearly' ? 0.8 : 1))}
                      </span>
                    </div>
                    {billingCycle === 'yearly' && (
                      <div className="flex justify-between text-green-600">
                        <span>Yearly Discount (20%)</span>
                        <span>-${Math.round(calculatePrice() / 0.8 * 0.2)}</span>
                      </div>
                    )}
                    <div className="flex justify-between font-semibold text-lg border-t border-gray-200 pt-2">
                      <span>Total</span>
                      <span className="text-purple-600">${totalPrice}</span>
                    </div>
                  </div>
                </div>

                <AnimatedButton variant="primary" className="w-full mb-4">
                  Start Free Trial
                </AnimatedButton>

                <button
                  onClick={() => setShowComparison(!showComparison)}
                  className="w-full text-sm text-purple-600 hover:text-purple-700 font-medium"
                >
                  {showComparison ? 'Hide' : 'Show'} Plan Comparison
                </button>
              </GlassCard>
            </div>
          </div>
        </div>

        {/* Plan Comparison Modal */}
        <AnimatePresence>
          {showComparison && (
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowComparison(false)}
            >
              <motion.div
                className="bg-white rounded-2xl p-6 max-w-4xl w-full max-h-[80vh] overflow-y-auto"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">
                    Plan Comparison
                  </h3>
                  <button
                    onClick={() => setShowComparison(false)}
                    className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-4 px-4">Features</th>
                        {tiers.map((tier) => (
                          <th key={tier.name} className="text-center py-4 px-4">
                            <div className={`font-semibold ${tier.color}`}>
                              {tier.name}
                            </div>
                            <div className="text-sm text-gray-600 mt-1">
                              ${tier.basePrice}/mo
                            </div>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {features.map((feature) => (
                        <tr key={feature.id} className="border-b border-gray-100">
                          <td className="py-3 px-4">
                            <div className="flex items-center space-x-3">
                              <feature.icon className="w-5 h-5 text-gray-600" />
                              <div>
                                <div className="font-medium text-gray-900">
                                  {feature.name}
                                </div>
                                <div className="text-sm text-gray-600">
                                  {feature.description}
                                </div>
                              </div>
                            </div>
                          </td>
                          {tiers.map((tier) => (
                            <td key={tier.name} className="text-center py-3 px-4">
                              {feature.category === 'core' || 
                               (feature.category === 'advanced' && tier.name !== 'Starter') ||
                               (feature.category === 'premium' && tier.name === 'Enterprise') ? (
                                <Check className="w-5 h-5 text-green-500 mx-auto" />
                              ) : (
                                <X className="w-5 h-5 text-gray-300 mx-auto" />
                              )}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </GlassCard>
    </div>
  );
}