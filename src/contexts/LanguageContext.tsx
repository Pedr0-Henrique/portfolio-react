import React, { createContext, useContext, useState } from 'react';

type Language = 'pt' | 'en';

interface Translations {
  [key: string]: {
    pt: string;
    en: string;
  };
}

const translations: Translations = {
  // Navigation
  home: { pt: 'Início', en: 'Home' },
  about: { pt: 'Sobre', en: 'About' },
  skills: { pt: 'Habilidades', en: 'Skills' },
  projects: { pt: 'Projetos', en: 'Projects' },
  contact: { pt: 'Contato', en: 'Contact' },

  // Hero Section
  heroTitle: {
    pt: 'Transformando ideias em código e soluções',
    en: 'Transforming ideas into code and solutions',
  },
  heroSubtitle: {
    pt: 'Desenvolvedor Full-Stack | Estudante de ADS',
    en: 'Full-Stack Developer | Systems Analysis Student',
  },
  viewProjects: { pt: 'Ver Projetos', en: 'View Projects' },
  contactMe: { pt: 'Contato', en: 'Contact' },

  // About Section
  aboutMe: { pt: 'Sobre Mim', en: 'About Me' },
  aboutText1: {
    pt: 'Sou um estudante de Análise e Desenvolvimento de Sistemas atualmente buscando minha primeira oportunidade no mercado de trabalho. Para aprimorar minhas habilidades, trabalho em projetos pessoais, como landing pages, autenticação de usuários, APIs de serviços e portfólios de produtos.',
    en: 'I am a Systems Analysis and Development student currently seeking my first opportunity in the job market. To enhance my skills, I work on personal projects such as landing pages, user authentication, service APIs, and product portfolios.',
  },
  aboutText2: {
    pt: 'Tenho conhecimento prévio em Java e Laravel, e estou constantemente expandindo meu conhecimento em novas tecnologias e melhores práticas de desenvolvimento.',
    en: 'I have prior knowledge in Java and Laravel, and I am constantly expanding my knowledge in new technologies and development best practices.',
  },

  // Skills Section
  skillsTitle: { pt: 'Habilidades', en: 'Skills' },
  frontend: { pt: 'Front-end', en: 'Front-end' },
  backend: { pt: 'Back-end', en: 'Back-end' },
  tools: { pt: 'Ferramentas', en: 'Tools' },

  // Projects Section
  projectsTitle: { pt: 'Projetos', en: 'Projects' },
  project1Title: { pt: 'Landing Page Moderna', en: 'Modern Landing Page' },
  project1Description: {
    pt: 'Uma landing page responsiva e moderna criada com React e Tailwind CSS.',
    en: 'A responsive and modern landing page built with React and Tailwind CSS.',
  },
  project2Title: { pt: 'Sistema de Autenticação', en: 'Authentication System' },
  project2Description: {
    pt: 'Sistema de autenticação de usuários com Node.js, Express e MongoDB.',
    en: 'User authentication system built with Node.js, Express, and MongoDB.',
  },
  project3Title: { pt: 'API de Serviços', en: 'Service API' },
  project3Description: {
    pt: 'API RESTful para gerenciamento de serviços, desenvolvida com Laravel.',
    en: 'RESTful API for service management, developed with Laravel.',
  },

  // Contact Section
  contactTitle: { pt: 'Contato', en: 'Contact' },
  name: { pt: 'Nome', en: 'Name' },
  email: { pt: 'E-mail', en: 'Email' },
  message: { pt: 'Mensagem', en: 'Message' },
  send: { pt: 'Enviar Mensagem', en: 'Send Message' },

  // Footer
  footerText: {
    pt: '© 2024 Pedro Dev. Todos os direitos reservados.',
    en: '© 2024 Pedro Dev. All rights reserved.',
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('pt');

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}