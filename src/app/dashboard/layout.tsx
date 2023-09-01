// import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script';
import Sidebar from '../components/Sidebar';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Generated by create next app'
};

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <Sidebar>
      {children}
    </Sidebar>
  );
}
