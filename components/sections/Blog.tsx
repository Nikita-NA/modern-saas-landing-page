'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, BookOpen, TrendingUp, Users } from 'lucide-react';
import GlassCard from '@/components/ui/glass-card';
import AnimatedButton from '@/components/ui/animated-button';

export default function Blog() {
  const blogPosts = [
    {
      title: 'The Future of AI in Marketing: 2025 Trends and Predictions',
      excerpt: 'Discover the latest AI marketing trends that will shape the industry in 2025, from personalized content generation to predictive analytics.',
      author: 'Sarah Johnson',
      date: '2025-01-15',
      readTime: '8 min read',
      category: 'AI Trends',
      image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
      featured: true,
    },
    {
      title: 'How to Optimize Your Content Strategy with AI Tools',
      excerpt: 'Learn practical strategies for leveraging AI to create more engaging content that converts better and saves time.',
      author: 'Michael Chen',
      date: '2025-01-12',
      readTime: '6 min read',
      category: 'Strategy',
      image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
    },
    {
      title: 'Case Study: 300% ROI Increase with AI Marketing Automation',
      excerpt: 'See how TechStart Inc. transformed their marketing results using our AI suite and achieved unprecedented growth.',
      author: 'Emily Rodriguez',
      date: '2025-01-10',
      readTime: '10 min read',
      category: 'Case Study',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
    },
    {
      title: 'Building Customer Personas with AI-Powered Analytics',
      excerpt: 'Discover how AI can help you create more accurate customer personas and improve your targeting strategies.',
      author: 'David Thompson',
      date: '2025-01-08',
      readTime: '7 min read',
      category: 'Analytics',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
    },
  ];

  const resources = [
    {
      title: 'AI Marketing Playbook',
      description: 'Complete guide to implementing AI in your marketing strategy',
      type: 'PDF Guide',
      icon: BookOpen,
      downloads: '12K+',
    },
    {
      title: 'ROI Calculator Template',
      description: 'Calculate the potential ROI of AI marketing tools for your business',
      type: 'Excel Template',
      icon: TrendingUp,
      downloads: '8K+',
    },
    {
      title: 'Webinar Series',
      description: 'Monthly webinars on AI marketing best practices and trends',
      type: 'Video Series',
      icon: Users,
      downloads: '25K+',
    },
  ];

  return (
    <section id="blog" className="py-24 bg-gradient-to-b from-transparent to-white/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Blog &{' '}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Resources
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay ahead of the curve with our latest insights, case studies, and resources 
            on AI-powered marketing strategies.
          </p>
        </motion.div>

        {/* Featured Blog Post */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <GlassCard className="overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-auto">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                </div>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full">
                    {blogPosts[0].category}
                  </span>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(blogPosts[0].date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {blogPosts[0].readTime}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {blogPosts[0].title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    By {blogPosts[0].author}
                  </span>
                  <AnimatedButton variant="outline">
                    Read More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </AnimatedButton>
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.slice(1).map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <GlassCard className="overflow-hidden h-full hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      By {post.author}
                    </span>
                    <button className="text-purple-600 hover:text-purple-700 font-medium text-sm">
                      Read More →
                    </button>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Resources Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Free Marketing Resources
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Download our comprehensive guides, templates, and tools to accelerate 
              your AI marketing journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <GlassCard className="p-6 text-center hover:shadow-xl transition-shadow duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <resource.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    {resource.title}
                  </h4>
                  <p className="text-gray-600 mb-4">
                    {resource.description}
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-purple-600 font-medium">
                      {resource.type}
                    </span>
                    <span className="text-sm text-gray-500">
                      {resource.downloads} downloads
                    </span>
                  </div>
                  <AnimatedButton variant="outline" size="sm" className="w-full">
                    Download Free
                  </AnimatedButton>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}