import './styles/App.scss';
import Banner from "./components/Banner/Banner.js";
import Headline from "./components/Headline/Headline.js";
import CardList from "./components/CardList/CardList.js";

function App() {
  return (
    <div className="App">
      <Banner />
      <Headline text="How it works"/>
      <CardList />
    </div>
  );
}

export default App;
