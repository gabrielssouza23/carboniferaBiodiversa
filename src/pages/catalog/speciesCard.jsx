import { Image } from 'antd'
import React from 'react'

export default function SpeciesCard() {
    return (
        <div className='flex bg-slate-200 flex-col pb-3 shadow-sm'>
            {/* imgbox */}
            <div className=''>
                <Image
                    width={200}
                    src="queroquero.jpg"
                />
            </div>
            <div className=''>
                <h2 className=''>
                    Quero-Quero
                </h2>
                <p className=''>
                    (Vanellus chilensis)
                </p>
            </div>
        </div>
    )
}
