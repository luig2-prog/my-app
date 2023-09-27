'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { RxSketchLogo, RxPerson } from 'react-icons/rx';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { GrConfigure } from 'react-icons/gr';
import { AiOutlineDropbox, AiOutlineMenu, AiOutlineUnorderedList } from 'react-icons/ai';
import { FiSettings } from 'react-icons/fi';
import { FaUsers } from 'react-icons/fa';
import { FcDataConfiguration } from 'react-icons/fc';
import { SiGoogletagmanager } from 'react-icons/si';
import { TiFlowMerge } from 'react-icons/ti';
import { TbTemplate, TbReportSearch } from 'react-icons/tb';
import { IoBusinessOutline, IoChevronDownOutline } from 'react-icons/io5';
import { BsFillCloudUploadFill } from 'react-icons/bs';

interface LayoutProps {
  children?: any;
  description?: string;
}

const SidebarApp: React.FC<LayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className='flex flex-row'>
      <div className={`flex flex-col transitiosn ${isSidebarOpen ? '' : 'w-14'}`}>
        <div className={`flex items-center m-2 ${isSidebarOpen ? 'justify-evenly' : 'flex-col w-10'}`}>
          <Link href='/dashboard' className='w-11 h-11'>
            <div className='bg-[#1266f1] text-white p-3 rounded-lg inline-block'>
              <RxSketchLogo size={20} />
            </div>
          </Link>
          <button
            onClick={toggleSidebar}
            className="transform transition-transform duration-400 ease-in-out msd:hidden lsg:hidden fidxed bg-resd-500 text-wshite p-2 rounded-full"
          >
            <AiOutlineMenu size={25} />
          </button>
        </div>
        <div className={`w-16 md:w-48 lg:w-48 h-full pst-4 p-2 bg-white border-r-[1px] flex \
          flex-col justify-between transform transition-transform duration-300 ease-in-out 
          ${isSidebarOpen ? '' : '-translate-x-1'}`}>
          <div className='flex flex-col items-center'>
            <Link href='/dashboard/config-app' className={`w-full flex ${isSidebarOpen ? 'justify-between' : 'mt-2 mb-2'}
            hover:bg-gray-200 cursor-pointer p-1 rounded-lg text-center`}>
              <div className='inline-block'>
                <FcDataConfiguration size={20} />
              </div>
              <span className={`pl-1 pr-1 pb-1 ${isSidebarOpen ? '' : 'hidden'}`}>Configuración del sistema</span>
              <div className='inline-block mr-2'>
                <IoChevronDownOutline size={20} />
              </div>
            </Link>
            <Link href='/dashboard/config' className={`w-full flex  ${isSidebarOpen ? 'justify-between' : 'mt-2 mb-2'} 
            hover:bg-gray-200 cursor-pointer p-1 rounded-lg text-center`}>
              <div className='inline-block'>
                <AiOutlineDropbox size={20} />
              </div>
              <span className={`pl-1 pr-1 pb-1 ${isSidebarOpen ? '' : 'hidden'}`}>My workbech</span>
              <div className='inline-block mr-2'>
                <IoChevronDownOutline size={20} />
              </div>
            </Link>
            <Link href='/dashboard/users' className={`w-full flex ${isSidebarOpen ? 'justify-between' : 'mt-2 mb-2'} 
            hover:bg-gray-200 cursor-pointer p-1 rounded-lg text-center`}>
              <div className='inline-block'>
                <RxPerson size={20} />
              </div>
              <span className={`pl-1 pr-1 pb-1 ${isSidebarOpen ? '' : 'hidden'}`}>Usuarios</span>
              <div className='inline-block mr-2'>
                <IoChevronDownOutline size={20} />
              </div>
            </Link>
            <Link href='/dashboard/customers' className={`w-full flex ${isSidebarOpen ? 'justify-between' : 'mt-2 mb-2'}  
            hover:bg-gray-200 cursor-pointer p-1 rounded-lg text-center`}>
              <div className='inline-block'>
                <FaUsers size={20} />
              </div>
              <span className={`pl-1 pr-1 pb-1 ${isSidebarOpen ? '' : 'hidden'}`}>Roles</span>
              <div className='inline-block mr-2'>
                <IoChevronDownOutline size={20} />
              </div>
            </Link>
            <Link href='/dashboard/customers' className={`w-full flex ${isSidebarOpen ? 'justify-between' : 'mt-2 mb-2'}  
            hover:bg-gray-200 cursor-pointer p-1 rounded-lg text-center`}>
              <div className='inline-block'>
                <SiGoogletagmanager size={20} />
              </div>
              <span className={`pl-1 pr-1 pb-1 ${isSidebarOpen ? '' : 'hidden'}`}>Gestión</span>
              <div className='inline-block mr-2'>
                <IoChevronDownOutline size={20} />
              </div>
            </Link>
            <Link href='/dashboard/states' className={`w-full flex ${isSidebarOpen ? 'justify-between' : 'mt-2 mb-2'}  
            hover:bg-gray-200 cursor-pointer p-1 rounded-lg text-center`}>
              <div className='inline-block'>
                <TiFlowMerge size={20} />
              </div>
              <span className={`pl-1 pr-1 pb-1 ${isSidebarOpen ? '' : 'hidden'}`}>Estados</span>
              <div className='inline-block mr-2'>
                <IoChevronDownOutline size={20} />
              </div>
            </Link>
            <Link href='/dashboard/customers' className={`w-full flex ${isSidebarOpen ? 'justify-between' : 'mt-2 mb-2'}  
            hover:bg-gray-200 cursor-pointer p-1 rounded-lg text-center`}>
              <div className='inline-block'>
                <TbTemplate size={20} />
              </div>
              <span className={`pl-1 pr-1 pb-1 ${isSidebarOpen ? '' : 'hidden'}`}>Plantilla de trabajo</span>
              <div className='inline-block mr-2'>
                <IoChevronDownOutline size={20} />
              </div>
            </Link>
            <Link href='/dashboard/config' className={`w-full flex ${isSidebarOpen ? 'justify-between' : 'mt-2 mb-2'}  
            hover:bg-gray-200 cursor-pointer p-1 rounded-lg text-center`}>
              <div className='inline-block'>
                <GrConfigure size={20} />
              </div>
              <span className={`pl-1 pr-1 pb-1 ${isSidebarOpen ? '' : 'hidden'}`}>Párametros</span>
              <div className='inline-block mr-2'>
                <IoChevronDownOutline size={20} />
              </div>
            </Link>
            <Link href='/dashboard/customers' className={`w-full flex ${isSidebarOpen ? 'justify-between' : 'mt-2 mb-2'}  
            hover:bg-gray-200 cursor-pointer p-1 rounded-lg text-center`}>
              <div className='inline-block'>
                <IoBusinessOutline size={20} />
              </div>
              <span className={`pl-1 pr-1 pb-1 ${isSidebarOpen ? '' : 'hidden'}`}>Regla de negocio</span>
              <div className='inline-block mr-2'>
                <IoChevronDownOutline size={20} />
              </div>
            </Link>
            <Link href='/dashboard/customers' className={`w-full flex ${isSidebarOpen ? 'justify-between' : 'mt-2 mb-2'}  
            hover:bg-gray-200 cursor-pointer p-1 rounded-lg text-center`}>
              <div className='inline-block'>
                <AiOutlineUnorderedList size={20} />
              </div>
              <span className={`pl-1 pr-1 pb-1 ${isSidebarOpen ? '' : 'hidden'}`}>Listas</span>
              <div className='inline-block mr-2'>
                <IoChevronDownOutline size={20} />
              </div>
            </Link>
            <Link href='/dashboard/customers' className={`w-full flex ${isSidebarOpen ? 'justify-between' : 'mt-2 mb-2'}  
            hover:bg-gray-200 cursor-pointer p-1 rounded-lg text-center`}>
              <div className='inline-block'>
                <TbReportSearch size={20} />
              </div>
              <span className={`pl-1 pr-1 pb-1 ${isSidebarOpen ? '' : 'hidden'}`}>Reportes</span>
              <div className='inline-block mr-2'>
                <IoChevronDownOutline size={20} />
              </div>
            </Link>
            <Link href='/dashboard/customers' className={`w-full flex ${isSidebarOpen ? 'justify-between' : 'mt-2 mb-2'}  
            hover:bg-gray-200 cursor-pointer p-1 rounded-lg text-center`}>
              <div className='inline-block'>
                <BsFillCloudUploadFill size={20} />
              </div>
              <span className={`pl-1 pr-1 pb-1 ${isSidebarOpen ? '' : 'hidden'}`}>Carga de archivos</span>
              <div className='inline-block mr-2'>
                <IoChevronDownOutline size={20} />
              </div>
            </Link>
            <Link href='/dashboard/customers' className={`w-full flex ${isSidebarOpen ? 'justify-between' : 'mt-2 mb-2'}  
            hover:bg-gray-200 cursor-pointer p-1 rounded-lg text-center`}>
              <div className='inline-block'>
                <HiOutlineShoppingBag size={20} />
              </div>
              <span className={`pl-1 pr-1 pb-1 ${isSidebarOpen ? '' : 'hidden'}`}>Customers</span>
              <div className='inline-block mr-2'>
                <IoChevronDownOutline size={20} />
              </div>
            </Link>
            <Link href='/dashboard/flows' className={`w-full flex ${isSidebarOpen ? 'justify-between' : 'mt-2 mb-2'}  
            hover:bg-gray-200 cursor-pointer p-1 rounded-lg text-center`}>
              <div className='inline-block'>
                <FiSettings size={20} />
              </div>
              <span className={`pl-1 pr-1 pb-1 ${isSidebarOpen ? '' : 'hidden'}`}>Flows</span>
              <div className='inline-block mr-2'>
                <IoChevronDownOutline size={20} />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <main className={`grow  bg-gray-100 min-h-screen transform ${isSidebarOpen ? 'translate-x-1' : ''} 
        transition-transform duration-400 ease-in-out`}
      >
        {children}
      </main>
    </div>
  );
};

export default SidebarApp;
