import { useNavigate } from "react-router";
import { useCurrentPageStore } from "@store";

import NavTab from "@components/molecules/NavTab";
import styled from "styled-components";

const NavBar = () => {
  const { currentPage } = useCurrentPageStore();
  const navigate = useNavigate();

  return (
    <StyledNavBar>
      <NavTab
        type="Home"
        selected={currentPage === "/" ? true : false}
        // onClick={navigate("/")}
      />
      <NavTab
        type="Search"
        selected={currentPage === "/search" ? true : false}
        // onClick={navigate("/search")}
      />
      <NavTab
        type="User"
        selected={currentPage === "/mypage" ? true : false}
        // onClick={navigate("/mypage")}
      />
    </StyledNavBar>
  );
};

const StyledNavBar = styled.div`
  width: 100%;
  height: auto;
  display: flex;

  position: sticky;
  bottom: 0;
  z-index: 1000;
`;

export default NavBar;
