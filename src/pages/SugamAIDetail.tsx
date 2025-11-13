import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeftIcon, SearchIcon, TargetIcon, LightbulbIcon, WrenchIcon, TestTubeIcon, UsersIcon, ClockIcon, CheckCircleIcon, FileTextIcon, ChromeIcon, DatabaseIcon, ShieldIcon, SparklesIcon, TrendingUpIcon, PlayCircleIcon, XIcon } from 'lucide-react';
import { Navbar } from '../components/Navbar';
export function SugamAIDetail() {
  const navigate = useNavigate();
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const journeyStages = [{
    icon: SearchIcon,
    title: 'Empathize',
    subtitle: 'User Research',
    description: 'Interviewed HR credentialing teams to identify pain points',
    insights: ['Repetitive form-filling', 'Manual data duplication', 'Compliance risks'],
    color: 'from-[#BDDDFC] to-[#88BDF2]'
  }, {
    icon: TargetIcon,
    title: 'Define',
    subtitle: 'Problem Statement',
    description: 'Identified inefficiency in multi-form data duplication',
    insights: ['4-6 week delays', 'No centralized data', 'High error rates'],
    color: 'from-[#88BDF2] to-[#6A89A7]'
  }, {
    icon: LightbulbIcon,
    title: 'Ideate',
    subtitle: 'Solution Design',
    description: 'Designed dual-system: web app + Chrome extension',
    insights: ['AI-powered extraction', 'Automated form-filling', 'Human-in-loop validation'],
    color: 'from-[#6A89A7] to-[#88BDF2]'
  }, {
    icon: WrenchIcon,
    title: 'Prototype',
    subtitle: 'MVP Development',
    description: 'Built AI pipeline with OCR, extraction, and autofill',
    insights: ['AWS Textract integration', 'LangChain parsing', 'Chrome extension API'],
    color: 'from-[#88BDF2] to-[#BDDDFC]'
  }, {
    icon: TestTubeIcon,
    title: 'Test',
    subtitle: 'Validation & Iteration',
    description: 'Refined validation logic and UX with healthcare admins',
    insights: ['&gt;90% autofill accuracy', '+70% efficiency gain', 'HIPAA compliance'],
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
                  Sugam AI Explainer Video
                </h3>
                <p className="text-sm opacity-90 mt-1">
                  See how AI transforms healthcare credentialing
                </p>
              </div>
              {/* Video Embed */}
              <div className="relative w-full" style={{
            paddingTop: '56.25%'
          }}>
                <iframe src="https://www.youtube.com/embed/CjkalZcX1FM" className="absolute top-0 left-0 w-full h-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
              </div>
            </motion.div>
          </motion.div>}
      </AnimatePresence>
      {/* Hero Section */}
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
            <div className="flex items-center justify-center gap-3 mb-4">
              <SparklesIcon className="w-10 h-10 text-[#88BDF2]" />
              <h1 className="text-4xl md:text-5xl font-bold text-[#384959] font-['Poppins']">
                Sugam AI
              </h1>
            </div>
            <p className="text-lg text-[#88BDF2] mb-4 font-semibold">
              AI-Powered Healthcare Licensing & Credentialing Automation
            </p>
            <p className="text-[#384959] leading-relaxed">
              Transforming 4-6 week credentialing workflows into 5-7 days
              through intelligent automation
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
                Healthcare credentialing requires manual data entry across
                dozens of forms, causing 4-6 week delays and compliance risks
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
                AI-driven dual system (web app + Chrome extension) that
                automates data extraction and form-filling with &gt;90% accuracy
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
                Design thinking with AI/ML integration: OCR parsing, validation,
                and human-in-loop review system
              </p>
            </motion.div>
          </div>
          {/* Design Thinking Journey */}
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
            {/* Desktop Journey */}
            <div className="hidden md:block">
              <div className="relative">
                <div className="absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-[#BDDDFC] via-[#88BDF2] to-[#BDDDFC]" />
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
                      <div className="flex justify-center mb-4">
                        <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${stage.color} flex items-center justify-center shadow-lg relative z-10`}>
                          <stage.icon className="w-8 h-8 text-white" />
                        </div>
                      </div>
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
            {/* Mobile Journey */}
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
                  <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${stage.color} flex items-center justify-center shadow-lg flex-shrink-0`}>
                    <stage.icon className="w-7 h-7 text-white" />
                  </div>
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
      {/* User Personas & System Overview */}
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
          {/* User Personas */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
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
                <h4 className="text-xl font-bold">HR Administrator</h4>
                <p className="text-sm opacity-90">Credentialing Staff</p>
              </div>
              <div className="space-y-2 text-sm">
                <p>
                  <strong>Pain Point:</strong> Repeated manual data entry across
                  forms
                </p>
                <p>
                  <strong>Goal:</strong> Speed up onboarding and reduce errors
                </p>
                <p>
                  <strong>Needs:</strong> Automated, accurate form-filling
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
                  Healthcare Provider
                </h4>
                <p className="text-sm text-[#6A89A7]">Doctor / Applicant</p>
              </div>
              <div className="space-y-2 text-sm text-[#384959]">
                <p>
                  <strong>Pain Point:</strong> Paperwork fatigue and delayed
                  license activation
                </p>
                <p>
                  <strong>Goal:</strong> Streamlined credentialing process
                </p>
                <p>
                  <strong>Needs:</strong> Transparency and faster onboarding
                </p>
              </div>
            </motion.div>
          </div>
          {/* System Architecture */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="bg-white rounded-2xl p-8 shadow-lg border-2 border-[#BDDDFC]">
            <h3 className="text-2xl font-bold text-[#384959] mb-6 text-center">
              System Architecture
            </h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-[#BDDDFC] to-white rounded-xl p-6 border-2 border-[#88BDF2]">
                <div className="flex items-center gap-3 mb-4">
                  <DatabaseIcon className="w-8 h-8 text-[#88BDF2]" />
                  <h4 className="text-lg font-bold text-[#384959]">
                    Web Application
                  </h4>
                </div>
                <ul className="space-y-2 text-sm text-[#6A89A7]">
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="w-4 h-4 text-[#88BDF2] mt-0.5 flex-shrink-0" />
                    Upload CVs & supporting documents
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="w-4 h-4 text-[#88BDF2] mt-0.5 flex-shrink-0" />
                    OCR + AI extraction (AWS Textract & LangChain)
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="w-4 h-4 text-[#88BDF2] mt-0.5 flex-shrink-0" />
                    PostgreSQL data storage with validation
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="w-4 h-4 text-[#88BDF2] mt-0.5 flex-shrink-0" />
                    HR dashboard for review & approval
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-[#BDDDFC] to-white rounded-xl p-6 border-2 border-[#88BDF2]">
                <div className="flex items-center gap-3 mb-4">
                  <ChromeIcon className="w-8 h-8 text-[#6A89A7]" />
                  <h4 className="text-lg font-bold text-[#384959]">
                    Chrome Extension
                  </h4>
                </div>
                <ul className="space-y-2 text-sm text-[#6A89A7]">
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="w-4 h-4 text-[#6A89A7] mt-0.5 flex-shrink-0" />
                    Integrated autofill for live portals
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="w-4 h-4 text-[#6A89A7] mt-0.5 flex-shrink-0" />
                    Secure API call to fetch provider data
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="w-4 h-4 text-[#6A89A7] mt-0.5 flex-shrink-0" />
                    Auto-fills online forms and PDFs
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="w-4 h-4 text-[#6A89A7] mt-0.5 flex-shrink-0" />
                    HIPAA-compliant with audit logging
                  </li>
                </ul>
              </div>
            </div>
            {/* Data Flow */}
            <div className="bg-gradient-to-r from-[#BDDDFC] to-[#88BDF2] rounded-xl p-6">
              <h4 className="text-lg font-bold text-white mb-4 text-center">
                Data Flow Pipeline
              </h4>
              <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
                <span className="bg-white px-4 py-2 rounded-lg font-semibold text-[#384959]">
                  Resume Upload
                </span>
                <span className="text-white">→</span>
                <span className="bg-white px-4 py-2 rounded-lg font-semibold text-[#384959]">
                  OCR/LangChain
                </span>
                <span className="text-white">→</span>
                <span className="bg-white px-4 py-2 rounded-lg font-semibold text-[#384959]">
                  Database
                </span>
                <span className="text-white">→</span>
                <span className="bg-white px-4 py-2 rounded-lg font-semibold text-[#384959]">
                  Validation
                </span>
                <span className="text-white">→</span>
                <span className="bg-white px-4 py-2 rounded-lg font-semibold text-[#384959]">
                  Extension Autofill
                </span>
                <span className="text-white">→</span>
                <span className="bg-white px-4 py-2 rounded-lg font-semibold text-[#384959]">
                  Review & Submit
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Web Application UI Showcase */}
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
        }} className="text-3xl font-bold text-[#384959] text-center mb-4 font-['Poppins']">
            Web Application Interface
          </motion.h2>
          <p className="text-center text-[#6A89A7] mb-8 max-w-2xl mx-auto">
            Intuitive dashboard for managing healthcare credentialing workflows
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {[{
            src: "/Screenshot_2025-11-06_215732.png",
            alt: 'Dashboard Overview',
            label: 'Dashboard'
          }, {
            src: "/Screenshot_2025-11-06_215751.png",
            alt: 'Add Healthcare Professional',
            label: 'Data Entry'
          }, {
            src: "/Screenshot_2025-11-06_215814.png",
            alt: 'Validation Dashboard',
            label: 'Validation'
          }, {
            src: "/Screenshot_2025-11-06_215829.png",
            alt: 'Settings Page',
            label: 'Settings'
          }].map((screenshot, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1
          }} className="bg-white rounded-xl p-4 shadow-lg border-2 border-[#BDDDFC] hover:border-[#88BDF2] transition-all">
                <img src={screenshot.src} alt={screenshot.alt} className="w-full h-auto rounded-lg mb-3" />
                <p className="text-center text-sm font-semibold text-[#384959]">
                  {screenshot.label}
                </p>
              </motion.div>)}
          </div>
        </div>
      </section>
      {/* Chrome Extension UI & Impact */}
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
            Chrome Extension in Action
          </motion.h2>
          {/* Chrome Extension Screenshot */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="bg-white rounded-2xl p-8 shadow-lg border-2 border-[#BDDDFC] mb-12">
            <div className="max-w-4xl mx-auto">
              <img src="/Screenshot_2025-11-06_212657.png" alt="Sugam AI Chrome Extension Interface" className="w-full h-auto rounded-lg shadow-xl" />
            </div>
          </motion.div>
          {/* Impact Metrics */}
          <section className="py-12 px-6 bg-gradient-to-b from-white to-[#F5F9FC]">
            <div className="max-w-6xl mx-auto">
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} className="bg-white rounded-2xl p-8 shadow-lg border-2 border-[#BDDDFC]">
                <h3 className="text-2xl font-bold text-[#384959] mb-8 text-center">
                  Impact & Results
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#88BDF2] to-[#6A89A7] rounded-full flex items-center justify-center mx-auto mb-3">
                      <ClockIcon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-[#88BDF2] mb-1">
                      5-7 days
                    </div>
                    <div className="text-sm text-[#6A89A7]">
                      Credentialing Time
                    </div>
                    <div className="text-xs text-green-600 font-semibold mt-1">
                      from 4-6 weeks
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#6A89A7] to-[#88BDF2] rounded-full flex items-center justify-center mx-auto mb-3">
                      <CheckCircleIcon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-[#88BDF2] mb-1">
                      &gt;90%
                    </div>
                    <div className="text-sm text-[#6A89A7]">
                      Autofill Accuracy
                    </div>
                    <div className="text-xs text-green-600 font-semibold mt-1">
                      validated
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#88BDF2] to-[#BDDDFC] rounded-full flex items-center justify-center mx-auto mb-3">
                      <TrendingUpIcon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-[#88BDF2] mb-1">
                      +70%
                    </div>
                    <div className="text-sm text-[#6A89A7]">HR Efficiency</div>
                    <div className="text-xs text-green-600 font-semibold mt-1">
                      time saved
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#BDDDFC] to-[#88BDF2] rounded-full flex items-center justify-center mx-auto mb-3">
                      <FileTextIcon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-[#88BDF2] mb-1">
                      &lt;10
                    </div>
                    <div className="text-sm text-[#6A89A7]">Manual Edits</div>
                    <div className="text-xs text-green-600 font-semibold mt-1">
                      from 100+ fields
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        </div>
      </section>
      {/* Tech Stack & Future Scope */}
      <section className="py-12 px-6 bg-[#BDDDFC]">
        <div className="max-w-6xl mx-auto">
          {/* Tech Stack */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-[#384959] mb-6 text-center">
              Technology Stack
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {['LangChain', 'AWS Textract', 'Next.js', 'Node.js', 'PostgreSQL', 'Flask', 'Chrome Extension API'].map((tech, index) => <motion.div key={index} initial={{
              opacity: 0,
              scale: 0.9
            }} whileInView={{
              opacity: 1,
              scale: 1
            }} viewport={{
              once: true
            }} transition={{
              delay: index * 0.05
            }} className="bg-white px-6 py-3 rounded-full text-sm font-semibold text-[#384959] shadow-md border-2 border-[#88BDF2]">
                  {tech}
                </motion.div>)}
            </div>
          </div>
          {/* Future Scope */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="bg-white rounded-2xl p-8 shadow-lg border-2 border-[#88BDF2] mb-8">
            <div className="flex items-center gap-3 mb-6 justify-center">
              <LightbulbIcon className="w-8 h-8 text-[#88BDF2]" />
              <h3 className="text-2xl font-bold text-[#384959]">
                Future Roadmap
              </h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {['End-to-end encryption & hashing for provider data', 'AI-based validation using confidence thresholds', 'Cross-integration with licensing boards & insurer APIs', 'Predictive reminders for license renewals'].map((item, index) => <motion.div key={index} initial={{
              opacity: 0,
              x: -20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: index * 0.1
            }} className="flex items-start gap-3 bg-[#BDDDFC] p-4 rounded-lg">
                  <ShieldIcon className="w-5 h-5 text-[#88BDF2] mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-[#384959]">{item}</span>
                </motion.div>)}
            </div>
          </motion.div>
          {/* Key Takeaway */}
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
              "Sugam AI bridges healthcare administration and intelligent
              automation — transforming credentialing from a manual bottleneck
              into a seamless, AI-assisted workflow."
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