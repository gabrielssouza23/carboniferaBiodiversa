import React from 'react'
import Divider from '../../components/divider'
import PropTypes from 'prop-types';

export default function References({ allReferences }) {
  const referencesArray = allReferences.split(';')
    .map(reference => reference.trim())
    .filter((value, index, self) => self.indexOf(value) === index); // Remove duplicatas

  return (
    <>
      <h1 className='text-2xl text-custom-green font-semibold'>Referências</h1>
      <Divider />
      <ol type='1' className='list-decimal space-y-2 list-inside leading-5 text-justify text-sm italic'>
        {referencesArray.map((reference, index) => (
          <li key={index}>{reference}</li>
        ))}
      </ol>
    </>
  );
}

References.propTypes = {
  allReferences: PropTypes.string.isRequired, // Agora espera uma string
};
