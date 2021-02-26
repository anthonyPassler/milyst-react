import Banner from "../Banner/Banner.js";
import Headline from "../Headline/Headline.js";
import CardList from "../CardList/CardList.js";
import Footer from "../Footer/Footer.js";

function LandingPage() {
  return (
    <>
      <Banner />
      <Headline text="How it works"/>
      <CardList />
      <Footer />
    </>
  );
}

export default LandingPage;
