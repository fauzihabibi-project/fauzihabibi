import { motion } from 'motion/react';
import { USER_DATA } from '../constants';

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 max-w-7xl mx-auto">
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl font-bold text-white mb-4">Technical Arsenal</h2>
        <p className="text-white/40">Technologies I use to bring ideas to life</p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
        {USER_DATA.skills.map((skill, index) => (
          <motion.div 
            key={skill.name}
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="group flex flex-col items-center gap-4 p-6 bg-white/[0.02] border border-white/5 rounded-2xl hover:bg-white/[0.05] hover:border-sky-500/30 transition-all duration-300"
          >
            <div className="w-12 h-12 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-300">
              <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" />
            </div>
            <span className="text-xs font-mono text-white/40 group-hover:text-white transition-colors uppercase tracking-wider">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
