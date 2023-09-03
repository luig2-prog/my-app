'use client'

import { useRouter } from 'next/navigation'
import { Button } from '@/stories/Button'
import Cookies from 'js-cookie';

export const LoginForm = () => {
    const router = useRouter()

    return (
        <form>
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
                />
            </div>
            {/* Forgot password link */}
            {/* Submit button */}
            <Button backgroundColor="#1266f1" label="Send" />
            <a
                href="#!"
                className="text-center text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 light:text-primary-400 light:hover:text-primary-500 light:focus:text-primary-500 light:active:text-primary-600"
            >
                Forgot password?
            </a>
            <Button backgroundColor="#1266f1"
                label="Buttonsss"
                onClick={() => { 
                    const cookieName = 'myTokenName'
                    Cookies.set(cookieName,'prueba')
                    console.log(Cookies.get(cookieName));
                    router.push('/dashboard')

                }}
            />
        </form>
    );
}