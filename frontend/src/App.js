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
import examplesListing from "./examples/examplesListing.json";

import FlexContainer from "./controls/containers/flexbox/FlexContainer";
import FlexRow from "./controls/containers/flexbox/FlexRow";
import FlexCol from "./controls/containers/flexbox/FlexCol";

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
import SourceCodeDisplay from "./previews/SourceCodeDisplay";
import NavTree from "./controls/navigation/navtree/NavTree";
import NavTreeItem from "./controls/navigation/navtree/NavTreeItem";

let MyNav=()=>{
  return <>
    <nav>
      <NavTree>
        <NavTreeItem><Link to="layout">Layout</Link></NavTreeItem>
        <NavTreeItem><Link to="containers">Containers</Link></NavTreeItem>
        <NavTreeItem><Link to="forms">Forms</Link></NavTreeItem>
        <NavTreeItem><Link to="progress">Progress</Link></NavTreeItem>
        <NavTreeItem><Link to="tables_grids">TablesGrids</Link></NavTreeItem>
        <NavTreeItem><Link to="tabs">Tabs</Link></NavTreeItem>
        <NavTreeItem><Link to="navigation">Navigation</Link></NavTreeItem>
        <NavTreeItem><Link to="menus">Menus</Link></NavTreeItem>
        <NavTreeItem><Link to="icons">Icons</Link></NavTreeItem>
        {/*<NavTreeItem><Link to="floating">Floating</Link></NavTreeItem>*/}
        <NavTreeItem><Link to="images">Images</Link></NavTreeItem>

        {/*<li><Link to="charts">Charts</Link></li>*/}
        {/*<NavTreeItem><Link to="landing">Landing Pages</Link></NavTreeItem>*/}
        {/*<NavTreeItem><Link to="map">Map Visualizations</Link></NavTreeItem>*/}
        <NavTreeItem><Link to="editors">Editors</Link></NavTreeItem>
        <NavTreeItem><Link to="previews">Previews</Link></NavTreeItem>
      </NavTree>
    </nav>
  </>;
}

let SourceDisplay=({ reactClass, jsonKey })=>{
  return <>
    <FlexContainer>
      <FlexRow>
        <FlexCol defaultWidth={6} style={{maxWidth: "50%"}}>
          { reactClass }
        </FlexCol>
        <FlexCol defaultWidth={6} style={{maxWidth: "50%"}}>
          <SourceCodeDisplay language="jsx"
                             code={ examplesListing[jsonKey] }/>
        </FlexCol>
      </FlexRow>
    </FlexContainer>
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

      <div style={{ maxWidth: "1600px",
                    marginLeft: "15rem",
                    paddingTop: "0.9rem" }}>
        <Switch>
          <Route path="containers"><SourceDisplay reactClass={<Containers/>} jsonKey="Containers"/></Route>
          <Route path="floating"><SourceDisplay reactClass={<Floating/>} jsonKey="Floating"/></Route>
          <Route path="forms"><SourceDisplay reactClass={<Forms/>} jsonKey="Forms"/></Route>
          <Route path="icons"><SourceDisplay reactClass={<Icons/>} jsonKey="Icons"/></Route>
          <Route path="images"><SourceDisplay reactClass={<Images/>} jsonKey="Images"/></Route>
          <Route path="menus"><SourceDisplay reactClass={<Menus/>} jsonKey="Menus"/></Route>
          <Route path="navigation"><SourceDisplay reactClass={<Navigation/>} jsonKey="Navigation"/></Route>
          <Route path="progress"><SourceDisplay reactClass={<Progress/>} jsonKey="Progress"/></Route>
          <Route path="tables_grids"><SourceDisplay reactClass={<TablesGrids/>} jsonKey="TablesGrids"/></Route>
          <Route path="tabs"><SourceDisplay reactClass={<Tabs/>} jsonKey="Tabs"/></Route>

          {/*<Route to="charts"><SourceDisplay reactClass={<Charts/>} jsonKey="Charts"/></Route>*/}
          <Route path="editors"><SourceDisplay reactClass={<Editors/>} jsonKey="Editors"/></Route>
          <Route path="gamification"><SourceDisplay reactClass={<Gamification/>} jsonKey="Gamification"/></Route>
          <Route path="landing"><SourceDisplay reactClass={<Landing/>} jsonKey="Landing"/></Route>
          <Route path="layout"><SourceDisplay reactClass={<Layout/>} jsonKey="Layout"/></Route>
          <Route path="map"><SourceDisplay reactClass={<Map/>} jsonKey="Map"/></Route>
          <Route path="previews"><SourceDisplay reactClass={<Previews/>} jsonKey="Previews"/></Route>

          <Route path=""><SourceDisplay reactClass={<Layout/>} jsonKey="Layout" /></Route>
        </Switch>
      </div>
    </Router>
  </>;
}

export default App;
