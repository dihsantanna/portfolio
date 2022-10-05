import { DropdownMenu, Footer, NavBar, ProjectCard, StackFilter } from '@src/components';
import { projectsInfo } from '@src/utils';
import { useState } from 'react';
import { FaArrowAltCircleUp } from 'react-icons/fa';
import { ImCrying } from 'react-icons/im';
import { ScrollPosition, trackWindowScroll } from 'react-lazy-load-image-component';

interface ProjectsProps {
  scrollPosition: ScrollPosition;
}

function Projects({ scrollPosition }: ProjectsProps) {
  const [selectedStacks, setSelectedStacks] = useState('');

  const filteredProjects = selectedStacks ? projectsInfo.filter(project => (
    project.tags.includes(selectedStacks)
  )) : projectsInfo;

  const sortedProjects = filteredProjects.length ? filteredProjects
    .sort((a, b) => a.title
      .localeCompare(b.title, 'pt-BR', {
        sensitivity: 'base', numeric: true
      })) : null;

  return (
    <main
      className="relative flex flex-col justify-between items-center min-h-screen"
      id="project-page"
    >
      <DropdownMenu />
      <NavBar />
      <div className="animate-[topToBottom_1s_ease-in-out] mt-24 mb-6 w-full flex justify-center items-center">
        Filtro:
        <StackFilter
          setTask={setSelectedStacks}
        />
      </div>
      <div className="mb-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center items-center w-full max-w-[1169px]">
        {

          sortedProjects
            ? sortedProjects.map((projectInfo, index) => (
              <ProjectCard
                key={`${projectInfo.title}-${index}`}
                projectInfo={projectInfo}
                scrollPosition={scrollPosition}
              />
            ))
            : <h2
              className="flex flex-col justify-center items-center text-2xl text-grafite-200 col-span-full"
            >
              Nenhum projeto encontrado
              <ImCrying className="fill-lemonade-500 font-thin text-8xl mt-10"/>
            </h2>
        }
      </div>
      <a
        href="#project-page"
        className="w-16 fixed bottom-2 right-4 text-sm text-lemonade-500 lg:text-grafite-200 lg:hover:text-lemonade-500 lg:transition-colors lg:duration-500 flex flex-col justify-center items-center z-10"
      >
        <FaArrowAltCircleUp
          className="text-4xl fill-lemonade mb-1"
        />
        Subir
      </a>
      <Footer />
    </main>
  );
}

export default trackWindowScroll(Projects);
