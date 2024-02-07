import React, { useState } from 'react';
import Image from 'next/image';

interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export const Content = (props: { users: User[] }) => {
  const { users } = props;
  return (
    <div className="flex bg-gray-50 dark:bg-gray-900 h-screen justify-center">
      <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 h-96 mt-[20%]">
        <div className="flex items-center justify-between mb-4">
          <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
            List of Users
          </h5>
        </div>
        <div className="flow-root">
          <ul
            role="list"
            className="divide-y divide-gray-200 dark:divide-gray-700"
          >
            {users.map(user => (
              <UserItem user={user} key={user.id} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};


const UserItem = (props: { user: User }) => {
  const { user } = props
  const [showEmail, setShowEmail] = useState<boolean>(false)
  const maskEmail = (email: string): string => {
    const [user, domain] = email.split('@');
    const maskedUser = user.replace(/.(?=.{0})/g, '*');
    return `${maskedUser}@${domain}`;
  };
  return <li className="py-3 sm:py-4" key={user.id}>
    <div className="flex items-center">
      <div className="flex-shrink-0">
        <Image
          src={user.avatar}
          alt={`Profile of ${user.first_name}`}
          width={50}
          height={50}
          className="rounded-full"
        />
      </div>
      <div className="flex-1 min-w-0 ms-4">
        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
          {user.first_name + ' ' + user.last_name}
        </p>
        <p className="text-sm text-gray-500 truncate dark:text-gray-400 cursor-pointer" onClick={() => { { setShowEmail(!showEmail) } }} >
          {showEmail ? user.email : maskEmail(user.email)}
        </p>
      </div>
      <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
        {user.id}
      </div>
    </div>
  </li>
}