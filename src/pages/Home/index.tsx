import { CarouselStacks, ContactMe, DropdownMenu, Footer, Greeting, NavBar } from '@src/components';

export default function Home() {
  return (
    <main className="flex flex-col justify-between min-h-screen">
      <DropdownMenu />
      <NavBar />
      <div
        className="w-full md:h-[817px] flex justify-center px-3"
      >
        <div className="grid grid-rows-6 justify-center w-full h-full max-w-[1169px] md:grid-cols-2 md:grid-rows-2 lg:grid-rows-3">
          <Greeting />
          <ContactMe />
        </div>
      </div>
      <CarouselStacks />
      <Footer />
    </main>
  );
}
