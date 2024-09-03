import React from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap(){
  const defaultProps = {
    center: {
      lat: -29.960755790769458,
      lng: -51.624251007949766
    },
    zoom: 13
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '70vh', width: '90%' }} className="m-auto">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={-29.96049552713772}
          lng={-51.628628372722524}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}

