import React, { useState } from "react";
const Toggle = () => {
    const [on, setOn] = useState(false);
    return <button id="btn" onClick={() => setOn(!on)}>{on ? "ON" : "OFF"}</button>
};
export default Toggle