import { LoginForm } from '@/components/LoginForm';
import Image from 'next/image';
import React from 'react';

const login = () => {
  return (
    <section className="h-screen">
      <div className="container h-full px-6 py-24">
        <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
            <Image
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="w-full"
              alt="Phone image"
              width={300}
              height={300}
            />
          </div>
          <div className="md:w-8/12 lg:ml-6 lg:w-5/12">
            <LoginForm />            
          </div>
        </div>
      </div >
    </section >
  );
};

export default login;