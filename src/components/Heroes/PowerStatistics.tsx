import { useContext } from "react";
import { HeroesContext } from "../../context/HeroesContext";

export const PowerStatistics = () => {
  const { powerStatsTeam } = useContext(HeroesContext);
  return (
    <div className="powerstats-container">
      <h3>Power statistics</h3>
      <div className="powerstats">
        {Object.keys(powerStatsTeam).map((stat) => {
          return (
            <div key={stat} className={`stat ${stat}`}>
              <strong className="lead">{stat}</strong>
              <strong className="lead">{powerStatsTeam[stat]}</strong>
            </div>
          );
        })}
      </div>
    </div>
  );
};
