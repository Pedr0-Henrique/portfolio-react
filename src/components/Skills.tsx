import React from 'react';
import { Code2, Database, Layout, Server,  PenTool as Tool } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext'; // Verifique o caminho de importação
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHtml5,
  faCss3,
  faJs,
  faJava,
  faPhp,
  faLaravel,
  faBootstrap,
  faGit,
  faDocker,
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faCode, faServer, faToolbox } from '@fortawesome/free-solid-svg-icons';

const skillCategories = [
  {
    titleKey: 'frontend', // Chave para o título da categoria
    icon: Layout,
    skills: [
      { name: 'HTML', icon: <FontAwesomeIcon icon={faHtml5} className="w-6 h-6 text-orange-500" /> },
      { name: 'CSS', icon: <FontAwesomeIcon icon={faCss3} className="w-6 h-6 text-blue-500" /> },
      { name: 'JavaScript', icon: <FontAwesomeIcon icon={faJs} className="w-6 h-6 text-yellow-400" /> },
      { name: 'Bootstrap', icon: <FontAwesomeIcon icon={faBootstrap} className="w-6 h-6 text-purple-500" /> },
    ],
  },
  {
    titleKey: 'backend', // Chave para o título da categoria
    icon: Server,
    skills: [
      { name: 'Java', icon: <FontAwesomeIcon icon={faJava} className="w-6 h-6 text-red-500" /> },
      { name: 'PHP', icon: <FontAwesomeIcon icon={faPhp} className="w-6 h-6 text-indigo-500" /> },
      { name: 'Laravel', icon: <FontAwesomeIcon icon={faLaravel} className="w-6 h-6 text-red-600" /> },
    ],
  },
  {
    titleKey: 'database', // Chave para o título da categoria
    icon: Database,
    skills: [
      { name: 'MySQL', icon: <FontAwesomeIcon icon={faDatabase} className="w-6 h-6 text-blue-600" /> },
    ],
  },
  {
    titleKey: 'tools', // Chave para o título da categoria
    icon: Tool,
    skills: [
      { name: 'Git', icon: <FontAwesomeIcon icon={faGit} className="w-6 h-6 text-orange-600" /> },
      
    ],
  },
  {
    titleKey: 'languages', // Chave para o título da categoria
    icon: Code2,
    skills: [
      { name: 'JavaScript', icon: <FontAwesomeIcon icon={faJs} className="w-6 h-6 text-yellow-400" /> },
      { name: 'Java', icon: <FontAwesomeIcon icon={faJava} className="w-6 h-6 text-red-500" /> },
      { name: 'PHP', icon: <FontAwesomeIcon icon={faPhp} className="w-6 h-6 text-indigo-500" /> },
    ],
  },
 
];

export function Skills() {
  const { t } = useLanguage(); // Use o hook para acessar as traduções

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          {t('skillsTitle')} {/* Título traduzido */}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.titleKey}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <category.icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400 mr-2" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {t(category.titleKey)} {/* Título da categoria traduzido */}
                </h3>
              </div>
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      {skill.icon} {/* Ícone da linguagem/tecnologia */}
                    </div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {skill.name} {/* Nome da linguagem/tecnologia */}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}