import { useState } from "react";
import { ButtonPanel } from "./ButtonPanel"
import { Display } from "./Display"

export const Timer = () => {
    const [time, setTime] = useState({ hr: 0, min: 0, sec: 0 });

    return (
        <>
            <Display time={time} setTime={setTime}/>
            <ButtonPanel setTime={setTime}/>
        </>
    )
}