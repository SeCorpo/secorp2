import { useState, useEffect } from 'react';
import './style/DecimalClock.css'

export default function DecimalClock() {
    const [dtime, setDTime] = useState("10:00:00");
    const [time, setTime] = useState("24:00:00");

    useEffect(() => {
        const interval = setInterval(() => {
            const timeNow = new Date();
            const thours = timeNow.getHours();
            const tminutes = timeNow.getMinutes();
            const tseconds = timeNow.getSeconds();

            setTime(`${thours.toString().padStart(2, '0')}:${tminutes.toString().padStart(2, '0')}:${tseconds.toString().padStart(2, '0')}`);

            const timeNowSeconds = thours * 3600 + tminutes * 60 + tseconds;
            const decimalTime = (timeNowSeconds / 86400 * 10).toFixed(4);
            const hours = Math.floor(decimalTime);
            const minutes = Math.floor((decimalTime - hours) * 100);
            const seconds = Math.floor((((decimalTime - hours) * 100) - minutes) * 100);

            setDTime(`${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);
        }, 500);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="decimal-clock-frame" title="Decimal digital clock">
            <div className="decimal-clock">
                <div className="clock-dtime">
                    {dtime}
                </div>
                <div className="clock-time">
                    {time}
                </div>
            </div>
        </div>
    );
}
