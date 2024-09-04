import { useState } from "react";

export const Practice = () => {
  const [buttonColor, setButtonColor] = useState("red");
  const [disabled, setDisabled] = useState(false);

  const nextColor = buttonColor === "red" ? "blue" : "red";

  return (
    <div>
      <button
        className={disabled ? "gray" : buttonColor}
        disabled={disabled}
        onClick={() => setButtonColor(nextColor)}
      >
        Change to {nextColor}
      </button>
      <label htmlFor="disable">Disable button</label>
      <input
        type="checkbox"
        name="disable"
        id="disable"
        onChange={(e) => setDisabled(e.target.checked)}
      />
    </div>
  );
};
