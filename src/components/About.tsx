import { motion } from 'motion/react';
import { USER_DATA } from '../constants';

export default function About() {
  return (
    <section id="about" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        {/* Left: Photo */}
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="relative group flex flex-col items-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/10 transition-colors duration-500">
            <img 
              src={USER_DATA.photo} 
              alt={USER_DATA.name}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
              referrerPolicy="no-referrer"
            />
          </div>
          
          {/* User Info Overlay/Below */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-8 text-center"
          >
            <h3 className="text-2xl font-bold text-white">{USER_DATA.name}</h3>
            <p className="text-sky-400 font-mono text-sm uppercase tracking-widest mt-1">{USER_DATA.role}</p>
          </motion.div>
        </motion.div>

        {/* Right: Bio */}
        <motion.div 
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-white tracking-tight">About Me</h2>
            <div className="h-1 w-20 bg-sky-500 rounded-full" />
          </div>
          
          <p className="text-xl text-white/80 leading-relaxed font-light">
            {USER_DATA.bio}
          </p>

          <div className="grid grid-cols-2 gap-8 pt-6">
            <div>
              <h4 className="text-sky-400 font-mono text-xs uppercase tracking-widest mb-2">Location</h4>
              <p className="text-white font-medium">Jakarta, Indonesia</p>
            </div>
            <div>
              <h4 className="text-sky-400 font-mono text-xs uppercase tracking-widest mb-2">Experience</h4>
              <p className="text-white font-medium">5+ Years</p>
            </div>
            <div>
              <h4 className="text-sky-400 font-mono text-xs uppercase tracking-widest mb-2">Availability</h4>
              <p className="text-white font-medium">Open to Work</p>
            </div>
            <div>
              <h4 className="text-sky-400 font-mono text-xs uppercase tracking-widest mb-2">Email</h4>
              <p className="text-white font-medium break-all">{USER_DATA.email}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
