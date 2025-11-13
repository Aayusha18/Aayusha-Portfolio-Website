import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeftIcon, SearchIcon, TargetIcon, LightbulbIcon, WrenchIcon, TestTubeIcon, BrainCircuitIcon, BarChart3Icon, UsersIcon, TrendingUpIcon, AwardIcon, BookOpenIcon, GraduationCapIcon, SparklesIcon, PlayCircleIcon, XIcon } from 'lucide-react';
import { Navbar } from '../components/Navbar';
export function MetaverseEducationDetail() {
  const navigate = useNavigate();
  const researchStages = [{
    icon: SearchIcon,
    title: 'Literature Review',
    subtitle: 'Research Foundation',
    description: 'Analyzed 50+ academic studies on AR/VR and Metaverse in education',
    insights: ['Identified key adoption factors', 'Reviewed immersive learning trends', 'Mapped technology barriers'],
    color: 'from-[#BDDDFC] to-[#88BDF2]'
  }, {
    icon: UsersIcon,
    title: 'Survey Design',
    subtitle: 'Data Collection',
    description: 'Designed and distributed survey to 100+ participants',
    insights: ['Demographic profiling', 'Technology familiarity assessment', 'Adoption intent measurement'],
    color: 'from-[#88BDF2] to-[#6A89A7]'
  }, {
    icon: BarChart3Icon,
    title: 'Data Analysis',
    subtitle: 'Pattern Discovery',
    description: 'Processed survey data using Python, Pandas, and SQL',
    insights: ['Identified behavioral patterns', 'Statistical correlations', 'Feature engineering'],
    color: 'from-[#6A89A7] to-[#88BDF2]'
  }, {
    icon: BrainCircuitIcon,
    title: 'AI Model Development',
    subtitle: 'Predictive Modeling',
    description: 'Built ML models using KNN, SVM, and Decision Tree algorithms',
    insights: ['Model training & tuning', 'Cross-validation testing', 'Performance optimization'],
    color: 'from-[#88BDF2] to-[#BDDDFC]'
  }, {
    icon: TestTubeIcon,
    title: 'Evaluation',
    subtitle: 'Insights & Recommendations',
    description: 'Extracted strategic insights from model predictions',
    insights: ['85% prediction accuracy', 'Key adoption drivers identified', 'Product strategy recommendations'],
    color: 'from-[#BDDDFC] to-[#88BDF2]'
  }];
  return <div className="w-full min-h-screen bg-white">
      <Navbar />
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
              <GraduationCapIcon className="w-10 h-10 text-[#88BDF2]" />
              <h1 className="text-4xl md:text-5xl font-bold text-[#384959] font-['Poppins']">
                Metaverse in Education
              </h1>
            </div>
            <p className="text-lg text-[#88BDF2] mb-4 font-semibold">
              AI meets education — forecasting user adoption in the Metaverse
            </p>
            <p className="text-[#384959] leading-relaxed">
              Research-driven exploration of how AI and analytics reveal the
              potential of Metaverse-based education
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
              <h3 className="text-xl font-bold text-[#384959] mb-3">
                Core Question
              </h3>
              <p className="text-[#6A89A7] text-sm leading-relaxed">
                Who is most likely to embrace immersive learning — and why?
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
              <h3 className="text-xl font-bold mb-3">Approach</h3>
              <p className="text-sm leading-relaxed">
                Combined literature review, user surveys, and machine learning
                to predict adoption patterns
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
              <h3 className="text-xl font-bold text-[#384959] mb-3">Impact</h3>
              <p className="text-[#6A89A7] text-sm leading-relaxed">
                85% prediction accuracy with actionable insights for EdTech
                product strategy
              </p>
            </motion.div>
          </div>
          {/* Research Journey */}
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
              Research Process
            </h3>
            {/* Desktop Journey */}
            <div className="hidden md:block">
              <div className="relative">
                <div className="absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-[#BDDDFC] via-[#88BDF2] to-[#BDDDFC]" />
                <div className="grid grid-cols-5 gap-4">
                  {researchStages.map((stage, index) => <motion.div key={index} initial={{
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
              {researchStages.map((stage, index) => <motion.div key={index} initial={{
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
      {/* Survey Results */}
      <section className="py-12 px-6 bg-gradient-to-b from-white to-[#BDDDFC]">
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
            Survey Insights
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
            {/* Survey Chart */}
            <motion.div initial={{
            opacity: 0,
            x: -20
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} className="bg-white rounded-2xl p-6 shadow-lg border-2 border-[#BDDDFC]">
              <img src="/image.png" alt="Metaverse Education Survey Results" className="w-full h-auto rounded-lg" />
            </motion.div>
            {/* Key Findings */}
            <motion.div initial={{
            opacity: 0,
            x: 20
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} className="space-y-6">
              <div className="bg-gradient-to-br from-[#88BDF2] to-[#6A89A7] rounded-xl p-6 text-white">
                <div className="text-5xl font-bold mb-2">73%</div>
                <p className="text-lg">
                  Expressed interest in using the Metaverse for education
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-2 border-[#BDDDFC]">
                <div className="text-4xl font-bold text-[#88BDF2] mb-2">
                  22%
                </div>
                <p className="text-[#384959]">
                  Were unsure, citing cost and privacy concerns
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-2 border-[#BDDDFC]">
                <div className="text-4xl font-bold text-[#88BDF2] mb-2">5%</div>
                <p className="text-[#384959]">
                  Uninterested, preferring traditional methods
                </p>
              </div>
            </motion.div>
          </div>
          {/* Additional Insights */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-xl font-bold text-[#384959] mb-6 text-center">
              Key Findings
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                {['Engineering and tech backgrounds showed higher awareness', 'Perceived usefulness was the top adoption driver', 'Ease of use significantly influenced interest'].map((finding, i) => <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#88BDF2] flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                    <span className="text-[#6A89A7]">{finding}</span>
                  </div>)}
              </div>
              <div className="space-y-3">
                {['System compatibility was a key consideration', 'Privacy concerns were the main barrier', 'Cost was a secondary adoption factor'].map((finding, i) => <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#88BDF2] flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                    <span className="text-[#6A89A7]">{finding}</span>
                  </div>)}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* AI Model Results */}
      <section className="py-12 px-6 bg-gradient-to-b from-[#BDDDFC] to-white">
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
            AI Model Performance
          </motion.h2>
          {/* Model Comparison Table */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="bg-white rounded-2xl p-8 shadow-lg border-2 border-[#BDDDFC] mb-8">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-[#BDDDFC]">
                    <th className="text-left py-4 px-4 text-[#384959] font-bold">
                      Model
                    </th>
                    <th className="text-center py-4 px-4 text-[#384959] font-bold">
                      Accuracy
                    </th>
                    <th className="text-center py-4 px-4 text-[#384959] font-bold">
                      Precision
                    </th>
                    <th className="text-center py-4 px-4 text-[#384959] font-bold">
                      Recall
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[{
                  model: 'Decision Tree',
                  accuracy: '77%',
                  precision: '74%',
                  recall: '75%'
                }, {
                  model: 'SVM',
                  accuracy: '82%',
                  precision: '80%',
                  recall: '81%'
                }, {
                  model: 'KNN',
                  accuracy: '85%',
                  precision: '83%',
                  recall: '84%',
                  highlight: true
                }].map((row, index) => <tr key={index} className={`border-b border-[#BDDDFC] ${row.highlight ? 'bg-gradient-to-r from-[#BDDDFC] to-[#88BDF2] bg-opacity-20' : ''}`}>
                      <td className="py-4 px-4 font-semibold text-[#384959]">
                        {row.model}
                        {row.highlight && <span className="ml-2 text-xs bg-[#88BDF2] text-white px-2 py-1 rounded-full">
                            Best
                          </span>}
                      </td>
                      <td className="text-center py-4 px-4 text-[#88BDF2] font-bold">
                        {row.accuracy}
                      </td>
                      <td className="text-center py-4 px-4 text-[#88BDF2] font-bold">
                        {row.precision}
                      </td>
                      <td className="text-center py-4 px-4 text-[#88BDF2] font-bold">
                        {row.recall}
                      </td>
                    </tr>)}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-[#6A89A7] mt-4 text-center">
              📈 KNN achieved the highest accuracy, making it the most effective
              in predicting user interest in the Metaverse
            </p>
          </motion.div>
          {/* Model Details */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="bg-gradient-to-br from-[#88BDF2] to-[#6A89A7] rounded-2xl p-8 text-white shadow-lg">
            <div className="flex items-center gap-3 mb-6 justify-center">
              <BrainCircuitIcon className="w-8 h-8" />
              <h3 className="text-2xl font-bold">The AI Model</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold mb-3">Technical Stack</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Built using Scikit-learn</li>
                  <li>• Trained on survey data</li>
                  <li>• Applied KNN, SVM, and Decision Tree</li>
                  <li>• Evaluated using multiple metrics</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-3">Key Features</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Demographic profiling</li>
                  <li>• Technology familiarity scores</li>
                  <li>• Behavioral pattern analysis</li>
                  <li>• Adoption likelihood prediction</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Strategic Impact */}
      <section className="py-12 px-6 bg-white">
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
            Strategic Impact
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[{
            icon: TargetIcon,
            title: 'Product Positioning',
            description: 'Data-backed insights for Metaverse EdTech product strategy and market positioning'
          }, {
            icon: LightbulbIcon,
            title: 'UX Design',
            description: 'Recommendations for interface design that improves trust and user engagement'
          }, {
            icon: TrendingUpIcon,
            title: 'Go-to-Market',
            description: 'Marketing narratives aligned with identified adoption drivers and user personas'
          }].map((item, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1
          }} className="bg-white rounded-xl p-6 shadow-lg border-2 border-[#BDDDFC] hover:border-[#88BDF2] transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-[#88BDF2] to-[#6A89A7] rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-[#384959] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#6A89A7] leading-relaxed">
                  {item.description}
                </p>
              </motion.div>)}
          </div>
        </div>
      </section>
      {/* Key Highlights */}
      <section className="py-12 px-6 bg-gradient-to-b from-white to-[#BDDDFC]">
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
            Key Highlights
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[{
            icon: BookOpenIcon,
            number: '50+',
            label: 'Research Papers'
          }, {
            icon: UsersIcon,
            number: '100+',
            label: 'Survey Participants'
          }, {
            icon: BrainCircuitIcon,
            number: '3',
            label: 'AI Models'
          }, {
            icon: AwardIcon,
            number: '85%',
            label: 'Prediction Accuracy'
          }, {
            icon: SparklesIcon,
            number: '3',
            label: 'Adoption Drivers'
          }].map((stat, index) => <motion.div key={index} initial={{
            opacity: 0,
            scale: 0.9
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1
          }} className="bg-white rounded-xl p-6 shadow-lg border-2 border-[#BDDDFC] text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-[#88BDF2] to-[#6A89A7] rounded-full flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-[#88BDF2] mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-[#6A89A7]">{stat.label}</div>
              </motion.div>)}
          </div>
        </div>
      </section>
      {/* Reflection & CTA */}
      <section className="py-12 px-6 bg-[#BDDDFC]">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="bg-gradient-to-r from-[#88BDF2] to-[#6A89A7] rounded-2xl p-8 text-center shadow-xl mb-8">
            <blockquote className="text-xl md:text-2xl text-white font-serif italic leading-relaxed">
              "This project wasn't just about building a model — it was about
              understanding how technology, data, and human behavior intersect
              to shape the future of learning."
            </blockquote>
          </motion.div>
          <div className="text-center">
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