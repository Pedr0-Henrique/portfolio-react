import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext'; // Importe o hook useLanguage

const projects = [
  {
    titleKey: 'project1Title', // Chave para o título do projeto
    descriptionKey: 'project1Description', // Chave para a descrição do projeto
    image: 'https://c0.wallpaperflare.com/preview/530/95/652/art-basketball-basket-basketball-court-building.jpg',
    tags: ['HTML', 'Tailwind CSS', 'JavaScript'],
    githubUrl: 'https://github.com',
    liveUrl: '../src/assests/index.html',
  },
  {
    titleKey: 'project2Title', // Chave para o título do projeto
    descriptionKey: 'project2Description', // Chave para a descrição do projeto
    image: 'https://media.licdn.com/dms/image/v2/D5612AQHGIbvZcicx7w/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1693326244326?e=2147483647&v=beta&t=Kvbx9f6g4KkKthdzEXPzA0LJ2EfKrsL0ePXz1j3EAIY',
    tags: ['PHP', 'MySQL'],
    githubUrl: 'https://github.com/Pedr0-Henrique/cadastro_alunos_e_cursos',
    liveUrl: 'https://example.com',
  },
  {
    titleKey: 'project3Title', // Chave para o título do projeto
    descriptionKey: 'project3Description', // Chave para a descrição do projeto
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnwvNTfMlIuI39sg4Mj8oZcRIpKO3HBA7N8xVyIh8jbyqWY82guB-r60Gf-FxfFsO0QK8&usqp=CAU',
    tags: ['Java', 'Swing'],
    githubUrl: 'https://github.com/Pedr0-Henrique/Gerenciador-de-Tarefas',
    liveUrl: 'https://example.com',
  },
  {
    titleKey: 'project4Title', // Chave para o título do projeto
    descriptionKey: 'project4Description', // Chave para a descrição do projeto
    image: 'https://i.pinimg.com/736x/b6/7c/9a/b67c9afad895288b347b9d52ceeebe8c.jpg',
    tags: ['Laravel', 'Bootstrap'],
    githubUrl: 'https://github.com/Pedr0-Henrique/crud_basico2',
    liveUrl: 'https://example.com',
  },
  {
    titleKey: 'project5Title', // Chave para o título do projeto
    descriptionKey: 'project5Description', // Chave para a descrição do projeto
    image: 'https://media.slidesgo.com/storage/37903558/responsive-images/0-neo-brutalist-style-business-basic-template___media_library_original_548_308.jpg',
    tags: ['HTML', 'JavaScript', 'Tailwind  CSS'],
    githubUrl: '#',
    liveUrl: 'src/assests/landing/index.html',
  },
  {
    titleKey: 'project6Title', // Chave para o título do projeto
    descriptionKey: 'project6Description', // Chave para a descrição do projeto
    image: 'https://logowik.com/content/uploads/images/t_dashboard5777.jpg',
    tags: ['HTML', 'JavaScript', 'Tailwind  CSS'],
    githubUrl: '#',
    liveUrl: 'src/assests/dashboard/index.html',
  },
  {
    titleKey: 'project7Title', // Chave para o título do projeto
    descriptionKey: 'project7Description', // Chave para a descrição do projeto
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbLIJ_2cdxMSHgoI63748Pb90XCujhoTRw4Q&s',
    tags: ['HTML', 'JavaScript', 'Tailwind  CSS'],
    githubUrl: '#',
    liveUrl: 'src/assests/filme/index.html',
  }
  
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