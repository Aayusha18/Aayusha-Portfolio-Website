import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuitIcon, LayoutDashboardIcon, PaletteIcon, TrendingUpIcon, UsersIcon } from 'lucide-react';
export function About() {
  const icons = [{
    Icon: BrainCircuitIcon,
    label: 'AI PM'
  }, {
    Icon: LayoutDashboardIcon,
    label: 'Product Manager'
  }, {
    Icon: TrendingUpIcon,
    label: 'Data Analyst'
  }, {
    Icon: PaletteIcon,
    label: 'Product Designer'
  }, {
    Icon: UsersIcon,
    label: 'Strategist'
  }, {
    Icon: TrendingUpIcon,
    label: 'Business Analyst'
  }];
  return <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="text-4xl md:text-5xl font-bold text-[#384959] mb-8 text-center">
          About Me — The Product That's Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left side text */}
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }} className="space-y-6">
            <div className="border-l-4 border-[#88BDF2] pl-6">
              <motion.p initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: 0.1
            }} className="text-lg text-[#384959] leading-relaxed mb-4">
                I’m a system thinker who thrives at the intersection of data,
                design, and strategy. Like Notion, I bring order to complexity;
                like Figma, I design for collaboration; and like ChatGPT, I’m
                endlessly curious. Whether it’s building AI-driven products,
                decoding analytics, or crafting user experiences, I love
                connecting insight to impact — one iteration at a time.
              </motion.p>
            </div>

            <div className="border-l-4 border-[#88BDF2] pl-6">
              <motion.p initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: 0.5
            }} className="text-lg text-[#384959] leading-relaxed">
                At my core, I'm an explorer of ideas who bridges data, design,
                and strategy to craft solutions that make an impact — no matter
                the domain.
              </motion.p>
            </div>
          </motion.div>

          {/* Right side animated icons */}
          <motion.div initial={{
          opacity: 0,
          scale: 0.8
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }} className="relative h-[500px] flex items-center justify-center">
            <div className="relative w-full h-full flex items-center justify-center">
              {icons.map((item, index) => {
              const angle = index * 60 * Math.PI / 180;
              const radius = 150;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              return <motion.div key={item.label} initial={{
                opacity: 0,
                scale: 0
              }} whileInView={{
                opacity: 1,
                scale: 1
              }} viewport={{
                once: true
              }} transition={{
                delay: 0.1 * index,
                duration: 0.5
              }} animate={{
                x: [x, x + 10, x],
                y: [y, y - 10, y]
              }} transition={{
                duration: 3 + index * 0.5,
                repeat: Infinity,
                ease: 'easeInOut'
              }} className="absolute" style={{
                left: '50%',
                top: '50%',
                transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
              }}>
                    <div className="bg-white rounded-full p-6 shadow-lg border-2 border-[#88BDF2] flex flex-col items-center gap-2">
                      <item.Icon className="w-8 h-8 text-[#88BDF2]" />
                      <span className="text-sm font-semibold text-[#384959]">
                        {item.label}
                      </span>
                    </div>
                  </motion.div>;
            })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
}