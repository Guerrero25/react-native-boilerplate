import styled from "styled-components/native";
import { DefaultTheme } from "styled-components";

interface TextProps {
  type?: "default" | keyof DefaultTheme["colors"];
  align?: "center" | "left" | "right";
  size?: keyof DefaultTheme["fontSizes"];
}

const Text = styled.Text<TextProps>`
  color: ${({ theme, type = "default" }) =>
    type === "default" ? theme.colors.text : theme.colors[type]};
  text-align: ${({ align = "center" }) => align};
  font-size: ${({ theme, size = "default" }) => theme.fontSizes[size]};
`;

export default Text;
