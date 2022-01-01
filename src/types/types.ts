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

export interface Hero {
  appearance: Appearance;
  biography: Biography;
  connections: Connections;
  id: string;
  image: {
    url: string;
  };
  name: string;
  powerstats: PowerStats;
  work: Work;
}

export type Appearance = {
  "eye-color": string;
  gender: string;
  "hair-color": string;
  height: string[];
  race: string;
  weight: string[];
};

export type Biography = {
  aliases: string[];
  alignment: string;
  "alter-egos": string;
  "first-appearance": string;
  "full-name": string;
  "place-of-birth": string;
  publisher: string;
};

export type Connections = {
  "group-affiliation": string;
  relatives: string;
};

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

export type Work = {
  base: string;
  occupation: string;
};
export interface Notification {
  open: boolean;
  msg: string;
  type: string;
}
export interface Modal {
  open: boolean;
  hero: Hero;
}

export interface objectResponseType {
  ok: boolean;
  msg: string;
}
