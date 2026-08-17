import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ChevronRight, ChevronLeft } from 'lucide-react';

export default function PortfolioHero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const skillSets = [
    {
      id: 1,
      title: 'Aerodynamics & Fluid Mechanics',
      description:
        'Expert proficiency in Computational Fluid Dynamics (CFD) simulations using industry-standard tools. Extensive experience in wind tunnel testing methodologies, boundary layer analysis, and transonic flow optimization. Specialized in drag reduction strategies and high-speed aerodynamic design for supersonic applications.',
      image: './Scroll Linked/image1.jpg',
      tags: ['CFD', 'ANSYS Fluent', 'Wind Tunnel', 'Transonic Flow'],
    },
    {
      id: 2,
      title: 'Structural Analysis & Materials',
      description:
        'Proficient in Finite Element Analysis (FEA) for complex load cases and stress concentrations. Deep expertise in composite material selection, laminate design, and failure prediction models. Experienced in fatigue analysis, creep behavior modeling, and advanced material characterization for aerospace-grade structures.',
      image: './Scroll Linked/image2.jpg',
      tags: ['FEA', 'ABAQUS', 'Composites', 'Failure Analysis'],
    },
    {
      id: 3,
      title: 'Propulsion & Flight Dynamics',
      description:
        'Comprehensive understanding of jet engine thermodynamics, compressor and turbine stage design. Expertise in orbital mechanics, trajectory optimization, and control system stability analysis. Skilled in developing flight control laws, dynamic modeling, and performance envelope mapping for advanced aircraft systems.',
      image: './Scroll Linked/image3.jpg',
      tags: ['Propulsion', 'Control Systems', 'Orbital Mechanics', 'MATLAB Simulink'],
    },
    {
      id: 4,
      title: 'Systems Engineering & CAD',
      description:
        'Master-level proficiency in advanced 3D parametric modeling using CATIA and SOLIDWORKS. Extensive project lifecycle management from conceptual design through manufacturing. Experience in systems integration, requirement traceability, risk assessment, and cross-functional team coordination for complex aerospace programs.',
      image: './Scroll Linked/image4.jpg',
      tags: ['CATIA', 'SOLIDWORKS', '3D Modeling', 'Systems Integration'],
    },
  ];

  const handleSkillTransition = (index) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSkillIndex(index);
      setIsTransitioning(false);
    }, 300);
  };

  const nextSkill = () => {
    handleSkillTransition((currentSkillIndex + 1) % skillSets.length);
  };

  const prevSkill = () => {
    handleSkillTransition(
      (currentSkillIndex - 1 + skillSets.length) % skillSets.length
    );
  };

  const currentSkill = skillSets[currentSkillIndex];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-black to-slate-950">
      {/* Sticky Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/40 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-xl font-bold tracking-tight bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
                Gopolang Makgothi
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a
                href="#home"
                className="text-sm text-white/70 hover:text-white transition-colors duration-300"
              >
                Home
              </a>
              <a
                href="#profile"
                className="text-sm text-white/70 hover:text-white transition-colors duration-300"
              >
                Profile
              </a>
              <a
                href="#skills"
                className="text-sm text-white/70 hover:text-white transition-colors duration-300"
              >
                Skills
              </a>
              <a
                href="#contact"
                className="text-sm text-white/70 hover:text-white transition-colors duration-300"
              >
                Contact
              </a>
              <button className="px-6 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 rounded-lg transition-all duration-300 shadow-lg hover:shadow-blue-500/50">
                Resume
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white hover:text-blue-400 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-3 border-t border-white/10 pt-4">
              <a
                href="#home"
                className="block text-sm text-white/70 hover:text-white transition-colors"
              >
                Home
              </a>
              <a
                href="#profile"
                className="block text-sm text-white/70 hover:text-white transition-colors"
              >
                Profile
              </a>
              <a
                href="#skills"
                className="block text-sm text-white/70 hover:text-white transition-colors"
              >
                Skills
              </a>
              <a
                href="#contact"
                className="block text-sm text-white/70 hover:text-white transition-colors"
              >
                Contact
              </a>
              <button className="w-full px-6 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg transition-all duration-300">
                Resume
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative w-full h-screen overflow-hidden pt-20"
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="./Scroll Linked/sr71.jpg"
            alt="SR-71 Blackbird"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
        </div>

        {/* Hero Content */}
        <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
          <div className="space-y-6 max-w-4xl">
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
                Gopolang Makgothi
              </span>
            </h2>

            <h3 className="text-2xl md:text-3xl text-blue-400 font-light tracking-wide">
              Aerospace Engineer | Honours Graduate
            </h3>

            <p className="text-base md:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto font-light">
              Specializing in high-speed aerodynamics and advanced structural design.
              Passionate about pushing the boundaries of aerospace innovation through
              rigorous engineering principles and cutting-edge computational analysis.
            </p>

            <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="px-8 py-3 text-white font-medium bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 rounded-lg transition-all duration-300 shadow-lg hover:shadow-blue-500/50">
                Explore My Work
              </button>
              <button className="px-8 py-3 text-white font-medium bg-white/10 border border-white/20 hover:bg-white/20 rounded-lg transition-all duration-300">
                Get in Touch
              </button>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="text-white/40 text-sm">Scroll to explore</div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-20 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="mb-16 text-center">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">
              <span className="bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
                Technical Expertise
              </span>
            </h2>
            <p className="text-white/60 text-lg">
              Four pillars of aerospace engineering excellence
            </p>
          </div>

          {/* Skills Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Image Section */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-blue-400/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
              <div className="relative overflow-hidden rounded-2xl backdrop-blur-sm bg-black/40 border border-white/10">
                <div
                  className={`relative h-80 md:h-96 overflow-hidden transition-opacity duration-300 ${
                    isTransitioning ? 'opacity-0' : 'opacity-100'
                  }`}
                >
                  <img
                    key={currentSkill.id}
                    src={currentSkill.image}
                    alt={currentSkill.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                </div>

                {/* Navigation Controls */}
                <div className="absolute inset-0 flex items-center justify-between p-6 pointer-events-none">
                  <button
                    onClick={prevSkill}
                    className="pointer-events-auto p-3 rounded-full backdrop-blur-md bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-all duration-300 hover:scale-110 active:scale-95"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={nextSkill}
                    className="pointer-events-auto p-3 rounded-full backdrop-blur-md bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-all duration-300 hover:scale-110 active:scale-95"
                  >
                    <ChevronRight size={24} />
                  </button>
                </div>

                {/* Skill Indicators */}
                <div className="absolute bottom-6 left-6 right-6 flex gap-2 pointer-events-none">
                  {skillSets.map((skill, index) => (
                    <button
                      key={skill.id}
                      onClick={() => handleSkillTransition(index)}
                      className={`pointer-events-auto h-1 rounded-full transition-all duration-300 ${
                        index === currentSkillIndex
                          ? 'bg-blue-500 w-8'
                          : 'bg-white/30 hover:bg-white/50 w-2'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Text Content Section */}
            <div className="flex flex-col justify-center">
              <div className="backdrop-blur-md bg-gradient-to-br from-white/5 to-blue-500/5 border border-white/10 rounded-2xl p-8 md:p-10 transition-all duration-300">
                <div
                  className={`transition-opacity duration-300 ${
                    isTransitioning ? 'opacity-0' : 'opacity-100'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 flex items-center justify-center text-white font-bold text-sm">
                      {currentSkillIndex + 1}
                    </div>
                    <span className="text-white/50 text-sm">
                      {currentSkillIndex + 1} of {skillSets.length}
                    </span>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                    {currentSkill.title}
                  </h3>

                  <p className="text-white/70 text-base md:text-lg leading-relaxed mb-8">
                    {currentSkill.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-3">
                    {currentSkill.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 rounded-lg backdrop-blur-sm bg-blue-500/20 border border-blue-400/30 text-blue-300 text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                {[
                  { label: 'Projects', value: '15+' },
                  { label: 'Tools', value: '20+' },
                  { label: 'Experience', value: '5+ yrs' },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-lg p-4 text-center hover:bg-white/10 transition-all duration-300"
                  >
                    <p className="text-blue-400 font-bold text-xl md:text-2xl">
                      {stat.value}
                    </p>
                    <p className="text-white/60 text-sm mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 md:py-16 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
            {/* Brand */}
            <div>
              <h3 className="text-lg font-bold bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent mb-2">
                Gopolang Makgothi
              </h3>
              <p className="text-white/50 text-sm">
                Aerospace Engineer specializing in advanced aerodynamics and
                structural design.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Navigation</h4>
              <ul className="space-y-2">
                {['Home', 'Profile', 'Skills', 'Contact'].map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-white/50 hover:text-white text-sm transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Connect</h4>
              <div className="flex gap-4">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg backdrop-blur-sm bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-blue-400/50 transition-all duration-300"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg backdrop-blur-sm bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-blue-400/50 transition-all duration-300"
                >
                  <Github size={20} />
                </a>
                <a
                  href="mailto:contact@example.com"
                  className="p-3 rounded-lg backdrop-blur-sm bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-blue-400/50 transition-all duration-300"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-white/5 text-center">
            <p className="text-white/40 text-sm">
              © 2026 Gopolang Makgothi. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
