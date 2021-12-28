import { useContext } from "react";
import { UiContext } from "../../context/UiContext";

export const Notification = () => {
  const { handleCloseNotification, Notificacion } = useContext(UiContext);
  return (
    <div
      className={`toast align-items-center text-white notification-top bg-${
        Notificacion?.type
      } start-50 translate-middle-x position-fixed ${
        Notificacion?.open ? "show" : ""
      }`}
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div className="d-flex">
        <div className="toast-body">{Notificacion?.msg}</div>
        <button
          type="button"
          className="btn-close btn-close-white me-2 m-auto"
          data-bs-dismiss="toast"
          aria-label="Close"
          onClick={handleCloseNotification}
        ></button>
      </div>
    </div>
  );
};
