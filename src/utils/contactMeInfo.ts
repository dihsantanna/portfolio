import gitHub from '@src/assets/github.svg';
import linkedIn from '@src/assets/linkedin.svg';
import email from '@src/assets/mail.svg';

export const contactMeInfo = [
  {
    key: 'linkedin',
    text: '@diogo-santanna',
    href: 'https://www.linkedin.com/in/diogo-santanna',
    img: {
      alt: 'link para o perfil do linkedin',
      src: linkedIn,
    },
  },
  {
    key: 'github',
    text: '@dihsantanna',
    href: 'https://www.github.com/dihsantanna',
    img: {
      alt: 'link para o perfil do github',
      src: gitHub,
    },
  },
  {
    key: 'email',
    text: 'diogosantanna08@gmail.com',
    href: 'mailTo:diogosantanna08@gmail.com',
    img: {
      alt: 'link para o email do Diogo',
      src: email,
    },
  },
];
