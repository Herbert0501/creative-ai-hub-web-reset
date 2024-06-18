import { useState, useEffect, useMemo } from 'react';
import { Role, roles } from '@/common/roles';

function getRandomRoles(roles: Role[], count: number): Role[] {
  const shuffled = roles.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

export default function Example() {
  const [randomRoles, setRandomRoles] = useState<Role[]>([]);

  const memoizedRoles = useMemo(() => getRandomRoles(roles, 4), []); 

  useEffect(() => {
    setRandomRoles(memoizedRoles);
  }, [memoizedRoles]); 

  return (
    <div className="flex flex-row justify-center items-center space-x-4 p-4 h-40">
      {randomRoles.map((role: Role, index: number) => (
        <div
          key={index}
          className="flex flex-col items-left p-4 bg-transparent rounded-xl shadow-md w-40 h-28
          hover:bg-neutral-100 dark:hover:bg-neutral-600 transition-colors duration-300 cursor-pointer
          border border-neutral-300 dark:border-neutral-700"
        >
          <div className="text-lg">{role.icon}</div>
          <div className="text-sm mt-2 text-left text-gray-500 dark:text-gray-300">
            {role.description}
          </div>
        </div>
      ))}
    </div>
  );
}
