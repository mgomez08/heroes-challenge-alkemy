import { HeroesTeam } from "./HeroesTeam";
import { SearchHeroes } from "./SearchHeroes";

export const Home = () => {
  return (
    <main className="text-center mt-3 px-3">
      <SearchHeroes />
      <HeroesTeam />
    </main>
  );
};
