import React, { useEffect, useState, useRef, Component } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BriefcaseIcon, UsersIcon, CalendarIcon, ChevronDownIcon, TrendingUpIcon } from 'lucide-react';
interface Experience {
  type: 'industry' | 'leadership';
  role: string;
  organization: string;
  duration: string;
  startDate: Date;
  highlights: string[];
  icon: typeof BriefcaseIcon;
}
export function Experience() {
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set());
  const toggleCard = (index: number) => {
    const newExpanded = new Set(expandedCards);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedCards(newExpanded);
  };
  // Industry experiences
  const industryExperiences: Experience[] = [{
    type: 'industry',
    role: 'Product Management Intern',
    organization: 'Chat360',
    duration: 'Sep 2023 – Mar 2024',
    startDate: new Date('2023-09-01'),
    highlights: ['Defined and prioritized product requirements, user stories, and roadmaps for omnichannel chatbot and voice AI solutions', 'Led Agile ceremonies and collaborated cross-functionally using Jira', 'Strengthened cross-functional collaboration, improving sprint efficiency by 20%'],
    icon: BriefcaseIcon
  }, {
    type: 'industry',
    role: 'Data Science Research Intern',
    organization: 'Vishwakarma Institute of Technology',
    duration: 'Aug 2022 – Dec 2022',
    startDate: new Date('2022-08-01'),
    highlights: ['Conducted in-depth review of 50+ academic papers on Metaverse in education', 'Performed comparative analysis revealing 40% higher retention in Metaverse learning', 'Designed and led structured survey of 150 students, processed 500+ responses'],
    icon: BriefcaseIcon
  }].sort((a, b) => b.startDate.getTime() - a.startDate.getTime());
  // PMC at Stevens journey - reversed to show latest first
  const pmcJourney: Experience[] = [{
    type: 'leadership',
    role: 'President',
    organization: 'Product Management Club at Stevens',
    duration: 'Jun 2025 – Present',
    startDate: new Date('2025-06-01'),
    highlights: ['Lead 200+ member community focused on product innovation and AI', 'Mentor executive members and coordinate external speakers', 'Drive creative strategy for events and product case competitions'],
    icon: UsersIcon
  }, {
    type: 'leadership',
    role: 'Vice President',
    organization: 'Product Management Club at Stevens',
    duration: 'Jan 2025 – May 2025',
    startDate: new Date('2025-01-01'),
    highlights: ['Managed operations for 200+ club members', 'Organized workshops, networking sessions, and mentorship programs', 'Increased participation by 40%'],
    icon: UsersIcon
  }, {
    type: 'leadership',
    role: 'Marketing Volunteer',
    organization: 'Product Management Club at Stevens',
    duration: 'Sep 2024 – Dec 2024',
    startDate: new Date('2024-09-01'),
    highlights: ['Designed promotional materials and coordinated logistics', 'Handled marketing outreach and campus branding'],
    icon: UsersIcon
  }];
  // Vishwakarma journey - reversed to show latest first
  const vishwakarmaJourney: Experience[] = [{
    type: 'leadership',
    role: 'Club Mentor',
    organization: 'Vishwakarma Expression Hub',
    duration: 'Jun 2022 – May 2023',
    startDate: new Date('2022-06-01'),
    highlights: ['Guided new team leads through leadership development', 'Conducted training on communication and collaboration'],
    icon: UsersIcon
  }, {
    type: 'leadership',
    role: 'Club Lead',
    organization: 'Vishwakarma Expression Hub',
    duration: 'Aug 2021 – Jun 2022',
    startDate: new Date('2021-08-01'),
    highlights: ['Restructured and scaled 60+ member creative team', 'Launched events with 500+ attendees, increasing engagement by 50%'],
    icon: UsersIcon
  }, {
    type: 'leadership',
    role: 'Head of Management',
    organization: 'Vishwakarma Expression Hub',
    duration: 'Oct 2020 – Jul 2021',
    startDate: new Date('2020-10-01'),
    highlights: ['Led cross-functional operations for 50+ members', 'Built internal systems for event tracking', 'Nurtured creative community of 300+'],
    icon: UsersIcon
  }];
  // Other leadership
  const otherLeadership: Experience[] = [{
    type: 'leadership',
    role: 'Graduate Peer Leader',
    organization: 'Stevens Graduate Student Life',
    duration: 'Jan 2025 – May 2025',
    startDate: new Date('2025-01-01'),
    highlights: ['Mentored new students through onboarding and campus acclimation', 'Created welcoming environment for peers'],
    icon: UsersIcon
  }];
  return <section id="experience" className="py-20 px-6 bg-gradient-to-b from-white to-[#BDDDFC] overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Main Header */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#384959] mb-4 font-['Poppins']">
            My Journey
          </h2>
          <p className="text-[#6A89A7] text-lg max-w-2xl mx-auto">
            A story of growth across product, leadership, and innovation
          </p>
        </motion.div>
        {/* Industry Experience Section */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#88BDF2] to-[#6A89A7] flex items-center justify-center">
              <BriefcaseIcon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-[#384959] font-['Poppins']">
              Industry Experience
            </h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {industryExperiences.map((experience, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1
          }}>
                <ExperienceCard experience={experience} isExpanded={expandedCards.has(index)} onToggle={() => toggleCard(index)} />
              </motion.div>)}
          </div>
        </motion.div>
        {/* Leadership Experience Section */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }}>
          <div className="flex items-center gap-3 mb-12">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#6A89A7] to-[#384959] flex items-center justify-center">
              <UsersIcon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-[#384959] font-['Poppins']">
              Leadership Experience
            </h3>
          </div>
          {/* PMC Journey */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <TrendingUpIcon className="w-6 h-6 text-[#88BDF2]" />
              <h4 className="text-2xl font-bold text-[#384959]">
                Product Management Club at Stevens
              </h4>
              <div className="flex-1 h-0.5 bg-gradient-to-r from-[#88BDF2] to-transparent" />
            </div>
            <p className="text-[#6A89A7] mb-6 italic">
              From volunteer to president — building a thriving PM community
            </p>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#88BDF2] via-[#6A89A7] to-[#384959]" />
              <div className="space-y-6">
                {pmcJourney.map((experience, index) => <motion.div key={index} initial={{
                opacity: 0,
                x: -20
              }} whileInView={{
                opacity: 1,
                x: 0
              }} viewport={{
                once: true
              }} transition={{
                delay: index * 0.15
              }} className="relative pl-16">
                    {/* Timeline dot */}
                    <div className="absolute left-3 top-6 w-6 h-6 rounded-full bg-gradient-to-br from-[#88BDF2] to-[#6A89A7] border-4 border-white shadow-lg" />
                    <ExperienceCard experience={experience} isExpanded={expandedCards.has(100 + index)} onToggle={() => toggleCard(100 + index)} showOrganization={false} />
                  </motion.div>)}
              </div>
            </div>
          </motion.div>
          {/* Vishwakarma Journey */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <TrendingUpIcon className="w-6 h-6 text-[#6A89A7]" />
              <h4 className="text-2xl font-bold text-[#384959]">
                Vishwakarma Expression Hub
              </h4>
              <div className="flex-1 h-0.5 bg-gradient-to-r from-[#6A89A7] to-transparent" />
            </div>
            <p className="text-[#6A89A7] mb-6 italic">
              Scaling creative communities and nurturing future leaders
            </p>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#6A89A7] via-[#384959] to-[#88BDF2]" />
              <div className="space-y-6">
                {vishwakarmaJourney.map((experience, index) => <motion.div key={index} initial={{
                opacity: 0,
                x: -20
              }} whileInView={{
                opacity: 1,
                x: 0
              }} viewport={{
                once: true
              }} transition={{
                delay: index * 0.15
              }} className="relative pl-16">
                    {/* Timeline dot */}
                    <div className="absolute left-3 top-6 w-6 h-6 rounded-full bg-gradient-to-br from-[#6A89A7] to-[#384959] border-4 border-white shadow-lg" />
                    <ExperienceCard experience={experience} isExpanded={expandedCards.has(200 + index)} onToggle={() => toggleCard(200 + index)} showOrganization={false} />
                  </motion.div>)}
              </div>
            </div>
          </motion.div>
          {/* Other Leadership */}
          {otherLeadership.length > 0 && <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 rounded-full bg-[#88BDF2]" />
                <h4 className="text-xl font-semibold text-[#384959]">
                  Additional Leadership
                </h4>
              </div>
              <div className="grid gap-6">
                {otherLeadership.map((experience, index) => <motion.div key={index} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: index * 0.1
            }}>
                    <ExperienceCard experience={experience} isExpanded={expandedCards.has(300 + index)} onToggle={() => toggleCard(300 + index)} />
                  </motion.div>)}
              </div>
            </motion.div>}
        </motion.div>
        {/* Quote Banner */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="mt-20 bg-gradient-to-r from-[#88BDF2] to-[#6A89A7] rounded-2xl p-8 text-center shadow-xl">
          <blockquote className="text-2xl md:text-3xl text-white font-serif italic leading-relaxed">
            "Leadership gave me perspective; product building gave me purpose."
          </blockquote>
        </motion.div>
      </div>
    </section>;
}
// Experience Card Component
function ExperienceCard({
  experience,
  isExpanded,
  onToggle,
  showOrganization = true
}: {
  experience: Experience;
  isExpanded: boolean;
  onToggle: () => void;
  showOrganization?: boolean;
}) {
  const isIndustry = experience.type === 'industry';
  return <motion.div whileHover={{
    scale: 1.02,
    y: -4
  }} onClick={onToggle} className="cursor-pointer group">
      <div className={`bg-white rounded-xl p-5 shadow-lg border-2 border-[#BDDDFC] hover:border-[#88BDF2] transition-all ${isExpanded ? 'shadow-2xl' : ''}`}>
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex-1 min-w-0">
            {/* Type Badge */}
            <div className="mb-2">
              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${isIndustry ? 'bg-gradient-to-r from-[#88BDF2] to-[#6A89A7] text-white' : 'bg-gradient-to-r from-[#6A89A7] to-[#384959] text-white'}`}>
                <experience.icon className="w-3 h-3" />
                {isIndustry ? 'Industry' : 'Leadership'}
              </span>
            </div>
            <h3 className="text-lg font-bold text-[#384959] leading-tight mb-1.5">
              {experience.role}
            </h3>
            {showOrganization && <p className="text-[#88BDF2] font-semibold text-sm mb-2">
                {experience.organization}
              </p>}
            <div className="flex items-center gap-1.5 text-[#6A89A7] text-xs">
              <CalendarIcon className="w-3.5 h-3.5" />
              <span>{experience.duration}</span>
            </div>
          </div>
          <motion.div animate={{
          rotate: isExpanded ? 180 : 0
        }} transition={{
          duration: 0.3
        }} className="flex-shrink-0">
            <ChevronDownIcon className="w-5 h-5 text-[#88BDF2]" />
          </motion.div>
        </div>
        {/* Expandable Highlights */}
        <AnimatePresence>
          {isExpanded && <motion.div initial={{
          height: 0,
          opacity: 0
        }} animate={{
          height: 'auto',
          opacity: 1
        }} exit={{
          height: 0,
          opacity: 0
        }} transition={{
          duration: 0.3
        }} className="overflow-hidden">
              <div className="pt-3 border-t border-[#BDDDFC]">
                <ul className="space-y-2.5">
                  {experience.highlights.map((highlight, i) => <motion.li key={i} initial={{
                opacity: 0,
                x: -10
              }} animate={{
                opacity: 1,
                x: 0
              }} transition={{
                delay: i * 0.1
              }} className="flex items-start gap-2 text-sm text-[#6A89A7]">
                      <div className="w-2 h-2 rounded-full bg-[#88BDF2] mt-1.5 flex-shrink-0" />
                      <span className="leading-relaxed">{highlight}</span>
                    </motion.li>)}
                </ul>
              </div>
            </motion.div>}
        </AnimatePresence>
      </div>
    </motion.div>;
}