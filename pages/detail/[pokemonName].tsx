import { NextPage } from "next";
import { gql } from "@apollo/client";
import Image from "next/image";

import { client } from "../../lib/apollo-client";
import { PokemonDetail } from "../../lib/interfaces";

const DetailPage: NextPage<PokemonDetail> = (props) => {
  console.log(props);
  const { name, sprites } = props.pokemon;

  return (
    <div>
      <h1>{name}</h1>
      <Image src={sprites.front_default} width={175} height={175} alt={name} />
    </div>
  );
};

export async function getStaticPaths(): Promise<{
  paths: never[];
  fallback: string;
}> {
  return {
    paths: [],
    fallback: "blocking",
  };
}

export async function getStaticProps(
  context: any
): Promise<{ props: PokemonDetail }> {
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
