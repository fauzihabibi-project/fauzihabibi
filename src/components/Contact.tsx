import { motion } from 'motion/react';
import { USER_DATA } from '../constants';

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 bg-sky-500/5">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter">Let's build something <span className="text-sky-400">extraordinary</span> together.</h2>
          
          <p className="text-xl text-white/60 font-light max-w-2xl mx-auto">
            Whether you have a question or just want to say hi, my inbox is always open.
          </p>

          <div className="flex flex-wrap justify-center gap-6 pt-10">
            {USER_DATA.socials.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a 
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative p-5 bg-white/[0.03] border border-white/10 rounded-2xl hover:bg-white hover:text-black transition-all duration-500"
                >
                  <Icon size={24} className="relative z-10" />
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] font-mono uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
                    {social.name}
                  </span>
                </motion.a>
              );
            })}
          </div>

          <div className="pt-20">
            <p className="text-white/20 font-mono text-[10px] uppercase tracking-[0.4em]">
              © {new Date().getFullYear()} {USER_DATA.name}. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
