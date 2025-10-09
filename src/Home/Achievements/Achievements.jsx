import { FaClipboardCheck, FaSmile, FaUserTie, FaAward } from "react-icons/fa";
import AchievementCard from "./AchievementCard";

const stats = [
  {
    id: 1,
    icon: <FaClipboardCheck />,
    label: "Projects Done",
    target: 60,
  },
  { id: 2, icon: <FaSmile />, label: "Happy Clients", target: 56 },
  { id: 3, icon: <FaUserTie />, label: "Skilled Experts", target: 12 },
  { id: 4, icon: <FaAward />, label: "Achievements", target: 10 },
];

const Achievements = () => {
  return (
    <div className="p-8 rounded-lg grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-4 mx-10 ">
      {stats.map((stat) => (
        <AchievementCard
          key={stat.id}
          icon={stat.icon}
          label={stat.label}
          target={stat.target}
        />
      ))}
    </div>
  );
};

export default Achievements;
