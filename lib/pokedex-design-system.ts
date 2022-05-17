import styled from "@emotion/styled";
import { COLORS } from "./colors";

export const H6 = styled.h6`
  color: ${COLORS.grey_500};
  font-size: 23px;
  font-weight: 400;
  line-height: 29px;
  text-transform: capitalize;
`;

export const H2 = styled.h2`
  color: ${COLORS.grey_700};
  font-size: 28px;
  font-weight: 400;
  line-height: 28px;
  text-transform: capitalize;
`;

type ButtonTypeProps = {
  pokemonType: string;
};

export const BUTTON_TYPE = styled.button`
  align-items: center;
  background-color: ${(props: ButtonTypeProps) => {
    console.log(props.pokemonType);
    if (props.pokemonType === "water") {
      return COLORS.blue_0;
    }

    if (props.pokemonType === "bug") {
      return COLORS.green_0;
    }

    return COLORS.normal_0;
  }};
  border: none;
  border-radius: 3px;
  color: ${COLORS.grey_0};
  display: flex;
  justify-content: center;
  padding: 6px 20px;
`;
