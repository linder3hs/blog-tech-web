import { useState } from "react";

const Toggle = () => {
  const [isToggleOn, setToggleOn] = useState(true);

  const toggleHandler = () => setToggleOn(!isToggleOn);

  const deleteElement = (id) => console.log(id);

  return (
    <div>
      <button onClick={toggleHandler}>{isToggleOn ? "ON" : "OFF"}</button>

      <button onClick={(id) => deleteElement(id)}></button>
    </div>
  );
};

export default Toggle;
