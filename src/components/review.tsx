import React from 'react';
import { Star } from 'lucide-react';
import Image from 'next/image';

interface Review {
  name: string;
  time: string;
  text: string;
  avatar?: string;
  initials?: string;
  bg?: string;
}

const reviews: Review[] = [
  {
    name: 'Aman R., Software Developer',
    time: '1 months ago',
    text: 'YuzsAI Career Coach truly transformed the way I approach my professional growth. From resume refinement to mock interviews, it guided me every step of the way. The personalized insights and daily career tips helped me land a job in my dream company. Highly recommend it for anyone serious about their future!',
    avatar: 'https://i.pravatar.cc/40?img=1',
  },
  {
    name: '– Sneha T., B.Tech Student',
    time: '2 months ago',
    text: 'As a final-year engineering student, I often felt lost when it came to career planning. YuzsAI acted like a personal mentor—helping me identify my strengths, build my LinkedIn profile, and prepare for campus placements. It’s like having a career counselor in your pocket!',
    avatar: 'https://i.pravatar.cc/40?img=2',
  },
  {
    name: '– Rajeev M., Business Analyst',
    time: '11 months ago',
    text: 'What I loved about YuzsAI Career Coach is how it combines AI-driven suggestions with real-world relevance. It helped me discover career paths I hadn’t even considered and made goal-setting much easier. The weekly progress reports kept me on track and motivated.',
    avatar: '',
    initials: 'H',
    bg: 'bg-purple-700'
  },
  {
    name: '– Neha P., MBA Graduate',
    time: '11 months ago',
    text: 'Before using YuzsAI, I lacked confidence during interviews and wasn’t sure about my long-term career goals. The coach not only helped me polish my skills but also gave me clarity on what I truly want professionally. I now feel more confident and focused than ever.',
    avatar: '',
    initials: 'C',
    bg: 'bg-gray-700'
  }
];

const ReviewCard: React.FC<{ review: Review }> = ({ review }) => {
  return (
    <div className="bg-muted/50 text-white rounded-xl p-4 w-full max-w-sm relative">
      <div className="flex items-center space-x-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <p className="text-sm mb-3">{review.text}</p>
      <p className="text-sm text-blue-300 mb-6">Read more</p>
      <div className="flex items-center space-x-3 absolute -bottom-6">
        {review.avatar ? (
         <Image
  src={review.avatar}
  alt={review.name}
  width={40}
  height={40}
  className="w-10 h-10 rounded-full border-2 border-white"
  unoptimized // Optional: use this if you're loading external images and not using a loader
/>
        ) : (
          <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${review.bg}`}>
            {review.initials}
          </div>
        )}
        <div>
          <p className="font-semibold text-white text-sm">{review.name}</p>
          <p className="text-xs text-zinc-400">{review.time}</p>
        </div>
      </div>
    </div>
  );
};

const GoogleReviews = () => {
  return (
    <div className="bg-muted/50  px-6 py-12 text-white">
      <div className="max-w-6xl mx-auto">
      <h1 className='text-center text-4xl font-bold tracking-tighter'>What our Users Say</h1>
        <div className="flex justify-between items-center mb-8">
          <div>
            <div className="flex items-center space-x-2">
              
              <p className="text-2xl font-bold text-white">Google</p>
              
              <p className="text-lg">Rating</p>
            </div>
            <div className="flex items-center space-x-2 mt-1">
              <p className="text-xl font-semibold">5.0</p>
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
              <p className="text-sm text-zinc-400">55 reviews</p>
            </div>
          </div>
          <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 text-sm font-medium">
            Write a review
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reviews.map((review, index) => (
            <ReviewCard review={review} key={index} />
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default GoogleReviews;
