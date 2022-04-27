import { NextPage } from "next";
import { css } from "@emotion/react";

import { H2 } from "../lib/pokedex-design-system";
import { COLORS } from "../lib/colors";

const headerStyle = css`
  align-items: center;
  background-color: ${COLORS.grey_0};
  box-shadow: 0 4px 24px -4px #00000012;
  display: flex;
  justify-content: space-between;
  left: 50%;
  padding: 20px;
  position: fixed;
  transform: translateX(-50%);
  width: 100%;
  z-index: 9;
`;

const headerWrapper = css`
  margin: 0 auto;
  max-width: 904px;
  width: 100%;
`;

const Header: NextPage = () => {
  return (
    <header css={headerStyle}>
      <div css={headerWrapper}>
        <H2>Pokemon</H2>
      </div>
    </header>
  );
};

export default Header;
