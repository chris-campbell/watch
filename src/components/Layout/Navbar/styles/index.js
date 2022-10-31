import Wrapper from "./Wrapper";
import Logo from "./Logo";
import PrimaryNav from "./PrimaryNav";
import WatchList from "./WatchList";
import WatchCount from "./WatchCount";
import Dropdown from "./Dropdown";
import Avatar from "./Avatar";
import DropdownMenu from "./DropdownMenu";
import MenuOption from "./MenuOption";

import styled from "styled-components";

const Navbar = styled.nav`
  width: 100%;
  padding: 1.5rem 1rem;
  background-color: ${({ theme }) => theme.colors.theaterBlue};
`;

Navbar.Wrapper = Wrapper;
Navbar.Logo = Logo;
Navbar.PrimaryNav = PrimaryNav;
Navbar.WatchList = WatchList;
Navbar.WatchCount = WatchCount;
Navbar.Dropdown = Dropdown;
Navbar.Avatar = Avatar;
Navbar.DropdownMenu = DropdownMenu;
Navbar.MenuOption = MenuOption;

export default Navbar;
