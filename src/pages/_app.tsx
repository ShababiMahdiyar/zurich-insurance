import React from 'react';
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import useSyncAuth from "@/hooks/useSyncAuth";
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';


const AuthWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useSyncAuth();
  return <>{children}</>;
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (<>
    <Header />
    {children}
    <Footer />
  </>);
};

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <AuthWrapper>
          <Layout> <Component {...pageProps} /></Layout>
        </AuthWrapper>
      </Provider>
    </SessionProvider>
  );
}
