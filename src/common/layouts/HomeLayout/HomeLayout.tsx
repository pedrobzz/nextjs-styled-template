/* eslint-disable @typescript-eslint/no-unused-vars */

import { useMediaQuery, useViewportSize } from "@mantine/hooks";
import React from "react";
import Navbar from "../../components/Navbar";

import { Container, FullSizeContainer } from "./styles";

const HomeLayout: React.FC = ({ children }): JSX.Element => {
  const { width } = useViewportSize();
  return (
    <Container desktop={width > 900}>
      <h1>Width: {width}</h1>
      <Navbar isDesktop={width > 900} />
      <FullSizeContainer>{children}</FullSizeContainer>
    </Container>
  );
};

export { HomeLayout };
