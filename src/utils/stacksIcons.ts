import {
  SiBootstrap,
  SiChai,
  SiCss3,
  SiCypress,
  SiDocker,
  SiEslint,
  SiExpress,
  SiFlask,
  SiHtml5,
  SiJavascript,
  SiMocha,
  SiMongodb,
  SiNodedotjs,
  SiPostgresql,
  SiPytest,
  SiPython,
  SiReact,
  SiRedux,
  SiSequelize,
  SiTypescript,
  SiVite,
  SiVuedotjs
} from 'react-icons/si';

import { GrMysql } from 'react-icons/gr';

import { FaCubes, FaSass, FaTheaterMasks, FaVuejs } from 'react-icons/fa';

export const stacksIcons = {
  bootstrap: SiBootstrap,
  chai: SiChai,
  css3: SiCss3,
  cypress: SiCypress,
  docker: SiDocker,
  default: FaCubes,
  eslint: SiEslint,
  express: SiExpress,
  flask: SiFlask,
  html5: SiHtml5,
  javascript: SiJavascript,
  mocha: SiMocha,
  mongodb: SiMongodb,
  mysql: GrMysql,
  nodejs: SiNodedotjs,
  playwright: FaTheaterMasks,
  postgresql: SiPostgresql,
  pytest: SiPytest,
  python: SiPython,
  reactjs: SiReact,
  redux: SiRedux,
  sass: FaSass,
  sequelize: SiSequelize,
  typescript: SiTypescript,
  vite: SiVite,
  vuejs: SiVuedotjs,
  vuex: FaVuejs,
};

export type StackName = keyof typeof stacksIcons;
