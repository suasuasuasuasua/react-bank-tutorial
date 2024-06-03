// Every component should be responsible for its own job
// https://gist.githubusercontent.com/adrianhajdin/8a04faf5e52419ec93cd5329ffcb011e/raw/119ddf3380cecf2a3736afe8e4c83ee008093b6b/index.js

// If I didn't mark Navbar as `export default Navbar` in
// `src/components/Navbar.jsx`, I would have to do something like this to
// specifically grabbed the named export, rather than grabbing the singular
// default value and naming it myself
// import { Navbar } from "./Navbar";

import Navbar from "./Navbar";
import Billing from "./Billing";
import CardDeal from "./CardDeal";
import Business from "./Business";
import Clients from "./Clients";
import CTA from "./CTA";
import Stats from "./Stats";
import Footer from "./Footer";
import Testimonials from "./Testimonials";
import Hero from "./Hero";

export {
  Navbar,
  Billing,
  CardDeal,
  Business,
  Clients,
  CTA,
  Stats,
  Footer,
  Testimonials,
  Hero,
};
