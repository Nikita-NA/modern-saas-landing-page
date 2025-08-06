'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, Maximize, BarChart3, Brain, Zap } from 'lucide-react';
import GlassCard from '@/components/ui/glass-card';
import AnimatedButton from '@/components/ui/animated-button';

export default function Demo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(60);
  const [currentDemo, setCurrentDemo] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            setIsPlaying(false);
            return 100;
          }
          return prev + 1;
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const demoFeatures = [
    {
      title: 'AI Content Generation',
      description: 'Watch as our AI creates compelling marketing copy in seconds',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Campaign Analytics',
      description: 'See real-time insights and performance optimization in action',
      icon: BarChart3,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Workflow Automation',
      description: 'Experience seamless automation across all marketing channels',
      icon: Zap,
      color: 'from-green-500 to-teal-500',
    },
  ];

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying && progress >= 100) {
      setProgress(0);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const currentTime = Math.floor((progress / 100) * 252); // 4:12 = 252 seconds
  const totalTime = 252;

  return (
    <section id="demo" className="py-24 bg-gradient-to-b from-white/50 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            See ADmyBRAND AI{' '}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              In Action
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the power of AI-driven marketing through our interactive demos 
            and see how it transforms your workflow.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Video Player */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <GlassCard className="relative overflow-hidden group">
              <div className="aspect-video bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative">
                {/* Custom Demo Video */}
                <video
                  src="/demo%20video.mp4"
                  controls
                  className="w-full h-full object-contain rounded-xl bg-black"
                  poster="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                />
              </div>
            </GlassCard>
          </motion.div>

          {/* Demo Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {demoFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                  currentDemo === index
                    ? 'bg-white/80 backdrop-blur-sm shadow-lg scale-105'
                    : 'bg-white/40 backdrop-blur-sm hover:bg-white/60'
                }`}
                onClick={() => setCurrentDemo(index)}
                whileHover={{ scale: currentDemo === index ? 1.05 : 1.02 }}
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                    {currentDemo === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="mt-4"
                      >
                        <AnimatedButton variant="outline" size="sm">
                          Try This Feature
                        </AnimatedButton>
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Interactive Demo Stats */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {[
            { label: 'Demo Views', value: '50K+', change: '+23%' },
            { label: 'User Engagement', value: '94%', change: '+12%' },
            { label: 'Conversion Rate', value: '8.2%', change: '+45%' },
          ].map((stat, index) => (
            <GlassCard key={index} className="p-6 text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 mb-2">{stat.label}</div>
              <div className="text-green-600 text-sm font-medium">
                {stat.change} this month
              </div>
            </GlassCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
}