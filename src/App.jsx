import { ChooseBank } from "./components/layout/ChooseBank";
import { Footer } from "./components/layout/Footer";
import { HeaderImage } from "./components/layout/HeaderImage";
import { LatestArticles } from "./components/layout/LatestArticles";
import { NavBar } from "./components/ui/NavBar";

function App() {
  return <>
    <NavBar/>
    <HeaderImage/>
    <ChooseBank/>
    <LatestArticles/>
    <Footer/>
  </>;
}

export default App;
