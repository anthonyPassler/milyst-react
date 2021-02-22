import './styles/App.scss';
import Banner from "./components/Banner/Banner.js"
import Headline from "./components/Headline/Headline.js"

function App() {
  return (
    <div className="App">
      <Banner />
      <Headline text="How it works"/>
    </div>
  );
}

export default App;
