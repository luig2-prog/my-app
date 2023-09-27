import React from 'react';
import Link from 'next/link';
import { RxSketchLogo, RxPerson } from 'react-icons/rx';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { GrConfigure } from 'react-icons/gr';
import { AiOutlineDropbox, AiOutlineUnorderedList } from 'react-icons/ai';
import { FiSettings } from 'react-icons/fi';
import { FaUsers } from 'react-icons/fa';
import { FcDataConfiguration } from 'react-icons/fc';
import { SiGoogletagmanager } from 'react-icons/si';
import { TiFlowMerge } from 'react-icons/ti';
import { TbTemplate, TbReportSearch } from 'react-icons/tb';
import { IoBusinessOutline } from 'react-icons/io5';
import { BsFillCloudUploadFill } from 'react-icons/bs';

interface LayoutProps {
  children?: any;
  description?: string;
}

const SidebarApp: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='flex'>
      <div className='fixed w-44 h-screen pt-4 p-2 bg-white border-r-[1px] flex flex-col justify-between'>
        <div className='flex flex-col items-center'>
          <Link href='/dashboard'>
            <div className='bg-purple-800 text-white p-3 rounded-lg inline-block'>
              <RxSketchLogo size={20} />
            </div>
          </Link>
          <Link href='/dashboard/config' className='w-full flex items-center 
            hover:bg-gray-200 cursor-pointer p-1 rounded-lg'>
            <div className='inline-block'>
              <FcDataConfiguration size={20} />
            </div>
            <span className='pl-1 pr-1 pb-1'>Configuración del sistema</span>
          </Link>
          <Link href='/dashboard/config' className='w-full flex items-center 
            hover:bg-gray-200 cursor-pointer p-1 rounded-lg'>
            <div className='inline-block'>
              <AiOutlineDropbox size={20} />
            </div>
            <span className='pl-1 pr-1 pb-1'>My workbech</span>
          </Link>
          <Link href='/dashboard/users' className='w-full flex items-center 
            hover:bg-gray-200 cursor-pointer p-1 rounded-lg'>
            <div className='inline-block'>
              <RxPerson size={20} />
            </div>
            <span className='pl-1 pr-1 pb-1'>Usuarios</span>
          </Link>
          <Link href='/dashboard/customers' className='w-full flex items-center 
            hover:bg-gray-200 cursor-pointer p-1 rounded-lg'>
            <div className='inline-block'>
              <FaUsers size={20} />
            </div>
            <span className='pl-1 pr-1 pb-1'>Roles</span>
          </Link>
          <Link href='/dashboard/customers' className='w-full flex items-center 
            hover:bg-gray-200 cursor-pointer p-1 rounded-lg'>
            <div className='inline-block'>
              <SiGoogletagmanager size={20} />
            </div>
            <span className='pl-1 pr-1 pb-1'>Gestión</span>
          </Link>
          <Link href='/dashboard/states' className='w-full flex items-center 
            hover:bg-gray-200 cursor-pointer p-1 rounded-lg'>
            <div className='inline-block'>
              <TiFlowMerge size={20} />
            </div>
            <span className='pl-1 pr-1 pb-1'>Estados</span>
          </Link>
          <Link href='/dashboard/customers' className='w-full flex items-center 
            hover:bg-gray-200 cursor-pointer p-1 rounded-lg'>
            <div className='inline-block'>
              <TbTemplate size={20} />
            </div>
            <span className='pl-1 pr-1 pb-1'>Plantilla de trabajo</span>
          </Link>
          <Link href='/dashboard/config' className='w-full flex items-center 
            hover:bg-gray-200 cursor-pointer p-1 rounded-lg'>
            <div className='inline-block'>
              <GrConfigure size={20} />
            </div>
            <span className='pl-1 pr-1 pb-1'>Párametros</span>
          </Link>
          <Link href='/dashboard/customers' className='w-full flex items-center 
            hover:bg-gray-200 cursor-pointer p-1 rounded-lg'>
            <div className='inline-block'>
              <IoBusinessOutline size={20} />
            </div>
            <span className='pl-1 pr-1 pb-1'>Regla de negocio</span>
          </Link>
          <Link href='/dashboard/customers' className='w-full flex items-center 
            hover:bg-gray-200 cursor-pointer p-1 rounded-lg'>
            <div className='inline-block'>
              <AiOutlineUnorderedList size={20} />
            </div>
            <span className='pl-1 pr-1 pb-1'>Listas</span>
          </Link>
          <Link href='/dashboard/customers' className='w-full flex items-center 
            hover:bg-gray-200 cursor-pointer p-1 rounded-lg'>
            <div className='inline-block'>
              <TbReportSearch size={20} />
            </div>
            <span className='pl-1 pr-1 pb-1'>Reportes</span>
          </Link>
          <Link href='/dashboard/customers' className='w-full flex items-center 
            hover:bg-gray-200 cursor-pointer p-1 rounded-lg'>
            <div className='inline-block'>
              <BsFillCloudUploadFill size={20} />
            </div>
            <span className='pl-1 pr-1 pb-1'>Carga de archivos</span>
          </Link>
          <Link href='/dashboard/customers' className='w-full flex items-center 
            hover:bg-gray-200 cursor-pointer p-1 rounded-lg'>
            <div className='inline-block'>
              <HiOutlineShoppingBag size={20} />
            </div>
            <span className='pl-1 pr-1 pb-1'>Customers</span>
          </Link>
          <Link href='/dashboard/flows' className='w-full flex items-center 
            hover:bg-gray-200 cursor-pointer p-1 rounded-lg'>
            <div className='inline-block'>
              <FiSettings size={20} />
            </div>
            <span className='pl-1 pr-1 pb-1'>Flows</span>
          </Link>
        </div>
      </div>
      <main className='w-full ml-44'>{children}</main>
    </div>
  );
};

export default SidebarApp;
