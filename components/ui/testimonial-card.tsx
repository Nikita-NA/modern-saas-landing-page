'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import GlassCard from './glass-card';

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

export default function TestimonialCard({
  name,
  role,
  company,
  content,
  rating,
  avatar,
}: TestimonialCardProps) {
  return (
    <GlassCard className="p-8 h-full">
      <div className="flex flex-col h-full">
        <div className="flex items-center mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-5 h-5 ${
                i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
              }`}
            />
          ))}
        </div>
        
        <blockquote className="text-gray-700 mb-6 flex-grow">
          "{content}"
        </blockquote>
        
        <div className="flex items-center">
          <img
            src={avatar}
            alt={name}
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
          <div>
            <div className="font-semibold text-gray-900">{name}</div>
            <div className="text-sm text-gray-600">{role} at {company}</div>
          </div>
        </div>
      </div>
    </GlassCard>
  );
}