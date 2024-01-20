import React, { useState } from "react";
import html2canvas from "html2canvas";

const CardCreator = () => {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");

  const handleColorChange = (event) => {
    setBackgroundColor(event.target.value);
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
          Background Color:
          <select value={backgroundColor} onChange={handleColorChange}>
            <option value="#ffffff">White</option>
            <option value="#ffcccb">Light Pink</option>
            <option value="#add8e6">Light Blue</option>
            <option value="#98fb98">Light Green</option>
            <option value="#f0e68c">Khaki</option>
          </select>
        </label>
        <button onClick={downloadAsImage}>Download as Image</button>
      </div>
      <div
        className="card-preview"
        id="card-wrapper"
        style={{
          backgroundColor,
          backgroundImage: 'url("/celebrate.png")',
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
