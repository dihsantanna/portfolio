import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment } from 'react';

interface StackModalProps {
  stackInfo: {
    name: string;
    logo: string;
    description: JSX.Element;
    link: string;
  }
}

export function StackModal({ stackInfo }: StackModalProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const { name, logo, description, link } = stackInfo;

  return (
    <>
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
            leave="ease-in duration-200"
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
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel
                  className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
                >
                  <img
                    src={logo}
                    alt={name + 'logo'}
                    className="w-20"
                  />
                  <div className="mt-2 py-2 max-h-32 overflow-y-scroll">
                    <p className="text-sm text-silver-700">
                      {description}
                    </p>
                  </div>
                  <div className="mt-4 flex justify-between items-center">
                    <button
                      aria-label="Close"
                      type="button"
                      className="inline-flex hover:bg-grafite-900 hover:text-white justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-silver-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-lemonade-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Fechar
                    </button>
                    <div>
                      <a
                        href={link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm rounded-md text-grafite-900 font-semibold hover:text-lemonade-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-lemonade-500 focus-visible:ring-offset-2"
                      >
                        Saiba mais...
                      </a>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      <button
        type="button"
        onClick={openModal}
        className="w-12 md:w-20 lg:w-24 lg:rounded-lg lg:hover:shadow-ring lg:hover:shadow-lemonade-500 lg:hover:transform lg:transition-all lg:z-50 lg:duration-500"
      >
        <img
          src={logo}
          alt={name + 'logo'}
          className="w-full max-h-12 md:max-h-20 lg:max-h-24 lg:rounded-t-lg"
        />
      </button>
    </>
  );
}
