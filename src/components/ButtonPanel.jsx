import { useEffect, useRef } from "react";

export const ButtonPanel = ({setTime}) => {
    useEffect(() => {
        return () => clearInterval(id.current);
    }, []);

    let id = useRef();

    const handleTime = () => {
        id.current = setInterval(() => {
            setTime((prev) => {
                if (prev.sec === 0 && prev.min === 0 && prev.hr === 0) {
                    return { hr: 0, min: 0, sec: 0 }
                }
                else {
                    if (prev.sec === 0 && prev.min === 0 && prev.hr > 0) {
                        return { hr: prev.hr - 1, min: 59, sec: 0 };
                    }
                    else {
                        if (prev.sec === 0 && prev.min > 0) {
                            return { ...prev, min: prev.min - 1, sec: 59 };
                        }
                    }
                }
                return { ...prev, sec: prev.sec - 1 };
            });
        }, 1000);
    }

    return (
        <div className="flex justify-center align-center items-center">
            <button
                className="btn btn-blue btn-blue:hover"
                onClick={() => handleTime()}
            >
                Start
            </button>

            <button
                className="btn btn-red btn-red:hover"
                onClick={() => clearInterval(id.current)}
            >
                Pause
            </button>

            <button
                className="btn btn-dark-red btn-dark-red:hover"
                onClick={() => {
                    clearInterval(id.current);
                    setTime({ hr: 0, min: 0, sec: 0 });
                }}
            >
                Reset
            </button>

            <button
                className="spotify"
                onClick={() => handleTime()}
            >
                <span className="block border border-solid border-grey-lightest hover:text-grey-lightest rounded-full p-2">
                    <svg className="w-5 h-5 fill-current block" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <polygon id="Rectangle-161" points="4 4 16 10 4 16"></polygon>
                    </svg>
                </span>
            </button>
        </div>
    )
}