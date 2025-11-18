// src/Componenete/Proyectos.tsx
import "../Style/Proyectos.css";
import FoodTruck from "../assets/FoodTruck.png";
import Portafolio from "../assets/Portafolio.png";
import Binance from "../assets/binance.png";
import Suscripcion from "../assets/Suscripciones.png";
import Convertidor from "../assets/convertidor.png";
import { useTranslation } from "react-i18next";
import { ExternalLink } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "./Carousel";

type Project = {
  id: string;
  src: string;
  emoji: string;
  titleKey: string;
  descKey: string;
  techKeys: string[];
  url: string;
};

const projects: Project[] = [
  {
    id: "food-truck",
    src: FoodTruck,
    emoji: "",
    titleKey: "food_truck",
    descKey: "food_truck_desc",
    techKeys: ["react", "typescript"],
    url: "https://camiondecomida.netlify.app/",
  },
  {
    id: "portfolio",
    src: Portafolio,
    emoji: "",
    titleKey: "portfolio",
    descKey: "portfolio_desc",
    techKeys: ["react", "typescript"],
    url: "https://ianfranco.netlify.app/",
  },
  {
    id: "binance",
    src: Binance,
    emoji: "",
    titleKey: "Binance",
    descKey: "binanance",
    techKeys: ["react", "typescript", "api", "chart.js"],
    url: "https://api-binance-estadistica.netlify.app",
  },
  {
    id: "suscription",
    src: Suscripcion,
    emoji: "",
    titleKey: "Suscripcion",
    descKey: "suscripcion",
    techKeys: ["react", "typescript"],
    url: "https://costo-suscripciones.netlify.app/",
  },
  {
    id: "converter",
    src: Convertidor,
    emoji: "",
    titleKey: "Convertidor",
    descKey: "convertidor",
    techKeys: ["react", "material-ui", "API REST"],
    url: "https://convertidor-de-divisas.netlify.app/",
  },
];

function Proyectos() {
  const { t } = useTranslation();

  return (
    <div className="projects-section">
      <div className="projects-container">
        <h2 className="projects-title animate-fade-in">{t("projects")}</h2>

        <div className="projects-carousel-wrapper">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="projects-carousel">
              {projects.map((project, index) => (
                <CarouselItem key={project.id} className="project-slide">
                  <article
                    className="project-card animate-fade-in"
                    style={{ animationDelay: `${index * 120}ms` }}
                  >
                    <div className="project-card-header">
                      <div className="project-media">
                        <img
                          src={project.src}
                          alt={t(project.titleKey)}
                          className="project-image"
                        />
                        <div className="project-media-overlay">
                          <span className="project-emoji">{project.emoji}</span>
                        </div>
                      </div>

                      <h3 className="project-title">{t(project.titleKey)}</h3>
                      <p className="project-description">
                        {t(project.descKey)}
                      </p>
                    </div>

                    <div className="project-tech-list">
                      {project.techKeys.map((techKey) => (
                        <span key={techKey} className="project-tech-badge">
                          {t(techKey)}
                        </span>
                      ))}
                    </div>

                    <div className="project-footer">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-button"
                      >
                        {t("view_project", "Ver proyecto")}
                        <ExternalLink className="project-button-icon" />
                      </a>
                    </div>
                  </article>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Proyectos;
