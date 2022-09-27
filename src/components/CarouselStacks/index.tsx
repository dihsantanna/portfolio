import { stacksInfo } from '@src/utils';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const IS_OPEN_STATE = stacksInfo.reduce((acc, stack) => {
  acc[stack.name] = false;
  return acc;
}, {} as unknown as Record<string, boolean>);

type IsOpenKeys = keyof typeof IS_OPEN_STATE;


export function CarouselStacks() {
  const [isOpen, setIsOpen] = useState({ ...IS_OPEN_STATE });

  const openModal = (name: IsOpenKeys) => setIsOpen(() => ({ ...isOpen, [name]: true }));
  const closeModal = (name: IsOpenKeys) => setIsOpen(() => ({ ...isOpen, [name]: false }));

  return (
    <div className="bg-white w-full py-3 max-w-[1169px] m-auto rounded-md">
      <Swiper
        slidesPerView={5}
        spaceBetween={25}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        modules={[Autoplay]}
      >
        {stacksInfo.map(({ name, logo, description, link }) => (
          <SwiperSlide
            key={name}
          >
            <Transition
              appear
              show={isOpen[name as IsOpenKeys]}
              as={Fragment}
            >
              <Dialog
                as="div"
                className="relative z-10"
                open={isOpen[name as IsOpenKeys]}
                onClose={() => closeModal(name as IsOpenKeys)}
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
                        <div className="mt-2 py-2 max-h-32 overflow-y-scroll scrollbar-thin scrollbar-thumb-lemonade-500 scrollbar-track-silver-300 scrollbar-thumb-rounded-md">
                        <p className="text-sm text-silver-700">
                          {description}
                        </p>
                      </div>
                      <div className="mt-4 flex justify-between items-center">
                        <button
                          type="button"
                          className="inline-flex hover:bg-grafite-900 hover:text-grafite-200 justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-silver-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-lemonade-500 focus-visible:ring-offset-2"
                          onClick={() => closeModal(name as IsOpenKeys)}
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
              onClick={() => openModal(name as IsOpenKeys)}
              className="w-12 md:w-20 lg:w-24"
            >
              <img
                src={logo}
                alt={name + 'logo'}
                className="w-full"
              />
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
