'use client'
import { Button } from '@/stories/Button'
import React, { useEffect } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation'

const Header = () => {
  const cookieName = 'myTokenName';
  const router = useRouter()

  useEffect(() => {
    console.log('e')
    // Lógica para eliminar la cookie cuando el componente se monta
    // Cookies.remove(cookieName);

    // Opcionalmente, puedes hacer algo después de eliminar la cookie, como redirigir a otra página.
    // Ejemplo de redirección después de eliminar la cookie:
    // window.location.href = '/nueva-pagina';
  }, []);

  return (
    <div className='flex justify-between px-4 pt-4'>
        <h2>Dashboard</h2>
        <h2>Welcome Back, Clint</h2>
        <Button backgroundColor="#1266f1" label="Cerrar sesión" onClick={() => {
          console.log('Es')
          console.log(Cookies.get(cookieName));
          Cookies.remove(cookieName);
          console.log(Cookies.get(cookieName));
          router.push('/')
        }}/>
    </div>
  )
}

export default Header