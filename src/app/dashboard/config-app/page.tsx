import React from 'react';
import { states } from '@/data/states.js';
import Header from '@/components/Header';
import { BsImageFill } from 'react-icons/bs';
import { IoChevronDownOutline } from 'react-icons/io5';
import { FaUserCircle } from 'react-icons/fa';
import { GrConfigure } from 'react-icons/gr';
import { TbInputSearch } from 'react-icons/tb';

const config_app = () => {
  return (
    <div className='bg-gray-100 min-h-screen'>
      <Header name="Administrar y configurar aplicación" username="luis.hernandez.ji" />
      <div className='p-4'>
        <div className='m-auto p-4 border rounded-lg bg-white overflow-y-auto'>
          <div className="grid grid-cols-3 gap-10 justify-center text-center">
            <div className='grid justify-items-center mb-10 pt-5 cursor-pointer'>
              <BsImageFill size={80} />
              <span className='pl-1 pr-1 pb-1'>Configuración visual</span>
            </div>
            <div className='grid justify-items-center mb-10 pt-5 cursor-pointer'>
              <IoChevronDownOutline size={80} />
              <span className='pl-1 pr-1 pb-1'>Configuración de menús por clientes</span>
            </div>
            <div className='grid justify-items-center mb-10 pt-5 cursor-pointer'>
              <FaUserCircle size={80} />
              <span className='pl-1 pr-1 pb-1'>Usuarios SuperAdmins</span>
            </div>
            <div className='grid justify-items-center mb-10 pt-5 cursor-pointer'>
              <GrConfigure size={80} />
              <span className='pl-1 pr-1 pb-1'>Otras configuraciones</span>
            </div>
            <div className='grid justify-items-center mb-10 pt-5 cursor-pointer'>
              <FaUserCircle size={80} />
              <span className='pl-1 pr-1 pb-1'>Crear perfiles para clientes</span>
            </div>
            <div className='grid justify-items-center mb-10 pt-5 cursor-pointer'>
              <TbInputSearch size={80} />
              <span className='pl-1 pr-1 pb-1'>Creación de campos para la gestión</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default config_app;