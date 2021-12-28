import { createContext, useEffect, useState } from "react";
import {
  Hero,
  HeroesContextTypes,
  ProviderProps,
  objectResponseType,
  PowerStats,
  Physical,
} from "../types/types";

export const HeroesContext = createContext({} as HeroesContextTypes);

const initialStateHeroesTeam = () =>
  JSON.parse(window.localStorage.getItem("heroesTeam") as string) || [];

const initialStatePowerStatsTeam: PowerStats = {
  intelligence: "0",
  strength: "0",
  speed: "0",
  durability: "0",
  power: "0",
  combat: "0",
};

const initialStatePhysicalStatsTeam: Physical = {
  height: "0",
  weight: "0",
};

export const HeroesProvider = ({ children }: ProviderProps) => {
  const [heroesTeam, setHeroesTeam] = useState<Hero[]>(initialStateHeroesTeam);
  const [powerStatsTeam, setPowerStatsTeam] = useState(
    initialStatePowerStatsTeam
  );
  const [physicalTeam, setphysicalTeam] = useState(
    initialStatePhysicalStatsTeam
  );
  useEffect(() => {
    localStorage.setItem("heroesTeam", JSON.stringify(heroesTeam));
    calculatePowerStatsTeam();
    calculatePhysicalStatsTeam();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [heroesTeam]);

  /*METHODS FOR HEROES*/
  const addHeroToTeam = (newHero: Hero) => {
    const check = verifyAddHero(newHero);
    if (check.ok) {
      setHeroesTeam([...heroesTeam, newHero]);
    }
    return check;
  };

  const deleteHeroFromTeam = (heroId: string) => {
    setHeroesTeam(heroesTeam.filter((hero: Hero) => hero.id !== heroId));
    return {
      ok: true,
      msg: "Hero removed",
    };
  };

  const verifyAlignmentAmount = (newHero: Hero): boolean => {
    const newHeroAligment = newHero.biography.alignment;

    const AlignmentAmount: Hero[] = heroesTeam.filter(
      (heroOfTeam) => heroOfTeam.biography.alignment === newHeroAligment
    );

    return AlignmentAmount.length >= 3;
  };

  const verifyHeroExistInTeam = (newHero: Hero): boolean => {
    return heroesTeam.some((hero) => hero.id === newHero.id);
  };

  const verifyAddHero = (newHero: Hero): objectResponseType => {
    if (heroesTeam.length >= 6) {
      return {
        msg: `Your team is full, you can't add more`,
        ok: false,
      };
    }
    if (verifyHeroExistInTeam(newHero)) {
      return {
        msg: `Hero ${newHero.name} already exist in your team`,
        ok: false,
      };
    }
    if (verifyAlignmentAmount(newHero)) {
      return {
        msg: `Your team already have 3 heroes with alignment ${newHero.biography.alignment}`,
        ok: false,
      };
    }
    return {
      msg: `Hero ${newHero.name} added to your team`,
      ok: true,
    };
  };
  /*END METHODS FOR HEROES*/

  /*METHODS FOR POWERSTATSTeam*/
  const calculatePowerStatsTeam = () => {
    const powerStats: PowerStats = {
      intelligence: "0",
      strength: "0",
      speed: "0",
      durability: "0",
      power: "0",
      combat: "0",
    };
    heroesTeam.map(({ powerstats }) => {
      for (let stat in powerstats) {
        powerStats[stat] = (
          parseInt(powerStats[stat]) + parseInt(powerstats[stat])
        ).toString();
      }
      return null;
    });
    setPowerStatsTeam(powerStats);
  };
  /*END METHODS FOR POWERSTATS*/

  const calculatePhysicalStatsTeam = () => {
    const physicalStats: Physical = {
      height: "0",
      weight: "0",
    };
    heroesTeam.map(({ appearance }) => {
      for (let stat in appearance) {
        if (stat === "height" || stat === "weight") {
          physicalStats[stat] = (
            parseInt(physicalStats[stat]) + parseInt(appearance[stat][1])
          ).toString();
        }
      }
      return null;
    });
    setphysicalTeam({
      height: `${Math.floor(
        parseInt(physicalStats.height) / heroesTeam.length
      )} cm`,
      weight: `${Math.floor(
        parseInt(physicalStats.weight) / heroesTeam.length
      )} kg`,
    });
  };
  return (
    <HeroesContext.Provider
      value={{
        heroesTeam,
        addHeroToTeam,
        deleteHeroFromTeam,
        powerStatsTeam,
        physicalTeam,
      }}
    >
      {children}
    </HeroesContext.Provider>
  );
};
