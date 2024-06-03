// rafc snippet
import styles from "./style";

// Import the components individually from the components index js file
import {
  Navbar,
  Hero,
  Stats,
  Business,
  Billing,
  CardDeal,
  Testimonials,
  Clients,
  CTA,
  Footer,
} from "./components";

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <h1>Hello, world</h1>
      {/* navbar section */}
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar></Navbar>
        </div>
      </div>

      {/* hero section */}
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero></Hero>
        </div>
      </div>

      {/* hero section */}
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats></Stats>
          <Business></Business>
          <Billing></Billing>
          <CardDeal></CardDeal>
          <Testimonials></Testimonials>
          <Clients></Clients>
          <CTA></CTA>
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
};

export default App;
