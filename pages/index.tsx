import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { gql } from "@apollo/client";
import { css } from "@emotion/react";

import { client } from "../lib/apollo-client";
import { HomeProps, Pokemon } from "../lib/interfaces";
import { COLORS } from "../lib/colors";
import { H6 } from "../lib/pokedex-design-system";

const mainContainerStyle = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 0 auto;
  max-width: 960px;
  padding-top: 50px;
`;

const figureStyle = css`
  align-items: center;
  background-color: ${COLORS.grey_100};
  border-radius: 5px;
  display: flex;
  height: 200px;
  justify-content: center;
  width: 200px;
`;

const cardStyle = css`
  margin: 0 3px 17px;
`;

const titleStyle = css`
  text-align: center;
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
          <article css={cardStyle} key={pokemon.id}>
            <figure css={figureStyle}>
              <Image
                src={pokemon.artwork}
                width={175}
                height={175}
                alt={pokemon.name}
              />
            </figure>
            <H6 css={titleStyle}>{pokemon.name}</H6>
          </article>
        ))}
      </main>
    </div>
  );
};

export async function getStaticProps(): Promise<{ props: HomeProps }> {
  const { data } = await client.query({
    query: gql`
      query pokemons {
        pokemons(limit: 1000, offset: 0) {
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
