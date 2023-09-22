import React from 'react';
import Link from 'next/link';
import { RxSketchLogo, RxPerson } from 'react-icons/rx';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { FiSettings } from 'react-icons/fi';

interface LayoutProps {
  children?: any;
  description?: string;
}

const SidebarApp: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='flex'>
      <div className='fixed w-40 h-screen pt-4 p-2 bg-white border-r-[1px] flex flex-col justify-between'>
        <div className='flex flex-col items-center'>
          <Link href='/dashboard'>
            <div className='bg-purple-800 text-white p-3 rounded-lg inline-block'>
              <RxSketchLogo size={20} />
            </div>
          </Link>
          <Link href='/dashboard/customers' className='w-full flex items-center 
            hover:bg-gray-200 cursor-pointer p-3 rounded-lg'>
            <div className='inline-block'>
              <RxPerson size={20} />
            </div>
            <span className='p-2'>Users</span>
          </Link>
          <Link href='/dashboard/orders' className='w-full flex items-center 
            hover:bg-gray-200 cursor-pointer p-3 rounded-lg'>
            <div className='inline-block'>
              <HiOutlineShoppingBag size={20} />
            </div>
            <span className='p-2'>Customers</span>
          </Link>
          <Link href='/dashboard/orders_men' className='w-full flex items-center 
            hover:bg-gray-200 cursor-pointer p-3 rounded-lg'>
            <div className='inline-block'>
              <HiOutlineShoppingBag size={20} />
            </div>
            <span className='p-2'>Users</span>
          </Link>
          <Link href='/dashboard' className='w-full flex items-center 
            hover:bg-gray-200 cursor-pointer p-3 rounded-lg'>
            <div className='inline-block'>
              <FiSettings size={20} />
            </div>
            <span className='p-2'>Users</span>
          </Link>
        </div>
      </div>
      <main className='w-full ml-40'>{children}</main>
    </div>
  );
};

export default SidebarApp;
