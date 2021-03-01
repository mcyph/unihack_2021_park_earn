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
  let p = this.props.location.pathname + "/";
  return <>
    <nav>
      <NavTree>
        <NavTreeItem><Link to={ p+"layout" }>Layout</Link></NavTreeItem>
        <NavTreeItem><Link to={ p+"containers" }>Containers</Link></NavTreeItem>
        <NavTreeItem><Link to={ p+"forms" }>Forms</Link></NavTreeItem>
        <NavTreeItem><Link to={ p+"progress" }>Progress</Link></NavTreeItem>
        <NavTreeItem><Link to={ p+"tables_grids" }>TablesGrids</Link></NavTreeItem>
        <NavTreeItem><Link to={ p+"tabs" }>Tabs</Link></NavTreeItem>
        <NavTreeItem><Link to={ p+"navigation" }>Navigation</Link></NavTreeItem>
        <NavTreeItem><Link to={ p+"menus" }>Menus</Link></NavTreeItem>
        <NavTreeItem><Link to={ p+"icons" }>Icons</Link></NavTreeItem>
        {/*<NavTreeItem><Link to={ p+"floating" }>Floating</Link></NavTreeItem>*/}
        <NavTreeItem><Link to={ p+"images" }>Images</Link></NavTreeItem>

        {/*<li><Link to={ p+"charts">Charts</Link></li>*/}
        {/*<NavTreeItem><Link to={ p+"landing" }>Landing Pages</Link></NavTreeItem>*/}
        {/*<NavTreeItem><Link to={ p+"map" }>Map Visualizations</Link></NavTreeItem>*/}
        <NavTreeItem><Link to={ p+"editors" }>Editors</Link></NavTreeItem>
        <NavTreeItem><Link to={ p+"previews" }>Previews</Link></NavTreeItem>
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
  let p = this.props.location.pathname + "/";

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
          <Route path={ p+"containers" }><SourceDisplay reactClass={<Containers/>} jsonKey="Containers"/></Route>
          <Route path={ p+"floating" }><SourceDisplay reactClass={<Floating/>} jsonKey="Floating"/></Route>
          <Route path={ p+"forms" }><SourceDisplay reactClass={<Forms/>} jsonKey="Forms"/></Route>
          <Route path={ p+"icons" }><SourceDisplay reactClass={<Icons/>} jsonKey="Icons"/></Route>
          <Route path={ p+"images" }><SourceDisplay reactClass={<Images/>} jsonKey="Images"/></Route>
          <Route path={ p+"menus" }><SourceDisplay reactClass={<Menus/>} jsonKey="Menus"/></Route>
          <Route path={ p+"navigation" }><SourceDisplay reactClass={<Navigation/>} jsonKey="Navigation"/></Route>
          <Route path={ p+"progress" }><SourceDisplay reactClass={<Progress/>} jsonKey="Progress"/></Route>
          <Route path={ p+"tables_grids" }><SourceDisplay reactClass={<TablesGrids/>} jsonKey="TablesGrids"/></Route>
          <Route path={ p+"tabs" }><SourceDisplay reactClass={<Tabs/>} jsonKey="Tabs"/></Route>

          {/*<Route to={ p+"charts" }><SourceDisplay reactClass={<Charts/>} jsonKey="Charts"/></Route>*/}
          <Route path={ p+"editors" }><SourceDisplay reactClass={<Editors/>} jsonKey="Editors"/></Route>
          <Route path={ p+"gamification" }><SourceDisplay reactClass={<Gamification/>} jsonKey="Gamification"/></Route>
          <Route path={ p+"landing" }><SourceDisplay reactClass={<Landing/>} jsonKey="Landing"/></Route>
          <Route path={ p+"layout" }><SourceDisplay reactClass={<Layout/>} jsonKey="Layout"/></Route>
          <Route path={ p+"map" }><SourceDisplay reactClass={<Map/>} jsonKey="Map"/></Route>
          <Route path={ p+"previews" }><SourceDisplay reactClass={<Previews/>} jsonKey="Previews"/></Route>

          <Route path={ p+"" }><SourceDisplay reactClass={<Layout/>} jsonKey="Layout" /></Route>
        </Switch>
      </div>
    </Router>
  </>;
}

export default App;
