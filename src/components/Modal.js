import React from "react";
import '../Styles/Modal.css'
//npm install react-icons --save
import { RiCloseLine } from "react-icons/ri";
import toast from "react-hot-toast";

const Modal = ({ setModalOpen }) => {

function Btn1Click() {
  setModalOpen(false)
  toast.success("Tıklandı");
}
  return (
    <>
      <div className="darkBG" onClick={() => setModalOpen(false)} />
      <div className="centered">
        <div className="modal_">
          <div className="modalHeader">
            <h5 className="heading"><p className="modal-title">Title</p></h5>
          </div>
          <button className="closeBtn" onClick={() => setModalOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className="modalContent">
         <p className="modal-text"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
          industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 
          to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
          remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
          Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
          <div className="modalActions">
            <div className="actionsContainer">
              <button className="Btn1" onClick={() => Btn1Click()}>
                Button
              </button>
              <button
                className="Btn2"
                onClick={() =>  setModalOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
