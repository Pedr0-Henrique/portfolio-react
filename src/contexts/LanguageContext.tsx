import React, { createContext, useContext, useState } from "react";

type Language = "pt" | "en";

interface Translations {
  [key: string]: {
    pt: string;
    en: string;
  };
}

const translations: Translations = {
  // Navigation
  home: { pt: "Início", en: "Home" },
  about: { pt: "Sobre", en: "About" },
  skills: { pt: "Habilidades", en: "Skills" },
  projects: { pt: "Projetos", en: "Projects" },
  contact: { pt: "Contato", en: "Contact" },

  // Hero Section
  heroTitle: {
    pt: "Transformando ideias em código e soluções",
    en: "Transforming ideas into code and solutions",
  },
  heroSubtitle: {
    pt: "Desenvolvedor Full-Stack | Estudante de ADS",
    en: "Full-Stack Developer | Systems Analysis Student",
  },
  viewProjects: { pt: "Ver Projetos", en: "View Projects" },
  contactMe: { pt: "Contato", en: "Contact" },

  // About Section
  aboutMe: { pt: "Sobre Mim", en: "About Me" },
  aboutText1: {
    pt: "Sou um estudante de Análise e Desenvolvimento de Sistemas atualmente buscando minha primeira oportunidade no mercado de trabalho. Para aprimorar minhas habilidades, trabalho em projetos pessoais, como landing pages, autenticação de usuários, APIs de serviços e portfólios de produtos.",
    en: "I am a Systems Analysis and Development student currently seeking my first opportunity in the job market. To enhance my skills, I work on personal projects such as landing pages, user authentication, service APIs, and product portfolios.",
  },
  aboutText2: {
    pt: "Tenho conhecimento prévio em Java e Laravel, e estou constantemente expandindo meu conhecimento em novas tecnologias e melhores práticas de desenvolvimento.",
    en: "I have prior knowledge in Java and Laravel, and I am constantly expanding my knowledge in new technologies and development best practices.",
  },

  // Skills Section
  skillsTitle: { pt: "Habilidades", en: "Skills" },
  frontend: { pt: "Front-end", en: "Front-end" },
  backend: { pt: "Back-end", en: "Back-end" },
  tools: { pt: "Ferramentas", en: "Tools" },

  // Projects Section

  projectsTitle: { 
    pt: "Projetos", 
    en: "Projects" 
  },
  project1Title: { 
    pt: "Landing Page Moderna", 
    en: "Modern Landing Page" 
  },
  project1Description: {
    pt: "Uma landing page responsiva e moderna criada com React e Tailwind CSS.",
    en: "A responsive and modern landing page built with React and Tailwind CSS.",
  },
  project2Title: {
    pt: "Sistema de Registro de Cursos e Alunos",
    en: "Course and Student Registration System",
  },
  project2Description: {
    pt: "Um sistema de registro de cursos e alunos criado com PHP e MySQL.",
    en: "A course and student registration system built with PHP and MySQL.",
  },
  project3Title: { 
    pt: "Gerenciador de Tarefas", 
    en: "Task Manager" 
  },
  project3Description: {
    pt: "Gerenciador de Tarefas é um sistema desktop desenvolvido em Java, utilizando a biblioteca Swing para interface gráfica. Este aplicativo permite aos usuários criar, editar, excluir e organizar tarefas de forma eficiente, adicionando recursos como prioridade, prazos e status de progresso.",
    en: "Task Manager is a desktop system developed in Java, using the Swing library for graphical interface. This application allows users to create, edit, delete and organize tasks efficiently, adding features such as priority, deadlines, and progress status.",
  },
  project4Title: { 
    pt: "CRUD Básico", 
    en: "Basic CRUD System" 
  },
  project4Description: {
    pt: "Desenvolvimento de um sistema de gerenciamento com três módulos principais: CRUD de Produtos (cadastro, edição, visualização e remoção de produtos), Autenticação de Usuários (cadastro e login seguro) e CRUD de Pedidos (gestão completa de pedidos com envio de status).",
    en: "Development of a management system with three main modules: Product CRUD (registration, editing, viewing and removal of products), User Authentication (registration and secure login), and Order CRUD (complete order management with status sending).",
  },
  project5Title: {
    pt: "Landing Page de Produtos",
    en: "Landing Page of Products",
  },
  project5Description: {
    pt: "Este projeto é uma landing page responsiva no estilo Neo-Brutalismo, projetada para exibir um produto ou serviço. Ela apresenta tipografia em negrito, animações GSAP interativas e um menu off-canvas otimizado para dispositivos móveis. A página inclui seções para o herói, recursos do produto, planos de preços e um rodapé de contato com links de mídia social. O design foca em bordas fortes, sombras e uma IU limpa e moderna, proporcionando uma experiência envolvente e visualmente marcante em todos os dispositivos",
    en: "This project is a responsive Neo-Brutalism-style landing page designed to showcase a product or service. It features bold typography, interactive GSAP animations, and a mobile-friendly off-canvas menu. The page includes sections for the hero, product features, pricing plans, and a contact footer with social media links. The design focuses on strong borders, shadows, and a clean, modern UI, providing an engaging and visually striking experience across all devices",
  },
  project6Title: {
    pt: " Dashboard Interativo",
    en: " Interactive Dashboard",
  },
  project6Description: {
    pt: "Este projeto é um Dashboard Interativo que exibe gráficos dinâmicos e uma tabela de produtos com informações sobre estoque e preços. A página é totalmente responsiva e utiliza Tailwind CSS para o design moderno, O dashboard contém dois gráficos: um gráfico de linhas para mostrar vendas mensais e um gráfico de barras para exibir a quantidade de itens em estoque. Além disso, há uma tabela que exibe os produtos, seus preços e a quantidade disponível. O layout é otimizado para oferecer uma experiência interativa e agradável ao usuário.",
    en: "This project is an Interactive Dashboard that displays dynamic charts and a product table with information about stock and prices. The page is fully responsive and uses Tailwind CSS for modern design,The dashboard features two charts: a line chart to show monthly sales and a bar chart to display the stock quantity of items. Additionally, there is a table showing the products, their prices, and available stock. The layout is optimized to provide an interactive and enjoyable user experience.",
  },




  // Contact Section
  contactTitle: { pt: "Contato", en: "Contact" },
  name: { pt: "Nome", en: "Name" },
  email: { pt: "E-mail", en: "Email" },
  message: { pt: "Mensagem", en: "Message" },
  send: { pt: "Enviar Mensagem", en: "Send Message" },

  // Footer
  footerText: {
    pt: "© 2024 Pedro Dev. Todos os direitos reservados.",
    en: "© 2024 Pedro Dev. All rights reserved.",
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("pt");

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
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
