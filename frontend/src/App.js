import './App.css';
//import "./spectre/spectre_css_dark/spectre.scss";
import "./spectre/spectre_css_light/spectre.scss";
import "./spectre/spectre_css_light/spectre-exp.scss";
import "./spectre/spectre_css_light/spectre-icons.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Containers from "./examples/controls/Containers";
import Forms from "./examples/controls/Forms";
import Progress from "./examples/controls/Progress";
import Navigation from "./examples/controls/Navigation";
import Floating from "./examples/controls/Floating";
import Tabs from "./examples/controls/Tabs";
import Icons from "./examples/controls/Icons";
import Images from "./examples/controls/Images";
import Menus from "./examples/controls/Menus";
import TablesGrids from "./examples/controls/TablesGrids";

/*import Charts from "./examples/Charts";*/
import Editors from "./examples/Editors";
import Gamification from "./examples/Gamification";
import Landing from "./examples/Landing";
import Layout from "./examples/Layout";
import Map from "./examples/Map";
import Previews from "./examples/Previews";

import OffCanvasSidebar from "./controls/containers/offcanvas/OffCanvasSidebar";
import OffCanvasContent from "./controls/containers/offcanvas/OffCanvasContent";
import OffCanvas from "./controls/containers/offcanvas/OffCanvas";

let MyNav=()=>{
  return <>
    <nav>
      <ul>
        <li><Link to="/layout">Layout</Link></li>
        <li><Link to="/containers">Containers</Link></li>
        <li><Link to="/forms">Forms</Link></li>
        <li><Link to="/progress">Progress</Link></li>
        <li><Link to="/tables_grids">TablesGrids</Link></li>
        <li><Link to="/tabs">Tabs</Link></li>
        <li><Link to="/navigation">Navigation</Link></li>
        <li><Link to="/menus">Menus</Link></li>
        <li><Link to="/icons">Icons</Link></li>
        <li><Link to="/floating">Floating</Link></li>
        <li><Link to="/images">Images</Link></li>

        {/*<li><Link to="/charts">Charts</Link></li>*/}
        <li><Link to="/landing">Landing Pages</Link></li>
        <li><Link to="/map">Map Visualizations</Link></li>
        <li><Link to="/editors">Editors</Link></li>
        <li><Link to="/previews">Previews</Link></li>
      </ul>
    </nav>
  </>;
}

let App=()=>{
  return <>
    <Router>
      <OffCanvas>
        <OffCanvasSidebar style={{ width: "14rem", position: "fixed", top: 0, height: "100vh" }}>
          <MyNav />
        </OffCanvasSidebar>
        <OffCanvasContent
          style={{ width: "14rem", position: "fixed", top: 0, height: "100vh" }}>
          <MyNav />
        </OffCanvasContent>
      </OffCanvas>

      <div style={{ maxWidth: "800px",
                    marginLeft: "15rem",
                    paddingTop: "0.9rem" }}>
        <Switch>
          <Route path="/containers"><Containers/></Route>
          <Route path="/floating"><Floating/></Route>
          <Route path="/forms"><Forms/></Route>
          <Route path="/icons"><Icons/></Route>
          <Route path="/images"><Images/></Route>
          <Route path="/menus"><Menus/></Route>
          <Route path="/navigation"><Navigation/></Route>
          <Route path="/progress"><Progress/></Route>
          <Route path="/tables_grids"><TablesGrids/></Route>
          <Route path="/tabs"><Tabs/></Route>

          {/*<Route to="/charts"><Charts/></Route>*/}
          <Route path="/editors"><Editors/></Route>
          <Route path="/gamification"><Gamification/></Route>
          <Route path="/landing"><Landing/></Route>
          <Route path="/layout"><Layout/></Route>
          <Route path="/map"><Map/></Route>
          <Route path="/previews"><Previews/></Route>

          <Route path="/"><Containers/></Route>
        </Switch>
      </div>
    </Router>
  </>;
}

export default App;
