import styled from "styled-components";

const Input = ({
  type,
  placeholder,
  width,
  paddingX,
  paddingY,
  fontSize,
  borderRadius,
  // backgroundColor,
  ...rest
}) => {
  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      width={width}
      paddingX={paddingX}
      paddingY={paddingY}
      fontSize={fontSize}
      borderRadius={borderRadius}
      // backgroundColor={backgroundColor}
      {...rest}
    ></StyledInput>
  );
};

const StyledInput = styled.input`
  width: ${(props) => props.width || "100%"};
  padding: ${(props) => props.paddingY || "12px"} ${(props) => props.paddingX || "16px"};
  box-sizing: border-box;
  font-size: ${(props) => props.fontSize || "14px"};
  border-radius: ${(props) => props.borderRadius || "10px"};
  border: ${(props) => props.border || `1px solid ${(props) => props.theme.colors.lightGray}`};
  // background-color: ${(props) => props.backgroundColor || "white"};
  outline: none;

  &:focus {
    border-color: ${(props) => props.theme.colors.primary};
  }
`;

export default Input;
