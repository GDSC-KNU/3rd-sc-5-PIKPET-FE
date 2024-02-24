import { useNavigate } from "react-router";

import Icon from "@components/atoms/Icon";
import Img from "@components/atoms/Img";

import styled from "styled-components";
import {
  ContainerIncludingImg,
  InnerContainerIncludingImg1,
  ContainerNameAndIcon,
} from "@styles/Container";
import Text from "@styles/Text";

const PetInfo = ({ petId, img, interested, breed, age, gender, shelterName, onClick }) => {
  return (
    <ContainerIncludingImg flexDirection="row" onClick={onClick}>
      <Img src={img} size="Middle" />
      <InnerContainerIncludingImg1 justifyContent="space-between">
        <StyledPetInfo_1_1>
          <ContainerNameAndIcon>
            <Text fontWeight="700">PETID-{petId}</Text>
            <Icon src={interested ? "IconHeartSelected" : "IconHeartOff"} />
          </ContainerNameAndIcon>
          <Text fontSize="14px">{breed}</Text>
          <Text fontSize="14px">
            {age} year(s) old, {gender}
          </Text>
        </StyledPetInfo_1_1>
        <StyledShelter>
          <Icon src="IconPinLocation" width="14px" height="14px" />
          <Text fontSize="12px" color={(props) => props.theme.colors.gray}>
            {shelterName}
          </Text>
        </StyledShelter>
      </InnerContainerIncludingImg1>
    </ContainerIncludingImg>
  );
};

const StyledPetInfo_1_1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  box-sizing: border-box;
`;

const StyledShelter = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 4px;
`;

export default PetInfo;
export { StyledShelter };
