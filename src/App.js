import './styles/App.scss';
import Banner from "./components/Banner/Banner.js";
import Headline from "./components/Headline/Headline.js";
import CardList from "./components/CardList/CardList.js";
import Footer from "./components/Footer/Footer.js";

function App() {
  return (
    <div className="App">
      <Banner />
      <Headline text="How it works"/>
      <CardList />
      <Footer />
    </div>
  );
}

export default App;
