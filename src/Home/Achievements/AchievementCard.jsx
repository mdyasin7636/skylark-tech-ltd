/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';

const AchievementCard = ({ icon, label, target }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const end = target;
        if (start === end) return;

        let incrementTime = (1000 / end) * 5; // time in ms for each increment
        let timer = setInterval(() => {
            start += 1;
            setCount(start);
            if (start === end) clearInterval(timer);
        }, incrementTime);
    }, [target]);

    return (
        <div className="flex flex-col items-center text-white space-y-2">
            <div className="text-4xl">{icon}</div>
            <h2 className="text-3xl font-bold">{count}+</h2>
            <p className="text-lg">{label}</p>
        </div>
    );
};

export default AchievementCard;