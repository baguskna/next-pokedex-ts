import { NextPage } from "next";
import { css } from "@emotion/react";

import { H2 } from "../lib/pokedex-design-system";

const headerStyle = css`
  align-items: center;
  display: flex;
  justify-content: space-between;
  left: 50%;
  max-width: 960px;
  padding: 20px;
  position: fixed;
  transform: translateX(-50%);
  width: 100%;
  z-index: 9;
`;

const Header: NextPage = () => {
  return (
    <header css={headerStyle}>
      <H2>Pokemon</H2>
    </header>
  );
};

export default Header;
