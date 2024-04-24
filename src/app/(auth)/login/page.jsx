"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'


const page = () => {
    const routers = useRouter()
    async function handleLogin(userInput) {
        console.log("User Input:", userInput.get('email'), userInput.get('password'));
        const newUserInput = {
            email: userInput.get('email'),
            password: userInput.get('password')
        }
        const res = await signIn('credentials', {
            redirect: false,
            ...newUserInput,
        });
        console.log("inLogin ", res)
        if (res.ok) {
            routers.push('/darshboard');
        }
    }
    return (
        <div>
            <div className="flex justify-center">
                <div className=" shadow flex justify-center flex-1">
                    <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
                        <div className="flex justify-between">
                            <Image src={"/assets/icons/logo.svg"} width={150} height={100} />
                        </div>
                        <form action={handleLogin}>
                            <div className="mt-12 flex flex-col items-center">
                                <h1 className="text-2xl xl:text-3xl justify-start">Login</h1>
                                <div className="w-full flex-1 mt-8">
                                    <div className="mx-auto max-w-xs">
                                        <input
                                            className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                            type="email"
                                            name='email'
                                            placeholder="Email"
                                        />
                                        <input
                                            className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                                            type="password"
                                            name='password'
                                            placeholder="Password"
                                        />

                                        <button className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                                            <span className="ml-3 text-white" >Login</span>
                                        </button>


                                        <div className="mt-2">
                                            <div className="flex gap-2 pt-5">
                                                <p className="text-gray-600 text-sm">
                                                    Don't have an account?
                                                </p>
                                                <Link href="/register" className="text-blue-500 text-sm underline">
                                                    Register here
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="my-4 border-b text-center">
                                            <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                                                Continue with
                                            </div>
                                        </div>
                                        <div class="px-6 sm:px-0 max-w-sm">

                                            <button type="button" class="text-white w-full  bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between mr-2 mb-2"><svg class="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>Sign up with Google<div></div></button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </form>
                        <p className=" mt-11 ">
                            &copy; 2024 My office. All rights reservered.
                        </p>
                    </div>
                    <div className="flex-text-center hidden lg:flex">
                        <Image src={"/image/login.jpg"} width={500} height={20} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page