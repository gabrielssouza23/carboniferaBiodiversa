import React from 'react';
import {
  CheckCircleOutlined,
  ClockCircleOutlined,
  CloseCircleOutlined,
  ExclamationCircleOutlined,
  MinusCircleOutlined,
  SyncOutlined,
} from '@ant-design/icons';
import { Divider, Flex, Tag } from 'antd';

export default function TagCategorySpecie() {
  const specieCategories = [
    'Animalia', 
    'Chordata', 
    'Aves', 
    'Charadriiformes', 
    'Charadriidae', 
    'Vanellus', 
    'Vanellus chilensis'
  ];	
  return (
<>
    <Flex gap="4px 0" wrap>
    {specieCategories.map((specieCategory, index) => (
        <Tag key={index} icon={<CheckCircleOutlined />} color="blue">
          {specieCategory}
        </Tag>
      ))}
      {/* <Tag icon={<CheckCircleOutlined />} color="">
        success
      </Tag>
      <Tag icon={<SyncOutlined spin />} color="processing">
        processing
      </Tag>
      <Tag icon={<CloseCircleOutlined />} color="error">
        error
      </Tag>
      <Tag icon={<ExclamationCircleOutlined />} color="warning">
        warning
      </Tag>
      <Tag icon={<ClockCircleOutlined />} color="default">
        waiting
      </Tag>
      <Tag icon={<MinusCircleOutlined />} color="default">
        stop
      </Tag> */}
    </Flex>
  </>  )
}
