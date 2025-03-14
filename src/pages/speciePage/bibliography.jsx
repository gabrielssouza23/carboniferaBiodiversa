import React from 'react'
import Divider from '../../components/divider'

export default function Bibliography() {
    return (
        <>
            <h1 className='text-2xl text-custom-green font-semibold'>Bibliografia</h1>
            <Divider />
            <ol type='1' className='list-decimal space-y-2 list-inside leading-5 text-justify text-sm italic'>
                <li>
                    BirdLife International (2020). "Vanellus chilensis". IUCN Red List of Threatened Species. 2020: e.T22694075A163620949. doi:10.2305/IUCN.UK.2020-3.RLTS.T22694075A163620949.en. Retrieved 12 November 2021.
                </li>
                <li>
                    Mlíkovský, Jiří (26 August 2011). "Nomenclatural and taxonomic status of bird taxa (Aves) described by an ornithological swindler, Josef Prokop Pražák (1870–1904)". Zootaxa. 3005 (3005): 45–68. doi:10.11646/zootaxa.3005.1.2.
                </li>
                <li>
                    Terrilyn Alaniz (2024-04-17). "Sighting". Birda. Retrieved 2024-04-18.
                </li>
            </ol>
        </>
    )
}
