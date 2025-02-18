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
            const tmilliseconds = timeNow.getMilliseconds();

            setTime(`${thours.toString().padStart(2, '0')}:${tminutes.toString().padStart(2, '0')}:${tseconds.toString().padStart(2, '0')}`);

            const timeNowMilliseconds = (thours * 3600 + tminutes * 60 + tseconds) * 1000 + tmilliseconds;
            const decimalTime = (timeNowMilliseconds / 86400000) * 10;

            const hours = Math.floor(decimalTime);
            const minutes = Math.floor((decimalTime - hours) * 100);
            const seconds = Math.floor((((decimalTime - hours) * 100) - minutes) * 100);

            setDTime(`${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);
        }, 100);

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
