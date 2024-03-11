import React from 'react';
// import data
import { newsletterData } from "../data.js";

const Newsletter = () => {
  // destructure newsletter data
  const { title, subtitle, placeholder, btnText } = newsletterData;

  return <div className="bg-none lg:bg-newsletter lg:px-24 lg:bg-cover lg:h-[222px] lg:bg-center xl:bg-auto">
    <div>
      {/* title & subtitle */}
      <div>
        <h3></h3>
      </div>
    </div>
  </div>;
};

export default Newsletter;
