import styled from "styled-components";

// src 필수
// size: Small / Middle / Big
const Img = ({
  src,
  size,
  width,
  height,
  border,
  borderRadius,
  margin,
  boxShadow,
  backgroundColor,
}) => {
  if (src === undefined) throw new Error("src prop is necessary.");

  if (size === undefined)
    return (
      <StyledImg
        src={src}
        width={width}
        height={height}
        border={border}
        borderRadius={borderRadius || "0"}
        margin={margin}
        boxShadow={boxShadow}
        backgroundColor={backgroundColor}
      />
    );
  else if (size === "Small")
    return (
      <StyledImg
        src={src}
        width="100px"
        height="125px"
        border={border}
        borderRadius={borderRadius}
        margin={margin}
        boxShadow={boxShadow}
        backgroundColor={backgroundColor}
      />
    );
  else if (size === "Middle")
    return (
      <StyledImg
        src={src}
        width="112px"
        height="140px"
        border={border}
        borderRadius={borderRadius}
        margin={margin}
        boxShadow={boxShadow}
        backgroundColor={backgroundColor}
      />
    );
  else if (size === "Big")
    return (
      <StyledImg
        src={src}
        width={width}
        height={height}
        border={border}
        borderRadius={borderRadius}
        margin={margin}
        boxShadow={boxShadow}
        backgroundColor={backgroundColor}
      />
    );
  else throw new Error("Undefined size of Img component.");
};

// const StyledImgContainer = styled.div`
//   // width: 100%;
//   // height: 125%;
// `;

const StyledImg = styled.img`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "125%"};
  object-fit: cover;
  border: 1px solid ${(props) => props.borderColor || props.theme.colors.lightGray};
  border-radius: ${(props) => props.borderRadius || "10px"};
  margin: ${(props) => props.margin || "0"};
  box-shadow: ${(props) => props.boxShadow || "none"};
  background-color: ${(props) => props.backgroundColor || props.theme.colors.extraLightGray};
`;

const ImgGroup = styled.div`
  padding: 0 16px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 12px;
  overflow-x: scroll;
`;

export default Img;
export { ImgGroup };
