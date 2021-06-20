import AboutUs from "./pages/AboutUs";
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import SampleProjects from "./pages/SampleProjects";
import FuturePlans from "./pages/FuturePlans";
//Router
import {Switch, Route} from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Nav/>
      <Switch>
        <Route path='/' exact>
          <AboutUs/>
        </Route>
        <Route path='/sample'>
          <SampleProjects/>
        </Route>
        <Route path='/future'>
          <FuturePlans/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
