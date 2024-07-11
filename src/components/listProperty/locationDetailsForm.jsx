import React, { useState, useCallback, useRef } from 'react';
import {
  GoogleMap,
  LoadScript,
  Marker,
  Autocomplete
} from '@react-google-maps/api';

const mapContainerStyle = {
  height: '400px',
  width: '100%'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

const libraries = ['places'];


const LocationDetailsForm = () => {
  const [BuildingSocietyName, setBuildingSocietyName] = useState('');
  const [LocalityArea, setLocalityArea] = useState('');
  const [selectedLandmarkStreetName, setLandmarkStreetName] = useState('');
  const [selectedMaintainanceTerm, setMaintainanceTerm] = useState('');

  const handleBuildingSocietyName = (e) => {
    setBuildingSocietyName(e.target.value);
  }

  const handleLocalityArea = (e) => {
    setLocalityArea(e.target.value);
  }

  const handleLandmarkStreetName = (e) => {
    setLandmarkStreetName(e.target.value);
  };

  const handleMaintainanceTerm = (e) => {
    setMaintainanceTerm(e.target.value);
  };

  function isFilled(String) {
    return String.length === 0 ? "text-[#00000034]" : "text-[#122B49]"
  }

  const [marker, setMarker] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(null);
  const autocompleteRef = useRef(null);

  const onLoad = useCallback((map) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          map.setCenter(pos);
          setCurrentLocation(pos);
          setMarker(pos);
        },
        () => {
          console.error('Error: The Geolocation service failed.');
        }
      );
    }
  }, []);

  const onPlaceChanged = () => {
    if (autocompleteRef.current !== null) {
      const place = autocompleteRef.current.getPlace();
      if (place.geometry) {
        const location = {
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng()
        };
        setMarker(location);
      }
    }
  };

  const onMapClick = (e) => {
    const location = {
      lat: e.latLng.lat(),
      lng: e.latLng.lng()
    };
    setMarker(location);
  };

  return (<div className='pt-0 pl-12 h-3/4 font-medium text-base '>
    <div className="form top heading bg-red h-full scroll pdl-20 pdt-10 pdr-30">

      {/* Rent, Security, Maintainance*/}

      <div className="block1 flex w-full flex-wrap">

        <div className="sub-block1 relative w-1/2 mb-8">
          <p className="mt-2.5 mb-1.5">Building/ Society Name <span className="required">*</span></p>
          <input type="text" className="w-4/5 py-4 px-1.5 h-10" name="Building/ Society Name" id="Building/ Society Name" placeholder="₹" value={BuildingSocietyName} onChange={handleBuildingSocietyName} required />
          {/* <span className={`input-suffix p-2.5 absolute right-[21%] ${isFilled(Building/ Society Name)}`}>/ Month</span> */}
        </div>

        <div className="sub-block2 relative w-1/2 mb-8">
          <p className="mt-2.5 mb-1.5">Locality / Area <span className="required">*</span></p>
          <input type="text" className="w-4/5 py-4 px-1.5 h-10" name="Locality / Area" id="Locality / Area" placeholder="₹" value={LocalityArea} onChange={handleLocalityArea} required />
          {/* <span className={`input-suffix p-2.5 absolute right-[21%] ${isFilled(Locality / Area)}`}>/ Month</span> */}
        </div>

        <div className="sub-block2 relative w-1/2 mb-8">
          <p className="mt-2.5 mb-1.5">Landmark / Street Name <span className="required">*</span></p>
          <input type="text" className="w-4/5 py-4 px-1.5 h-10" name="Landmark / Street Name" id="Landmark / Street Name" placeholder="₹" value={selectedLandmarkStreetName} onChange={handleLandmarkStreetName} required />
          {/* <span className={`input-suffix p-2.5 absolute right-[21%] ${isFilled(Landmark / Street Name)}`}>/ Month</span> */}
        </div>


        {/* {selectedMaintainance === 'Extra Maintainance' && <> */}
        <div className="sub-block4 relative w-1/2 mb-8">
          <p className="mt-2.5 mb-1.5">City <span className="required">*</span></p>
          <select
            id="countries"
            className="py-2 px-4 w-4/5 text-base border-2 border-[#ccc] bg-white rounded-sm text-[#333]"
            name="countries"
            value={selectedMaintainanceTerm}
            onChange={handleMaintainanceTerm}
            required
          >
            <option value="" disabled hidden>
              Select
            </option>
            <option value="Mumbai, Maharastra">Mumbai, Maharastra</option>
            <option value="Patna, Bihar">Patna, Bihar</option>
            <option value="Pune, Maharastra">Pune, Maharastra</option>
          </select>                    {/* <span className="input-suffix p-2.5 absolute right-[21%] text-[#00000034]">Sq. Ft.</span> */}
        </div>
        {/* </>} */}
      </div>
    </div>
    <div className="mx-auto h-4/5 w-4/5">
      <LoadScript
        googleMapsApiKey="AIzaSyAVtGrAYdDNOsOHcwS63gZLIb_kfPhdHWc"
        libraries={libraries}
      >
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={10}
          onLoad={onLoad}
          onClick={onMapClick}
        >
          {marker && <Marker position={marker} />}
          <Autocomplete onLoad={ref => (autocompleteRef.current = ref)} onPlaceChanged={onPlaceChanged}>
            <input
              type="text"
              placeholder="Search a location"
              style={{
                boxSizing: `border-box`,
                border: `1px solid transparent`,
                width: `240px`,
                height: `32px`,
                padding: `0 12px`,
                borderRadius: `3px`,
                boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                fontSize: `14px`,
                outline: `none`,
                textOverflow: `ellipses`,
                position: "absolute",
                left: "50%",
                marginLeft: "-120px"
              }}
            />
          </Autocomplete>
        </GoogleMap>
      </LoadScript>
    </div>
  </div>
  );
}

export default LocationDetailsForm;
