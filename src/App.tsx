import React, { useState, useEffect, useCallback } from "react";
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  Moon,
  Sun,
  ChevronDown,
  Code2,
  Languages,
} from "lucide-react";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { useLanguage } from "./contexts/LanguageContext";

// Componentes reutilizáveis
const Header = ({
  darkMode,
  toggleDarkMode,
  toggleLanguage,
  language,
  scrollToSection,
  activeSection,
  isMenuOpen,
  setIsMenuOpen,
  t,
}) => {
  const navItems = ["home", "about", "skills", "projects", "contact"];

  return (
    <nav className="fixed w-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm z-50 transition-colors duration-300 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Code2 className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
            <span className="flex-shrink-0 font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
              Pedro Dev
            </span>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`${
                    activeSection === item
                      ? "text-indigo-600 dark:text-indigo-400"
                      : "text-gray-600 dark:text-gray-300"
                  } hover:text-indigo-600 dark:hover:text-indigo-400 px-3 py-2 rounded-md text-sm font-medium capitalize transition-all duration-300 hover:scale-105`}
                >
                  {t(item)}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-105 flex items-center space-x-1"
            >
              <Languages
                size={20}
                className={`${
                  darkMode ? "text-white" : "text-gray-900"
                } transition-colors duration-300`}
              />
              <span
                className={`text-sm font-medium ${
                  darkMode ? "text-white" : "text-gray-900"
                } transition-colors duration-300`}
              >
                {language.toUpperCase()}
              </span>
            </button>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-105"
            >
              {darkMode ? (
                <Sun size={20} className="text-white" />
              ) : (
                <Moon size={20} className="text-gray-900" />
              )}
            </button>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300"
              >
                {isMenuOpen ? (
                  <X
                    size={20}
                    className={darkMode ? "text-white" : "text-gray-900"}
                  />
                ) : (
                  <Menu
                    size={20}
                    className={darkMode ? "text-white" : "text-gray-900"}
                  />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`${
                  activeSection === item
                    ? "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-gray-700"
                    : "text-gray-600 dark:text-gray-300"
                } block px-3 py-2 rounded-md text-base font-medium capitalize w-full text-left hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300`}
              >
                {t(item)}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const HeroSection = ({ scrollToSection, t }) => {
  return (
    <section id="home" className="pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto text-center relative">
        {/* Decorative elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-20 right-1/4 w-32 h-32 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full filter blur-3xl opacity-20 animate-pulse delay-300"></div>
        <div className="absolute top-40 left-1/4 w-40 h-40 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full filter blur-3xl opacity-20 animate-pulse delay-700"></div>

        <div className="relative">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            {t("heroTitle")}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            {t("heroSubtitle")}
          </p>
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => scrollToSection("projects")}
              className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              {t("viewProjects")}
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-3 border-2 border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400 rounded-lg hover:bg-indigo-50 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              {t("contactMe")}
            </button>
          </div>
        </div>
        <div className="mt-12 flex justify-center">
          <ChevronDown
            size={32}
            className="animate-bounce text-gray-400 dark:text-gray-500"
          />
        </div>
      </div>
    </section>
  );
};

const AboutSection = ({ t }) => {
  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          {t("aboutMe")}
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              {t("aboutText1")}
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              {t("aboutText2")}
            </p>
            <div className="flex space-x-4 pt-4">
              <a
                href="https://github.com/Pedr0-Henrique"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white bg-gray-100 dark:bg-gray-700 rounded-lg transition-all duration-300 hover:scale-110"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/pedro-henrique-6a22b1324/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white bg-gray-100 dark:bg-gray-700 rounded-lg transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:pedro2002h@gmail.com"
                className="p-3 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white bg-gray-100 dark:bg-gray-700 rounded-lg transition-all duration-300 hover:scale-110"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
          <div className="relative group">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
              alt="Profile"
              className="rounded-lg shadow-xl transition-transform duration-300 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg -z-10 transform translate-x-4 translate-y-4 opacity-20 transition-transform duration-300 group-hover:translate-x-6 group-hover:translate-y-6"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = ({ t }) => {
  return (
    <footer className="bg-white dark:bg-gray-800 py-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-gray-600 dark:text-gray-300">{t("footerText")}</p>
      </div>
    </footer>
  );
};

function App() {
  const { language, setLanguage, t } = useLanguage();
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDarkMode(isDark);
  }, []);

  const toggleDarkMode = useCallback(() => {
    setDarkMode((prev) => !prev);
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguage((prev) => (prev === "pt" ? "en" : "pt"));
  }, [setLanguage]);

  const scrollToSection = useCallback((sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  }, []);

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <Header
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
          toggleLanguage={toggleLanguage}
          language={language}
          scrollToSection={scrollToSection}
          activeSection={activeSection}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          t={t}
        />
        <HeroSection scrollToSection={scrollToSection} t={t} />
        <AboutSection t={t} />
        <Skills />
        <Projects />
        <Contact />
        <Footer t={t} />
      </div>
    </div>
  );
}

export default App;
