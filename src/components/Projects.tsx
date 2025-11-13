import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { XIcon, SparklesIcon, BarChart3Icon, LightbulbIcon, RocketIcon } from 'lucide-react';
interface Project {
  title: string;
  subtitle: string;
  description: string;
  metrics?: string[];
  tools?: string[];
  highlights?: string[];
  hasDetailPage?: boolean;
}
export function Projects() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'ai' | 'product' | 'case'>('product');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const aiProjects: Project[] = [{
    title: 'Exploring the Potential of the Metaverse in Education',
    subtitle: 'AI-Powered Research & Predictive Modeling',
    description: 'Research-driven exploration combining literature review, user surveys, and ML models to predict Metaverse adoption in education.',
    metrics: ['85% prediction accuracy', '100+ survey participants', '50+ papers reviewed'],
    highlights: ['Built KNN, SVM, and Decision Tree models', 'Identified key adoption drivers through data analysis', 'Delivered strategic insights for EdTech product positioning'],
    tools: ['Python', 'Scikit-learn', 'Pandas', 'SQL', 'Data Visualization'],
    hasDetailPage: true
  }, {
    title: 'COVID-19 Detection using X-ray & CT Scans',
    subtitle: 'Deep Learning for Medical Diagnostics',
    description: 'Developed and optimized deep learning models (ResNet50, VGG19, Xception) for medical image classification.',
    highlights: ['Applied segmentation and feature extraction techniques', 'Built an AI web interface for diagnostics', 'Achieved high accuracy in COVID-19 detection'],
    tools: ['Python', 'TensorFlow', 'ResNet50', 'VGG19', 'Xception']
  }, {
    title: 'Hate Speech Detection for Facebook',
    subtitle: 'ML-Powered Content Moderation',
    description: 'Designed dataset and trained ML model with reinforcement learning for automated content flagging.',
    metrics: ['75% accuracy', 'Automated harmful content detection'],
    highlights: ['Proposed blockchain-based transparency improvements', 'Implemented reinforcement learning techniques'],
    tools: ['Python', 'ML', 'Reinforcement Learning', 'NLP']
  }, {
    title: 'Personal Finance Analytics Dashboard',
    subtitle: 'Power BI Data Visualization',
    description: 'Developed interactive Power BI dashboard for comprehensive financial tracking and analysis.',
    highlights: ['Applied DAX for income, savings, and net worth analysis', 'Created time-series visuals and drill-down analytics', 'Enabled data-driven financial decisions'],
    tools: ['Power BI', 'DAX', 'Excel', 'Data Visualization']
  }, {
    title: 'PulsePoint: Hybrid Workforce Intelligence',
    subtitle: 'HR Analytics Platform',
    description: 'Built HR analytics dashboard to track and optimize workforce patterns.',
    metrics: ['+15% Friday WFH rate identified'],
    highlights: ['Automated reporting and visualized workforce trends', 'Enabled data-driven policy decisions', 'Improved workforce planning efficiency'],
    tools: ['Power BI', 'SQL', 'HR Analytics']
  }];
  const productProjects: Project[] = [{
    title: 'Campus Compass',
    subtitle: 'Graduate Student Engagement MVP',
    description: 'Centralizing campus engagement for graduate students through a design-led MVP that redefines accessibility and connection.',
    metrics: ['3.2K profile views', '100+ followers', '500+ reel views', '4 feature requests'],
    highlights: ['Applied design thinking methodology', 'Rapid MVP development and testing', 'Strong organic engagement growth'],
    tools: ['Human Centered Design Thinking', 'Instagram', 'Content Strategy'],
    hasDetailPage: true
  }, {
    title: 'Sugam AI',
    subtitle: 'Healthcare Licensing & Credentialing Platform',
    description: 'Led end-to-end AI product development for automating healthcare licensing workflows.',
    metrics: ['70% reduction in licensing cycle time', '>90% autofill accuracy'],
    highlights: ['Integrated OCR (AWS Textract) + LangChain for form autofill', 'Built web app + Chrome extension', 'Human-in-loop validation system', 'Presented at Sevaro AI Challenge'],
    tools: ['AWS Textract', 'LangChain', 'React', 'Python', 'Chrome Extension'],
    hasDetailPage: true
  }];
  const caseStudies: Project[] = [{
    title: 'Product Management Club Event Design',
    subtitle: 'Community Building & Engagement',
    description: 'Designed and executed product management events to build community and foster learning.',
    metrics: ['+60% member engagement'],
    highlights: ['Created event strategy and content', 'Built collaborative learning environment', 'Established PM community at Stevens']
  }, {
    title: 'Vishwakarma Expression Hub Campaigns',
    subtitle: 'Creative Leadership & Brand Strategy',
    description: 'Led creative campaigns and brand initiatives for student expression platform.',
    highlights: ['Developed brand identity and messaging', 'Coordinated cross-functional teams', 'Increased platform visibility and engagement']
  }];
  const projects = activeTab === 'ai' ? aiProjects : activeTab === 'product' ? productProjects : caseStudies;
  const getGridColumns = () => {
    const count = projects.length;
    if (count === 1) return 'grid-cols-1';
    if (count === 2) return 'grid-cols-1 md:grid-cols-2';
    return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
  };
  const getCategoryIcon = () => {
    switch (activeTab) {
      case 'ai':
        return <SparklesIcon className="w-6 h-6" />;
      case 'product':
        return <RocketIcon className="w-6 h-6" />;
      case 'case':
        return <LightbulbIcon className="w-6 h-6" />;
    }
  };
  const getCategoryColor = () => {
    switch (activeTab) {
      case 'ai':
        return 'from-purple-400 to-pink-400';
      case 'product':
        return 'from-[#88BDF2] to-[#6A89A7]';
      case 'case':
        return 'from-yellow-400 to-orange-400';
    }
  };
  const handleProjectClick = (project: Project) => {
    if (project.title === 'Campus Compass' && project.hasDetailPage) {
      navigate('/project/campus-compass');
    } else if (project.title === 'Sugam AI' && project.hasDetailPage) {
      navigate('/project/sugam-ai');
    } else if (project.title === 'Exploring the Potential of the Metaverse in Education' && project.hasDetailPage) {
      navigate('/project/metaverse-education');
    } else {
      setSelectedProject(project);
    }
  };
  return <section id="projects" className="py-20 px-6 bg-gradient-to-b from-white to-[#BDDDFC]">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#384959] mb-4 font-['Poppins']">
            Projects & Case Studies
          </h2>
          <p className="text-[#6A89A7] text-lg max-w-2xl mx-auto">
            Explore my journey through AI, product development, and strategic
            initiatives
          </p>
        </motion.div>
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {[{
          id: 'product',
          label: 'Product',
          icon: RocketIcon
        }, {
          id: 'ai',
          label: 'AI / Analytics',
          icon: SparklesIcon
        }, {
          id: 'case',
          label: 'Case Studies',
          icon: LightbulbIcon
        }].map(tab => <motion.button key={tab.id} whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.95
        }} onClick={() => setActiveTab(tab.id as any)} className={`px-6 py-3 rounded-full font-medium transition-all flex items-center gap-2 ${activeTab === tab.id ? 'bg-gradient-to-r from-[#88BDF2] to-[#6A89A7] text-white shadow-lg' : 'bg-white text-[#6A89A7] border-2 border-[#BDDDFC] hover:border-[#88BDF2]'}`}>
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </motion.button>)}
        </div>
        <motion.div key={activeTab} initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        duration: 0.5
      }} className={`grid ${getGridColumns()} gap-6`}>
          {projects.map((project, index) => <motion.div key={index} initial={{
          opacity: 0,
          scale: 0.9
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: true
        }} transition={{
          delay: index * 0.1
        }} whileHover={{
          y: -8,
          transition: {
            duration: 0.3
          }
        }} onClick={() => handleProjectClick(project)} className="group relative cursor-pointer h-full">
              <div className={`absolute inset-0 bg-gradient-to-br ${getCategoryColor()} opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity blur-xl`} />
              <div className="relative h-full bg-white rounded-2xl p-6 shadow-lg border-2 border-[#BDDDFC] group-hover:border-[#88BDF2] transition-all flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${getCategoryColor()} flex items-center justify-center text-white shadow-lg`}>
                    {getCategoryIcon()}
                  </div>
                  {project.metrics && <div className="flex items-center gap-1 bg-[#BDDDFC] px-3 py-1 rounded-full">
                      <BarChart3Icon className="w-3 h-3 text-[#384959]" />
                      <span className="text-xs font-semibold text-[#384959]">
                        {project.metrics.length} metrics
                      </span>
                    </div>}
                </div>
                <h3 className="text-xl font-bold text-[#384959] mb-2 font-['Poppins'] leading-tight">
                  {project.title}
                </h3>
                <p className="text-sm text-[#88BDF2] mb-3 font-semibold">
                  {project.subtitle}
                </p>
                <p className="text-[#6A89A7] text-sm mb-4 flex-grow leading-relaxed">
                  {project.description}
                </p>
                {project.tools && <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tools.slice(0, 3).map((tool, i) => <span key={i} className="text-xs bg-[#BDDDFC] text-[#384959] px-3 py-1 rounded-full font-medium">
                        {tool}
                      </span>)}
                    {project.tools.length > 3 && <span className="text-xs bg-[#88BDF2] text-white px-3 py-1 rounded-full font-medium">
                        +{project.tools.length - 3} more
                      </span>}
                  </div>}
              </div>
            </motion.div>)}
        </motion.div>
        <AnimatePresence>
          {selectedProject && <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} exit={{
          opacity: 0
        }} className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-6" onClick={() => setSelectedProject(null)}>
              <motion.div initial={{
            scale: 0.9,
            y: 20
          }} animate={{
            scale: 1,
            y: 0
          }} exit={{
            scale: 0.9,
            y: 20
          }} onClick={e => e.stopPropagation()} className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-start gap-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${getCategoryColor()} flex items-center justify-center text-white shadow-lg flex-shrink-0`}>
                      {getCategoryIcon()}
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-[#384959] mb-2 font-['Poppins']">
                        {selectedProject.title}
                      </h3>
                      <p className="text-[#88BDF2] font-semibold">
                        {selectedProject.subtitle}
                      </p>
                    </div>
                  </div>
                  <button onClick={() => setSelectedProject(null)} className="text-[#6A89A7] hover:text-[#384959] p-2 hover:bg-[#BDDDFC] rounded-lg transition-colors">
                    <XIcon className="w-6 h-6" />
                  </button>
                </div>
                <p className="text-[#384959] mb-6 leading-relaxed text-lg">
                  {selectedProject.description}
                </p>
                {selectedProject.metrics && <div className="mb-6">
                    <h4 className="text-lg font-semibold text-[#384959] mb-3 flex items-center gap-2">
                      <BarChart3Icon className="w-5 h-5 text-[#88BDF2]" />
                      Key Metrics
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.metrics.map((metric, i) => <span key={i} className="bg-gradient-to-r from-[#88BDF2] to-[#6A89A7] text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-md">
                          {metric}
                        </span>)}
                    </div>
                  </div>}
                {selectedProject.highlights && <div className="mb-6">
                    <h4 className="text-lg font-semibold text-[#384959] mb-3">
                      Highlights
                    </h4>
                    <ul className="space-y-3">
                      {selectedProject.highlights.map((highlight, i) => <li key={i} className="flex items-start gap-3 text-[#6A89A7]">
                          <div className="w-6 h-6 rounded-full bg-[#88BDF2] flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-white text-xs font-bold">
                              ✓
                            </span>
                          </div>
                          <span className="leading-relaxed">{highlight}</span>
                        </li>)}
                    </ul>
                  </div>}
                {selectedProject.tools && <div>
                    <h4 className="text-lg font-semibold text-[#384959] mb-3">
                      Tools & Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tools.map((tool, i) => <span key={i} className="bg-[#BDDDFC] text-[#384959] px-4 py-2 rounded-full text-sm font-medium">
                          {tool}
                        </span>)}
                    </div>
                  </div>}
              </motion.div>
            </motion.div>}
        </AnimatePresence>
      </div>
    </section>;
}