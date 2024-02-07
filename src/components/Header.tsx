import LogoutButton from '@/pages/auth/signout';
import { useSession } from 'next-auth/react';
import Image from 'next/image';

export const Header = () => {
  const { data: session } = useSession()

  return (
    <header className='sticky top-0 z-50'>
      <nav className="bg-dark-blue border-gray-200 ">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <a className="flex items-center space-x-3 rtl:space-x-reverse">
            <Image src={"/logo.jpg"} alt={'logo'} width={30} height={30} />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Zurich</span>
          </a>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            {session && session.user &&
              <>
                <div className="flex items-center gap-4">
                  {session.user.image ? (<Image src={session.user.image} alt={`Profile of ${session.user.name}}`} width={40} height={40} className=' rounded-full' />
                  ) : (
                    <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                      <svg className="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                    </div>

                  )}
                  <div className="flex font-medium dark:text-white">
                    <a className="text-base text-gray-500 dark:text-white font-semibold"> {session.user.name ?? "User"}</a>
                  </div>
                </div>
                <LogoutButton />
              </>
            }

          </div>
        </div>
      </nav>
    </header>
  );
};