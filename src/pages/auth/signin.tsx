import { signIn } from 'next-auth/react';
import Image from 'next/image';

export default function SignIn() {
  return (
    <section className="flex bg-gray-50 dark:bg-gray-900 h-screen justify-center ">
      <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 mt-[20%] dark:bg-gray-800 dark:border-gray-700 h-44">
        <h5 className="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
          Login to the dashboard
        </h5>
        <p className="text-sm font-normal text-gray-500 dark:text-gray-400">Use your google account to login to the dashboard</p>
        <ul className="my-4 space-y-3">
          <li onClick={() => signIn('google', { callbackUrl: '/dashboard' })}>
            <a className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white cursor-pointer">
              <Image src={"/google.png"} alt={'logo'} width={30} height={30} />
              <span className="flex-1 ms-3 whitespace-nowrap">Google</span>
            </a>
          </li>
        </ul>
      </div>
    </section>

  );
}
