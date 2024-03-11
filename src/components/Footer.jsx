import React from "react";
// import newsletter
import Newsletter from "./Newsletter";
import Copyright from "./Copyright";
import Socials from "./Socials";
// import data
import { footerData } from "../data";
// import motion
import { motion } from "framer-motion";
// import variants
import { fadeIn, staggerContainer } from "../variants";

const Footer = () => {
  // destructure data
  const { contact, hours, social } = footerData;
  return (
    <footer className="relative top-96 bg-black z-20 lg:bg-transparent lg:min-h-[620px] lg:bg-footer lg:bg-center lg:bg-no-repeat pt-20 lg:pt-32">
      <div className="container mx-auto h-full">
        {/* transletter & info */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView={"show"}
          className="h-full flex flex-col gap-y-4"
        >
          {/* newsletter */}
          <motion.div variants={fadeIn("up", "tween", 0.4, 1.6)}>
            <Newsletter />
          </motion.div>
          {/* Info */}
          <motion.div
            variants={fadeIn("up", "tween", 0.6, 1.6)}
            className="flex flex-col lg:flex-row lg:gap-x-[130px] gap-y-12 lg:gap-y-0 lg:mb-12"
          >
            {/* contact */}
            <div className="flex-1 lg:max-w-[170px] ">
              <div className="capitalize text-[20px] lg:text-[22px] font-normal text-white font-primary mb-[22px]">
                {contact.title}
              </div>
              <div className="capitalize ">{contact.address}</div>
              <div className="capitalize ">{contact.phone}</div>
            </div>
            {/* program */}
            <div className="flex-1">
              <div className="capitalize text-[20px] lg:text-[22px] font-normal text-white font-primary mb-[22px]">
                {hours.title}
              </div>
              <div className="flex gap-x-[46px] ">
                {hours.program.map((item, index) => {
                  return (
                    <div className="capitalize" key={index}>
                      <div>
                        <div>{item.days}</div>
                        <div className="text-[20px] text-accent">
                          {item.hours}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* socials */}
            <div className="flex-1 lg:max-w-[280px] mb-12">
              <div className="capitalize text-[20px] lg:text-[22px] font-normal text-white font-primary mb-[22px]">
                {social.title}
              </div>
              <Socials />
            </div>
          </motion.div>
        </motion.div>
        {/* copyright */}
        <Copyright />
      </div>
    </footer>
  );
};

export default Footer;
