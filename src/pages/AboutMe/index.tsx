import myPhoto from '@src/assets/foto-do-diogo.png';
import { DropdownMenu, Footer, NavBar } from '@src/components';

export function AboutMe() {
  return (
    <main className="flex flex-col justify-between min-h-screen">
      <DropdownMenu />
      <NavBar />
      <div className="px-3 grid grid-rows-3 items-center w-full max-w-[1169px] md:h-[817px] lg:grid-cols-2 lg:grid-rows-2 md:mt-28 lg:mx-auto">
        <article className="text-center text-sm p-4 row-span-2 lg:row-span-1 lg:col-start-1 lg:mt-40 lg:text-lg lg:text-justify">
          <p className="animate-[leftToRight_1s_ease-in-out]">
              Um cara meio louco, casado, com 31 anos e morando em Nova Iguaçu - RJ. Fui militar por 8 anos na <em className="text-lemonade-500">Marinha do Brasil</em>, onde a ultima atuação foi como Cabo Enfermeiro.
            <br />
            <br />
              Em 2020, tomei a decisão de mudar de carreira e me tornar um desenvolvedor web. Então em fevereiro de 2021, me desliguei das forças armadas e comecei a estudar programação por conta própria.
            <br />
              Em abril de 2021, consegui ingressar na <em className="text-lemonade-500">Trybe</em>, uma escola de desenvolvimento web, onde estudei e me formei em agosto de 2022, um <em className="text-lemonade-500">Desenvolvedor Web FullStack</em>, tendo como base as tecnologias: HTML, CSS, JavaScript, Python, React, Node, Express, MySQL, MongoDB, Git, Docker, entre outras.
            <br />
              Desde então, continuo me dedicando a estudar e aprimorar meus conhecimentos, buscando sempre me tornar um profissional melhor.
          </p>
        </article>
        <article className="text-center text-sm p-4 row-span-3 lg:row-span-2 lg:col-span-2 lg:text-lg">
          <h2 className="text-lemonade-500 text-lg animate-[rightToLeft_1s_ease-in-out] lg:text-xl lg:mt-28">Quando você passa a me conhecer, você descobre:</h2>
          <br />
          <ul className="animate-[rightToLeft_1.5s_ease-in-out] text-left w-full m-auto">
            <li className="text-bluesky-500 mb-2">
              Que gosto de resolver problemas, por isso encontrei na tecnologia o meu lugar;
            </li>
            <li className="text-bluesky-500 mb-2">
              Que sou uma pessoa que gosta de aprender coisas novas e não tem medo de tentar;
            </li>
            <li className="text-bluesky-500 mb-2">
              Que gosto de ajudar as pessoas, por isso pode contar comigo;
            </li>
            <li className="text-bluesky-500 mb-2">
              Que gosto de uns desafios, senão a vida fica chata;
            </li>
            <li className="text-bluesky-500 mb-2">
              Que prefiro trabalhar em equipe, por isso estou sempre disposto a ajudar e a ser ajudado;
            </li>
            <li className="text-bluesky-500 mb-2">
              Que sou um cara que se amarra nuns animes e séries;
            </li>
          </ul>
        </article>
        <div
          className="animate-[rightToLeft_1s_ease-in-out] row-start-1 flex justify-center lg:row-end-1 lg:col-start-2"
        >
          <img
            src={myPhoto}
            alt="foto-do-Diogo"
            className="w-[148px] md:w-[224px] lg:w-[324px]"
          />
        </div>
      </div>
      <Footer />
    </main>
  );
}
