import { useContext } from "react";
import { GridHeroes } from "../components/Heroes/GridHeroes";
import { StatisticsHeroesTeam } from "../components/Heroes/StatisticsHeroesTeam";
import { HeroesContext } from "../context/HeroesContext";

export const HeroesTeam = () => {
  const { heroesTeam, getTeamCategory } = useContext(HeroesContext);
  const teamCategory = getTeamCategory();
  return (
    <>
      <h1>Your Heroes Team</h1>
      {heroesTeam?.length >= 1 && (
        <h4 className="team-category my-3">
          Team category: <span className={teamCategory}>{teamCategory}</span>
        </h4>
      )}
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
    </>
  );
};
