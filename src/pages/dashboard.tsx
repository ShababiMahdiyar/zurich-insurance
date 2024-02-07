import { getSession } from 'next-auth/react';
import { GetServerSideProps } from 'next';
import { Footer } from '@/components/Footer';
import axios from 'axios';
import { Content } from '@/components/Content';

interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

interface DashboardProps {
  users: User[];
}

export default function Dashboard({ users }: DashboardProps) {
  return (
    <Content />
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession({ req: context.req });
  if (!session) {
    return {
      redirect: {
        destination: '/auth/signin',
        permanent: false,
      },
    };
  }
  try {
    const { data } = await axios.get('https://reqres.in/api/users');
    const users = data.data.filter((user: User) =>
      user.first_name.startsWith('G') || user.last_name.startsWith('W')
    );
    return { props: { users } };
  } catch (error) {
    console.error("Failed to fetch users:", error);
    return { props: { users: [] } };
  }
};
