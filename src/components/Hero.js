import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const Hero = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="max-w-screen mt-24 px-8 min-h-[90vh] xl:px-16 mx-auto relative"
      id="about"
    >
      <div className="absolute -top-[173px] -left-[108px] w-full h-[full] -z-10 overflow-hidden">
        <img
          src="/assets/abstract-top.png"
          alt="Illustrasi"
          className="w-[450px]"
        />
      </div>
      <ScrollAnimationWrapper>
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[70vh]"
          variants={scrollAnimation}
        >
          <div className="flex items-center justify-center order-1 lg:order-1 pt-44 md:pt-80">
            <div className="relative">
              <blockquote className="text-black-600 italic text-lg font-bold">
                "Transformasi digital dimulai dari sini — bersama kami, wujudkan efisiensi dan pertumbuhan yang berkelanjutan"
              </blockquote>
              <div className="place-items-center">
                <img src="/assets/undraw_sync-files.png" alt="Logo" className="h-60 w-auto" />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center space-y-8 lg:pl-8 order-2 lg:order-2 mb-[150px] md:mb-56">
            <div className="space-y-6">
              <strong className="text-xl">
                Empowering Your Business with Integrated ERP Solutions
              </strong>
              <p className="text-gray-600 text-lg leading-relaxed justify-evenly max-w-lg text-justify">
                Kami adalah penyedia solusi ERP (Enterprise Resource Planning) yang berkomitmen membantu bisnis Anda berkembang melalui sistem yang terintegrasi, efisien, dan mudah digunakan. Dengan pengalaman di berbagai industri, kami menawarkan layanan yang mencakup perencanaan sumber daya, manajemen inventaris, akuntansi, penjualan, hingga integrasi sistem digital lainnya.
              </p>
            </div>
          </div>
        </motion.div>
      </ScrollAnimationWrapper>
      <div className="absolute -bottom-[12.5rem] right-0 -z-10">
        <img
          src="/assets/abstract-bottom.png"
          alt="Illustration"
          className="w-[450px] md:w-[600px] lg:w-[750px]"
        />
      </div>
    </div>
  );
};

export default Hero;
