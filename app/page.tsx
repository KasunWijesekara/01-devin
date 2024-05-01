import HomeFeature from "@/components/home-feature";
import HomeHero from "@/components/home-hero";
import HomeStats from "@/components/home-stats";
import React from "react";
import HomeTeams from "@/components/home-teams";
// import HomeContact from "@/components/home-contact"; // This line is commented out
import HomeCta from "@/components/home-cta";
import HomeContacts from "@/components/home-contacts";
import HomePricing from "@/components/home-pricing"; // New import for the pricing section
import Script from "next/script";

const Home = () => {
  return (
    <div>
      <div className="container">
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-LCMNGJK8DE" />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-LCMNGJK8DE');
        `}
        </Script>
      </div>
      <HomeHero />
      <HomeStats />
      <HomeFeature />
      <HomeCta />
      <HomeTeams />
      {/* <HomeContact /> */}
      <HomeContacts />
      <HomePricing /> {/* New pricing section added */}
    </div>
  );
};

export default Home;
