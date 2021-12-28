import { useState } from "react";
import { GridHeroes } from "../components/Heroes/GridHeroes";
import { InputSearchHeroes } from "../components/Heroes/InputSearchHeroes";
import { Hero } from "../types/types";

export const SearchHeroes = () => {
  const [heroesSearched, setHeroesSearched] = useState<Hero[]>([]);
  return (
    <main className="mt-3 search-heroes-container">
      <h1>¡Find heroes for your team!</h1>
      <InputSearchHeroes setHeroesSearched={setHeroesSearched} />
      {heroesSearched.length > 0 ? (
        <GridHeroes heroes={heroesSearched} mode="search" />
      ) : (
        <h2>No results found</h2>
      )}
    </main>
  );
};
