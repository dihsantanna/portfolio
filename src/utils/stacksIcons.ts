import {
  SiBootstrap,
  SiCss3,
  SiDocker,
  SiEslint,
  SiExpress,
  SiHtml5,
  SiJavascript,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiRedux,
  SiSequelize,
  SiTypescript,
  SiVuedotjs
} from 'react-icons/si';

import { GrMysql } from 'react-icons/gr';

export const stacksIcons = {
  javascript: SiJavascript,
  typescript: SiTypescript,
  reactjs: SiReact,
  redux: SiRedux,
  vuejs: SiVuedotjs,
  nodejs: SiNodedotjs,
  express: SiExpress,
  sequelize: SiSequelize,
  bootstrap: SiBootstrap,
  docker: SiDocker,
  mysql: GrMysql,
  postgresql: SiPostgresql,
  html5: SiHtml5,
  css3: SiCss3,
  eslint: SiEslint
};

export type StackName = keyof typeof stacksIcons;
