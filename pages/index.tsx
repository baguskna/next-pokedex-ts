import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { gql, useQuery } from "@apollo/client";

import styles from "../styles/Home.module.css";
import { client } from "../lib/apollo-client";

interface Pokemon {
  artwork: string;
  dreamworld: string;
  id: number;
  image: string;
  name: string;
  url: string;
}

interface HomeProps {
  pokemons: Pokemon[];
}

const Home: NextPage<HomeProps> = (props) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pokedex</title>
        <meta name="description" content="Pokedex app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
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

export async function getStaticProps(): Promise<{
  props: {
    pokemons: Pokemon[];
  };
}> {
  const { data } = await client.query({
    query: gql`
      query pokemons {
        pokemons(limit: 100, offset: 0) {
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
