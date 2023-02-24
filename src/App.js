import { useState, React } from "react";
import "./App.css";
import { Toaster } from "react-hot-toast";
import Modal from "./components/Modal";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div style={{textAlign:"center"}} >
      <button onClick={()=>setModalOpen(true)}>Modal</button>
      </div>
      {modalOpen && <Modal setModalOpen={setModalOpen}  />}
    </>
  );
}

export default App;
