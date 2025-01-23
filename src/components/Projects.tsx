import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext'; // Importe o hook useLanguage

const projects = [
  {
    titleKey: 'project1Title', // Chave para o título do projeto
    descriptionKey: 'project1Description', // Chave para a descrição do projeto
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    titleKey: 'project2Title', // Chave para o título do projeto
    descriptionKey: 'project2Description', // Chave para a descrição do projeto
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0',
    tags: ['Next.js', 'TypeScript', 'MongoDB', 'Socket.io'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    titleKey: 'project3Title', // Chave para o título do projeto
    descriptionKey: 'project3Description', // Chave para a descrição do projeto
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
    tags: ['React', 'D3.js', 'Express', 'Redis'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
];

export function Projects() {
  const { t } = useLanguage(); // Use o hook para acessar as traduções

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          {t('projectsTitle')} {/* Título traduzido */}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.titleKey}
              className="bg-gray-50 dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48">
                <img
                  src={project.image}
                  alt={t(project.titleKey)} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors duration-300"
                    >
                      <Github className="w-5 h-5 text-gray-900" />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors duration-300"
                    >
                      <ExternalLink className="w-5 h-5 text-gray-900" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {t(project.titleKey)} {/* Título do projeto traduzido */}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {t(project.descriptionKey)} {/* Descrição do projeto traduzida */}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}