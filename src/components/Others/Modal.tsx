import { useContext } from "react";
import ModalReact from "react-modal";
import { UiContext } from "../../context/UiContext";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  content: {
    top: "50%",
    left: "50%",
    // right: "auto",
    // bottom: "auto",
    maxWidth: 500,
    padding: "0",
    transform: "translate(-50%, -50%)",
    color: "black",
  },
};
ModalReact.setAppElement("#root");

export const Modal = () => {
  const { Modal, handleCloseModal } = useContext(UiContext);
  const { hero } = Modal;
  return (
    <ModalReact
      isOpen={Modal.open}
      onRequestClose={handleCloseModal}
      style={customStyles}
      contentLabel="Example Modal"
      className="modal modal-dialog-centered"
    >
      {Modal.open && (
        <>
          <div className="modal-content px-3">
            <div className="modal-header">
              <h5 className="modal-title">{`${hero?.name} - ${hero?.biography["full-name"]}`}</h5>
              <button
                type="button"
                className="close btn"
                data-dismiss="modal"
                aria-label="Close"
                onClick={handleCloseModal}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <img
                className="hero-img img-modal"
                src={hero?.image?.url}
                alt={`${hero?.name}`}
              ></img>
              <h4>Physical characteristics</h4>
              <div className="physical-characteristics">
                <div>
                  <p className="lead item-modal">
                    <strong>Height:</strong>
                    {` ${hero?.appearance?.height[1]}`}
                  </p>
                  <p className="lead item-modal">
                    <strong>Weight:</strong>
                    {` ${hero?.appearance?.weight[1]}`}
                  </p>
                </div>
                <div>
                  <p className="lead item-modal">
                    <strong>Eyes color:</strong>
                    {` ${hero?.appearance["eye-color"]}`}
                  </p>
                  <p className="lead item-modal">
                    <strong>Hair color:</strong>
                    {` ${hero?.appearance["hair-color"]}`}
                  </p>
                </div>
              </div>
              <h4>Work information</h4>
              <div>
                <p className="lead item-modal">
                  <strong>Occupation:</strong>
                  {` ${hero?.work?.occupation}`}
                </p>
                <p className="lead item-modal">
                  <strong>Base(s):</strong>
                  {` ${hero?.work?.base}`}
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </ModalReact>
  );
};
