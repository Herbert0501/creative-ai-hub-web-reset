const roles = [
  { icon: "💡", description: "设计一款有趣的编程游戏" },
  { icon: "💻", description: "为我创建个人网页" },
  { icon: "📅", description: "TikTok的内容日历" },
  { icon: "✈️", description: "像本地人一样游览首尔" },
];

export default function Example() {
  return (
    <div className="flex flex-row justify-center items-center space-x-4 p-4">
      {roles.map((role, index) => (
        <div
          key={index}
          className="flex flex-col items-left p-4 bg-white dark:bg-neutral-700 rounded-lg shadow-md w-48 h-32
          hover:bg-neutral-100 dark:hover:bg-neutral-600 transition-colors duration-300 cursor-pointer
          "
        >
          <div className="text-lg">{role.icon}</div>
          <div className="text-base mt-2 text-left text-gray-500 dark:text-gray-300">
            {role.description}
          </div>
        </div>
      ))}
    </div>
  );
}
