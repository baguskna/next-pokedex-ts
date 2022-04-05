import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { gql } from "@apollo/client";
import { css } from "@emotion/react";

import { client } from "../lib/apollo-client";
import { HomeProps, Pokemon } from "../lib/interfaces";

const mainContainerStyle = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
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
            <Image
              src={pokemon.artwork}
              width={200}
              height={200}
              alt={pokemon.name}
            />
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
