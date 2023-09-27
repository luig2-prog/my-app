'use client'

import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/stories/Button';
import Cookies from 'js-cookie';
import { login } from '@/app/services/login';

export const LoginForm = () => {
    const router = useRouter();

    const onSubmit = () => {
        const cookieName = 'myTokenName'
        Cookies.set(cookieName, 'prueba')
        router.push('/dashboard')
    }

    const [usernameLogin, setUsernameLogin] = useState<string>('');
    const [passwordLogin, setPasswordLogin] = useState<string>('');

    const handleLogin = async (e: FormEvent) => {
        e.preventDefault();
        try {
            // const data = await login(usernameLogin, passwordLogin);
            const cookieName = 'myTokenName';
            Cookies.set(cookieName, 'prueba');
            router.push('/dashboard');
        } catch (error) {
            console.error('Error en el inicio de sesión:', error);
            // Se puede manejar el error de inicio de sesión aquí y mostrar un mensaje al usuario.
        }
    };

    const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUsernameLogin(e.target.value);
    };

    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPasswordLogin(e.target.value);
    };

    return (
        <form onSubmit={handleLogin}>
            {/* Email input */}
            <div className="relative mb-6" data-te-input-wrapper-init="">
                <input
                    type="text"
                    className="focus:border-[#1266f1] peer block min-h-[auto] w-full rounded border-2 bg-transparent px-3 
                        py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 
                        ease-linear focus:placeholder:opacity-0 
                        data-[te-input-state-active]:placeholder:opacity-100 
                        motion-reduce:transition-none light:text-neutral-200 
                        light:placeholder:text-neutral-200 
                        [&:not([data-te-input-placeholder-active])]:placeholder:opacity-100"
                    id="exampleFormControlInput3"
                    placeholder="Email address"
                    onChange={handleUsernameChange}
                />
            </div>
            {/* Password input */}
            <div className="relative mb-6" data-te-input-wrapper-init="">
                <input
                    type="password"
                    className="focus:border-[#1266f1] peer block min-h-[auto] w-full rounded border-2 bg-transparent px-3 
                    py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 
                    ease-linear focus:placeholder:opacity-0 
                    data-[te-input-state-active]:placeholder:opacity-100 
                    motion-reduce:transition-none light:text-neutral-200 
                    light:placeholder:text-neutral-200 
                    [&:not([data-te-input-placeholder-active])]:placeholder:opacity-100"
                    id="exampleFormControlInput33"
                    placeholder="Password"
                    onChange={handlePasswordChange}
                />
            </div>
            {/* Submit button */}
            {/* <button type="submit">ok</button>
            <a
                href="#!"
                className="text-center text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 light:text-primary-400 light:hover:text-primary-500 light:focus:text-primary-500 light:active:text-primary-600"
            >
                Forgot password?
            </a> */}
            <Button backgroundColor="#1266f1"
                label="Ingresar"
                onClick={onSubmit}
            />
        </form>
    )
}