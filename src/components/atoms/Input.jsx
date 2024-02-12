import styled from "styled-components";

const Input = ({
  type,
  placeholder,
  value,
  width,
  paddingX,
  paddingY,
  fontSize,
  border,
  borderRadius,
  backgroundColor,
  ...rest
}) => {
  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      value={value}
      width={width}
      paddingX={paddingX}
      paddingY={paddingY}
      fontSize={fontSize}
      border={border}
      borderRadius={borderRadius}
      backgroundColor={backgroundColor}
      {...rest}
    ></StyledInput>
  );
};

const StyledInput = styled.input`
  width: ${(props) => props.width || "100%"};
  padding: ${(props) => props.paddingY || "12px"} ${(props) => props.paddingX || "16px"};
  box-sizing: border-box;
  font-size: ${(props) => props.fontSize || "14px"};
  border: ${(props) => props.border || `1px solid ${props.theme.colors.lightGray}`};
  border-radius: ${(props) => props.borderRadius || "10px"};
  background-color: ${(props) => props.backgroundColor || "white"};
  outline: none;

  &:focus {
    border-color: ${(props) => props.theme.colors.primary};
  }
`;

export default Input;
