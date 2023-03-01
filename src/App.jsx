import { ChooseBank } from "./components/layout/ChooseBank";
import { HeaderImage } from "./components/layout/HeaderImage";
import { LatestArticles } from "./components/layout/LatestArticles";
import { NavBar } from "./components/ui/NavBar";

function App() {
  return <>
    <NavBar/>
    <HeaderImage/>
    <ChooseBank/>
    <LatestArticles/>
  </>;
}

export default App;
