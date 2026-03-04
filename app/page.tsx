'use client';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import ContactSection from './components/ContactSection';
import ProjectsSection from './components/ProjectsSection';
import SkillSection from './components/SkillSection';
import UserProfile from './components/UserProfile';

function Navbar() {
  const [menu, setMenu] = useState('profile');
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Profile', tag: 'profile', href: '#profile' },
    { name: 'Skills', tag: 'skills', href: '#skills' },
    { name: 'Projects', tag: 'projects', href: '#projects' },
    { name: 'Contacts', tag: 'contacts', href: '#contacts' },
  ];

  useEffect(() => {
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setMenu(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6,
        rootMargin: '0px 0px -20% 0px',
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const selectMenu = (menu: string) => {
    setMenu(menu);
    setIsOpen(false);
  };

  return (
    <nav className='bg-gradient-to-br from-[#050816] via-[#0a0f2c] to-black shadow-md fixed w-full z-50 '>
      <div className='max-w-7xl mx-auto px-4 pt-1'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo */}
          <div className='text-2xl font-bold text-blue-600'></div>

          {/* Desktop Menu */}
          <div className='hidden md:flex space-x-8 bg-gray-200 pl-2 pr-2 p-1  border-2 border-solid rounded-l-full rounded-r-full text-lg'>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => selectMenu(link.tag)}
                className={`${menu === link.tag ? 'bg-purple-400' : 'bg-gray-200'} ${menu === link.tag ? 'text-white' : 'text-gray-700'}  hover:text-white hover:scale-105 hover:bg-purple-300 p-2 pl-4 pr-4 rounded-full transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Button */}
          <div className='md:hidden'>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='text-gray-700'
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='md:hidden bg-white shadow-lg'>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className='block px-4 py-3 border-b text-gray-700 hover:bg-gray-100'
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

export default function Home() {
  return (
    <div className='flex min-h-screen bg-zinc-50 font-sans'>
      <Navbar />
      <div className='flex flex-col w-full bg-gradient-to-br from-[#050816] via-[#0a0f2c] to-black'>
        <UserProfile />
        <SkillSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </div>
  );
}
