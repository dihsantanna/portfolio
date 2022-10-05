import { menuInfos } from '@src/utils';
import { Link, useLocation } from 'react-router-dom';

export type MenuInfoKeys = Array<keyof typeof menuInfos>;

export function NavBar() {
  const {pathname}= useLocation();
  return (
    <nav
      className="hidden md:flex max-w-[60vw] min-w-[46vw] w-[648px] h-10 fixed right-0 top-[25px] items-center rounded-l-md bg-grafite-700 justify-center z-50"
    >
      <section
        className="w-[428px] h-6 flex justify-between items-center"
      >
        {
          (Object.keys(menuInfos) as MenuInfoKeys)
            .map((key) => (key !== 'curriculum'
              ? <Link
                className={`${['Inicio', 'Sobre'].includes(menuInfos[key].text) ? 'w-[68px]' : 'w-[92px]'}
                  text-xl ${pathname === menuInfos[key].path ? 'text-lemonade-500' : 'hover:drop-shadow-cloud-lemonade'} h-6 flex items-center justify-center`}
                to={menuInfos[key].path}
                key={menuInfos[key].text}
              >
                {menuInfos[key].text}
              </Link>
              : <a
                key={`link-${menuInfos[key].text}`}
                className="w-[92px] text-xl hover:drop-shadow-cloud-lemonade active:text-lemonade-500 h-6 flex items-center justify-center"
                href={menuInfos[key].url}
                target="_blank"
                rel="noreferrer"
              >
                {menuInfos[key].text}
              </a>
            ))}
      </section>
    </nav>
  );
}
