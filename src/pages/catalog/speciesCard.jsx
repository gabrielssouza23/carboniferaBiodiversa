import { Image } from 'antd'
import React from 'react'
import React, { useEffect, useState } from "react";
import api from "../../services/api";

export default function SpeciesCard() {    
    const [specie, setSpecie] = useState([]);

    useEffect(() => {
        api
          .get("/species/species-all")
          .then((response) => setSpecie(response.data))
          .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
          });
      }, []);

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
                    {specie.nomePopular}
                    {/* Quero-Quero */}
                </h2>
                <p className=''>
                    ({specie.nomeCientifico})
                    {/* (Vanellus chilensis) */}
                </p>
            </div>
        </div>
    )
}
