import { useState } from "react";
import { GridHeroes } from "../components/Heroes/GridHeroes";
import { InputSearchHeroes } from "../components/Heroes/InputSearchHeroes";
import { Hero } from "../types/types";

export const SearchHeroes = () => {
  const [heroesSearched, setHeroesSearched] = useState<Hero[]>([]);
  return (
    <>
      <h1>¡Find heroes for your team!</h1>
      <div className="mb-5 search-heroes-container">
        <InputSearchHeroes setHeroesSearched={setHeroesSearched} />
        {heroesSearched.length > 0 ? (
          <GridHeroes heroes={heroesSearched} mode="search" />
        ) : (
          <h2>No results found</h2>
        )}
      </div>
    </>
  );
};
