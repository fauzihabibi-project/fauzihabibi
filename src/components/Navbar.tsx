import { motion } from 'motion/react';

export default function Navbar() {
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6"
    >
      <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-full px-6 py-3 flex items-center gap-8">
        {navItems.map((item) => (
          <a 
            key={item.name}
            href={item.href}
            className="text-sm font-medium text-white/60 hover:text-white transition-colors"
          >
            {item.name}
          </a>
        ))}
      </div>
    </motion.nav>
  );
}
