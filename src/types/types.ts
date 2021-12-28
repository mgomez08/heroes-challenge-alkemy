export interface FormLoginValues {
  email: string;
  password: string;
}
export interface FormSearchHeroesValue {
  search: string;
}

export interface ProviderProps {
  children: React.ReactNode;
}
export interface objectResponseType {
  ok: boolean;
  msg: string;
}
export interface AuthContextTypes {
  auth: {
    logged: boolean;
    loading: boolean;
  };
  logout: () => void;
  login: (token: string) => void;
  checkToken: () => boolean;
}
export interface HeroesContextTypes {
  heroesTeam: Hero[];
  addHeroToTeam: (hero: Hero) => objectResponseType;
  deleteHeroFromTeam: (heroId: string) => objectResponseType;
  powerStatsTeam: PowerStats;
  physicalTeam: Physical;
}

export interface UiContextTypes {
  Notificacion: Notification;
  setNotificacion: (openNotification: Notification) => void;
  handleOpenNotification: (msg: string, type: string) => void;
  handleCloseNotification: () => void;
  Modal: Modal;
  setModal: (openNotification: Modal) => void;
  handleOpenModal: (data: Hero) => void;
  handleCloseModal: () => void;
}

export interface Notification {
  open: boolean;
  msg: string;
  type: string;
}
export interface Modal {
  open: boolean;
  hero: Hero;
}

export interface Hero {
  id: string;
  name: string;
  powerstats: PowerStats;
  appearance: {
    "eye-color": string;
    "hair-color": string;
    gender: string;
    race: string;
    height: string[];
    weight: string[];
  };
  image: {
    url: string;
  };
  biography: {
    "full-name": string;
    "alter-egos": string;
    aliases: string[];
    "place-of-birth": string;
    "first-appearance": string;
    publisher: string;
    alignment: string;
  };
  work: {
    occupation: string;
    base: string;
    connections: {
      "group-affiliation": string;
      relatives: string;
    };
    appearance: {
      gender: string;
      race: string;
      height: [string, string];
      weight: [string, string];
      "eye-color": string;
      " hair-color": string;
    };
  };
}

export type PowerStats = {
  [key: string]: string;
  intelligence: string;
  strength: string;
  speed: string;
  durability: string;
  power: string;
  combat: string;
};

export type Physical = {
  [key: string]: string;
  height: string;
  weight: string;
};
