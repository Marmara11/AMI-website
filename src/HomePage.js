import withRoot from "./modules/withRoot";
// --- Post bootstrap -----
import React from "react";
import Header from "./PageComponents/Header";
import Footer from "./PageComponents/Footer";
import ProductCategories from "./PageComponents/ProductCategories";
import ProductSmokingHero from "./PageComponents/ProductSmokingHero";
import CompanyIntro from "./PageComponents/CompanyIntro";
import ProductValues from "./PageComponents/ProductValues";
import ProductHowItWorks from "./PageComponents/ProductHowItWorks";
import ProductCTA from "./PageComponents/ProductCTA";
//import AutoRotatingCarousel from "./PageComponents/AutoRotatingCarousel";

function Index() {
  return (
    <React.Fragment>
      <Header />
      <ProductValues />
      {/* <Header />
      <CompanyIntro />
      <ProductValues />
      <ProductCategories />
      <ProductHowItWorks />
      <ProductCTA />
      <ProductSmokingHero />
      <Footer /> */}
    </React.Fragment>
  );
}

export default withRoot(Index);
