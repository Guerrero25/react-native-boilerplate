import * as React from "react";
import styled from "styled-components/native";

export interface LayoutProps {
  children: React.ReactNode;
}

const LayoutContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

function Layout({ children }: LayoutProps) {
  return <LayoutContainer>{children}</LayoutContainer>;
}

export default Layout;
