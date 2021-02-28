import FlexColumn from "../layout/flexbox/FlexColumn";
import FlexColumns from "../layout/flexbox/FlexColumns";
import FlexContainer from "../layout/flexbox/FlexContainer";
import EmailLogin from "../layout/login/EmailLogin";
import Navbar from "../layout/navbar/Navbar";
import NavbarBrand from "../layout/navbar/NavbarBrand";
import NavbarLink from "../layout/navbar/NavbarLink";
import NavbarSection from "../layout/navbar/NavbarSection";
import Visibility from "../layout/responsive/Visibility";
import Hero from "../layout/Hero";

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
