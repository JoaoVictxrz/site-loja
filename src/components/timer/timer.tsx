import { useEffect, useState } from "react";

export default function Timer() {
    const [partyTime, setPartyTime] = useState(false);
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const target = new Date("12/31/2023 23:59:59");

        const interval = setInterval(() => {
            const now = new Date();
            const difference = target.getTime() - now.getTime();

            const d = Math.floor(difference / (1000 * 60 * 60 * 24));
            setDays(d);

            const h = Math.floor(
                (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            setHours(h);

            const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            setMinutes(m);

            const s = Math.floor((difference % (1000 * 60)) / 1000);
            setSeconds(s);

            if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
                setPartyTime(true);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);
    return (
        <div className="flex gap-4 pt-5">
            <div className="flex justify-center items-center w-24 h-24 text-5xl font-bold bg-slate-50 text-black">{days}</div>
            <div className="flex justify-center items-center w-24 h-24 text-5xl font-bold bg-slate-50 text-black">{hours}</div>
            <div className="flex justify-center items-center w-24 h-24 text-5xl font-bold bg-slate-50 text-black">{minutes}</div>
            <div className="flex justify-center items-center w-24 h-24 text-5xl font-bold bg-slate-50 text-black">{seconds}</div>
        </div>
    )
}