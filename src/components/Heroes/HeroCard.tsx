import { useContext } from "react";
import { HeroesContext } from "../../context/HeroesContext";
import { UiContext } from "../../context/UiContext";
import { Hero, PowerStats } from "../../types/types";
import { StatItem } from "./StatItem";

interface Props {
  key: string;
  heroItem: Hero;
  mode: string;
}

export const HeroCard: React.FC<Props> = ({ heroItem, mode }) => {
  const { addHeroToTeam, deleteHeroFromTeam } = useContext(HeroesContext);
  const { handleOpenNotification, handleOpenModal } = useContext(UiContext);

  const handleAddHero = () => {
    const check = addHeroToTeam(heroItem);
    if (check.ok) {
      handleOpenNotification(check.msg, "success");
    } else {
      handleOpenNotification(check.msg, "danger");
    }
  };
  const handleRemoveHero = () => {
    const check = deleteHeroFromTeam(heroItem.id);
    if (check.ok) {
      handleOpenNotification(check.msg, "success");
    } else {
      handleOpenNotification(check.msg, "danger");
    }
  };
  return (
    <div className="card hero-card">
      <div className="card-body">
        <h5 className="card-title">{heroItem.name}</h5>
      </div>
      <img
        src={heroItem.image.url}
        className="card-img-top hero-img"
        alt={`Image of ${heroItem.name}`}
      />
      {mode === "team" ? <ListStats stats={heroItem.powerstats} /> : null}
      <div className="card-body">
        {mode === "search" ? (
          <button className="btn btn-primary" onClick={handleAddHero}>
            Add to your team
          </button>
        ) : (
          <>
            <button className="btn btn-danger mb-2" onClick={handleRemoveHero}>
              Remove of your team
            </button>
            <button
              className="btn btn-info"
              onClick={() => handleOpenModal(heroItem)}
            >
              More details
            </button>
          </>
        )}
      </div>
    </div>
  );
};

interface PropsListStats {
  stats: PowerStats;
}
const ListStats: React.FC<PropsListStats> = (stats) => {
  let statsArray: [string, {}][] = Object.entries(stats).flat();
  statsArray = Object.entries(statsArray[1]);
  return (
    <div className="card-body">
      <h5>Stats</h5>
      {statsArray.map(([name, value], i: number) => {
        return <StatItem key={i} value={value} name={name} />;
      })}
    </div>
  );
};
