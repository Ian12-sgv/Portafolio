// src/Componenete/Proyectos.tsx
import { useState, useEffect } from "react";
import "../Style/Proyectos.css";

import FoodTruck from "../assets/FoodTruck.png";
import Portafolio from "../assets/Portafolio.png";
import Binance from "../assets/binance.png";
import Suscripcion from "../assets/Suscripciones.png";
import Convertidor from "../assets/convertidor.png";
import Precios from "../assets/Precios.jpeg";
import Existencia from "../assets/existencia.jpeg";
import rotacion from "../assets/rotacion.jpeg";
import consultor from "../assets/consultor.jpeg";
import wizard from "../assets/wizard.png";

import { useTranslation } from "react-i18next";
import { ExternalLink, Github, ArrowLeft, ArrowRight } from "lucide-react";

type ProjectType = "todos" | "personal" | "trabajo" | "freelance";

type Project = {
  id: string;
  type: ProjectType;
  image: string;
  emoji: string;
  titleKey: string;
  descKey: string;
  techKeys: string[];
  demoUrl: string;
  githubUrl?: string;
};

const projects: Project[] = [
  {
    id: "food-truck",
    type: "personal",
    image: FoodTruck,
    emoji: "",
    titleKey: "food_truck",
    descKey: "food_truck_desc",
    techKeys: ["react", "typescript"],
    demoUrl: "https://camiondecomida.netlify.app/",
    githubUrl: "https://github.com/Ian12-sgv/food",
  },
  {
    id: "portfolio",
    type: "personal",
    image: Portafolio,
    emoji: "",
    titleKey: "portfolio",
    descKey: "portfolio_desc",
    techKeys: ["react", "typescript"],
    demoUrl: "https://ianfranco.netlify.app/",
    githubUrl: "https://github.com/Ian12-sgv/Portafolio",
  },
  {
    id: "binance",
    type: "personal",
    image: Binance,
    emoji: "",
    titleKey: "Binance",
    descKey: "binanance",
    techKeys: ["react", "typescript", "api", "chart.js"],
    demoUrl: "https://api-binance-estadistica.netlify.app",
    githubUrl: "https://github.com/Ian12-sgv/binance",
  },
  {
    id: "suscription",
    type: "personal",
    image: Suscripcion,
    emoji: "",
    titleKey: "Suscripcion",
    descKey: "suscripcion",
    techKeys: ["react", "typescript"],
    demoUrl: "https://costo-suscripciones.netlify.app/",
    githubUrl: "https://github.com/Ian12-sgv/Portafolio",
  },
  {
    id: "converter",
    type: "personal",
    image: Convertidor,
    emoji: "",
    titleKey: "Convertidor",
    descKey: "convertidor",
    techKeys: ["react", "material-ui", "API REST"],
    demoUrl: "https://convertidor-de-divisas.netlify.app/",
    githubUrl: "https://github.com/Ian12-sgv/convertidor",
  },
  {
    id: "precios-tienda",
    type: "trabajo",
    image: Precios,
    emoji: "",
    titleKey: "Precios",
    descKey:
      "Plataforma web responsiva que permite a los clientes consultar en tiempo real el listado y precios actualizados de los productos de la tienda",
    techKeys: [
      "react",
      "typescript",
      "node.js",
      "express",
      "sql server",
      "api rest(c#)",
    ],
    demoUrl: "https://precioblumer.netlify.app/",
  },
  {
    id: "Existencia de productos",
    type: "trabajo",
    image: Existencia,
    emoji: "",
    titleKey: "Existencia",
    descKey:
      "Apliacion android para la gestión de inventarios en tiendas, permitiendo a los administradore registrar entradas y salidas de productos mediante códigos de barras, sincronizando datos con el sistema central para mantener un control actualizado del stock.",
    techKeys: ["dart", "flutter", "c#", "python", "sql server"],
    demoUrl: "/apk/app-release.apk",
  },
  {
    id: "rotacion",
    type: "trabajo",
    image: rotacion,
    emoji: "",
    titleKey: "Rotacion",
    descKey:
      "Rotación de inventario para SQL Server(solo con una consulta específica)",
    techKeys: ["python", "customtkinter", "sql server"],
    demoUrl: "https://github.com/Ian12-sgv/rotaci-n-de-inventario-con-python",
    githubUrl: "https://github.com/Ian12-sgv/rotaci-n-de-inventario-con-python",
  },
  {
    id: "consultor",
    type: "trabajo",
    image: consultor,
    emoji: "",
    titleKey: "Consultor",
    descKey: "Consulto de base de base de datos para SQL Server ",
    techKeys: ["python", "customtkinter", "sql server"],
    demoUrl: "https://github.com/Ian12-sgv/banco-de-consulta",
    githubUrl: "https://github.com/Ian12-sgv/banco-de-consulta",
  },
  {
    id: "wizard",
    type: "trabajo",
    image: wizard,
    emoji: "",
    titleKey: "Wizard",
    descKey: "Wizard para migrar bases de datos SQL Server a MySQL",
    techKeys: ["python"],
    demoUrl: "https://github.com/Ian12-sgv/wizar-de-sql-server-a-mysql",
    githubUrl: "https://github.com/Ian12-sgv/wizar-de-sql-server-a-mysql",
  },
];

function Proyectos() {
  const { t } = useTranslation();

  const [projectFilter, setProjectFilter] = useState<ProjectType>("todos");
  const [page, setPage] = useState<number>(0);

  // === tarjetas por página (responsive) ===
  const [itemsPerPage, setItemsPerPage] = useState<number>(() => {
    if (typeof window === "undefined") return 1;
    return window.innerWidth < 900 ? 1 : 2; // móvil 1, escritorio 2
  });

  useEffect(() => {
    const handleResize = () => {
      const next = window.innerWidth < 900 ? 1 : 2;
      setItemsPerPage(next);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const filteredProjects = projects.filter((project) =>
    projectFilter === "todos" ? true : project.type === projectFilter
  );

  const totalPages = Math.max(
    1,
    Math.ceil(filteredProjects.length / itemsPerPage)
  );

  // si cambias de filtro, siempre volvemos a la primera página
  useEffect(() => {
    setPage(0);
  }, [projectFilter]);

  const safePage = Math.min(page, totalPages - 1);
  const startIndex = safePage * itemsPerPage;
  const visibleProjects = filteredProjects.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const hasMultiplePages = totalPages > 1;

  const handlePrev = () => {
    if (!hasMultiplePages) return;
    setPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const handleNext = () => {
    if (!hasMultiplePages) return;
    setPage((prev) => (prev + 1) % totalPages);
  };

  return (
    <div className="projects-section">
      <div className="projects-container">
        {/* Título */}
        <h2 className="projects-title animate-fade-in">
          {t("projects", "PROYECTOS")}
        </h2>

        {/* Botones de filtro */}
        <div className="projects-filters">
          {[
            { id: "todos" as ProjectType, label: "Todos", icon: "📂" },
            { id: "personal" as ProjectType, label: "Personales", icon: "💡" },
            { id: "trabajo" as ProjectType, label: "Trabajo", icon: "💼" },
            { id: "freelance" as ProjectType, label: "Freelance", icon: "🚀" },
          ].map((filter) => (
            <button
              key={filter.id}
              type="button"
              onClick={() => setProjectFilter(filter.id)}
              className={
                "projects-filter-button" +
                (projectFilter === filter.id ? " active" : "")
              }
            >
              <span className="projects-filter-icon">{filter.icon}</span>
              {filter.label}
            </button>
          ))}
        </div>

        {filteredProjects.length === 0 ? (
          <p className="projects-empty">
            {t(
              "no_projects_category",
              "No hay proyectos en esta categoría aún."
            )}
          </p>
        ) : (
          <div className="projects-carousel-wrapper">
            {/* Flecha izquierda */}
            <button
              type="button"
              onClick={handlePrev}
              disabled={!hasMultiplePages}
              className="projects-arrow projects-arrow-prev"
              aria-label="Proyecto anterior"
            >
              <ArrowLeft className="projects-arrow-icon" />
            </button>

            {/* Slide actual (1 en móvil, 2 en escritorio) */}
            <div className="projects-slider-track">
              {visibleProjects.map((project, index) => (
                <div key={project.id} className="project-slide">
                  <article
                    className="project-card animate-fade-in"
                    style={{ animationDelay: `${index * 120}ms` }}
                  >
                    <header className="project-card-header">
                      <div className="project-card-top">
                        <span
                          className={
                            "project-type-badge project-type-" + project.type
                          }
                        >
                          {project.type === "personal" && "💡 Personal"}
                          {project.type === "trabajo" && "💼 Trabajo"}
                          {project.type === "freelance" && "🚀 Freelance"}
                          {project.type === "todos" && "📂 Proyecto"}
                        </span>
                      </div>

                      <div className="project-media">
                        <img
                          src={project.image}
                          alt={t(project.titleKey)}
                          className="project-image"
                        />
                        <div className="project-media-overlay">
                          <span className="project-media-emoji">
                            {project.emoji}
                          </span>
                        </div>
                      </div>

                      <h3 className="project-title">{t(project.titleKey)}</h3>
                      <p className="project-description">
                        {t(project.descKey)}
                      </p>
                    </header>

                    <div className="project-tech-list">
                      {project.techKeys.map((tech) => (
                        <span key={tech} className="project-tech-badge">
                          {t(tech)}
                        </span>
                      ))}
                    </div>

                    <div className="project-footer">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-button project-button-secondary"
                        >
                          <Github className="project-button-icon-left" />
                          GitHub
                        </a>
                      )}

                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-button project-button-primary"
                      >
                        {t("view_project", "Ver demo")}
                        <ExternalLink className="project-button-icon" />
                      </a>
                    </div>
                  </article>
                </div>
              ))}
            </div>

            {/* Flecha derecha */}
            <button
              type="button"
              onClick={handleNext}
              disabled={!hasMultiplePages}
              className="projects-arrow projects-arrow-next"
              aria-label="Proyecto siguiente"
            >
              <ArrowRight className="projects-arrow-icon" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Proyectos;
