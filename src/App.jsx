import Banner from "./components/banner/Banner";
import CustomNavbar from "./components/header/CustomNavbar";
import Header from "./components/header/Header";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="font-poppins">
      <header>
        {/* <Header></Header> */}
        <CustomNavbar></CustomNavbar>
        <Banner></Banner>
      </header>

      <main></main>
      <footer></footer>
    </div>
  );
}

export default App;
