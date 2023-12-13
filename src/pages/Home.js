import React, { useRef } from "react";
import Room from "../components/Room";
import BookForm from "../components/BookForm";
import HeroSlider from "../components/HeroSlider";

const Home = () => {
  const Book = useRef(null);
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <HeroSlider scroll={() => scrollToSection(Book)} />
      <div className="container mx-auto relative">
        <div className="bg-accent/20 mt-4 p-4 lg:shadow-xl lg:absolute lg:left-0 lg:right-0 lg:p-0 lg:z-30 lg:-top-12 ">
          <BookForm />
        </div>
      </div>
      <section ref={Book}>
        <Room />
      </section>
    </>
  );
};

export default Home;
