import { Dialog, Transition } from '@headlessui/react';
import { StackName } from '@src/utils';
import { Tooltip } from 'flowbite-react';
import { Fragment, useState } from 'react';
import { StackIcon } from '../StackIcon';

interface ProjectDetailsProps {
  projectInfo: {
    title: string;
    description: JSX.Element;
    image: string;
    repo: string;
    deploy?: string;
    tags: string[];
  }
  className: string;
  textBtn: string;
}

export function ProjectDetails({ projectInfo, className, textBtn }: ProjectDetailsProps) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const { image, title, repo, deploy, description, tags } = projectInfo;

  return (
    <>
      <button
        type="button"
        className={className}
        onClick={openModal}
      >
        {textBtn}
      </button>
      <Transition
        appear
        show={isOpen}
        as={Fragment}
      >
        <Dialog
          as="div"
          className="relative z-10"
          open={isOpen}
          onClose={closeModal}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-1000"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-300"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel
                  className="flex flex-col justify-between items-center w-screen max-w-[1024px] transform overflow-hidden rounded-2xl bg-white p-3 text-left shadow-ring-sm shadow-bluesky-500 transition-all z-50"
                >
                  <Dialog.Title
                    className="font-bold text-lg md:text-xl lg:text-2xl self-start text-grafite-900 mb-4"
                  >
                    {title}
                  </Dialog.Title>
                  <button
                    aria-label="Close"
                    type="button"
                    className="absolute top-3 right-3 text-xl md:text-2xl text-grafite-900 opacity-80 cursor-pointer hover:opacity-100 hover:text-red-600"
                    onClick={closeModal}
                  >
                    &#10006;
                  </button>
                  <article
                    className=""
                  >
                    <img
                      className="w-full mb-8 rounded-lg"
                      src={image}
                      alt={`Demonstração do projeto ${title}`}
                    />
                    <p
                      className="text-grafite-900 text-justify p-1 mb-5"
                    >
                      {description}
                    </p>
                  </article>
                  <div
                    className="flex flex-col mb-8 gap-4 items-center justify-center w-full"
                  >
                    <h4
                      className="text-teal-800 font-bold text-lg"
                    >Stacks Utilizadas:</h4>
                    <div
                      className="flex flex-wrap gap-2 md:gap-3 mb-5 items-center justify-center w-full"
                    >
                      {tags.map((stackName, index) => (
                        <Tooltip
                          key={`${stackName}-${index}`}
                          content={stackName}
                          animation={false}
                          arrow={false}
                          placement="bottom"
                        >
                          <StackIcon
                            stackName={stackName.toLowerCase() as StackName}
                            className="fill-teal-800 text-3xl md:text-[2.5rem] cursor-pointer"
                          />

                        </Tooltip>
                      ))}
                    </div>
                  </div>
                  <div className="w-full flex justify-evenly items-center h-10 text-silver-300">
                    <a
                      className="w-1/3 max-w-[100px] md:max-w-[110px] text-sm md:text-base text-silver-300 text-center rounded-md bg-grafite-900 px-2 py-2 button-hover"
                      href={repo}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Repositório
                    </a>
                    {deploy ? <a
                      className="w-1/3 max-w-[6.25rem] md:max-w-[110px] text-sm md:text-base text-silver-300 text-center rounded-md bg-grafite-900 px-2 py-2 button-hover"
                      href={deploy}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Deploy
                    </a>
                      : <button
                        className="w-1/3 max-w-[6.25rem] md:max-w-[110px] text-sm md:text-base text-center rounded-md bg-grafite-900 px-2 py-2 opacity-90"
                        disabled
                      >
                        Deploy
                      </button>}
                    <button
                      aria-label="Close"
                      className="w-1/3 max-w-[6.25rem] md:max-w-[110px] text-sm md:text-base text-silver-300 text-center rounded-md bg-grafite-900 px-2 py-2 button-hover"
                      onClick={closeModal}
                    >
                      Fechar
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
