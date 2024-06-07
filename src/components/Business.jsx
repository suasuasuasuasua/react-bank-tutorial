import React from "react";

import { features } from "../constants";
import styles, { layout } from "../style";

import Button from "./Button";

// Since we're not going to be using this feature card anywhere else in the
// codebase, we can just define it here in the same file as a local class
const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded=[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    {/* The icons for the business callouts */}
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
    </div>

    {/* The callouts */}
    <div className="flex-1 flex flex-col ml-3">
      {/* The titles for the callouts */}
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-23 mb-1">
        {title}
      </h4>
      {/* The description of the callouts */}
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-24 mb-1">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      {/* Callout */}
      <h2 className={styles.heading2}>
        You do the business, <br className="sm:block hidden" /> we'll handle the
        rest
      </h2>

      {/* Supporting text */}
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        With the right credit card, you can improve your financial life by
        building credit, earning rewards, and saving money. But with hundreds of
        credit cards on the market.
      </p>

      <Button styles="mt-10" />
    </div>

    {/* To the right of the text, we'll put the feature cards */}
    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;
