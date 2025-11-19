import "../Style/Habilidades.css";
import { useTranslation } from "react-i18next";

type SkillItem = {
  name: string;
  icon: string;
};

type SkillGroup = {
  id: string;
  title: string; // incluye el emoji del título
  delay: number;
  skills: SkillItem[];
};

function Habilidades() {
  const { t } = useTranslation();

  const groups: SkillGroup[] = [
    {
      id: "web",
      title: "💻 Desarrollo Web",
      delay: 100,
      skills: [
        { name: "React", icon: "⚛️" },
        { name: "TypeScript", icon: "📘" },
        { name: "JavaScript", icon: "⚡" },
        { name: "HTML", icon: "📄" },
        { name: "CSS", icon: "🎨" },
        { name: "Bootstrap", icon: "🅱️" },
        { name: "PHP", icon: "🐘" },
        { name: "Laravel", icon: "🔺" },
        { name: "MySQL", icon: "🗄️" },
        { name: "Node.js", icon: "🟢" },
      ],
    },
    {
      id: "data",
      title: "📊 Ciencia de Datos",
      delay: 200,
      skills: [
        { name: "Python", icon: "🐍" },
        { name: "Pandas", icon: "🐼" },
        { name: "NumPy", icon: "🔢" },
        { name: "Jupyter", icon: "📓" },
        { name: "Matplotlib", icon: "📈" },
        { name: "Scikit-learn", icon: "🤖" },
      ],
    },
    {
      id: "mobile",
      title: "📱 Desarrollo Mobile",
      delay: 300,
      skills: [
        { name: "Flutter", icon: "🎯" },
        { name: "Dart", icon: "🎪" },
        { name: "Firebase", icon: "🔥" },
        { name: "Android", icon: "🤖" },
        { name: "iOS", icon: "🍎" },
      ],
    },
    {
      id: "tools",
      title: "🛠️ Herramientas",
      delay: 400,
      skills: [
        { name: "Git", icon: "🔀" },
        { name: "GitHub", icon: "🐙" },
        { name: "VS Code", icon: "💻" },
        { name: "Vite", icon: "⚡" },
        { name: "Docker", icon: "🐳" },
        { name: "Postman", icon: "📮" },
      ],
    },
  ];

  return (
    <div className="skills-section">
      <div className="skills-container">
        {/* Título principal (usa tu i18n; si no existe la key usa HABILIDADES) */}
        <h2 className="skills-title animate-fade-in">
          {t("skills", "HABILIDADES")}
        </h2>

        {/* Grid de 2 columnas en desktop (como el snippet md:grid-cols-2) */}
        <div className="skills-grid-4">
          {groups.map((group) => (
            <div
              key={group.id}
              className="skills-group animate-fade-in"
              style={{ animationDelay: `${group.delay}ms` }}
            >
              <h3 className="skills-group-title">{group.title}</h3>

              <div className="skills-items-grid">
                {group.skills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="skills-item-card"
                    style={{ animationDelay: `${(index + 1) * 50}ms` }}
                  >
                    <div className="skills-item-icon">{skill.icon}</div>
                    <p className="skills-item-name">{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Habilidades;
