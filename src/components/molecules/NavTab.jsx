import { useLoggedinStore } from "@store";

import Icon from "@components/atoms/Icon";

import styled from "styled-components";
import Text from "@styles/Text";
import {} from "../../store/store";

const NavTab = ({ type, selected }) => {
  const isLoggedin = localStorage.getItem("localIsLoggedin"); // get isLoggedIn from local storage
  // 상태 관리 값으로 가져오니 안 먹음
  // const { isLoggedin } = useLoggedinStore();

  return (
    <>
      {type === "Home" && (
        <StyledNavTab selected={selected} href="/">
          <Icon src={selected ? "IconHomeSelected" : "IconHomeMono"} />
          <Text
            color={(props) =>
              selected ? props.theme.colors.primary : props.theme.colors.gray
            }
            fontSize="12px"
          >
            Home
          </Text>
        </StyledNavTab>
      )}
      {type === "Search" && (
        <StyledNavTab selected={selected} href="/search">
          <Icon src={selected ? "IconSearchSelected" : "IconSearchMono"} />
          <Text
            color={(props) =>
              selected ? props.theme.colors.primary : props.theme.colors.gray
            }
            fontSize="12px"
          >
            Search
          </Text>
        </StyledNavTab>
      )}
      {type === "User" && (
        <StyledNavTab selected={selected} href={isLoggedin ? "/mypage" : "/login"}>
          <Icon src={selected ? "IconUserSelected" : "IconUserMono"} />
          <Text
            color={(props) =>
              selected ? props.theme.colors.primary : props.theme.colors.gray
            }
            fontSize="12px"
          >
            {isLoggedin ? "My page" : "Log in"}
          </Text>
        </StyledNavTab>
      )}
    </>
  );
};

const StyledNavTab = styled.a`
  width: calc(100% / 3);
  height: 72px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  gap: 4px;
  border-top: ${(props) =>
    props.selected ? `2px solid ${props.theme.colors.primary}` : "none"};
  box-sizing: border-box;
  background-color: white;
  cursor: pointer;
`;

export default NavTab;
