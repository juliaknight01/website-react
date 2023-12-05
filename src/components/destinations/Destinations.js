import React, { useState } from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import "./DestinationsStyles.css";

import Random from "../../assets/random2.jpg";
import Tae from "../../assets/tae.jpg";
import Party2 from "../../assets/party2.jpg";
import Party3 from "../../assets/party3.jpg";
import Random4 from "../../assets/random.jpg";

function Destinations() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setModalIsOpen(false);
  };

  return (
    <div name="destinations" className="destinations">
      <div className="container">
        <h1>All-Inclusive Event Venues</h1>
        <p>Set the Stage for Unforgettable Celebrations</p>
        <div className="img-container">
          <img
            className="span-3 image-grid-row-2"
            src={Random}
            alt="/"
            onClick={() => openModal(Random)}
          />
          <img src={Tae} alt="/" onClick={() => openModal(Tae)} />
          <img src={Party2} alt="/" onClick={() => openModal(Party2)} />
          <img src={Party3} alt="/" onClick={() => openModal(Party3)} />
          <img src={Random4} alt="/" onClick={() => openModal(Random4)} />
        </div>
        <Modal
          open={modalIsOpen}
          onClose={closeModal}
          center
          styles={{
            modal: { maxWidth: "100%", maxHeight: "100%" },
          }}
        >
          {selectedImage && (
            <div style={{ width: "100%", height: "100%" }}>
              <img
                src={selectedImage}
                alt="Selected Image"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  maxWidth: "100%",
                  maxHeight: "100%",
                }}
              />
            </div>
          )}
        </Modal>
      </div>
    </div>
  );
}

export default Destinations;
