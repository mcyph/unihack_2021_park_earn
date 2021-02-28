import FlexColumn from "../controls/containers/flexbox/FlexColumn";
import FlexColumns from "../controls/containers/flexbox/FlexColumns";
import FlexContainer from "../controls/containers/flexbox/FlexContainer";
import EmailLogin from "../landing/login/EmailLogin";
import Navbar from "../controls/navigation/navbar/Navbar";
import NavbarBrand from "../controls/navigation/navbar/NavbarBrand";
import NavbarLink from "../controls/navigation/navbar/NavbarLink";
import NavbarSection from "../controls/navigation/navbar/NavbarSection";
import Visibility from "../controls/utilities/Visibility";
import Hero from "../landing/Hero";

let layout=()=>{
  return <>
    <FlexContainer>
      <FlexColumns>
        <FlexColumn></FlexColumn>
      </FlexColumns>
    </FlexContainer>

    <EmailLogin></EmailLogin>

    <Navbar>
      <NavbarBrand></NavbarBrand>
      <NavbarLink></NavbarLink>
      <NavbarSection></NavbarSection>
    </Navbar>

    <Hero>

    </Hero>
  </>;
}

export default layout;
