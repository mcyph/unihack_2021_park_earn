import FlexColumn from "../controls/containers/flexbox/FlexColumn";
import FlexColumns from "../controls/containers/flexbox/FlexColumns";
import FlexContainer from "../controls/containers/flexbox/FlexContainer";
import EmailLogin from "../landing/login/EmailLogin";
import Navbar from "../controls/navigation/navbar/Navbar";
import NavbarBrand from "../controls/navigation/navbar/NavbarBrand";
import NavbarLink from "../controls/navigation/navbar/NavbarLink";
import NavbarSection from "../controls/navigation/navbar/NavbarSection";
import Visibility from "../controls/utilities/Visibility";
import Hero from "../controls/containers/Hero";

let Layout=()=>{
  return <>
    <h2>Layout</h2>
    <h3>Flex Container</h3>
    <p>
      <FlexContainer style={{ border: "2px solid lightgray" }}>
        <FlexColumns singleLine={true}>
          <FlexColumn defaultSize={3}>
            <div style={{ background: "lightgreen" }}>
              Flex Row 1 3/12ths
            </div>
          </FlexColumn>
          <FlexColumn defaultSize={2}>
            <div style={{ background: "lightblue" }}>
              Flex Row 1 2/12ths
            </div>
          </FlexColumn>
          <FlexColumn defaultSize={6}>
            <div style={{ background: "lightsalmon" }}>
              Flex Row 1 6/12ths
            </div>
          </FlexColumn>
        </FlexColumns>
        <FlexColumns singleLine={true}>
          <FlexColumn defaultSize={6}>
            <div style={{ background: "lightsalmon" }}>
              Flex Row 2 6/12ths
            </div>
          </FlexColumn>
          <FlexColumn defaultSize={2}>
            <div style={{ background: "lightblue" }}>
              Flex Row 2 2/12ths
            </div>
          </FlexColumn>
          <FlexColumn defaultSize={3}>
            <div style={{ background: "lightgreen" }}>
              Flex Row 2 3/12ths
            </div>
          </FlexColumn>
        </FlexColumns>
        <FlexColumns singleLine={false}>
          <FlexColumn defaultSize={6}>
            <div style={{ background: "lightblue" }}>
              Flex Row 3 6/12ths
            </div>
          </FlexColumn>
          <FlexColumn defaultSize={6}>
            <div style={{ background: "lightblue" }}>
              Flex Row 3 6/12ths
            </div>
          </FlexColumn>
          <FlexColumn defaultSize={3}>
            <div style={{ background: "lightblue" }}>
              Flex Row 3 6/12ths
            </div>
          </FlexColumn>
        </FlexColumns>
      </FlexContainer>
    </p>
  </>;
}

export default Layout;
