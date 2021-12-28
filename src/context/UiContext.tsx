import { createContext, useState } from "react";
import {
  Notification,
  ProviderProps,
  UiContextTypes,
  Modal,
  Hero,
} from "../types/types";

export const UiContext = createContext({} as UiContextTypes);

export const UiProvider = ({ children }: ProviderProps) => {
  const [Notificacion, setNotificacion] = useState<Notification>({
    open: false,
    msg: "",
    type: "",
  });
  const [Modal, setModal] = useState<Modal>({
    open: false,
    hero: {} as Hero,
  });

  const handleOpenNotification = (msg: string, type: string) => {
    setNotificacion({
      msg,
      type,
      open: true,
    });
    setTimeout(() => {
      handleCloseNotification();
    }, 3000);
  };

  const handleCloseNotification = () => {
    setNotificacion({
      open: false,
      msg: "",
      type: "",
    });
  };

  const handleOpenModal = (data: Hero) => {
    setModal({
      hero: data,
      open: true,
    });
  };

  const handleCloseModal = () => {
    setModal({
      open: false,
      hero: {} as Hero,
    });
  };

  return (
    <UiContext.Provider
      value={{
        Notificacion,
        setNotificacion,
        handleOpenNotification,
        handleCloseNotification,
        Modal,
        setModal,
        handleOpenModal,
        handleCloseModal,
      }}
    >
      {children}
    </UiContext.Provider>
  );
};
