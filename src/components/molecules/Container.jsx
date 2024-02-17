import ContainerTitle from "@components/atoms/ContainerTitle";
import styled from "styled-components";

const Container = ({ title, children, width, height, paddingX, paddingY }) => {
  return (
    <StyledContainer>
      {title && <ContainerTitle title={title} />}
      {children}
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "auto"};
  padding: ${(props) => props.paddingY || "12px"} ${(props) => props.paddingX || "16px"};
  box-sizing: border-box;
  border: 1px solid ${(props) => props.theme.colors.lightGray};
  border-radius: 10px;
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export default Container;
