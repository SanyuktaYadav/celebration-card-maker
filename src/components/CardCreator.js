import React, { useState } from "react";
import html2canvas from "html2canvas";

const CardCreator = () => {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");
  const [selectedImage, setSelectedImage] = useState('/default-background.jpg');

  const handleColorChange = (event) => {
    setBackgroundColor(event.target.value);
  };

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
      <h1>Celebration Card Creator</h1>
      <div className="input-container">
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
            <option value="/celebrate.png" data-image="/celebrate.png">Celebrate 0</option>
            <option value="/celebrate2.jpeg" data-image="/celebrate2.jpeg">Celebrate 01</option>
            <option value="/celebrate2.png" data-image="/celebrate2.png">Celebrate 02</option>
            <option value="/celebrate3.jpg" data-image="/celebrate3.jpg">Celebrate 03</option>
          </select>
        </label>
        <button onClick={downloadAsImage}>Download as Image</button>
      </div>
      <div
        className="card-preview"
        id="card-wrapper"
        style={{
          backgroundColor,
          backgroundImage: `url(${selectedImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <p>{name}</p>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default CardCreator;
