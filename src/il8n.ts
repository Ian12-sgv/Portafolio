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
          "welcome": "Hello, I am Ian Franco Bonillo",
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
          "projects": "Projects",
          "food_truck": "Food Truck",
          "food_truck_desc": "It is a fast food ordering system where customers can place orders and pay with credit or debit cards. It was my first project in React.",
          "v8": "V8",
          "v8_desc": "It is a fast food ordering system where customers can place orders and pay with credit or debit cards.",
          "portfolio": "My Portfolio",
          "portfolio_desc": "This is my portfolio where you can see my projects and personal information.",
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
          "formation": "Formation"

        }
      },
      es: {
        translation: {
          "welcome": "Hola, Soy Ian Franco Bonillo",
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
          "projects": "Proyectos",
          "food_truck": "Food Truck",
          "food_truck_desc": "Es un sistema de pedido para comida rápida, donde los clientes pueden realizar pedidos y pagar con tarjeta de crédito o débito. Fue mi primer proyecto en React.",
          "v8": "V8",
          "v8_desc": "Es un sistema de pedido para comida rápida, donde los clientes pueden realizar pedidos y pagar con tarjeta de crédito o débito.",
          "portfolio": "Mi Portafolio",
          "portfolio_desc": "Este es mi portafolio, donde puedes ver mis proyectos y mi información personal.",
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
          "formation": "Formación"
        }
      }
    }
  });

export default i18n;
