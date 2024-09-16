import { FaClipboardCheck, FaSmile, FaUserTie, FaAward } from 'react-icons/fa';
import AchievementCard from './AchievementCard';

const stats = [
    { id: 1, icon: <FaClipboardCheck />, label: 'Finished Projects', target: 986 },
    { id: 2, icon: <FaSmile />, label: 'Happy Clients', target: 896 },
    { id: 3, icon: <FaUserTie />, label: 'Skilled Experts', target: 396 },
    { id: 4, icon: <FaAward />, label: 'Honorable Awards', target: 495 },
];


const Achievements = () => {
    return (
        <div className="bg-[#1A1D2B] p-8 rounded-lg grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-4 mx-10">
            {stats.map((stat) => (
                <AchievementCard key={stat.id} icon={stat.icon} label={stat.label} target={stat.target} />
            ))}
        </div>
    );
};

export default Achievements;
