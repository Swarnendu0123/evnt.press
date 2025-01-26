import { Music2, Trophy, Utensils, Ticket, Palette, Mic2 } from "lucide-react";

const Categories = () => {
  const categories = [
    { name: "Music", icon: <Music2 className="w-5 h-5" /> },
    { name: "Sports", icon: <Trophy className="w-5 h-5" /> },
    { name: "Food", icon: <Utensils className="w-5 h-5" /> },
    { name: "Theater", icon: <Ticket className="w-5 h-5" /> },
    { name: "Art", icon: <Palette className="w-5 h-5" /> },
    { name: "Comedy", icon: <Mic2 className="w-5 h-5" /> },
  ];

  return (
    <div className="flex justify-center space-x-8">
      {categories.map((category) => (
        <button
          key={category.name}
          className="flex flex-col items-center space-y-2 group"
        >
          <div className="p-3 rounded-xl bg-gray-100 group-hover:bg-gray-200 transition-colors">
            {category.icon}
          </div>
          <span className="text-sm font-medium text-gray-600">
            {category.name}
          </span>
        </button>
      ))}
    </div>
  );
};

export default Categories;
