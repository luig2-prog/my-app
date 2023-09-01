'use client'

import { Button } from "@/stories/Button";

export const LoginForm = () => {
    return (
        <form>
            {/* Email input */}
            <div className="relative mb-6" data-te-input-wrapper-init="">
                <input
                    type="text"
                    className="peer block min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none light:text-neutral-200 light:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="exampleFormControlInput3"
                    placeholder="Email address"
                />
            </div>
            {/* Password input */}
            <div className="relative mb-6" data-te-input-wrapper-init="">
                <input
                    type="password"
                    className="peer block min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none light:text-neutral-200 light:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="exampleFormControlInput33"
                    placeholder="Password"
                />
            </div>
            {/* Forgot password link */}
            {/* Submit button */}
            <Button label="Send" />
            <a
                href="#!"
                className="text-center text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 light:text-primary-400 light:hover:text-primary-500 light:focus:text-primary-500 light:active:text-primary-600"
            >
                Forgot password?
            </a>
        </form>
    );
}