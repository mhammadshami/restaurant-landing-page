import React from 'react';
// import newsletter
import Newsletter from './Newsletter';
import Copyright from "./Copyright";
import Socials from "./Socials";
// import data
import {footerData} from "../data";
// import motion
import {motion}  from "framer-motion"
// import variants
import { fadeIn , staggerContainer } from "../variants";

const Footer = () => {
  // destructure data
  const { contact, hours, social} = footerData;
  return <footer className='relative top-96 bg-black z-20 lg:bg-transparent lg:min-h-[620px] lg:bg-footer lg:bg-center lg:bg-no-repeat pt-20'>
    <div className="container mx-auto h-full">
      {/* transletter & info */}
      <div>
        {/* newsletter */}
        <div>
          <Newsletter />
        </div>
        {/* Info */}
        <div>info</div>
      </div>
    </div>
  </footer>;
};

export default Footer;
