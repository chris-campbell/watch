import { useState } from "react";
import { imports } from "./index";

import Navbar from "./styles";

export default () => {
  const [toggle, setoggle] = useState(false);

  const toggleBar = () => {
    setoggle(!toggle);
  };

  return (
    <Navbar>
      <Navbar.Wrapper>
        <Navbar.Logo>WL</Navbar.Logo>

        <imports.IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={toggleBar}
        >
          <imports.Image src={imports.Search} width={20} height={20} />
        </imports.IconButton>

        <Navbar.PrimaryNav>
          <Navbar.WatchList>
            <a href="/movies/watch-list">Watch list</a>
            <Navbar.WatchCount>{3}</Navbar.WatchCount>
          </Navbar.WatchList>

          <Navbar.Dropdown>
            <Navbar.Avatar
              src={"https://via.placeholder.com/150/24f355"}
              width={50}
              height={50}
              alt="User Avatar"
            />
            <Navbar.DropdownMenu>
              <Navbar.MenuOption>Logout</Navbar.MenuOption>
              <Navbar.MenuOption>Clear List</Navbar.MenuOption>
            </Navbar.DropdownMenu>
          </Navbar.Dropdown>
        </Navbar.PrimaryNav>
      </Navbar.Wrapper>
    </Navbar>
  );
};
