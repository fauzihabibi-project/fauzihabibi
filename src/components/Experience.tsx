import { motion } from 'motion/react';
import { Briefcase, GraduationCap } from 'lucide-react';
import { USER_DATA } from '../constants';

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6 bg-white/[0.02]">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Experience & Education</h2>
          <p className="text-white/40">My professional and academic journey</p>
        </motion.div>

        <div className="relative space-y-12">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-sky-500/50 via-white/10 to-transparent -translate-x-1/2 hidden md:block" />

          {USER_DATA.timeline.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Icon Bubble */}
              <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-black border border-white/20 flex items-center justify-center z-10 hidden md:flex">
                {item.type === 'work' ? <Briefcase size={18} className="text-sky-400" /> : <GraduationCap size={18} className="text-sky-400" />}
              </div>

              {/* Content Card */}
              <div className="w-full md:w-1/2">
                <div className="bg-white/[0.03] border border-white/10 p-8 rounded-3xl hover:border-sky-500/30 transition-colors group">
                  <span className="text-sky-400 font-mono text-xs tracking-widest uppercase mb-2 block">{item.period}</span>
                  <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-sky-400 transition-colors">{item.title}</h3>
                  <p className="text-white/60 font-medium mb-4">{item.organization}</p>
                  <p className="text-white/40 leading-relaxed">{item.description}</p>
                </div>
              </div>
              
              {/* Spacer for the other side */}
              <div className="w-1/2 hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
