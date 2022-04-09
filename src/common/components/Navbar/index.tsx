/* eslint-disable @typescript-eslint/no-unused-vars */

import { useMediaQuery } from "@mantine/hooks";
import React from "react";
import DesktopNav from "./Desktop";
/* import { Container } from "./styles"; */

const Navbar: React.FC<{ isDesktop: boolean }> = ({
  isDesktop,
}): JSX.Element => {
  return <>{isDesktop ? <DesktopNav /> : <h1>MobileNav</h1>}</>;
};

export default Navbar;
