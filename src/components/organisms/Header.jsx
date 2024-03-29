import { useNavigate } from "react-router-dom";

import Icon, { IconGroup } from "@components/atoms/Icon";
import Logo from "@assets/logo-2.svg";

import styled from "styled-components";
import Text from "@styles/Text";

const Header = ({ type, title }) => {
  const navigate = useNavigate();

  const goBackward = () => {
    navigate(-1);
  };

  const handleClickHome = () => {
    navigate("/");
  };

  const handleClickSearch = () => {
    navigate("/search");
  };

  const handleClickHeart = () => {
    navigate("/interests");
  };

  const handleSaveApplication = () => {
    // alert("Your application has been saved.");
  };

  if (type === undefined) {
    throw new Error("type prop is necessary.");
  } else if (type === "Default") {
    return (
      <StyledHeader backgroundColor={(props) => props.theme.colors.background}>
        {/* <Text color={(props) => props.theme.colors.primary} fontSize="24px" fontWeight="700">
          PIKPET
        </Text> */}
        <img src={Logo} alt="Logo" style={{ width: "125px" }} />
      </StyledHeader>
    );
  } else if (type === "Widget") {
    return (
      <StyledHeader>
        <Icon src="IconBackward" onClick={goBackward} />
        <Text fontWeight="700">{title}</Text>
        <div style={{ width: "24px", height: "24px" }}></div>
      </StyledHeader>
    );
  } else if (type === "PetInfoDetail") {
    return (
      <StyledHeader>
        <Icon src="IconBackward" onClick={goBackward} />
        <IconGroup
          srcs={["IconHomeMono", "IconSearchMono", "IconHeartMono"]}
          onClicks={[handleClickHome, handleClickSearch, handleClickHeart]}
        />
      </StyledHeader>
    );
  } else if (type === "Mypage") {
    return (
      <StyledHeader>
        <Icon src="IconBackward" onClick={goBackward} />
        <Icon src="IconHeartMono" onClick={handleClickHeart} />
      </StyledHeader>
    );
  } else if (type === "Login") {
    return (
      <StyledHeader>
        <Icon src="IconBackward" onClick={goBackward} />
        <Icon src="IconHomeMono" onClick={handleClickHome} />
      </StyledHeader>
    );
  } else if (type === "Apply") {
    return (
      <StyledHeader>
        <Icon src="IconBackward" onClick={goBackward} />
        <Text fontWeight="700">{title}</Text>
        <Icon src="IconSave" onClick={handleSaveApplication} />
      </StyledHeader>
    );
  } else throw new Error("undefined type");
};

const StyledHeader = styled.div`
  width: 100%;
  height: 54px;
  display: flex;
  padding: 0 16px;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.backgroundColor || "white"};

  position: sticky;
  top: 0%;
  z-index: 1000;
`;

export default Header;
