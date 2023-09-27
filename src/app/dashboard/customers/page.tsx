import React from 'react';
import { BsPersonFill, BsThreeDotsVertical } from 'react-icons/bs';
import { tenants } from '../../../data/tenants.js';
import Header from '@/components/Header';
import Image from 'next/image';
import img_team from '@/public/team.png';

const customers = () => {
  return (
    <div className='bg-gray-100 min-h-screen'>
      <Header name="Customers" username="luis.hernandez.ji" />
      <div className='p-4'>
        <div className='m-auto p-4 border rounded-lg bg-white overflow-y-auto'>
          <div className='my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-center cursor-pointer'>
            <span>Name</span>
            <span className='sm:text-left text-right'>Owner</span>
            <span className='hidden md:grid'>Date</span>
            <span className='hidden sm:grid'>Method</span>
          </div>
          <ul>
            {tenants.map((tenant, id) => (
              <li key={id} className='bg-gray-50 hover:bg-gray-100 rounded-lg 
                my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 
                items-center justify-between cursor-pointer'>
                <div className='flex items-center'>
                  <div className='bg-purple-100 p-3 rounded-lg'>
                    <BsPersonFill className='text-purple-800' />
                  </div>
                  <p className='pl-4'>{tenant.name}</p>
                </div>
                <p className='text-gray-600 sm:text-left text-right'>{tenant.owner}</p>
                <p className='text-gray-600 sm:text-left text-right'>{tenant.date}</p>
                <div className='sm:flex hidden justify-between items-center'>
                  <BsThreeDotsVertical />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default customers;
