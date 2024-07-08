
import Menu from "../components/layout/Menu";

import Hero from "../components/layout/Hero";
import Footer from "../components/layout/Footer";
import Picture from "../components/layout/Picture";
import AboutCard from "../components/layout/AboutCard";


export default function Home() {
  return (
    <>
    <div className="max-w-full	"> 
    <Hero />
      <Menu />

      <div className="mt-[100px]">
        <Picture />
      </div>

      <section className="text-center mt-[1100px] sm:mt-[1000px] md:mt-[1000px]" id="about">
        <div className="text-gray-500 w-[100%] mx-auto mt-4 flex flex-col gap-4">
          <AboutCard />
        </div>
      </section>

      <Footer />
    </div>
     
    </>
  );
}
