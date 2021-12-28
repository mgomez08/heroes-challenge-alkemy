import { useContext } from "react";
import { HeroesContext } from "../../context/HeroesContext";

export const PhysicalStatistics = () => {
  const { physicalTeam } = useContext(HeroesContext);
  return (
    <div className="physicalstats-container my-2">
      <h3>Physical statistics</h3>
      <div className="physicalstats">
        {Object.keys(physicalTeam).map((stat) => {
          return (
            <div key={stat} className="stat">
              <strong className="lead">{stat}</strong>
              <strong className="lead">{physicalTeam[stat]}</strong>
            </div>
          );
        })}
      </div>
    </div>
  );
};
