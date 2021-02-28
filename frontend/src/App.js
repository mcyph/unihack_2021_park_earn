import './App.css';
//import "./spectre/spectre_css_dark/spectre.scss";
import "./spectre/spectre_css_light/spectre.scss";
import "./spectre/spectre_css_light/spectre-exp.scss";
import "./spectre/spectre_css_light/spectre-icons.scss";

import Containers from "./examples/controls/Containers";
import Forms from "./examples/controls/Forms";
import Previews from "./examples/previews";

// Buttons
import Button from "./controls/forms/controls/Button";
import ButtonGroup from "./controls/forms/ButtonGroup";

// Breadcrumbs (navigation)
import Breadcrumbs from "./controls/navigation/breadcrumbs/Breadcrumbs";
import BreadcrumbItem from "./controls/navigation/breadcrumbs/BreadcrumbItem";

// Progress
import Progress from "./controls/progress/Progress";
import ProgressBar from "./controls/progress/ProgressBar";

// Sliders
import Slider from "./controls/forms/controls/sliders/Slider";
import ComparisonSlider from "./controls/images/ComparisonSlider";
//import SliderBar from "./controls/sliders/slider_bar/SliderBar";
//import SliderBarUnits from "./controls/sliders/slider_bar/SliderBarUnits";

// Steps
import Steps from "./controls/steps/Steps"
import StepItem from "./controls/steps/StepItem";

// Tabs
import Tabs from "./controls/tabs/Tabs";
import TabItem from "./controls/tabs/TabItem";
import TabItemButton from "./controls/tabs/TabItemButton";

// Tiles
import Tile from "./controls/containers/tiles/Tile";
import TileTitle from "./controls/containers/tiles/TileTitle";
import TileSubtitle from "./controls/containers/tiles/TileSubtitle";

// Timeline
//import Timeline from "./controls/timeline/Timeline";
//import TimelineContent from "./controls/timeline/TimelineContent";
//import TimelineIcon from "./controls/timeline/TimelineIcon";
//import TimelineLeft from "./controls/timeline/TimelineLeft";

//import Accordion from "./controls/Accordion";
import Avatar from "./controls/icons/Avatar";
import Card from "./controls/containers/card/Card";
import Chip from "./controls/containers/chip/Chip";
//import DataGrid
import EmptyCont from "./controls/containers/empty/EmptyCont";
import ModalDialog from "./controls/floating/ModalDialog";
import Panel from "./controls/containers/panel/Panel";
import Parallax from "./controls/images/Parallax";
import SearchControl from "./controls/forms/convenience/SearchControl";
import Toast from "./controls/floating/Toast";
import OffCanvasSidebar from "./controls/containers/offcanvas/OffCanvasSidebar";
import OffCanvasContent from "./controls/containers/offcanvas/OffCanvasContent";
import OffCanvas from "./controls/containers/offcanvas/OffCanvas";
import SourceCodeDisplay from "./previews/SourceCodeDisplay";
//import NavTree from "./controls/navigation/navtree/NavTree";
//import NavTreeItem from "./controls/navigation/navtree/NavTreeItem";

function App() {
  return <>
    <OffCanvas>
      <OffCanvasSidebar style={{ width: "14rem" }}>
        Blah blah blahs
      </OffCanvasSidebar>
      <OffCanvasContent style={{ width: "14rem" }}>
        Blah blah blah
      </OffCanvasContent>
    </OffCanvas>

    <div style={{
      maxWidth: "800px",
      marginLeft: "15rem"
    }}>
      { Containers() }
      <hr/>
      { Forms() }
      <hr/>
      { Previews() }
      <hr/>

      <h2>Navigation</h2>
      <h3>Breadcrumbs</h3>
      <p>
        <Breadcrumbs>
          <BreadcrumbItem href="#">Testing testing 123</BreadcrumbItem>
          <BreadcrumbItem>Active Item</BreadcrumbItem>
        </Breadcrumbs>
      </p>
      {/*<h3>Navigation Tree</h3>
      <p>
        <NavTree>
          <NavTreeItem>blah</NavTreeItem>
        </NavTree>
      </p>*/}

      <h2>Progress Indicators</h2>
      <h3>Progress</h3>
      <p>
        <Progress value={50} max={100} />
      </p>
      <h3>Progressbar</h3>
      <p>
        <ProgressBar value={50} min={0} max={100} />
      </p>

      <h2>Sliders</h2>
      <h3>Slider</h3>
      <p>
        <Slider min={50} max={100} value={50}></Slider>
      </p>
      <h3>Image Comparison Slider</h3>
      <p>
        <ComparisonSlider beforeImgSrc={"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/" +
                                        "Oryctolagus_cuniculus_Rcdo.jpg/220px-Oryctolagus_cuniculus_Rcdo.jpg"}
                          afterImgSrc={"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/" +
                                       "Oryctolagus_cuniculus_Rcdo.jpg/220px-Oryctolagus_cuniculus_Rcdo.jpg"} />
      </p>

      <p>
        <Steps>
          <StepItem href="#">Step 1</StepItem>
          <StepItem active={true}>Step 2</StepItem>
        </Steps>
      </p>

      <p>
        <Tabs>
          <TabItem href="#" name={"tab 1"} />
          <TabItem href="#" name={"tab 2"} />
          <TabItem href="#" name={"tab 3"} active={true} />
        </Tabs>
      </p>
    </div>
  </>;
}

export default App;
