import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { USER_DATA } from '../constants';

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20"
        >
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-white">Selected Works</h2>
            <p className="text-white/40 max-w-md">A collection of projects that demonstrate my technical capabilities and problem-solving skills.</p>
          </div>
          <a href="#" className="text-sky-400 font-mono text-sm uppercase tracking-widest hover:text-white transition-colors flex items-center gap-2">
            View All Projects <ExternalLink size={14} />
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {USER_DATA.projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-black border border-white/10 rounded-3xl overflow-hidden hover:border-sky-500/30 transition-all duration-500"
            >
              <div className="aspect-[16/10] overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-white rounded-full text-black hover:bg-sky-400 transition-colors"
                  >
                    <Github size={20} />
                  </a>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-white rounded-full text-black hover:bg-sky-400 transition-colors"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              
              <div className="p-8 space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-mono uppercase tracking-wider px-2 py-1 bg-white/5 text-white/40 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-sky-400 transition-colors">{project.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
