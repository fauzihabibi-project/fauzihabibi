document.addEventListener('DOMContentLoaded', () => {
  // Set copyright year
  document.getElementById('year').textContent = new Date().getFullYear();

  // Populate Skills
  const skillsContainer = document.getElementById('skills-container');
  USER_DATA.skills.forEach((skill, index) => {
    const delay = index * 50;
    const skillEl = document.createElement('div');
    skillEl.className = 'group flex flex-col items-center gap-4 p-6 bg-white/[0.02] border border-white/5 rounded-2xl hover:bg-white/[0.05] hover:border-sky-500/30 transition-all duration-300 motion-element scale-75 opacity-0 transition-all duration-700';
    skillEl.style.transitionDelay = `${delay}ms`;
    skillEl.innerHTML = `
      <div class="w-12 h-12 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-300">
        <img src="${skill.icon}" alt="${skill.name}" class="w-full h-full object-contain" />
      </div>
      <span class="text-xs font-mono text-white/40 group-hover:text-white transition-colors uppercase tracking-wider">
        ${skill.name}
      </span>
    `;
    skillsContainer.appendChild(skillEl);
  });

  // Populate Projects
  const projectsContainer = document.getElementById('projects-container');
  USER_DATA.projects.forEach((project, index) => {
    const delay = index * 100;
    const projectEl = document.createElement('div');
    projectEl.className = 'group bg-black border border-white/10 rounded-3xl overflow-hidden hover:border-sky-500/30 transition-all duration-500 motion-element translate-y-10 opacity-0 transition-all duration-700';
    projectEl.style.transitionDelay = `${delay}ms`;
    
    // Generate Tags HTML
    const tagsHtml = project.tags.map(tag => 
      `<span class="text-[10px] font-mono uppercase tracking-wider px-2 py-1 bg-white/5 text-white/40 rounded-md">${tag}</span>`
    ).join('');

    projectEl.innerHTML = `
      <div class="aspect-[16/10] overflow-hidden relative">
        <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerpolicy="no-referrer" />
        <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
          <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="p-3 bg-white rounded-full text-black hover:bg-sky-400 transition-colors flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
          </a>
          <a href="${project.link}" target="_blank" rel="noopener noreferrer" class="p-3 bg-white rounded-full text-black hover:bg-sky-400 transition-colors flex items-center justify-center">
            <i data-lucide="external-link" class="w-5 h-5"></i>
          </a>
        </div>
      </div>
      <div class="p-8 space-y-4">
        <div class="flex flex-wrap gap-2">
          ${tagsHtml}
        </div>
        <h3 class="text-2xl font-bold text-white group-hover:text-sky-400 transition-colors">${project.title}</h3>
        <p class="text-white/40 text-sm leading-relaxed">${project.description}</p>
      </div>
    `;
    projectsContainer.appendChild(projectEl);
  });

  // Populate Certificates
  const certContainer = document.getElementById('certificates-container');
  USER_DATA.certificates.forEach((cert, index) => {
    const dir = index % 2 === 0 ? '-translate-x-10' : 'translate-x-10';
    const certEl = document.createElement('div');
    certEl.className = `group flex flex-col lg:flex-row bg-white/[0.02] border border-white/10 rounded-3xl overflow-hidden hover:border-sky-500/30 transition-all duration-500 motion-element ${dir} opacity-0 transition-all duration-700`;
    
    certEl.innerHTML = `
      <div class="lg:w-2/5 aspect-video lg:aspect-square overflow-hidden">
        <img src="${cert.image}" alt="${cert.title}" class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" referrerpolicy="no-referrer" />
      </div>
      <div class="lg:w-3/5 p-8 flex flex-col justify-center space-y-4">
        <div class="flex items-center gap-3 text-sky-400">
          <i data-lucide="award" class="w-5 h-5"></i>
          <span class="font-mono text-xs uppercase tracking-widest">${cert.issuer}</span>
        </div>
        <h3 class="text-2xl font-bold text-white group-hover:text-sky-400 transition-colors">${cert.title}</h3>
        <p class="text-white/40 text-sm leading-relaxed">${cert.description}</p>
      </div>
    `;
    certContainer.appendChild(certEl);
  });

  // Populate Socials (Contact Section)
  const contactContainer = document.getElementById('contact-container');
  USER_DATA.socials.forEach((social, index) => {
    const delay = index * 100;
    const socialEl = document.createElement('a');
    socialEl.href = social.url;
    socialEl.target = '_blank';
    socialEl.rel = 'noopener noreferrer';
    socialEl.className = 'group relative p-5 bg-white/[0.03] border border-white/10 rounded-2xl hover:bg-white hover:text-black transition-all duration-500 motion-element scale-75 opacity-0 transition-all duration-700';
    socialEl.style.transitionDelay = `${delay}ms`;
    
    socialEl.innerHTML = `
      ${social.iconSvg}
      <span class="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] font-mono uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
        ${social.name}
      </span>
    `;
    contactContainer.appendChild(socialEl);
  });

  // Initialize Lucide Icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // --- ANIMATIONS & INTERACTIVITY --- //

  // Initial Navbar Entry
  setTimeout(() => {
    const navbar = document.getElementById('navbar');
    navbar.classList.remove('opacity-0', '-translate-y-20');
    navbar.classList.add('opacity-100', 'translate-y-0');
  }, 100);

  // Typing Animation for Hero Section
  const roleText = "Fullstack Developer & UI/UX Designer. Building modern web experiences with precision and passion.";
  const typingEl = document.getElementById('hero-typing');
  let charIdx = 0;
  
  function typeWriter() {
    if (charIdx < roleText.length) {
      typingEl.textContent += roleText.charAt(charIdx);
      charIdx++;
      setTimeout(typeWriter, 40); // speed
    }
  }
  setTimeout(typeWriter, 1200);

  // Intersection Observer for Scroll Animations
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };
  
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Trigger generic reveal
        entry.target.classList.remove('opacity-0', 'translate-y-5', '-translate-x-12', 'translate-x-12', 'translate-y-12', 'translate-y-10', 'scale-90', 'scale-75', '-translate-x-10', 'translate-x-10');
        entry.target.classList.add('opacity-100', 'translate-y-0', 'translate-x-0', 'scale-100');
        
        // Unobserve after showing
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Attach observer to all motion elements
  document.querySelectorAll('.motion-element').forEach((el) => {
    observer.observe(el);
  });
});
