'use client'
import { useRouter } from 'next/navigation'
import { Button } from '@/stories/Button'
import React, { useEffect } from 'react';
import Cookies from 'js-cookie';

interface HeaderProps {
  name: string;
  username?: string;
}

const Header = (headerProps: HeaderProps) => {
  console.log("🚀 ~ file: Header.tsx:8 ~ Header ~ name:", name)
  const cookieName = 'myTokenName';
  const router = useRouter()
  
  const logout = () => {
    Cookies.remove(cookieName);
    router.push('/')
  }
  
  useEffect(() => {
    // Lógica para eliminar la cookie cuando el componente se monta
    // Cookies.remove(cookieName);
    
    // Opcionalmente, puedes hacer algo después de eliminar la cookie, como redirigir a otra página.
    // Ejemplo de redirección después de eliminar la cookie:
    // window.location.href = '/nueva-pagina';
  }, []);

  return (
    <div className='grid grid-flow-col items-center px-4 pt-4'>
        <div className='col-span-12'>{headerProps.name}</div>
        <div className=''>
          <div>{headerProps.username}</div>
          <a className='col-spa cursor-pointer' onClick={logout}>Cerrar sesión</a>
        </div>
    </div>
  )
}

export default Header