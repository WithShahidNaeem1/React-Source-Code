import { useState } from "react";
import MyImage from "./MyImage";

function ToggleButton() {
    const [display, setDisplay] = useState(true)
    return (
        <>
            <h1>Toggle Button (ON|OFF)</h1>
            <button onClick={() => setDisplay(!display)}>ON | OFF</button>
            <br />
            {
                // display ? <h1>Shahid Naeem</h1> : null
                display? <MyImage/> : null

            }


        </>
    )
}

export default ToggleButton;