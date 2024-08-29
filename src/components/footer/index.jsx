import React from 'react'
import MainContainer from '../core/mainContainer'

export default function Footer() {
    return (
        <footer className="bg-zinc-50 rounded-lg  m-4">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img src="/logo.svg" className="h-8" alt="Logo" />
                        <span className="self-center sm:text-lg md:text-xl lg:text-2xl font-semibold whitespace-nowrap text-custom-green">Carbonífera Biodiversa</span>
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-custom-green sm:mb-0 ">
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">About</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="#" className="hover:underline">Carbonífera Biodiversa</a>. All Rights Reserved.</span>
            </div>
        </footer>


    )
}
