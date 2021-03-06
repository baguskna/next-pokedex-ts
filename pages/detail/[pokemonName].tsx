import { NextPage } from "next";
import { gql } from "@apollo/client";
import Image from "next/image";
import { css } from "@emotion/react";
import { PropsWithChildren } from "react";

import { client } from "../../lib/apollo-client";
import { PokemonProps } from "../../lib/interfaces";
import { BUTTON_TYPE, H2 } from "../../lib/pokedex-design-system";

const detailContainer = css`
  max-width: 904px;
  margin: 0 auto;
  padding-top: 90px;
`;

const DetailPage: NextPage<PokemonProps> = (
  props: PropsWithChildren<PokemonProps>
) => {
  const { name, sprites, types, weight } = props.pokemon;

  const typesPokemon: () => JSX.Element = () => {
    const color = types[0].type.name;
    return <BUTTON_TYPE pokemonType={color}>{types[0].type.name}</BUTTON_TYPE>;
  };

  return (
    <div css={detailContainer}>
      <H2>{name}</H2>
      <Image src={sprites.front_default} width={175} height={175} alt={name} />
      <p>Weight: {weight}</p>
      Type: {typesPokemon()}
    </div>
  );
};

export async function getStaticPaths(): Promise<{
  paths: never[];
  fallback: string | boolean;
}> {
  return {
    paths: [],
    fallback: "blocking",
  };
}

export async function getStaticProps(
  context: any
): Promise<{ props: PokemonProps }> {
  const { pokemonName } = context.params;
  const { data } = await client.query({
    query: gql`
      query pokemons {
        pokemon(name: "${pokemonName}") {
          abilities {
            ability {
              name
            }
          }
          forms {
            id
            name
            url
          }
          name
          sprites {
            front_default
          }
          types {
            type {
              id
              url
              name
            }
          }
          weight
          message
        }
      }
    `,
  });

  return {
    props: data,
  };
}

export default DetailPage;
