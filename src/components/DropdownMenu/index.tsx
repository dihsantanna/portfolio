import { Menu, Transition } from '@headlessui/react';
import { menuInfos } from '@src/utils';
import { Fragment } from 'react';
import { HiMenu } from 'react-icons/hi';
import { IoClose } from 'react-icons/io5';
import { Link, useLocation } from 'react-router-dom';
import { MenuInfoKeys } from '../NavBar';

export function DropdownMenu() {
  const { pathname } = useLocation();
  return (
    <nav className="flex fixed right-3 top-3 items-center w-[313px + 30px + 12px] bg-grafite-700 rounded-l-md md:hidden z-10">
      <Menu
        as="div"
        className="relative"
      >
        {({ open }: { open: boolean }) => (
          <>
            <Transition
              show={open}
              enter="transition duration-500 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-300 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Menu.Items
                as="div"
                className="grid grid-row-4 absolute pt-12 w-32 pb-2 rounded-md bg-grafite-700 border-solid border-[0.01px] border-white -top-4 -right-4"
              >
                {(Object.keys(menuInfos) as MenuInfoKeys)
                  .map((key) => (
                    <Menu.Item
                      as={Fragment}
                      key={`btn-${menuInfos[key].text}`}
                      disabled={key !== 'curriculum' && pathname === menuInfos[key].path}
                    >
                      {key === 'curriculum'
                        ? <a
                          className="row-span-1 text-end rounded-md py-1 pr-5 active:bg-grafite-200"
                          href={menuInfos[key].url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {menuInfos[key].text}
                        </a>
                        : <Link
                          className={`row-span-1 text-end rounded-md py-1 pr-5 active:bg-teal-800 active:text-lemonade-500 ${pathname === menuInfos[key].path ? 'text-lemonade-500 bg-teal-800' : ''}`}
                          to={menuInfos[key].path}
                        >
                          {menuInfos[key].text}
                        </Link>
                      }
                    </Menu.Item>
                  ))}
              </Menu.Items>
            </Transition>
            <Menu.Button
              className="fixed right-1 top-2 w-8 h-8"
            >
              {!open
                ? <HiMenu
                  className="text-3xl fill-grafite-200"
                />
                : <IoClose
                  className="text-3xl fill-grafite-200"
                />
              }
            </Menu.Button>
          </>
        )}
      </Menu>
    </nav>
  );
}
