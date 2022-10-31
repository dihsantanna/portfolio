export const tags = {
  bootstrap: 'Bootstrap',
  chai: 'Chai',
  css3: 'CSS3',
  cypress: 'Cypress',
  docker: 'Docker',
  eslint: 'ESLint',
  express: 'Express',
  flask: 'Flask',
  html5: 'HTML5',
  javascript: 'JavaScript',
  mocha: 'Mocha',
  mongodb: 'MongoDB',
  mySql: 'MySQL',
  node: 'NodeJS',
  playwright: 'Playwright',
  postgreSql: 'PostgreSQL',
  pyTest: 'PyTest',
  python: 'Python',
  react: 'ReactJS',
  redux: 'Redux',
  sass: 'Sass',
  sequelize: 'Sequelize',
  sinon: 'Sinon',
  typeScript: 'TypeScript',
  vite: 'Vite',
  vue: 'VueJS',
  vuex: 'Vuex',
};

export const stacksNames = Object.values(tags);

const {
  bootstrap,
  chai,
  css3,
  cypress,
  docker,
  eslint,
  express,
  flask,
  html5,
  javascript,
  mocha,
  mongodb,
  mySql,
  node,
  playwright,
  postgreSql,
  pyTest,
  python,
  react,
  redux,
  sass,
  sequelize,
  sinon,
  typeScript,
  vite,
  vue,
  vuex,
} = tags;

export const projectsInfo = [
  {
    title: 'Cashforce FullStack',
    description: <>
      O projeto consiste em um pequeno site, construido com <strong>Vue.js</strong>,
      seguindo um modelo do <a
        className="font-bold underline opacity-95 hover:opacity-100"
        href="https://www.figma.com/file/m82rvaRyNaYV5VC4QcvaoZ/Teste-Cashfroce"
        target="_blank"
        rel="noreferrer"
      >figma</a>, cujo objetivo é possibilitar a consulta
      das informações de notas fiscais emitidas e o status da transação que
      foi realizada. O site recebe as informações de uma pequena <strong>API RESTful</strong>
      { ' ' }construida em <strong>Node</strong>.
    </>,
    image: 'https://raw.githubusercontent.com/dihsantanna/cashforce-fullstack/main/frontend/demononstracao.gif',
    repo: 'https://github.com/dihsantanna/cashforce-fullstack',
    deploy: 'https://cashforce-fullstack.vercel.app/',
    tags: [node, typeScript, express, sequelize, vue, vuex, bootstrap, docker, mySql, postgreSql, mocha, chai, sinon, eslint]
  },
  {
    title: 'Pixels Art - Paleta de Cores',
    description: <>
      Neste projeto, foi implementado um editor de arte com pixels. Ou seja, dada uma paleta de cores e um quadro composto por pixels,
      é possível pintar o que quiser no quadro! Para isto foi utilizado <strong>javascript</strong>, <strong>css</strong> e <strong>html</strong>.

      Para os testes foi utilizado o framework <strong>Cypress</strong>, somente os requisitos <strong>13</strong>, <strong> 14</strong> e <strong > 15</strong > foram escritos por mim.
    </>,
    image: 'https://raw.githubusercontent.com/dihsantanna/project-pixels-art/main/demonstração.gif',
    repo: 'https://github.com/dihsantanna/project-pixels-art',
    deploy: 'https://pixels-art-color-pallet.netlify.app/',
    tags: [javascript, html5, css3, eslint, cypress]
  },
  {
    title: 'Trybewarts',
    description: <>
      Um pequeno projeto onde foram desenvolvidos formulários utilizando <strong>HTML</strong>, <strong>CSS</strong> e <strong>JavaScript</strong>.
      Além do objetivo de exercitar a utilização do flexbox do CSS, os formulários são controlados a partir do DOM utilizando javascript. Foi simulado um formulário de avaliação de satisfação da escola TrybeWarts &#128516;.
    </>,
    image: 'https://raw.githubusercontent.com/dihsantanna/project-trybewarts/main/demonstracao.gif',
    repo: 'https://github.com/dihsantanna/project-trybewarts',
    deploy: 'https://project-trybewarts.netlify.app/',
    tags: [javascript, html5, css3, eslint]
  },
  {
    title: 'Recipes App - Receitate',
    description: <>
      Projeto foi realizado em grupo e teve como objetivo exercitar os conhecimentos de <strong>React.js</strong> e <strong>Redux</strong>.
      { ' ' } A aplicação nada mais é que um app de receitas onde você pode pesquisar receitas de comidas e bebidas e também favorita-las.
    </>,
    image: 'https://raw.githubusercontent.com/dihsantanna/recipes-app/main/demonstracao.gif',
    repo: 'https://github.com/dihsantanna/recipes-app',
    deploy: 'https://receitate.netlify.app/',
    tags: [react, redux, javascript, sass, eslint, docker, vite]
  },
  {
    title: 'Webscraper API',
    description: <>
      <strong>Api RESTFul</strong> desenvolvida a partir de dados providos por um <strong>crawler</strong> que faz uma rapagem de dados de um site que simula uma pequena lista de amostra de aparelhos eletrônicos.
      { ' ' } O crawler está configurado para obter os dados de notebooks da marca lenovo e os ordena do preço mais barato para o mais caro.
    </>,
    image: 'https://raw.githubusercontent.com/dihsantanna/webscraper_dev_api/main/demonstracao.gif',
    repo: 'https://github.com/dihsantanna/webscraper_dev_api',
    deploy: null,
    tags: [python, flask, mongodb, docker, playwright, pyTest],
  }
];
