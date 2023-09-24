import React from 'react';
import { BsPersonFill, BsThreeDotsVertical } from 'react-icons/bs';
import { usersData } from '../../../data/usersData.js';
import Header from '@/components/Header';
import Image from 'next/image';
import img_team from '@/public/team.png';

const users = () => {
  // console.log('customers');
  usersData.map((users) => {
    console.log("🚀 ~ file: page.tsx:8 ~ data.map ~ customers:", users)
  })
  console.log("🚀 ~ file: page.tsx:11 ~ data.map ~ data:", users)
  return (
    <div className='bg-gray-100 min-h-screen'>
      <Header name="Users" username="luis.hernandez.ji" />
      <div className='p-4'>
        <div className='m-auto p-4 border rounded-lg bg-white overflow-y-auto'>
          <div className='my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-center cursor-pointer'>
            <span>Name</span>
            <span className='sm:text-left text-right'>Username</span>
            <span className='hidden md:grid'>Last Order</span>
            <span className='hidden sm:grid'>Method</span>
          </div>
          <ul>
            {usersData.map((user, id) => (
              <li key={id} className='bg-gray-50 hover:bg-gray-100 rounded-lg 
                my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 
                items-center justify-between cursor-pointer'>
                <div className='flex items-center'>
                  <div className='bg-purple-100 p-3 rounded-lg'>
                    <BsPersonFill className='text-purple-800' />
                  </div>
                  <p className='pl-4'>{`${user.name} ${user.lastname}`}</p>
                </div>
                <p className='text-gray-600 sm:text-left text-right'>{user.username}</p>
                <Image
                  src={img_team}
                  className="w-10"
                  alt="Phone image"
                />
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

export default users;
