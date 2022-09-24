import { Menu, Transition } from '@headlessui/react';
import dropdownClose from '@src/assets/dropdown-close.svg';
import dropdownOpen from '@src/assets/dropdown-open.svg';
import { menuInfos } from '@src/utils';
import { Fragment } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MenuInfoKeys } from '../NavBar';

export function DropdownMenu() {
  const { pathname } = useLocation();
  return (
    <nav className="flex fixed right-3 top-3 items-center w-[313px + 30px + 12px] bg-grafite-700 rounded-l-md md:hidden z-10">
      <Menu>
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
              className="fixed top-0 left-0 w-screen h-screen bg-grafite-900"
            >
              <Menu.Items
                className="flex flex-col justify-around w-screen h-screen items-center text-5xl"
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
                          className="text-center"
                          href={menuInfos[key].url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {menuInfos[key].text}
                        </a>
                      : <Link
                          className={`text-center ${pathname === menuInfos[key].path ? 'text-lemonade-500' : ''}`}
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
              className="fixed right-3 top-3 w-11 h-11"
            >
              <img
                className="w-11 h-11"
                src={!open ? dropdownOpen : dropdownClose}
                alt={`dropdown-${!open ? 'open' : 'close'}`}
              />
            </Menu.Button>
          </>
        )}
      </Menu>
    </nav>
  );
}
