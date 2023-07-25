import Image from "next/image";
import React from "react";
import Header from "./header";
import HeroDetails from "./heroDetails";

export const Hero = () => {
  return (
    <section className="bg-[url('/assets/images/hero.jpeg')] bg-cover bg-fixed bg-opacity-20 text-white font-marcellus relative">
      <div className="backdrop-brightness-[.40] pb-20">
        <Header />
        <HeroDetails />
      </div>
      {/* <Image src="/assets/images/hero.jpeg" alt="Hero" width={59} height={60} /> */}
    </section>
  );
};
