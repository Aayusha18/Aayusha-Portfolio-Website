import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeftIcon, TrendingUpIcon, UsersIcon, VideoIcon, MessageCircleIcon, HeartIcon, EyeIcon, ThumbsUpIcon, ThumbsDownIcon, SearchIcon, TargetIcon, LightbulbIcon, WrenchIcon, TestTubeIcon, PlayCircleIcon, XIcon } from 'lucide-react';
import { Navbar } from '../components/Navbar';
export function CampusCompassDetail() {
  const navigate = useNavigate();
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const journeyStages = [{
    icon: SearchIcon,
    title: 'Empathize',
    subtitle: 'User Research',
    description: 'Conducted surveys and interviews with graduate students',
    insights: ['Students miss 60% of events', 'Check 5+ platforms daily', 'Email overload is real'],
    color: 'from-[#BDDDFC] to-[#88BDF2]'
  }, {
    icon: TargetIcon,
    title: 'Define',
    subtitle: 'Problem Statement',
    description: 'Identified core pain points and user needs',
    insights: ['Scattered communication', 'Information overload', 'Need for centralization'],
    color: 'from-[#88BDF2] to-[#6A89A7]'
  }, {
    icon: LightbulbIcon,
    title: 'Ideate',
    subtitle: 'Solution Brainstorming',
    description: 'Explored platform options and engagement strategies',
    insights: ['Instagram as platform', 'Visual storytelling approach', 'Weekly reel format'],
    color: 'from-[#6A89A7] to-[#88BDF2]'
  }, {
    icon: WrenchIcon,
    title: 'Prototype',
    subtitle: 'MVP Development',
    description: 'Built Instagram account with LinkTree integration',
    insights: ['Content calendar created', 'Brand identity established', 'Engagement strategy defined'],
    color: 'from-[#88BDF2] to-[#BDDDFC]'
  }, {
    icon: TestTubeIcon,
    title: 'Test',
    subtitle: 'Validation & Iteration',
    description: 'Launched MVP and gathered user feedback',
    insights: ['88.2% would follow', '3.2K profile views', 'Positive user feedback'],
    color: 'from-[#BDDDFC] to-[#88BDF2]'
  }];
  return <div className="w-full min-h-screen bg-white">
      <Navbar />
      {/* Floating Video Button */}
      <motion.button initial={{
      scale: 0,
      opacity: 0
    }} animate={{
      scale: 1,
      opacity: 1
    }} transition={{
      delay: 1,
      type: 'spring'
    }} whileHover={{
      scale: 1.1
    }} whileTap={{
      scale: 0.9
    }} onClick={() => setIsVideoModalOpen(true)} className="fixed bottom-8 right-8 z-40 bg-gradient-to-r from-[#88BDF2] to-[#6A89A7] text-white rounded-full p-4 shadow-2xl hover:shadow-3xl transition-all flex items-center gap-3 group">
        <PlayCircleIcon className="w-6 h-6" />
        <span className="font-semibold hidden group-hover:inline-block pr-2 transition-all">
          Watch Explainer
        </span>
      </motion.button>
      {/* Video Modal */}
      <AnimatePresence>
        {isVideoModalOpen && <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} exit={{
        opacity: 0
      }} onClick={() => setIsVideoModalOpen(false)} className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4">
            <motion.div initial={{
          scale: 0.8,
          opacity: 0
        }} animate={{
          scale: 1,
          opacity: 1
        }} exit={{
          scale: 0.8,
          opacity: 0
        }} onClick={e => e.stopPropagation()} className="relative w-full max-w-4xl bg-white rounded-2xl overflow-hidden shadow-2xl">
              {/* Close Button */}
              <button onClick={() => setIsVideoModalOpen(false)} className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors">
                <XIcon className="w-6 h-6 text-[#384959]" />
              </button>
              {/* Video Title */}
              <div className="bg-gradient-to-r from-[#88BDF2] to-[#6A89A7] p-6 text-white">
                <h3 className="text-2xl font-bold flex items-center gap-3">
                  <PlayCircleIcon className="w-8 h-8" />
                  Campus Compass Explainer Video
                </h3>
                <p className="text-sm opacity-90 mt-1">
                  See the journey behind the MVP
                </p>
              </div>
              {/* Video Embed */}
              <div className="relative w-full" style={{
            paddingTop: '56.25%'
          }}>
                <iframe src="https://drive.google.com/file/d/1r0-AyGYsHuUtzR6cxG7DHmaHytvW-86S/preview" className="absolute top-0 left-0 w-full h-full" allow="autoplay" allowFullScreen />
              </div>
            </motion.div>
          </motion.div>}
      </AnimatePresence>
      {/* Compact Hero Section - No Image */}
      <section className="pt-24 pb-12 px-6 bg-gradient-to-b from-[#BDDDFC] to-white">
        <div className="max-w-6xl mx-auto">
          <motion.button initial={{
          opacity: 0,
          x: -20
        }} animate={{
          opacity: 1,
          x: 0
        }} onClick={() => navigate('/')} className="flex items-center gap-2 text-[#6A89A7] hover:text-[#88BDF2] mb-6 transition-colors">
            <ArrowLeftIcon className="w-5 h-5" />
            Back to Projects
          </motion.button>
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-[#384959] mb-4 font-['Poppins']">
              Campus Compass
            </h1>
            <p className="text-lg text-[#6A89A7] mb-4">
              Human Centered Design Thinking | MVP | Product Strategy
            </p>
            <p className="text-[#384959] leading-relaxed">
              Bridging campus engagement gaps through design thinking and
              digital accessibility
            </p>
          </motion.div>
        </div>
      </section>
      {/* Problem → Solution Journey */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} className="bg-gradient-to-br from-[#BDDDFC] to-white rounded-2xl p-6 border-2 border-[#88BDF2]">
              <h3 className="text-xl font-bold text-[#384959] mb-3">Problem</h3>
              <p className="text-[#6A89A7] text-sm leading-relaxed">
                Graduate students miss events due to scattered communication
                across multiple channels
              </p>
            </motion.div>
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.1
          }} className="bg-gradient-to-br from-[#88BDF2] to-[#6A89A7] rounded-2xl p-6 text-white">
              <h3 className="text-xl font-bold mb-3">Solution</h3>
              <p className="text-sm leading-relaxed">
                Instagram-based MVP centralizing events through visual
                storytelling and familiar platform
              </p>
            </motion.div>
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.2
          }} className="bg-gradient-to-br from-[#BDDDFC] to-white rounded-2xl p-6 border-2 border-[#88BDF2]">
              <h3 className="text-xl font-bold text-[#384959] mb-3">
                Approach
              </h3>
              <p className="text-[#6A89A7] text-sm leading-relaxed">
                Design thinking methodology with rapid iteration and user
                validation
              </p>
            </motion.div>
          </div>
          {/* Custom Product Journey Map */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="mb-8">
            <h3 className="text-2xl font-bold text-[#384959] mb-8 text-center">
              Design Thinking Journey
            </h3>
            {/* Desktop Journey - Horizontal */}
            <div className="hidden md:block">
              <div className="relative">
                {/* Connection Line */}
                <div className="absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-[#BDDDFC] via-[#88BDF2] to-[#BDDDFC]" />
                {/* Journey Stages */}
                <div className="grid grid-cols-5 gap-4">
                  {journeyStages.map((stage, index) => <motion.div key={index} initial={{
                  opacity: 0,
                  y: 20
                }} whileInView={{
                  opacity: 1,
                  y: 0
                }} viewport={{
                  once: true
                }} transition={{
                  delay: index * 0.15
                }} className="relative">
                      {/* Icon Circle */}
                      <div className="flex justify-center mb-4">
                        <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${stage.color} flex items-center justify-center shadow-lg relative z-10`}>
                          <stage.icon className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      {/* Content Card */}
                      <motion.div whileHover={{
                    y: -4
                  }} className="bg-white rounded-xl p-4 shadow-md border-2 border-[#BDDDFC] hover:border-[#88BDF2] transition-all">
                        <h4 className="text-lg font-bold text-[#384959] mb-1">
                          {stage.title}
                        </h4>
                        <p className="text-xs text-[#88BDF2] font-semibold mb-2">
                          {stage.subtitle}
                        </p>
                        <p className="text-xs text-[#6A89A7] mb-3 leading-relaxed">
                          {stage.description}
                        </p>
                        <div className="space-y-1">
                          {stage.insights.map((insight, i) => <div key={i} className="flex items-start gap-2">
                              <div className="w-1 h-1 rounded-full bg-[#88BDF2] mt-1.5 flex-shrink-0" />
                              <span className="text-xs text-[#384959]">
                                {insight}
                              </span>
                            </div>)}
                        </div>
                      </motion.div>
                    </motion.div>)}
                </div>
              </div>
            </div>
            {/* Mobile Journey - Vertical */}
            <div className="md:hidden space-y-6">
              {journeyStages.map((stage, index) => <motion.div key={index} initial={{
              opacity: 0,
              x: -20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: index * 0.1
            }} className="flex gap-4">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${stage.color} flex items-center justify-center shadow-lg flex-shrink-0`}>
                    <stage.icon className="w-7 h-7 text-white" />
                  </div>
                  {/* Content */}
                  <div className="flex-1 bg-white rounded-xl p-4 shadow-md border-2 border-[#BDDDFC]">
                    <h4 className="text-lg font-bold text-[#384959] mb-1">
                      {stage.title}
                    </h4>
                    <p className="text-xs text-[#88BDF2] font-semibold mb-2">
                      {stage.subtitle}
                    </p>
                    <p className="text-sm text-[#6A89A7] mb-3 leading-relaxed">
                      {stage.description}
                    </p>
                    <div className="space-y-1">
                      {stage.insights.map((insight, i) => <div key={i} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#88BDF2] mt-1.5 flex-shrink-0" />
                          <span className="text-xs text-[#384959]">
                            {insight}
                          </span>
                        </div>)}
                    </div>
                  </div>
                </motion.div>)}
            </div>
          </motion.div>
        </div>
      </section>
      {/* Compact Empathy Map & Personas */}
      <section className="py-12 px-6 bg-gradient-to-b from-white to-[#F5F9FC]">
        <div className="max-w-6xl mx-auto">
          <motion.h2 initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-3xl font-bold text-[#384959] text-center mb-8 font-['Poppins']">
            Understanding Our Users
          </motion.h2>
          {/* Compact Empathy Map */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-[#384959] mb-6 text-center">
              Empathy Map
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <motion.div initial={{
              opacity: 0,
              x: -20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <EyeIcon className="w-6 h-6 text-[#88BDF2]" />
                  <h4 className="text-lg font-bold text-[#384959]">
                    Says & Thinks
                  </h4>
                </div>
                <ul className="space-y-2 text-sm text-[#6A89A7]">
                  <li>"I always miss important events"</li>
                  <li>"There's too much information scattered everywhere"</li>
                  <li>"I wish there was one place for everything"</li>
                </ul>
              </motion.div>
              <motion.div initial={{
              opacity: 0,
              x: 20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <HeartIcon className="w-6 h-6 text-[#88BDF2]" />
                  <h4 className="text-lg font-bold text-[#384959]">Feels</h4>
                </div>
                <ul className="space-y-2 text-sm text-[#6A89A7]">
                  <li>Overwhelmed by multiple channels</li>
                  <li>FOMO about missing networking opportunities</li>
                  <li>Frustrated with email overload</li>
                </ul>
              </motion.div>
              <motion.div initial={{
              opacity: 0,
              x: -20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: 0.1
            }} className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <ThumbsDownIcon className="w-6 h-6 text-[#88BDF2]" />
                  <h4 className="text-lg font-bold text-[#384959]">Pains</h4>
                </div>
                <ul className="space-y-2 text-sm text-[#6A89A7]">
                  <li>Missed career opportunities</li>
                  <li>Information overload from 5+ platforms</li>
                  <li>Last-minute event discoveries</li>
                </ul>
              </motion.div>
              <motion.div initial={{
              opacity: 0,
              x: 20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: 0.1
            }} className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <ThumbsUpIcon className="w-6 h-6 text-[#88BDF2]" />
                  <h4 className="text-lg font-bold text-[#384959]">Gains</h4>
                </div>
                <ul className="space-y-2 text-sm text-[#6A89A7]">
                  <li>Centralized event information</li>
                  <li>Visual, engaging content</li>
                  <li>Platform they already use daily</li>
                </ul>
              </motion.div>
            </div>
          </div>
          {/* Compact Personas */}
          <div>
            <h3 className="text-2xl font-bold text-[#384959] mb-6 text-center">
              User Personas
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} className="bg-gradient-to-br from-[#88BDF2] to-[#6A89A7] rounded-xl p-6 text-white shadow-lg">
                <div className="text-center mb-4">
                  <div className="w-20 h-20 bg-white rounded-full mx-auto mb-3 flex items-center justify-center">
                    <UsersIcon className="w-10 h-10 text-[#88BDF2]" />
                  </div>
                  <h4 className="text-xl font-bold">The Networker</h4>
                  <p className="text-sm opacity-90">Sarah, 24 | MBA Student</p>
                </div>
                <div className="space-y-2 text-sm">
                  <p>
                    <strong>Goal:</strong> Attend career-building events
                  </p>
                  <p>
                    <strong>Challenge:</strong> Misses events due to email
                    overload
                  </p>
                  <p>
                    <strong>Needs:</strong> Quick, visual event updates
                  </p>
                </div>
              </motion.div>
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: 0.1
            }} className="bg-gradient-to-br from-[#BDDDFC] to-white rounded-xl p-6 border-2 border-[#88BDF2] shadow-lg">
                <div className="text-center mb-4">
                  <div className="w-20 h-20 bg-[#88BDF2] rounded-full mx-auto mb-3 flex items-center justify-center">
                    <UsersIcon className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-[#384959]">
                    The Busy Achiever
                  </h4>
                  <p className="text-sm text-[#6A89A7]">
                    Mike, 26 | MS Student
                  </p>
                </div>
                <div className="space-y-2 text-sm text-[#384959]">
                  <p>
                    <strong>Goal:</strong> Balance academics and social life
                  </p>
                  <p>
                    <strong>Challenge:</strong> Limited time to check multiple
                    platforms
                  </p>
                  <p>
                    <strong>Needs:</strong> One-stop event hub
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      {/* Impact & Metrics - Smaller Images */}
      <section className="py-12 px-6 bg-gradient-to-b from-[#F5F9FC] to-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2 initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-3xl font-bold text-[#384959] text-center mb-8 font-['Poppins']">
            Impact & Results
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Key Metrics - Smaller */}
            <motion.div initial={{
            opacity: 0,
            x: -20
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="max-w-sm mx-auto">
                <img src="/Screenshot_2025-11-06_165145.png" alt="Campus Compass Metrics Dashboard" className="w-full h-auto rounded-lg mb-4" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#88BDF2]">3.2K</div>
                  <div className="text-sm text-[#6A89A7]">Profile Views</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#88BDF2]">196</div>
                  <div className="text-sm text-[#6A89A7]">Interactions</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#88BDF2]">89</div>
                  <div className="text-sm text-[#6A89A7]">New Followers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#88BDF2]">55</div>
                  <div className="text-sm text-[#6A89A7]">Content Shared</div>
                </div>
              </div>
            </motion.div>
            {/* Engagement Breakdown - Smaller */}
            <motion.div initial={{
            opacity: 0,
            x: 20
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="max-w-sm mx-auto">
                <img src="/Screenshot_2025-11-06_165209.png" alt="Campus Compass Views Breakdown" className="w-full h-auto rounded-lg" />
              </div>
            </motion.div>
          </div>
          {/* User Validation - Smaller Image */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-[#384959] mb-6 text-center">
              User Validation
            </h3>
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div className="max-w-sm mx-auto">
                <img src="/Screenshot_2025-11-06_165258.png" alt="Would you follow Campus Compass poll results" className="w-full h-auto rounded-lg" />
              </div>
              <div>
                <div className="mb-6">
                  <div className="text-5xl font-bold text-[#88BDF2] mb-2">
                    88.2%
                  </div>
                  <p className="text-[#384959] text-lg">
                    of surveyed students said they would follow Campus Compass
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 text-[#6A89A7]">
                    <div className="w-6 h-6 rounded-full bg-[#88BDF2] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                    <span>"Finally, I can see all events in one place!"</span>
                  </div>
                  <div className="flex items-start gap-3 text-[#6A89A7]">
                    <div className="w-6 h-6 rounded-full bg-[#88BDF2] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                    <span>"The reels make it so easy to stay updated."</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Key Features & Reflection */}
      <section className="py-12 px-6 bg-[#BDDDFC]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-4 mb-8">
            {[{
            icon: VideoIcon,
            label: 'Weekly Event Reels'
          }, {
            icon: TrendingUpIcon,
            label: 'LinkTree Integration'
          }, {
            icon: UsersIcon,
            label: 'Community Engagement'
          }, {
            icon: MessageCircleIcon,
            label: 'Direct Feedback'
          }].map((feature, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.05
          }} className="bg-white rounded-xl p-4 text-center shadow-md">
                <feature.icon className="w-8 h-8 text-[#88BDF2] mx-auto mb-2" />
                <p className="text-sm font-semibold text-[#384959]">
                  {feature.label}
                </p>
              </motion.div>)}
          </div>
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="bg-gradient-to-r from-[#88BDF2] to-[#6A89A7] rounded-2xl p-8 text-center shadow-xl">
            <blockquote className="text-xl md:text-2xl text-white font-serif italic leading-relaxed">
              "Great products don't always need complex tech — sometimes,
              empathy and accessibility make the biggest impact."
            </blockquote>
          </motion.div>
          <div className="text-center mt-8">
            <motion.button whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }} onClick={() => navigate('/')} className="px-8 py-3 bg-white text-[#384959] rounded-full font-semibold flex items-center gap-2 mx-auto shadow-lg hover:shadow-xl transition-shadow">
              <ArrowLeftIcon className="w-5 h-5" />
              Back to All Projects
            </motion.button>
          </div>
        </div>
      </section>
    </div>;
}