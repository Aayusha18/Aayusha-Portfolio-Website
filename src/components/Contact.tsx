import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MailIcon, LinkedinIcon, GithubIcon, MapPinIcon, SendIcon } from 'lucide-react';
export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const contactInfo = [{
    icon: <MailIcon size={24} />,
    label: 'Email',
    value: 'ashingav@stevens.edu',
    link: 'mailto:ashingav@stevens.edu'
  }, {
    icon: <LinkedinIcon size={24} />,
    label: 'LinkedIn',
    value: 'Aayusha Shingavi',
    link: 'https://www.linkedin.com/in/aayusha-shingavi/'
  }, {
    icon: <GithubIcon size={24} />,
    label: 'GitHub',
    value: 'github.com/Aayusha18',
    link: 'https://github.com/Aayusha18'
  }, {
    icon: <MapPinIcon size={24} />,
    label: 'Location',
    value: 'New York City',
    link: null
  }];
  return <section id="contact" className="py-20 px-6 bg-gradient-to-b from-[#BDDDFC] to-white">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#384959] mb-4 font-['Poppins']">
            Get In Touch
          </h2>
          <p className="text-[#6A89A7] text-lg max-w-2xl mx-auto">
            Have a project in mind or want to discuss product management? I'd
            love to hear from you!
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information Cards */}
          <motion.div initial={{
          opacity: 0,
          x: -20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-[#BDDDFC]">
              <h3 className="text-2xl font-bold text-[#384959] mb-6 font-['Poppins']">
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => <motion.div key={index} initial={{
                opacity: 0,
                y: 10
              }} whileInView={{
                opacity: 1,
                y: 0
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.4,
                delay: 0.3 + index * 0.1
              }} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#88BDF2] to-[#6A89A7] rounded-xl flex items-center justify-center flex-shrink-0 text-white">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#6A89A7] mb-1">
                        {info.label}
                      </p>
                      {info.link ? <a href={info.link} target="_blank" rel="noopener noreferrer" className="text-[#384959] hover:text-[#88BDF2] transition-colors font-medium">
                          {info.value}
                        </a> : <p className="text-[#384959] font-medium">
                          {info.value}
                        </p>}
                    </div>
                  </motion.div>)}
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-[#BDDDFC]">
              <h3 className="text-2xl font-bold text-[#384959] mb-4 font-['Poppins']">
                Let's Connect!
              </h3>
              <p className="text-[#6A89A7] mb-6 leading-relaxed">
                I'm always interested in hearing about new opportunities,
                collaborations, or just having a conversation about product
                management and technology.
              </p>
              <div className="flex gap-4">
                <motion.a href="https://www.linkedin.com/in/aayusha-shingavi/" target="_blank" rel="noopener noreferrer" whileHover={{
                scale: 1.1
              }} whileTap={{
                scale: 0.95
              }} className="w-12 h-12 bg-gradient-to-br from-[#88BDF2] to-[#6A89A7] rounded-xl flex items-center justify-center text-white hover:shadow-lg transition-shadow">
                  <LinkedinIcon size={24} />
                </motion.a>
                <motion.a href="https://github.com/Aayusha18" target="_blank" rel="noopener noreferrer" whileHover={{
                scale: 1.1
              }} whileTap={{
                scale: 0.95
              }} className="w-12 h-12 bg-gradient-to-br from-[#88BDF2] to-[#6A89A7] rounded-xl flex items-center justify-center text-white hover:shadow-lg transition-shadow">
                  <GithubIcon size={24} />
                </motion.a>
                <motion.a href="mailto:ashingav@stevens.edu" whileHover={{
                scale: 1.1
              }} whileTap={{
                scale: 0.95
              }} className="w-12 h-12 bg-gradient-to-br from-[#88BDF2] to-[#6A89A7] rounded-xl flex items-center justify-center text-white hover:shadow-lg transition-shadow">
                  <MailIcon size={24} />
                </motion.a>
              </div>
            </div>
          </motion.div>
          {/* Contact Form */}
          <motion.div initial={{
          opacity: 0,
          x: 20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.3
        }}>
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-lg border-2 border-[#BDDDFC]">
              <h3 className="text-2xl font-bold text-[#384959] mb-6 font-['Poppins']">
                Send a Message
              </h3>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#384959] mb-2">
                    Name
                  </label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 border-2 border-[#BDDDFC] rounded-lg focus:outline-none focus:border-[#88BDF2] transition-colors text-[#384959]" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#384959] mb-2">
                    Email
                  </label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 border-2 border-[#BDDDFC] rounded-lg focus:outline-none focus:border-[#88BDF2] transition-colors text-[#384959]" placeholder="your.email@example.com" />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-[#384959] mb-2">
                    Subject
                  </label>
                  <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} className="w-full px-4 py-3 border-2 border-[#BDDDFC] rounded-lg focus:outline-none focus:border-[#88BDF2] transition-colors text-[#384959]" placeholder="What's this about?" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#384959] mb-2">
                    Message
                  </label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={5} className="w-full px-4 py-3 border-2 border-[#BDDDFC] rounded-lg focus:outline-none focus:border-[#88BDF2] transition-colors text-[#384959] resize-none" placeholder="Your message..." />
                </div>
                <motion.button type="submit" whileHover={{
                scale: 1.02
              }} whileTap={{
                scale: 0.98
              }} className="w-full px-6 py-3 bg-gradient-to-r from-[#88BDF2] to-[#6A89A7] text-white rounded-lg font-medium flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-shadow">
                  Send Message
                  <SendIcon className="w-4 h-4" />
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>;
}