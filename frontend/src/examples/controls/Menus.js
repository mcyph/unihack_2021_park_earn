import Menu from "../../controls/menus/Menu";
import MenuBadge from "../../controls/menus/MenuBadge";
import MenuDivider from "../../controls/menus/MenuDivider";
import MenuItem from "../../controls/menus/MenuItem";

let Menus=()=>{
  return <>
    <Menu>
      <MenuDivider text="Menu Divider 1"  />
      <MenuItem>Menu Item 1</MenuItem>
      <MenuItem>Menu Item 2<MenuBadge>Badge</MenuBadge></MenuItem>
      <MenuDivider text="Menu Divider 2"  />
      <MenuItem>Menu Item 3</MenuItem>
    </Menu>
  </>
}

export default Menus;
