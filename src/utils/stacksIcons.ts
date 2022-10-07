import {
  SiBootstrap,
  SiChai,
  SiCss3,
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
  javascript: SiJavascript,
  typescript: SiTypescript,
  reactjs: SiReact,
  redux: SiRedux,
  vuejs: SiVuedotjs,
  vuex: FaVuejs,
  nodejs: SiNodedotjs,
  express: SiExpress,
  sequelize: SiSequelize,
  bootstrap: SiBootstrap,
  docker: SiDocker,
  mysql: GrMysql,
  postgresql: SiPostgresql,
  html5: SiHtml5,
  css3: SiCss3,
  eslint: SiEslint,
  mocha: SiMocha,
  chai: SiChai,
  sinon: FaCubes
};

export type StackName = keyof typeof stacksIcons;
