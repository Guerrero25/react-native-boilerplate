import * as React from "react";
import { StyleProp, TouchableOpacityProps, ViewStyle } from "react-native";
import styled from "styled-components/native";
/* Components */
import Text from "../Text";

interface ButtonContainerProps {
  ghost?: boolean;
  block?: boolean;
}

type ButtonProps = TouchableOpacityProps &
  ButtonContainerProps & {
    children?: string;
    style?: StyleProp<ViewStyle>;
  };

const ButtonContainer = styled.TouchableOpacity<ButtonContainerProps>`
  padding: 5px 10px;
  border: 1px solid ${({ theme }) => theme.colors.action};
  color: ${({ theme }) => theme.colors.action};
  background-color: ${({ ghost, theme }) =>
    ghost ? "transparent" : theme.colors.action};
  border-radius: ${({ theme }) => theme.borderRadius};
  width: ${({ block }) => (block ? "100%" : "auto")};
  text-align: center;
`;

function Button({ ghost, children, style, block, ...restProps }: ButtonProps) {
  return (
    <ButtonContainer style={style} ghost={ghost} block={block} {...restProps}>
      <Text type={ghost ? "action" : "secondary"}>{children}</Text>
    </ButtonContainer>
  );
}

export default Button;
