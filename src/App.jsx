import { Suspense } from "react";
import Banner from "./components/banner/Banner";
import CustomNavbar from "./components/header/CustomNavbar";
import Header from "./components/header/Header";
import Pricing from "./components/pricing/Pricing";
import Loading from "./components/other/Loading";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="font-poppins">
      <header>
        {/* <Header></Header> */}
        <CustomNavbar></CustomNavbar>
        <Banner></Banner>
        <Suspense fallback={<Loading></Loading>}>
          <Pricing></Pricing>
        </Suspense>
      </header>

      <main></main>
      <footer></footer>
    </div>
  );
}

export default App;
