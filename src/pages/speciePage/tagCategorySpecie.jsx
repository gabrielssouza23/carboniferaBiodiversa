import React from 'react';
import {
  CheckCircleOutlined,
  ClockCircleOutlined,
  CloseCircleOutlined,
  ExclamationCircleOutlined,
  MinusCircleOutlined,
  SyncOutlined,
} from '@ant-design/icons';
import { Flex, Tag } from 'antd';
import { Bird, Dna, PawPrint, Sprout } from 'lucide-react';

export default function TagCategorySpecie() {
  const specieCategories = [
    {"value": 'Animalia', "icon":  <PawPrint className='w-4'/> }, 
    {"value": 'Chordata', "icon":  <PawPrint className='w-4'/> }, 
    {"value": 'Aves', "icon":  <Bird className='w-4'/>}, 
    {"value": 'Charadriiformes', "icon":  <PawPrint className='w-4'/> }, 
    {"value": 'Charadriidae', "icon":  <PawPrint className='w-4'/> }, 
    {"value": 'Vanellus', "icon":  <PawPrint className='w-4'/> }, 
    {"value": 'Vanellus chilensis', "icon":  <Dna className='w-4'/> }
  ];	
  return (
<>
    <Flex gap="4px 0" wrap>
    {specieCategories.map((specieCategory, index) => (
        <Tag key={index} icon={specieCategory.icon} color="#5F6D36" className='flex items-center p-1 gap-1 shadow-md cursor-pointer hover:scale-110 ease-in'>
          {specieCategory.value}
        </Tag>
      ))}
    </Flex>
  </>  )
}
