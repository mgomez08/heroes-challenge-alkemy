import { Hero } from "../../types/types";
import { HeroCard } from "./HeroCard";

interface Props {
  heroes: Hero[];
  mode: string;
}

export const GridHeroes: React.FC<Props> = ({ heroes, mode }) => {
  return (
    <div
      className={`grid-heroes-container ${
        mode === "team" ? "grid-team" : "scrolleable-grid-team"
      }`}
    >
      {heroes.map((hero: Hero) => (
        <HeroCard key={hero.id} heroItem={hero} mode={mode}>
          {hero.name}
        </HeroCard>
      ))}
    </div>
  );
};
