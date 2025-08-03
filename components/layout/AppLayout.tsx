'use client'

import { usePathname } from 'next/navigation';
import Navbar from '@/components/sections/home/Navbar';
import Footer from '@/components/sections/Footer';

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  const pathname = usePathname();
  const isAuthPage = pathname.includes('/login') || 
                     pathname.includes('/register') || 
                     pathname.includes('/verify-otp') ||
                     pathname.includes('/(auth)');

  return (
    <>
      {!isAuthPage && <Navbar />}
      {children}
      {!isAuthPage && <Footer />}
    </>
  );
};

export default AppLayout; 