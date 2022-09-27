import chaiLogo from '@src/assets/stacks/chai-logo.svg';
import css3Logo from '@src/assets/stacks/css3-logo.svg';
import dockerLogo from '@src/assets/stacks/docker-logo.svg';
import expressLogo from '@src/assets/stacks/express-logo.svg';
import gitLogo from '@src/assets/stacks/git-logo.svg';
import html5Logo from '@src/assets/stacks/html5-logo.svg';
import JSLogo from '@src/assets/stacks/javascript-logo.svg';
import jestLogo from '@src/assets/stacks/jest-logo.svg';
import mochaLogo from '@src/assets/stacks/mocha-logo.svg';
import mongoLogo from '@src/assets/stacks/mongodb-logo.svg';
import mongooseLogo from '@src/assets/stacks/mongoose-logo.svg';
import mySqlLogo from '@src/assets/stacks/mysql-logo.svg';
import nodeLogo from '@src/assets/stacks/nodejs-logo.svg';
import reactLogo from '@src/assets/stacks/react-logo.svg';
import reduxLogo from '@src/assets/stacks/redux-logo.svg';
import sequelizeLogo from '@src/assets/stacks/sequelize-logo.svg';
import sinonLogo from '@src/assets/stacks/sinon-logo.svg';
import tailwindLogo from '@src/assets/stacks/tailwind-logo.svg';
import TSLogo from '@src/assets/stacks/typescript-logo.svg';

export const stacksInfo = [
  {
    name: 'git',
    logo: gitLogo,
    description: <>
      O <strong>Git</strong> é um dos sistemas de controle de versão mais utilizados no mundo de desenvolvimento
      de software. Ele é um projeto de código aberto desenvolvido em 2005 por Linus Torvalds,
       o criador do kernel do Linux.
    </>,
    link: 'https://git-scm.com/',
  },
  {
    name: 'JavaScript',
    logo: JSLogo,
    description: <>
      Enquanto HTML e CSS ajudam a criar o design de uma página da web, o <strong>JavaScript</strong> ajuda a criar
      funcionalidade em uma página da web. Outros ambientes que não são de navegador também usam JavaScript
      para obter mais funcionalidades. <br />
      Não confunda Java e JavaScript. Embora semelhantes em nome, as duas são linguagens de programação muito diferentes.
    </>,
    link: 'https://www.javascript.com/learn',
  },
  {
    name: 'TypeScript',
    logo: TSLogo,
    description: <>
      O <strong>TypeScript</strong> é um superset que serve para potencializar a linguagem JavaScript. Com ele é possível construir
      projetos complexos sem nenhum empecilho. Além disso, ele oferece uma forte tipagem que permite maior desempenho e produtividade
      na hora de executar uma aplicação.
    </>,
    link: 'https://www.typescriptlang.org/',
  },
  {
    name: 'HTML5',
    logo: html5Logo,
    description: <>
      O <strong>HTML5</strong> é a nova versão do HTML4 e um dos seus principais objetivos é facilitar a manipulação dos elementos,
      possibilitando o desenvolvedor modificar as características dos objetos de forma não intrusiva, fazendo com que isso fique
      transparente para o usuário final.
    </>,
    link: 'https://www.devmedia.com.br/o-que-e-o-html5/25820',
  },
  {
    name: 'CSS3',
    logo: css3Logo,
    description: <>
      O <strong>CSS3</strong> é a terceira versão da linguagem de marcação CSS, ou Cascading Style Sheets.
      <br/>
      Ela define formatos e padrões estéticos dentro de uma página da web em um arquivo de códigos separado do HTML e/ou do JavaScript,
      chamados folha de estilo, facilitando a implementação destas modificações e trazendo mais facilidade ao trabalho do profissional
      desenvolvedor.
    </>,
    link: 'https://kenzie.com.br/blog/css3/',
  },
  {
    name: 'React',
    logo: reactLogo,
    description: <>
      O <strong>React</strong> é uma biblioteca JavaScript criada pelo Facebook para o desenvolvimento de aplicações front-end. Ele é baseado em componentes,
      o que permite o reaproveitamento de código e facilita a manutenção. No padrão de arquitetura MVC — Model View Control — ou Modelo Visão
      Controle, em português, ele é comparado ao desenvolvimento da camada View, que é a interface com o usuário (UI).
    </>,
    link: 'https://pt-br.reactjs.org/',
  },
  {
    name: 'Redux',
    logo: reduxLogo,
    description: <>
      O <strong>Redux</strong> é uma biblioteca criada para armazenar estados de aplicações JavaScript em um container de estado previsível,
      projetado para ajudar pessoas desenvolvedoras a escrever aplicativos que se comportam de forma consistente e que são fáceis de testar.
      O Redux pode ser usado em ambientes de cliente, servidor e até mesmo nativos.
    </>,
    link: 'https://redux.js.org/',
  },
  {
    name: 'TailwindCSS',
    logo: tailwindLogo,
    description: <>
      O <strong>Tailwind</strong> é um framework CSS que oferece a possibilidade de você criar layouts usando uma estrutura de CSS pronta.
      Isso permite que você otimize o tempo de criação de uma UI sem precisar fazer tudo manualmente.
    </>,
    link: 'https://tailwindcss.com/',
  },
  {
    name: 'NodeJS',
    logo: nodeLogo,
    description: <>
      O <strong>Node.js</strong> é uma tecnologia usada para executar código JavaScript fora do navegador. Com ele podemos construir aplicações web em geral,
      desde web sites até APIs e microsserviços. Isso é possível graças a união do ambiente de execução de JavaScript fornecido pelo próprio
      Node.js e o motor de interpretação e execução de JavaScript presente no Google Chrome, chamado de V8.
    </>,
    link: 'https://nodejs.org/pt-br/',
  },
  {
    name: 'Express',
    logo: expressLogo,
    description: <>
      O Express é um framework para aplicativo da web do Node.js mínimo e flexível que fornece um conjunto robusto de recursos para aplicativos web e móvel.
      <br />
      Com uma miríade de métodos utilitários HTTP e middleware a seu dispor, criar uma API robusta é rápido e fácil.
    </>,
    link: 'https://expressjs.com/pt-br/',
  },
  {
    name: 'MySQL',
    logo: mySqlLogo,
    description: <>
      O <strong>MySQL</strong> é um sistema de gerenciamento de banco de dados, que utiliza a linguagem SQL como interface. É atualmente um dos sistemas de gerenciamento
      de bancos de dados mais populares da Oracle Corporation, com mais de 10 milhões de instalações pelo mundo.
    </>,
    link: 'https://www.mysql.com/',
  },
  {
    name: 'MongoDB',
    logo: mongoLogo,
    description: <>
      O <strong>MongoDB</strong> nasceu em 2007, a partir de uma necessidade de três desenvolvedores de software que não encontraram nenhum banco de dados que suprisse os
      requisitos do seu projeto. Em 2009, esse projeto se tornou Open Source e continuou sua evolução até abrir capital em 2017. Desde então,
      a MongoDB vem liderando o mercado de bancos de dados NoSQL, oferecendo um produto Open Source com várias funcionalidades para o mercado corporativo,
      através da sua versão Enterprise.
    </>,
    link: 'https://www.mongodb.com/',
  },
  {
    name: 'Sequelize',
    logo: sequelizeLogo,
    description: <>
      O <strong>Sequelize</strong> é um ORM TypeScript e Node.js moderno para Oracle, Postgres, MySQL, MariaDB, SQLite e SQL Server e muito mais. Apresentando
      suporte a transações sólidas, relações, carregamento rápido e lento, replicação de leitura e muito mais.
    </>,
    link: 'https://sequelize.org/',
  },
  {
    name: 'Mongoose',
    logo: mongooseLogo,
    description: <>
      O <strong>Mongoose</strong> é uma ferramenta de modelagem de objetos MongoDB projetada para funcionar em um ambiente assíncrono. O Mongoose suporta promessas e retornos de chamada.
    </>,
    link: 'https://mongoosejs.com/',
  },
  {
    name: 'Docker',
    logo: dockerLogo,
    description: <>
      O <strong>Docker</strong> é uma plataforma open source que facilita a criação e administração de ambientes isolados. Ele possibilita o empacotamento de uma aplicação ou ambiente dentro de um container,
      se tornando portátil para qualquer outro host que contenha o Docker instalado. Então, você consegue criar, implantar, copiar e migrar de um ambiente para outro com maior flexibilidade.
      A ideia do Docker é subir apenas uma máquina, ao invés de várias. E, nessa única máquina, você pode rodar várias aplicações sem que haja conflitos entre elas.
    </>,
    link: 'https://www.docker.com/',
  },
  {
    name: 'Jest',
    logo: jestLogo,
    description: <>
      O <strong>Jest</strong> foi inicialmente criado para testar o framework React, ambos criados pelo Facebook. Porém sua implementação se tornou muito mais ampla, sendo utilizado como ferramenta de teste unitário
      para diversas plataformas JavaScript como Node e Redux, e até mesmo plataformas em TypeScript como Angular e Ionic.
    </>,
    link: 'https://jestjs.io/pt-BR/',
  },
  {
    name: 'Mocha',
    logo: mochaLogo,
    description: <>
      O <strong>Mocha</strong> é uma estrutura de teste JavaScript rica em recursos executada no Node.js e no navegador, tornando o teste assíncrono simples e divertido . Os testes Mocha são executados em série,
      permitindo relatórios flexíveis e precisos, enquanto mapeiam exceções não capturadas para os casos de teste corretos.
    </>,
    link: 'https://mochajs.org/',
  },
  {
    name: 'Chai',
    logo: chaiLogo,
    description: <>
      O <strong>Chai</strong> é uma biblioteca de asserções BDD/TDD para node e navegador que pode ser muito bem utilizada com qualquer framework de teste javascript.
    </>,
    link: 'https://www.chaijs.com/',
  },
  {
    name: 'Sinon',
    logo: sinonLogo,
    description: <>
      O <strong>Sinon</strong> é um pacote open-source que fornece diversas funcionalidades (como mocks, spies e stubs) que facilitam os nossos testes no JavaScript.
      <br />
      O Sinon por sí só não é um framework de testes, ele deve ser utilizado em conjunto com outra ferramenta para execução de testes, como por exemplo o Mocha ou Ava.
    </>,
    link: 'https://sinonjs.org/',
  }
];
