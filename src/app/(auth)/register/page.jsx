
'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function Page() {
    const routers = useRouter()
    async function handleRegister(userInputSignUp) {
        
        const newUserInputSignUp = {
            firsName:userInputSignUp.get('firsName'),
            lastName:userInputSignUp.get('lastName'),
            email:userInputSignUp.get('email'),
            password:userInputSignUp.get('password'),
            passwordConfirm:userInputSignUp.get('passwordConfirm')
        }
    }
    return (
        <>
            <div className="min-h-10 bg-gray-100 text-gray-900 flex justify-center">
                <div className=" m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
                    <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
                        <div className="flex justify-between">
                            <Image src={"/assets/icons/logo.svg"} width={150} height={100} />
                            <Image src={"/assets/icons/arrow.svg"} width={25} height={30} />
                        </div>

                        <form>
                            <div className="grid gap-6 mb-6 md:grid-cols-2 mt-4">
                                <div>
                                    <label for="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
                                    <input type="text"
                                        name='firstName'

                                        id="first_name" className="peer h-10 w-full rounded-md bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out text-black" placeholder="chhunyeang" required />
                                </div>
                                <div>
                                    <label for="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
                                    <input type="text"
                                        name='lastName'
                                        id="last_name" className="peer h-10 w-full rounded-md bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out text-black" placeholder="yeang" required />
                                </div>
                                <div>
                                    <label for="company" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                    <input type="email"
                                        name='email'
                                        id="company" className="peer h-10 w-full rounded-md bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out text-black" placeholder="chhunyeangseng@gmail.com" />
                                </div>
                                <div>
                                    <label for="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
                                    <input type="tel"
                                    name='tel'
                                    id="phone" className="peer h-10 w-full rounded-md bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out text-black" placeholder="0123456789" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                                </div>
                                <div>
                                    <label for="website" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">password</label>
                                    <input type="password"
                                    name='password'
                                    id="website" className="peer h-10 w-full rounded-md bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out text-black" placeholder="××××××××××××××" required />
                                </div>
                                <div>
                                    <label for="visitors" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> comfirm password</label>
                                    <input type="password"
                                    name='passwordCofirm'
                                    id="visitors" className="peer h-10 w-full rounded-md bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out text-black" placeholder="××××××××××××××" required />
                                </div>
                            </div>

                            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign Up</button>
                        </form>

                    </div>
                    <div className="flex  text-center  lg:flex">
                        <div className="m-12 xl:m-16  bg-contain bg-center bg-no-repeat">
                            <Image src={"/image/register.jpg"} width={400} height={400} />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}