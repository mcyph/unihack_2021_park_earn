import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Containers from "./lib/examples/controls/Containers";
import Progress from "./lib/examples/controls/Progress";
import Navigation from "./lib/examples/controls/Navigation";
import Floating from "./lib/examples/controls/Floating";
import Tabs from "./lib/examples/controls/Tabs";
import Icons from "./lib/examples/controls/Icons";
import Images from "./lib/examples/controls/Images";
import Menus from "./lib/examples/controls/Menus";
import TablesGrids from "./lib/examples/controls/TablesGrids";
import examplesListing from "./lib/examples/examplesListing.json";

import FlexContainer from "./lib/controls/containers/flexbox/FlexContainer";
import FlexRow from "./lib/controls/containers/flexbox/FlexRow";
import FlexCol from "./lib/controls/containers/flexbox/FlexCol";

import Charts from "./lib/examples/Charts";
import Editors from "./lib/examples/Editors";
import Gamification from "./lib/examples/Gamification";
import Landing from "./lib/examples/Landing";
import Layout from "./lib/examples/Layout";
import Map from "./lib/examples/Map";
import Previews from "./lib/examples/Previews";

import OffCanvasSidebar from "./lib/controls/containers/offcanvas/OffCanvasSidebar";
import OffCanvasContent from "./lib/controls/containers/offcanvas/OffCanvasContent";
import OffCanvas from "./lib/controls/containers/offcanvas/OffCanvas";
import SourceCodeDisplay from "./lib/previews/SourceCodeDisplay";
import NavTree from "./lib/controls/navigation/navtree/NavTree";
import NavTreeItem from "./lib/controls/navigation/navtree/NavTreeItem";
import FormsButtons from "./lib/examples/controls/FormsButtons";
import FormsSelectControls from "./lib/examples/controls/FormsSelectControls";
import FormsSliders from "./lib/examples/controls/FormsSliders";
import FormsTextControls from "./lib/examples/controls/FormsTextControls";
import FormsToggleControls from "./lib/examples/controls/FormsToggleControls";
import Labels from "./lib/examples/Labels";
import Toasts from "./lib/examples/Toasts";

let MyNav=()=>{
  return <>
    <nav className="example-nav">
      <NavTree>
        <NavTreeItem>
          <a>Layout/Containers</a>
          <NavTree>
            <NavTreeItem><Link to="/containers">Containers</Link></NavTreeItem>
            <NavTreeItem><Link to="/labels">Labels</Link></NavTreeItem>
            {/*<NavTreeItem><Link to="/landing">Landing Pages</Link></NavTreeItem>*/}
            <NavTreeItem><Link to="/layout">Layout</Link></NavTreeItem>
            <NavTreeItem><Link to="/tables_grids">TablesGrids</Link></NavTreeItem>
            <NavTreeItem><Link to="/toasts">Toasts</Link></NavTreeItem>
          </NavTree>
        </NavTreeItem>
        <NavTreeItem>
          <a>Forms</a>
          <NavTree>
            <NavTreeItem><Link to="/forms_buttons">Buttons</Link></NavTreeItem>
            <NavTreeItem><Link to="/progress">Progress</Link></NavTreeItem>
            <NavTreeItem><Link to="/forms_select_controls">Select Controls</Link></NavTreeItem>
            <NavTreeItem><Link to="/forms_sliders">Sliders</Link></NavTreeItem>
            <NavTreeItem><Link to="/forms_text_controls">Text Controls</Link></NavTreeItem>
            <NavTreeItem><Link to="/forms_toggle_controls">Toggle Controls</Link></NavTreeItem>
          </NavTree>
        </NavTreeItem>
        <NavTreeItem>
          <a>Navigation/Menus</a>
          <NavTree>
            {/*<NavTreeItem><Link to="/floating">Floating</Link></NavTreeItem>*/}
            <NavTreeItem><Link to="/menus">Menus</Link></NavTreeItem>
            <NavTreeItem><Link to="/navigation">Navigation</Link></NavTreeItem>
            <NavTreeItem><Link to="/tabs">Tabs</Link></NavTreeItem>
          </NavTree>
        </NavTreeItem>
        <NavTreeItem>
          <a>Graphics/Charts/Vis</a>
          <NavTree>
            <NavTreeItem><Link to="/charts">Charts</Link></NavTreeItem>
            <NavTreeItem><Link to="/icons">Icons</Link></NavTreeItem>
            <NavTreeItem><Link to="/images">Images</Link></NavTreeItem>
            {/*<NavTreeItem><Link to="/map">Map Visualizations</Link></NavTreeItem>*/}
          </NavTree>
        </NavTreeItem>
        <NavTreeItem>
          <a>Rich Markup</a>
          <NavTree>
            <NavTreeItem><Link to="/editors">Editors</Link></NavTreeItem>
            <NavTreeItem><Link to="/previews">Previews</Link></NavTreeItem>
          </NavTree>
        </NavTreeItem>
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

let ExampleKitchenSink=()=>{
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
          <Route path="/containers"><SourceDisplay reactClass={<Containers/>} jsonKey="Containers"/></Route>
          <Route path="/floating"><SourceDisplay reactClass={<Floating/>} jsonKey="Floating"/></Route>
          <Route path="/labels"><SourceDisplay reactClass={<Labels/>} jsonKey="Labels"/></Route>
          <Route path="/toasts"><SourceDisplay reactClass={<Toasts/>} jsonKey="Toasts"/></Route>

          <Route path="/forms_buttons"><SourceDisplay reactClass={<FormsButtons/>} jsonKey="FormsButtons"/></Route>
          <Route path="/forms_select_controls"><SourceDisplay reactClass={<FormsSelectControls/>} jsonKey="FormsSelectControls"/></Route>
          <Route path="/forms_sliders"><SourceDisplay reactClass={<FormsSliders/>} jsonKey="FormsSliders"/></Route>
          <Route path="/forms_text_controls"><SourceDisplay reactClass={<FormsTextControls/>} jsonKey="FormsTextControls"/></Route>
          <Route path="/forms_toggle_controls"><SourceDisplay reactClass={<FormsToggleControls/>} jsonKey="FormsToggleControls"/></Route>

          <Route path="/icons"><SourceDisplay reactClass={<Icons/>} jsonKey="Icons"/></Route>
          <Route path="/images"><SourceDisplay reactClass={<Images/>} jsonKey="Images"/></Route>
          <Route path="/menus"><SourceDisplay reactClass={<Menus/>} jsonKey="Menus"/></Route>
          <Route path="/navigation"><SourceDisplay reactClass={<Navigation/>} jsonKey="Navigation"/></Route>
          <Route path="/progress"><SourceDisplay reactClass={<Progress/>} jsonKey="Progress"/></Route>
          <Route path="/tables_grids"><SourceDisplay reactClass={<TablesGrids/>} jsonKey="TablesGrids"/></Route>
          <Route path="/tabs"><SourceDisplay reactClass={<Tabs/>} jsonKey="Tabs"/></Route>

          <Route path="/charts"><SourceDisplay reactClass={<Charts/>} jsonKey="Charts"/></Route>
          <Route path="/editors"><SourceDisplay reactClass={<Editors/>} jsonKey="Editors"/></Route>
          <Route path="/gamification"><SourceDisplay reactClass={<Gamification/>} jsonKey="Gamification"/></Route>
          <Route path="/landing"><SourceDisplay reactClass={<Landing/>} jsonKey="Landing"/></Route>
          <Route path="/layout"><SourceDisplay reactClass={<Layout/>} jsonKey="Layout"/></Route>
          <Route path="/map"><SourceDisplay reactClass={<Map/>} jsonKey="Map"/></Route>
          <Route path="/previews"><SourceDisplay reactClass={<Previews/>} jsonKey="Previews"/></Route>

          <Route path="/"><SourceDisplay reactClass={<Layout/>} jsonKey="Layout" /></Route>
        </Switch>
      </div>
    </Router>
  </>;
}

export default ExampleKitchenSink;
