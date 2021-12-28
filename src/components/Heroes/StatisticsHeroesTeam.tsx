import { PhysicalStatistics } from "./PhysicalStatistics";
import { PowerStatistics } from "./PowerStatistics";

export const StatisticsHeroesTeam = () => {
  return (
    <div className="statistics-heroes-container">
      <h2>Statistics of your team</h2>
      <div className="statistics-heroes">
        <PowerStatistics />
        <PhysicalStatistics />
      </div>
    </div>
  );
};
