import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import News from "./pages/News";
import Prices from "./pages/Prices";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/news" component={News} />
        <Route exact path="/prices" component={Prices} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;


//ankit
