import Banner from "./components/banner/Banner";
import Header from "./components/header/Header";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="font-poppins">
      <header>
        <Header></Header>
        <Banner></Banner>
      </header>

      <main></main>
      <footer></footer>
    </div>
  );
}

export default App;
