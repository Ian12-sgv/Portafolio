import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          "welcome": "Greetings Ian Franco Bonillo",
          "profession": "Systems Engineer",
          "available": "Available for work",
          "download_cv": "Download CV",
          "text1": "I am a junior with front-end experience.",
          "text2": "I am starting in back-end.",
          "skills": "SKILLS",
          "frontend": "Front-end",
          "backend": "Back-end",
          "complements": "Complements",
          "css": "CSS",
          "html": "HTML",
          "javascript": "JavaScript",
          "typescript": "TypeScript",
          "bootstrap": "Bootstrap",
          "material_ui": "Material UI",
          "react": "React",
          "php": "PHP",
          "mysql": "MySQL",
          "laravel": "Laravel",
          "node": "Node",
          "git": "Git",
          "vite": "Vite",
          "projects": "Applications",
          "food_truck": "Food Truck",
          "food_truck_desc": "Design and development of a website based on React, where the customer selects their preferred option and makes payments via credit or debit cards.",
          "portfolio": "Portfolio",
          "portfolio_desc": "A space that provides academic information, a collection of completed works, as well as skills and tools developed as a Systems Engineer and programmer.",
          "education": "Education",
          "university": "University",
          "courses": "Courses",
          "professional_experience": "Professional Experience",
          "frontend_dev": "Front-end Developer",
          "fullstack_dev": "Full-Stack Developer",
          "unefa": "Universidad Nacional Experimental Politécnica de la Fuerza Armada Nacional Bolivariana (UNEFA) - Systems Engineer",
          "udemy": "UDEMY - 2020",
          "educacion_it": "EDUCACIÓN IT - 2024",
          "nerdcom": "Nerdcom - 6 months",
          "iclam": "ICLAM - 6 months",
          "home": "Home",
          "formation": "Formation",
          "gym_desc" : "This is a gym website, where you can register, log in, and see the different exercises that are available. (not responsive)"
        }
      },
      es: {
        translation: {
          "welcome": "Te saluda Ian Franco Bonillo",
          "profession": "Ingeniero de Sistemas",
          "available": "Disponible para trabajar",
          "download_cv": "Descargar CV",
          "text1": "Soy un junior con experiencia en front-end.",
          "text2": "Estoy iniciado en back-end.",
          "skills": "HABILIDADES",
          "frontend": "Front-end",
          "backend": "Back-end",
          "complements": "Complementos",
          "css": "CSS",
          "html": "HTML",
          "javascript": "JavaScript",
          "typescript": "TypeScript",
          "bootstrap": "Bootstrap",
          "material_ui": "Material UI",
          "react": "React",
          "php": "PHP",
          "mysql": "MySQL",
          "laravel": "Laravel",
          "node": "Node",
          "git": "Git",
          "vite": "Vite",
          "projects": "Aplicaciones",
          "food_truck": "Food Truck",
          "food_truck_desc": "Diseño y elaboración de página web, basada en React; en donde el cliente selecciona la opción de su preferencia y realiza los pagos a través de tarjetas de crédito o débito. (no es responsivo)",
          "portfolio": "Portafolio",
          "portfolio_desc": "Espacio que suministra información académica, recopilación de trabajos realizados, así como habilidades y herramientas, desarrolladas como Ingeniero de Sistemas y programador",
          "education": "Educación",
          "university": "Universidad",
          "courses": "Cursos",
          "professional_experience": "Experiencia Profesional",
          "frontend_dev": "Desarrollador front-end",
          "fullstack_dev": "Desarrollador Full-Stack",
          "unefa": "Universidad Nacional Experimental Politécnica de la Fuerza Armada Nacional Bolivariana (UNEFA) - Ingeniero de Sistemas",
          "udemy": "UDEMY - 2020",
          "educacion_it": "EDUCAIÓN IT - 2024",
          "nerdcom": "Nerdcom - 6 meses",
          "iclam": "ICLAM - 6 meses",
          "home": "Inicio",
          "formation": "Formación",
          "gym_desc" : "Este es un sitio web de gimnasio, donde puedes registrarte, iniciar sesión y ver los ejercicios disponibles. (no es responsive)"
        }
      }
    }
  });

export default i18n;
