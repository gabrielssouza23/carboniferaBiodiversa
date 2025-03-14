import { ChevronDown } from 'lucide-react'
import React from 'react'

export default function CategoriesList() {
  return (
    <div className='flex flex-wrap sm:flex-nowrap justify-center items-center m-auto p-3 gap-4 border-2 border-solid border-custom-green rounded-lg w-full sm:w-[500px] max-w-xs sm:max-w-[500px] text-custom-green uppercase child-hover:scale-110 transition-transform duration-300 ease-in-out transform shadow-lg'>    
      <p className='hover:text-white hover:bg-custom-green px-2 py-1 rounded transition-colors duration-300 ease-in-out'>Reino</p>
      <p className='hover:text-white hover:bg-custom-green px-2 py-1 rounded transition-colors duration-300 ease-in-out'>Filo</p>
      <p className='hover:text-white hover:bg-custom-green px-2 py-1 rounded transition-colors duration-300 ease-in-out'>Classe</p>
      <p className='hover:text-white hover:bg-custom-green px-2 py-1 rounded transition-colors duration-300 ease-in-out'>Ordem</p>
      <p className='hover:text-white hover:bg-custom-green px-2 py-1 rounded transition-colors duration-300 ease-in-out'>Família</p>
      <p className='hover:text-white hover:bg-custom-green px-2 py-1 rounded transition-colors duration-300 ease-in-out'>Gênero</p>
    </div>
  )
}
