import React, { useState } from "react";
import html2canvas from "html2canvas";

const CardCreator = () => {
  const [message, setMessage] = useState("");
  const [selectedImage, setSelectedImage] = useState("/cake.png");
  const [textColor, setTextColor] = useState("black");

  const handleImageChange = (event) => {
    setSelectedImage(event.target.value);
  };

  const handleTextColorChange = (event) => {
    setTextColor(event.target.value);
  }

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
        link.download = "Greeting Card.png";
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
            overflow: "hidden"
          }}
        >
          <div className="message" style={{ color: textColor }}>
            {message}
          </div>
        </div>
      </div>
      <div className="input-container">
        <div className="input-fields">
          <label>
            Message:
            <input
              type="text"
              value={message}
              maxLength={"160"}
              onChange={(e) => setMessage(e.target.value)}
            />
          </label>
          <label>
            Text Color:
            <select value={textColor} onChange={handleTextColorChange}>
              <option value="black">
                Black
              </option>
              <option value="white">
                White
              </option>
            </select>
          </label>
          <label>
            Select Image:
            <select value={selectedImage} onChange={handleImageChange}>
              <option value="/cake.png" data-image="/cake.png">
                Cake
              </option>
              <option value="/thankYou.png" data-image="/thankYou.png">
                Thank you
              </option>
              <option value="/hearts.png" data-image="/hearts.png">
                Hearts
              </option>
              <option value="/party.png" data-image="/party.png">
                Party
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
