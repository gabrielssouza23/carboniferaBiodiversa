import React from 'react';
import { Flex, Tag } from 'antd';
import { Bird, Dna, PawPrint } from 'lucide-react';

export default function TagCategorySpecie({ reino, filo, classe, ordem, familia, genero, especie }) {
  const categories = [
    { value: reino, icon: <Dna className='w-4' /> },
    { value: filo, icon: <Dna className='w-4' /> },
    { value: classe, icon: <Dna className='w-4' /> },
    { value: ordem, icon: <Dna className='w-4' /> },
    { value: familia, icon: <Dna className='w-4' /> },
    { value: genero, icon: <Dna className='w-4' /> },
    { value: especie, icon: <Dna className='w-4' /> },
  ];

  return (
    <>
      <Flex gap="4px 0" wrap>
        {categories.map((specieCategory, index) => (
          specieCategory.value && ( // Verifique se o valor não é vazio
            <Tag key={index} color="#5F6D36" className='flex items-center p-1 gap-1 shadow-md cursor-pointer hover:scale-110 ease-in'>
              {specieCategory.icon} {specieCategory.value}
            </Tag>
          )
        ))}
      </Flex>
    </>
  );
}
