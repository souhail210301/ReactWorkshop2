import { useState } from "react";

const ColorBox = (props) => {
  const [color, setColor] = useState(props.initialColor);

  const changeColor = () => {
    const randomIndex = Math.floor(Math.random() * props.colorOptions.length);
    setColor(props.colorOptions[randomIndex]);
  };

  return (
   <> <button onClick={changeColor}>Changer de couleur</button>
    <div style={{ width: "100px", height: "100px", backgroundColor: color, margin: "10px auto" }}>
      
    </div></>
  );
};

export default ColorBox;
