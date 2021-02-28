import Breadcrumbs from "../../controls/navigation/breadcrumbs/Breadcrumbs";
import BreadcrumbItem from "../../controls/navigation/breadcrumbs/BreadcrumbItem";
import Navbar from "../../controls/navigation/navbar/Navbar";
import NavbarBrand from "../../controls/navigation/navbar/NavbarBrand";
import NavbarLink from "../../controls/navigation/navbar/NavbarLink";
import NavbarSection from "../../controls/navigation/navbar/NavbarSection";

let Navigation=()=>{
  return <>
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

    <h3>Navigation Bar</h3>
    <Navbar>
      <NavbarBrand>Navbar Brand</NavbarBrand>
      <NavbarLink>Navbar Link</NavbarLink>
      <NavbarSection>Navbar Section</NavbarSection>
    </Navbar>
  </>;
}

export default Navigation;
