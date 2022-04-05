import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { gql } from "@apollo/client";
import { css } from "@emotion/react";

import { client } from "../lib/apollo-client";
import { HomeProps, Pokemon } from "../lib/interfaces";
import { COLORS } from "../lib/colors";

const mainContainerStyle = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

// margin: 10px;
// border-radius: 10px;
// box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
// transition: all 0.2s ease-in-out;
// display: flex;
// flex-direction: column;
// justify-content: space-between;
// align-items: center;
// cursor: pointer;
const figureStyle = css`
  background-color: ${COLORS.grey_100};
  height: 200px;
  width: 200px;
`;

const Home: NextPage<HomeProps> = (props) => {
  return (
    <div>
      <Head>
        <title>Pokedex</title>
        <meta name="description" content="Pokedex app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main css={mainContainerStyle}>
        {props.pokemons.map((pokemon: Pokemon) => (
          <div key={pokemon.id}>
            <figure css={figureStyle}>
              <Image
                src={pokemon.artwork}
                width={200}
                height={200}
                alt={pokemon.name}
              />
            </figure>
            {pokemon.name}
          </div>
        ))}
      </main>
    </div>
  );
};

export async function getStaticProps(): Promise<{ props: HomeProps }> {
  const { data } = await client.query({
    query: gql`
      query pokemons {
        pokemons(limit: 50, offset: 0) {
          results {
            id
            url
            name
            image
            artwork
            dreamworld
          }
        }
      }
    `,
  });

  return {
    props: {
      pokemons: data.pokemons.results,
    },
  };
}

export default Home;
