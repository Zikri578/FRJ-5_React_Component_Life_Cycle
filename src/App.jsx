import React, { useState } from "react";
import MyButton from "./components/MyButton";
import MyButton2 from "./components/MyButton2";

export default function App() {

    // Basic Hooks State function pada komponen
    const [show, setShow] = useState(true);


    setTimeout(() => {
        setShow(false)
    }, 5000);

    return (
        <div>
            <h1>React JS - Component Life Cycle</h1>

            {/* Button 1 */}
            <MyButton />
            {show && <MyButton />}

            {/* Button 2 */}
            <MyButton2 />
            {show && <MyButton2 />}
        </div>
    )
} 