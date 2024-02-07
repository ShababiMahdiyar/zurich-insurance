import { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useDispatch } from 'react-redux';
import { setUserProfile, setAuthError } from '../store/slices/authSlice';
import { useRouter } from 'next/router';

const useSyncAuth = () => {
  const { data: session, status } = useSession();
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    if (status === 'authenticated' && session) {
      dispatch(setUserProfile({
        name: session.user?.name,
        email: session.user?.email,
        image: session.user?.image,
      }));
      if (router.pathname !== '/dashboard') {
        router.push('/dashboard');
      }
    } else if (status === 'unauthenticated') {
      dispatch(setAuthError('User is not authenticated.'));
    }
  }, [session, status, dispatch, router]);
};

export default useSyncAuth;
