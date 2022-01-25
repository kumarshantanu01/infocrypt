import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import News from "./pages/News";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/news" component={News} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
