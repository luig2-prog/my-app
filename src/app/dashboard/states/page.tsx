import React from 'react';
import { BsPersonFill, BsThreeDotsVertical } from 'react-icons/bs';
import { states } from '@/data/states.js';
import Header from '@/components/Header';

const customers = () => {
  return (
    <div className='bg-gray-100 min-h-screen'>
      <Header name="States" username="luis.hernandez.ji" />
      <div className='p-4'>
        <div className='m-auto p-4 border rounded-lg bg-white overflow-y-auto'>
          <div className='my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 
            items-center justify-center cursor-pointer'>
            <span>Name</span>
            <span className='sm:text-left text-right'>Description</span>
          </div>
          <ul>
            {states.map((state, id) => (
              <li key={id} className='bg-gray-50 hover:bg-gray-100 rounded-lg 
                my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 
                items-center justify-between cursor-pointer'>
                <p className='pl-4'>{state.name}</p>
                <p className='text-gray-600 sm:text-left text-right'>{state.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default customers;
