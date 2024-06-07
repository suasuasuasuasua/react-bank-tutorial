import React from "react";

import { stats } from "../constants";
import styles from "../style";

const Stats = () => (
  <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6 `}>
    {/* Map each of the predefined stats -- here in the arrow function, we
      don't care about the index of the item so we don't specify the optional
      second paramter */}
    {stats.map((stat) => (
      <div
        key={stat.id}
        className={`flex-1 flex justify-start items-center flex-row m-3`}
      >
        {/* The quantity of one of the stats */}
        <h4 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] text-white">
          {stat.value}
        </h4>

        {/* The stat title itself */}
        <p className="font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[21px] text-gradient uppercase ml-3">
          {stat.title}
        </p>
      </div>
    ))}
  </section>
);

export default Stats;
