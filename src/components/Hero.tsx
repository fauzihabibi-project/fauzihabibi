import { motion, animate } from 'motion/react';
import { useEffect, useState } from 'react';
import { USER_DATA } from '../constants';

export default function Hero() {
  const [displayText, setDisplayText] = useState("");
  const fullText = `${USER_DATA.role}. Building modern web experiences with precision and passion.`;

  useEffect(() => {
    const controls = animate(0, fullText.length, {
      duration: 3,
      ease: "linear",
      onUpdate: (latest) => {
        setDisplayText(fullText.slice(0, Math.round(latest)));
      },
    });
    return controls.stop;
  }, []);

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-6">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-sky-500/20 blur-[120px] rounded-full -z-10" />
      
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center"
      >
        <motion.span 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-sky-400 font-mono text-sm tracking-widest uppercase mb-4 block"
        >
          Welcome to my digital space
        </motion.span>
        
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-6xl md:text-8xl font-bold tracking-tighter text-white mb-6"
        >
          I'm {USER_DATA.name.split(' ')[0]}
        </motion.h1>
        
        <div className="min-h-[4rem] flex items-center justify-center">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xl md:text-2xl text-white/60 max-w-2xl mx-auto font-light leading-relaxed"
          >
            {displayText}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity, ease: "steps(2)" }}
              className="inline-block w-1 h-6 bg-sky-400 ml-1 align-middle"
            />
          </motion.p>
        </div>
        
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-10 flex gap-4 justify-center"
        >
          <a 
            href="#projects" 
            className="px-8 py-4 bg-white text-black rounded-full font-medium hover:bg-sky-400 transition-colors"
          >
            View Projects
          </a>
          <a 
            href="#contact" 
            className="px-8 py-4 border border-white/20 text-white rounded-full font-medium hover:bg-white/10 transition-colors"
          >
            Get in Touch
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent" />
      </motion.div>
    </section>
  );
}
