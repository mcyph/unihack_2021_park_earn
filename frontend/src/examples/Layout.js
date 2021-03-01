import FlexCol from "../controls/containers/flexbox/FlexCol";
import FlexRow from "../controls/containers/flexbox/FlexRow";
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
        <FlexRow singleLine={true}>
          <FlexCol defaultSize={3}>
            <div style={{ background: "lightgreen" }}>
              Flex Row 1 3/12ths
            </div>
          </FlexCol>
          <FlexCol defaultSize={2}>
            <div style={{ background: "lightblue" }}>
              Flex Row 1 2/12ths
            </div>
          </FlexCol>
          <FlexCol defaultSize={6}>
            <div style={{ background: "lightsalmon" }}>
              Flex Row 1 6/12ths
            </div>
          </FlexCol>
        </FlexRow>
        <FlexRow singleLine={true}>
          <FlexCol defaultSize={6}>
            <div style={{ background: "lightsalmon" }}>
              Flex Row 2 6/12ths
            </div>
          </FlexCol>
          <FlexCol defaultSize={2}>
            <div style={{ background: "lightblue" }}>
              Flex Row 2 2/12ths
            </div>
          </FlexCol>
          <FlexCol defaultSize={3}>
            <div style={{ background: "lightgreen" }}>
              Flex Row 2 3/12ths
            </div>
          </FlexCol>
        </FlexRow>
        <FlexRow singleLine={false}>
          <FlexCol defaultSize={6}>
            <div style={{ background: "lightblue" }}>
              Flex Row 3 6/12ths
            </div>
          </FlexCol>
          <FlexCol defaultSize={6}>
            <div style={{ background: "lightblue" }}>
              Flex Row 3 6/12ths
            </div>
          </FlexCol>
          <FlexCol defaultSize={3}>
            <div style={{ background: "lightblue" }}>
              Flex Row 3 6/12ths
            </div>
          </FlexCol>
        </FlexRow>
      </FlexContainer>
    </p>
  </>;
}

export default Layout;
