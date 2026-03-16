import { motion } from 'motion/react';
import { Award } from 'lucide-react';
import { USER_DATA } from '../constants';

export default function Certificates() {
  return (
    <section id="certificates" className="py-32 px-6 max-w-7xl mx-auto">
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl font-bold text-white mb-4">Certifications</h2>
        <p className="text-white/40">Professional recognition and continuous learning</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {USER_DATA.certificates.map((cert, index) => (
          <motion.div 
            key={cert.id}
            initial={{ x: index % 2 === 0 ? -30 : 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="group flex flex-col lg:flex-row bg-white/[0.02] border border-white/10 rounded-3xl overflow-hidden hover:border-sky-500/30 transition-all duration-500"
          >
            <div className="lg:w-2/5 aspect-video lg:aspect-square overflow-hidden">
              <img 
                src={cert.image} 
                alt={cert.title} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="lg:w-3/5 p-8 flex flex-col justify-center space-y-4">
              <div className="flex items-center gap-3 text-sky-400">
                <Award size={20} />
                <span className="font-mono text-xs uppercase tracking-widest">{cert.issuer}</span>
              </div>
              <h3 className="text-2xl font-bold text-white group-hover:text-sky-400 transition-colors">{cert.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{cert.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
