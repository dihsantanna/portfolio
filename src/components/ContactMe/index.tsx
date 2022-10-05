import { contactMeInfo } from '@src/utils';
import { useState } from 'react';

const stateContacts = {
  email: false,
  github: false,
  linkedin: false,
};

type StateContacts = keyof typeof stateContacts;


export function ContactMe() {
  const [mouseEnter, setMouseEnter] = useState({ ...stateContacts });

  const handleHover = (key: string, bool: boolean) => {
    setMouseEnter((prevState) => ({
      ...prevState,
      [key]: bool,
    }));
  };

  return (
    <div
      className="animate-[leftToRight_1.5s_ease-in-out] flex flex-col justify-center items-center md:items-start"
    >
      <div
        className="flex flex-col justify-start w-max"
      >
        {contactMeInfo.map(({ key, text, href, Icon }) => (
          <a
            key={key}
            title={key}
            href={href}
            target="_blank"
            rel="noreferrer"
            className={`w-max flex items-center italic mb-2 text-sm ${mouseEnter[key as StateContacts] ? 'lg:text-lemonade-500' : 'lg:text-grafite-200'} md:text-lg`}
            onMouseEnter={() => handleHover(key, true)}
            onMouseLeave={() => handleHover(key, false)}
          >
            <Icon className={`text-lg md:text-2xl fill-grafite-200 ${mouseEnter[key as StateContacts] ? 'lg:fill-lemonade-500' : 'lg:fill-grafite-200'} mr-3`} />
            {text}
          </a>
        ))}
      </div>
    </div>
  );
}
