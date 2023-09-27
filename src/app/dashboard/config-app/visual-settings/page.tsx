import React from 'react';
import Header from '@/components/Header';
import { IoBusinessOutline, IoChevronDownOutline } from 'react-icons/io5';
import { GrConfigure } from 'react-icons/gr';
import Link from 'next/link';

const config_app = () => {
  return (
    <div className='bg-gray-100 min-h-screen'>
      <Header name="Administrar y configurar aplicación" username="luis.hernandez.ji" />
      <div className='p-4'>
        <div className='m-auto p-4 border rounded-lg bg-white overflow-y-auto'>
          <div className="grid grid-cols-3 gap-10 justify-center text-center">
            <Link href='/dashboard/config-app/visual-settings' className='grid justify-items-center mb-10 pt-5 cursor-pointer'>
              <GrConfigure size={80} />
              <span className='pl-1 pr-1 pb-1'>Personalización global</span>
            </Link>
            <div className='grid justify-items-center mb-10 pt-5 cursor-pointer'>
              <IoBusinessOutline size={80} />
              <span className='pl-1 pr-1 pb-1'>Personalización de módulos</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default config_app;