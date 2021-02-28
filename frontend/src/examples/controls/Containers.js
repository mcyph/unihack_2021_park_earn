import React from "react";

// Import container classes
import Card from "../../controls/containers/card/Card";
import CardBody from "../../controls/containers/card/CardBody";
import CardFooter from "../../controls/containers/card/CardFooter";
import CardImage from "../../controls/containers/card/CardImage";
import CardSubtitle from "../../controls/containers/card/CardSubtitle";
import CardTitle from "../../controls/containers/card/CardTitle";
import Chip from "../../controls/containers/chip/Chip";
import EmptyCont from "../../controls/containers/empty/EmptyCont";
import EmptyContTitle from "../../controls/containers/empty/EmptyContTitle";
import EmptyContSubtitle from "../../controls/containers/empty/EmptyContSubtitle";
import EmptyContIcon from "../../controls/containers/empty/EmptyContIcon";
import EmptyContControls from "../../controls/containers/empty/EmptyContControls";
import Panel from "../../controls/containers/panel/Panel";
import OffCanvas from "../../controls/containers/offcanvas/OffCanvas";
import OffCanvasContent from "../../controls/containers/offcanvas/OffCanvasContent";
import OffCanvasSidebar from "../../controls/containers/offcanvas/OffCanvasSidebar";
import Tile from "../../controls/containers/tiles/Tile";
import TileSubtitle from "../../controls/containers/tiles/TileSubtitle";
import TileTitle from "../../controls/containers/tiles/TileTitle";
import Timeline from "../../controls/containers/timeline/Timeline";
import TimelineContent from "../../controls/containers/timeline/TimelineContent";
import TimelineIcon from "../../controls/containers/timeline/TimelineIcon";
import TimelineLeft from "../../controls/containers/timeline/TimelineLeft";
import TileContent from "../../controls/containers/tiles/TileContent";
import TileIcon from "../../controls/containers/tiles/TileIcon";
import TileAction from "../../controls/containers/tiles/TileAction";
import TimelineItem from "../../controls/containers/timeline/TimelineItem";
import PanelHeader from "../../controls/containers/panel/PanelHeader";
import PanelTitle from "../../controls/containers/panel/PanelTitle";
import PanelBody from "../../controls/containers/panel/PanelBody";
import PanelNav from "../../controls/containers/panel/PanelNav";
import PanelFooter from "../../controls/containers/panel/PanelFooter";
import CardHeader from "../../controls/containers/card/CardHeader";

let Containers=()=>{
  return <>
    <h1>Containers</h1>
    <h2>Card</h2>
    <p>
      <Card>
        <CardImage>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Oryctolagus_cuniculus_Rcdo.jpg/220px-Oryctolagus_cuniculus_Rcdo.jpg" />
        </CardImage>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardSubtitle>Card Subtitle</CardSubtitle>
        </CardHeader>
        <CardBody>Card Body</CardBody>
        <CardFooter>Card Footer</CardFooter>
      </Card>
    </p>
    <hr/>

    <h2>Chip</h2>
    <p>
      <Chip>
        <img src="img/avatar-1.png"
             className="avatar avatar-sm" />
        Chip Item 1
        <a href="#"
           className="btn btn-clear"
           aria-label="Close"
           role="button" />
      </Chip>
    </p>
    <hr/>

    <h2>Empty State Container</h2>
    <p>
      <EmptyCont>
        <EmptyContIcon>Container Icon</EmptyContIcon>
        <EmptyContTitle>Container Title</EmptyContTitle>
        <EmptyContSubtitle>Container Subtitle</EmptyContSubtitle>
        <EmptyContControls>Container Controls</EmptyContControls>
      </EmptyCont>
    </p>
    <hr/>

    <h2>Panel</h2>
    <p>
      <Panel>
        <PanelHeader><PanelTitle>Panel Title</PanelTitle></PanelHeader>
        <PanelBody>Panel Body</PanelBody>
        <PanelNav>Panel Navigation</PanelNav>
        <PanelFooter>Panel Footer</PanelFooter>
      </Panel>
    </p>
    <hr/>

    <h2>Off-Canvas</h2>
    <p>
      <OffCanvas>
        <OffCanvasSidebar>Off-canvas Sidebar</OffCanvasSidebar>
        <OffCanvasContent>Off-canvas Content</OffCanvasContent>
      </OffCanvas>
    </p>
    <hr/>

    <h2>Tile</h2>
    <p>
      <Tile>
        <TileIcon>Tile Icon</TileIcon>
        <TileTitle>Tile Title</TileTitle>
        <TileSubtitle>Tile Subtitle</TileSubtitle>
        <TileContent>Tile Content</TileContent>
        <TileAction>Tile Action</TileAction>
      </Tile>
    </p>
    <hr/>

    <h2>Timeline</h2>
    <p>
      <Timeline>
        <TimelineItem>
          <TimelineLeft><TimelineIcon>Timeline Icon 1</TimelineIcon></TimelineLeft>
          <TimelineContent>
            Timeline Content 1
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineLeft><TimelineIcon>Timeline Icon 2</TimelineIcon></TimelineLeft>
          <TimelineContent>
            Timeline Content 2
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </p>
  </>
}

export default Containers;
