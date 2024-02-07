import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';

interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export const Content = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://reqres.in/api/users');
      const filteredUsers = response.data.data.filter((user: User) =>
        user.first_name.startsWith('G') || user.last_name.startsWith('W')
      );
      setUsers(filteredUsers);
    } catch (error) {
      setError('Failed to fetch users');
      console.error('There was an error!', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <p>
            Name: {user.first_name} {user.last_name}
          </p>
          <Image src={user.avatar} alt={`Profile of ${user.first_name}`} width={50} height={50} />
        </div>
      ))}
    </div>
  );
};
