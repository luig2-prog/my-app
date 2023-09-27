import React from 'react';
import { BsPersonFill, BsThreeDotsVertical } from 'react-icons/bs';
import { usersData } from '../../../data/usersData.js';
import Header from '@/components/Header';
import Image from 'next/image';
import img_team from '@/public/team.png';
import FlowV2 from './flow-v2';
import ReactFlowV2 from './flow-v2';
// import Flow from '@/app/dashboard/flows/flow';

const users = () => {
  // console.log('customers');
  usersData.map((users) => {
    console.log("🚀 ~ file: page.tsx:8 ~ data.map ~ customers:", users)
  })
  console.log("🚀 ~ file: page.tsx:11 ~ data.map ~ data:", users)
  return (
    <div className='bg-gray-100 min-h-screen'>
      <Header name="Flows" username="luis.hernandez.ji" />
      <div className='p-4'>
        <div className='m-auto p-4 border rounded-lg bg-white overflow-y-auto'>
          <div className='my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-center cursor-pointer'>
            <span>Name</span>
            <span className='sm:text-left text-right'>Username</span>
            <span className='hidden md:grid'>Last Order</span>
            <span className='hidden sm:grid'>Method</span>
          </div>
          <div style={{ height: 500 }}>
            {/* <Flow /> */}
            {/* <FlowV2 /> */}
            <ReactFlowV2 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default users;