import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function getServerSideProps(res: NextApiResponse) {
  try {
    const { data } = await axios.get('https://reqres.in/api/users');
    const users = data.data;
    const filteredUsers = users.filter(
      (user: any) =>
        user.first_name.startsWith('G') || user.last_name.startsWith('W')
    );
    res.status(200).json(filteredUsers);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users', error });
  }
}
