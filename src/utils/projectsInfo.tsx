export const tags = {
  react: 'ReactJS',
  vue: 'VueJS',
  vuex: 'Vuex',
  typeScript: 'TypeScript',
  node: 'NodeJS',
  express: 'Express',
  sequelize: 'Sequelize',
  bootstrap: 'Bootstrap',
  docker: 'Docker',
  mySql: 'MySQL',
  postgreSql: 'PostgreSQL',
  html5: 'HTML5',
  css3: 'CSS3',
  eslint: 'ESLint',
  mocha: 'Mocha',
  chai: 'Chai',
  sinon: 'Sinon',
};

export const stacksNames = Object.values(tags);

const {
  typeScript,
  vue,
  vuex,
  node,
  express,
  sequelize,
  bootstrap,
  docker,
  mySql,
  postgreSql,
  mocha,
  chai,
  sinon,
  eslint,
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
  }
];
