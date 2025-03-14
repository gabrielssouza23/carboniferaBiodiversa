import React, { useEffect } from "react";
import GoogleMapReact from 'google-map-react';
import { Dot } from "lucide-react";
import api from "../../services/api";
import Loader from "../../components/loader";

const AnyReactComponent = () => <div>{<Dot color="#ff0000" />}</div>;

const MAPS_KEY = import.meta.env.VITE_MAPS_KEY;

export default function SimpleMap({ specieId }) {
  const [loading, setLoading] = React.useState(true);
  const [locations, setLocations] = React.useState([]);

  useEffect(() => {
    api.get(`/species/specie-locations/${specieId}`)
      .then((response) => {
        if (!response.data.error) {
          setLocations(response.data.data); // Acessa o array 'data' corretamente
        } else {
          console.error("Erro ao buscar localizações");
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Ops! Ocorreu um erro: " + err);
        setLoading(false);
      });
  }, [specieId]);

  if (loading) {
    return <Loader />;
  }

  if (locations.length === 0) {
    return <div className="flex justify-center">Nenhuma localização encontrada</div>;
  }

  const defaultProps = {
    center: {
      lat: locations[0].longitude,  // Acessa a primeira localização
      // lng: locations[0].longitude
      lng: locations[0].latitude
    },
    zoom: 13
  };

  return (
    <div style={{ height: '70vh', width: '90%' }} className="m-auto">
      <GoogleMapReact
        bootstrapURLKeys={{ key: MAPS_KEY }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        {locations.map((location, index) => (
          <AnyReactComponent
            key={index}
            lat={location.longitude}
            lng={location.latitude}
          />
        ))}
      </GoogleMapReact>
    </div>
  );
}