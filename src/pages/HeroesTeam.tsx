import { useContext } from "react";
import { GridHeroes } from "../components/Heroes/GridHeroes";
import { StatisticsHeroesTeam } from "../components/Heroes/StatisticsHeroesTeam";
import { HeroesContext } from "../context/HeroesContext";

export const HeroesTeam = () => {
  const { heroesTeam } = useContext(HeroesContext);
  return (
    <main className="text-center mt-3 px-3">
      <h1>Your Heroes Team</h1>
      <div className="heroes-team-container ">
        {heroesTeam?.length >= 1 ? (
          <>
            <GridHeroes heroes={heroesTeam} mode="team" />
            <StatisticsHeroesTeam />
          </>
        ) : (
          <h2>You have no heroes on your team</h2>
        )}
      </div>
    </main>
  );
};
