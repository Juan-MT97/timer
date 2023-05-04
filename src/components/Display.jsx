export const Display = ({time, setTime}) => {
    const handleChange = event => {
        const seconds = event.target.value.replace(/\D/g, '');
        if (seconds.length > 0) {
            const date = new Date(null);
            date.setSeconds(seconds);
            const time = { hr: date.getUTCHours(), min: date.getMinutes(), sec: date.getSeconds() };
            setTime(time);
        }
    }

    return (
        <>
            <input
                type="text"
                placeholder="Insert your seconds"
                onChange={handleChange}
            />
            <p>
                {time.hr.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })}
                :
                {time.min.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })}
                :
                {time.sec.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })}
            </p>
        </>
    )
}