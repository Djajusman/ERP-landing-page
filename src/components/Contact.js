import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import ButtonPrimary from "./misc/ButtonPrimary";

const Contact = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto" id="contact">
      <ScrollAnimationWrapper>
        <motion.div
          className="flex flex-col items-center justify-center text-center py-12 bg-white-500 rounded-xl"
          variants={scrollAnimation}
        >
          <h2 className="text-3xl lg:text-4xl font-medium text-black-600 mb-4">Contact Us</h2>
          <p className="text-black-500 mb-8 w-full max-w-lg">
            Hubungi kami untuk kasus apapun yang terhubung dengan perusahaan atau layanan kami.
            Kami akan secepatnya dan sebisa mungkin membantu Anda.
          </p>
          <form className="w-full max-w-md flex flex-col gap-4">
            <input
              type="text"
              placeholder="Nama"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-orange-500"
            />
            <input
              type="email"
              placeholder="Alamat Email"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-orange-500"
            />
            <textarea
              placeholder="Isi Pesan"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-orange-500"
              rows={4}
            />
            <ButtonPrimary type='button'>Kirim Pesan</ButtonPrimary>
          </form>
        </motion.div>
      </ScrollAnimationWrapper>
    </div>
  );
};

export default Contact; 