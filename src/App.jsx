import { Techs } from "./components/Techs";
import { ProjectCard } from "./components/ProjectCard";
import { Skills } from "./components/Skills";
import { Links } from "./components/Links";
import perfilImg from "./assets/perfil.png";
import arrowDown from "./assets/CaretDoubleDown.png";
import ProjectOne from "./assets/Project-01.png";
import ProjectTwo from "./assets/Project-02.png";
import ProjectThree from "./assets/Project-03.png";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Travelgram",
    description: "Aplicativo de Viagens",
    image: ProjectOne,
    link: "http://github.com/dzordii",
  },
  {
    title: "App de Música",
    description: "Site de Música com Player Integrado",
    image: ProjectTwo,
    link: "http://github.com/dzordii",
  },
  {
    title: "Site de Barbearia",
    description: "Site de Barbearia com Agendamento Online",
    image: ProjectThree,
    link: "http://github.com/dzordii",
  },
  {
    title: "Travelgram",
    description: "Aplicativo de Viagens",
    image: ProjectOne,
    link: "#",
  },
  {
    title: "App de Música",
    description: "Site de Música com Player Integrado",
    image: ProjectTwo,
    link: "#",
  },
  {
    title: "App de Música",
    description: "Site de Música com Player Integrado",
    image: ProjectTwo,
    link: "#",
  },
];

const skills = [
  {
    image: "https://img.icons8.com/color/48/000000/html-5--v1.png",
    title: "Desenvolvimento Web",
    description:
      "Desenvolvimento de Sites e Aplicações Web com as melhores tecnologias do mercado.",
  },
  {
    image: "https://img.icons8.com/color/48/000000/html-5--v1.png",
    title: "Desenvolvimento Web",
    description:
      "Desenvolvimento de Sites e Aplicações Web com as melhores tecnologias do mercado.",
  },
  {
    image: "https://img.icons8.com/color/48/000000/html-5--v1.png",
    title: "Desenvolvimento Web",
    description:
      "Desenvolvimento de Sites e Aplicações Web com as melhores tecnologias do mercado.",
  },
];

export default function App() {
  return (
    <>
      <div className="bg-background text-text">
        <section className="bg-background text-text flex h-full py-12">
          <div className="container mx-auto flex h-full max-w-300 flex-col items-center justify-center p-6 text-center">
            <img
              className="w-40 rounded-full border-2 border-white"
              src={perfilImg}
              alt="Imagem de Perfil"
            />
            <div className="flex flex-col items-center justify-center gap-2 p-6">
              <span>
                Bem vindos ao meu Portfólio Web! Meu nome é{" "}
                <span className="text-secondary">Isaac Mello</span> e eu sou
              </span>
              <h1 className="text-6xl font-bold">
                Desenvolvedor Web Front-end
              </h1>
              <span className="text-third max-w-200">
                Crio aplicações funcionais e envolventes que transformam
                necessidades em soluções reais. Minha paixão pela tecnologia me
                impulsiona a desenvolver sistemas inovadores e eficientes,
                entregando respostas inteligentes para desafios complexos.
              </span>
            </div>
            <div className="flex flex-col items-center gap-6">
              <Techs />
              <motion.button
                onClick={() => {
                  window.scrollTo(0, 600, { behavior: "smooth" });
                }}
                className="cursor-pointer"
                whileHover={{ scale: 1.2 }}
                onHoverStart={(e) => {}}
                onHoverEnd={(e) => {}}
              >
                <img className="w-8" src={arrowDown} />
              </motion.button>
            </div>
          </div>
        </section>
        <section className="bg-background text-text flex h-auto py-12">
          <div className="container mx-auto flex h-full max-w-300 flex-col items-center justify-center gap-10 text-center">
            <div className="mx-auto flex flex-col gap-4 text-center">
              <h1 className="text-secondary text-6xl font-bold">
                Meus Projetos
              </h1>
              <span className="text-third">Projetos em Destaque</span>
            </div>
            <div className="grid grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  link={project.link}
                />
              ))}
            </div>
          </div>
        </section>
        <section className="bg-background text-text flex h-auto py-12">
          <div className="container mx-auto flex h-full max-w-270 flex-col items-center justify-center gap-10 text-center">
            <div>
              <h1 className="text-secondary text-6xl font-bold">
                Meus Diferenciais
              </h1>
              <span className="text-third">
                Como eu posso ajuda no seu negócio.
              </span>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <Skills
                  key={index}
                  title={skill.title}
                  description={skill.description}
                  image={skill.image}
                />
              ))}
            </div>
          </div>
        </section>
        <section className="bg-background text-text flex h-auto py-12">
          <div className="container mx-auto flex h-full max-w-300 flex-col items-center justify-center gap-10 text-center">
            <div className="flex flex-col text-center">
              <span className="text-secondary">Contato</span>
              <h1 className="text-4xl font-bold">Gostou do meu trabalho?</h1>
              <span className="text-third">
                Entre em contato comigo ou acompanhe minhas redes sociais!
              </span>
            </div>
            <div>
              <Links />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
