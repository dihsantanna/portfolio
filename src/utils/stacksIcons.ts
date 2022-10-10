import {
  SiBootstrap,
  SiChai,
  SiCss3,
  SiCypress,
  SiDocker,
  SiEslint,
  SiExpress,
  SiHtml5,
  SiJavascript,
  SiMocha,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiRedux,
  SiSequelize,
  SiTypescript,
  SiVuedotjs
} from 'react-icons/si';

import { GrMysql } from 'react-icons/gr';

import { FaCubes, FaVuejs } from 'react-icons/fa';

export const stacksIcons = {
  bootstrap: SiBootstrap,
  chai: SiChai,
  css3: SiCss3,
  cypress: SiCypress,
  docker: SiDocker,
  default: FaCubes,
  eslint: SiEslint,
  express: SiExpress,
  html5: SiHtml5,
  javascript: SiJavascript,
  mocha: SiMocha,
  mysql: GrMysql,
  nodejs: SiNodedotjs,
  postgresql: SiPostgresql,
  reactjs: SiReact,
  redux: SiRedux,
  sequelize: SiSequelize,
  typescript: SiTypescript,
  vuejs: SiVuedotjs,
  vuex: FaVuejs,
};

export type StackName = keyof typeof stacksIcons;
