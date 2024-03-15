import React, { useState } from "react";
import html2canvas from "html2canvas";

const CardCreator = () => {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [selectedImage, setSelectedImage] = useState("/cake.png");

  const handleImageChange = (event) => {
    setSelectedImage(event.target.value);
  };

  const downloadAsImage = () => {
    const cardPreviewNode = document.getElementById("card-wrapper");

    if (!cardPreviewNode) {
      console.error("Card preview node not found.");
      return;
    }

    html2canvas(cardPreviewNode)
      .then((canvas) => {
        const link = document.createElement("a");
        link.href = canvas.toDataURL("image/png");
        link.download = "card.png";
        link.click();
      })
      .catch((error) => console.error("Error generating image:", error));
  };

  return (
    <div className="card-creator">
      <div>
        <h1>Greeting Card Creator</h1>
        <div
          className="card-preview"
          id="card-wrapper"
          style={{
            backgroundImage: `url(${selectedImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="message">{message}</div>
          <div className="name">{name}</div>
        </div>
      </div>
      <div className="input-container">
        <div className="input-fields">
          <label>
            Message:
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </label>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Select Image:
            <select value={selectedImage} onChange={handleImageChange}>
              <option value="/cake.png" data-image="/cake.png">
                Cake
              </option>
              <option value="/celebrate2.jpeg" data-image="/celebrate2.jpeg">
                Celebrate 01
              </option>
              <option value="/celebrate2.png" data-image="/celebrate2.png">
                Celebrate 02
              </option>
              <option value="/celebrate3.jpg" data-image="/celebrate3.jpg">
                Celebrate 03
              </option>
            </select>
          </label>
        </div>
        <button onClick={downloadAsImage}>Download</button>
      </div>
    </div>
  );
};

export default CardCreator;
