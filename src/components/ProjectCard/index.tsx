import { StackName } from '@src/utils';
import { ScrollPosition } from 'react-lazy-load-image-component';
import { LazyLoadImg } from '../LazyLoadImg';
import { StackIcon } from '../StackIcon';
import { ProjectDetails } from './ProjectDetails';


interface ProjectCardProps {
  projectInfo: {
    title: string;
    description: JSX.Element;
    image: string;
    repo: string;
    deploy?: string;
    tags: string[];
  },
  scrollPosition: ScrollPosition;
}

export function ProjectCard({ projectInfo, scrollPosition }: ProjectCardProps) {
  const { title, image } = projectInfo;

  const tenFirstStacks = projectInfo.tags.slice(0, 10);

  return (
    <div
      className="animate-[bottomToTop_1s_ease-in-out] col-span-1 bg-white p-3 w-80 h-80 rounded-lg flex flex-col justify-between items-center text-grafite-900 mt-9 shadow-ring-sm shadow-bluesky-500 lg:opacity-[0.94] lg:hover:opacity-100 lg:hover:shadow-lemonade-500 lg:hover:scale-105 lg:transition-all lg:duration-700 lg:hover:shadow-ring"
    >
      <h3 className="text-lg text-grafite-900">{title}</h3>
      <LazyLoadImg
        src={image}
        alt={`Demonstração do projeto ${title}`}
        className="w-full rounded-md"
        effect="blur"
        scrollPosition={scrollPosition}
        delayTime={1000}
      />
      <div className="w-full flex justify-end items-end">
        {tenFirstStacks.map(stackName => (
          <StackIcon
            key={stackName}
            className="ml-2 fill-teal-800 text-lg"
            stackName={stackName.toLowerCase() as StackName}
          />
        ))}
      </div>
      <div className="w-full flex justify-end items-end px-4 text-silver-300">
        <ProjectDetails
          className="w-max text-center rounded-md bg-grafite-900 px-2 py-1 button-hover"
          projectInfo={projectInfo}
          textBtn="Saber mais..."
        />
      </div>
    </div>
  );
}
