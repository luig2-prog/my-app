'use client'
import { Button } from '@/stories/Button'
import React, { useEffect } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation'

const Header = (name: any) => {
  const cookieName = 'myTokenName';
  const router = useRouter()
  
  const logout = () => {
    Cookies.remove(cookieName);
    router.push('/')
  }
  
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
        <h2>name</h2>
        <h2>Welcome Back, Clint</h2>
        <Button backgroundColor="#1266f1" label="Cerrar sesión" onClick={logout}/>
    </div>
  )
}

export default Header