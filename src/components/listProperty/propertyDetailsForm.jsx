import React, { useState } from 'react';


const PropertyDetailsForm = () => {
    const [selectedPropertyFor, setSelectedPropertyFor] = useState('');
    const [BuildUpArea, setBuildUpArea] = useState('');
    const [CarpetArea, setCarpetArea] = useState('');
    const [selectedPropertyType, setSelectedPropertyType] = useState('');
    const [selectedPropertyType1, setSelectedPropertyType1] = useState('');
    const [selectedPropertyAge1, setSelectedPropertyAge1] = useState('');
    const [selectedBHKType, setSelectedBHKType] = useState('');
    const [selectedBathroom, setSelectedBathroom] = useState('');
    const [selectedBalcony, setSelectedBalcony] = useState('');
    const [selectedTenantPreference, setSelectedTenantPreference] = useState('');
    const [selectedAvailability, setSelectedAvailability] = useState('');
    const [selectedPropertyFacing, setPropertyFacing] = useState('');
    
    const handlePropertyFor = (e) => {
        setSelectedPropertyFor(e.target.id);
    };

    const handlePropertyType = (e) => {
        // setSelectedPropertyType2([]);
        setSelectedPropertyType1('');
        setSelectedPropertyType(e.target.id);
    };

    const handleBuildUpArea = (e) =>{
        setBuildUpArea(e.target.value);
    }

    const handleCarpetArea = (e) =>{
        setCarpetArea(e.target.value);
    }

    const handlePropertyType1 = (e) => {
        // setSelectedPropertyType2([]);
        setSelectedPropertyType1(e.target.id);
    };

    const handlePropertyAge1 = (e) => {
        setSelectedPropertyAge1(e.target.id);
    };

    const handleBHKType = (e) => {
        setSelectedBHKType(e.target.id);
    };

    const handleBathroom = (e) => {
        setSelectedBathroom(e.target.id);
    };
    
    const handleBalcony = (e) => {
        setSelectedBalcony(e.target.id);
    };
    
    const handleTenantPreference = (e) => {
        setSelectedTenantPreference(e.target.id);
    };
    
    const handleAvailability = (e) => {
        setSelectedAvailability(e.target.id);
    };
    
    const handlePropertyFacing = (e) => {
        setPropertyFacing(e.target.value);
    };

    function isFilled(String){
        return String.length===0? "text-[#00000034]" : "text-[#122B49]"
    }

    // FOR CHECKBOX INPUT
    // const [selectedPropertyType2, setSelectedPropertyType2] = useState([]);
    // const handlePropertyType2 = (e) => {
    //     const { id, checked } = e.target;
    //     if (checked) {
    //         setSelectedPropertyType2((prevSelected) => [...prevSelected, id]);
    //     } else {
    //         setSelectedPropertyType2((prevSelected) =>
    //             prevSelected.filter((item) => item !== id)
    //         );
    //     }
    // };


    const property1 = <div className="block3 my-4 flex w-11/12 pr-6">
        <div className="long-options mr-4 my-2">
            <input type="checkbox" name="property-type" id="Flat / Apartment" checked={selectedPropertyType1 === 'Flat / Apartment'} onChange={handlePropertyType1} />
            <label htmlFor="Flat / Apartment">Flat / Apartment</label>
        </div>
        <div className="long-options mr-4 my-2">
            <input type="checkbox" name="property-type" id="House / Villa" checked={selectedPropertyType1 === 'House / Villa'} onChange={handlePropertyType1} />
            <label htmlFor="House / Villa">House / Villa</label>
        </div>
    </div>

    const property2 = <div className="block3 my-4 flex w-2/3 flex-wrap pr-6">
        <div className="long-options mr-4 my-2">
            <input type="checkbox" name="property-type" id="Office Space" checked={selectedPropertyType1 === 'Office Space'} onChange={handlePropertyType1} />
            <label htmlFor="Office Space">Office Space</label>
        </div>
        <div className="long-options mr-4 my-2">
            <input type="checkbox" name="property-type" id="Co working" checked={selectedPropertyType1 === 'Co working'} onChange={handlePropertyType1} />
            <label htmlFor="Co working">Co working</label>
        </div>
        <div className="long-options mr-4 my-2">
            <input type="checkbox" name="property-type" id="Restaurant /Cafe" checked={selectedPropertyType1 === 'Restaurant /Cafe'} onChange={handlePropertyType1} />
            <label htmlFor="Restaurant /Cafe">Restaurant /Cafe</label>
        </div>
        <div className="long-options mr-4 my-2">
            <input type="checkbox" name="property-type" id="Shop/Showroom" checked={selectedPropertyType1 === 'Shop/Showroom'} onChange={handlePropertyType1} />
            <label htmlFor="Shop/Showroom">Shop/Showroom</label>
        </div>
        <div className="long-options mr-4 my-2">
            <input type="checkbox" name="property-type" id="Industrial Bldg." checked={selectedPropertyType1 === 'Industrial Bldg.'} onChange={handlePropertyType1} />
            <label htmlFor="Industrial Bldg.">Industrial Bldg.</label>
        </div>
        <div className="long-options mr-4 my-2">
            <input type="checkbox" name="property-type" id="Industrial Shed" checked={selectedPropertyType1 === 'Industrial Shed'} onChange={handlePropertyType1} />
            <label htmlFor="Industrial Shed">Industrial Shed</label>
        </div>
        <div className="long-options mr-4 my-2">
            <input type="checkbox" name="property-type" id="Warehouse/Godown" checked={selectedPropertyType1 === 'Warehouse/Godown'} onChange={handlePropertyType1} />
            <label htmlFor="Warehouse/Godown">Warehouse/Godown</label>
        </div>
    </div>

    return <div className='pt-0 pl-12 h-3/4 font-medium text-base '>
        <div className="form top heading bg-red h-full scroll pdl-20 pdt-10 pdr-30">

            {/* Property For */}

            <div className="block1 w-full mb-8">
                <p className="mt-2.5 mb-1.5"><span className="required">*</span>Property For :</p>
                <div className="flex w-11/12 pt-0.5 pr-6 pl-2">
                    <div className="options w-1/3 radio-group">
                        <input type="radio" className="hidden" name="property-for" id="Rent" checked={selectedPropertyFor === 'Rent'} onChange={handlePropertyFor} />
                        <label htmlFor="Rent" className="text-lg pl-8 cursor-pointer mb-2 text-[#333]">
                            Rent
                        </label>
                    </div>
                    <div className="options w-1/3 radio-group">
                        <input type="radio" className="hidden" name="property-for" id="Sale" checked={selectedPropertyFor === 'Sale'} onChange={handlePropertyFor} />
                        <label htmlFor="Sale" className="text-lg pl-8 cursor-pointer mb-2 text-[#333]">
                            Sale
                        </label>
                    </div>
                </div>
            </div>

            {/* Property Type */}

            <div className="block2 w-full mb-8">
                <p className="mt-2.5 mb-1.5"><span className="required">*</span>Property Type :</p>
                <div className=" flex w-11/12 pt-1 pr-6 pl-2">
                    <div className="options w-1/3">
                        <input type="radio" className="hidden" name="property-type" id="Residential" checked={selectedPropertyType === 'Residential'} onChange={handlePropertyType} />
                        <label htmlFor="Residential" className="text-lg pl-8 cursor-pointer mb-2 text-[#333]">
                            Residential
                        </label>
                    </div>
                    <div className="options w-1/3">
                        <input type="radio" className="hidden" name="property-type" id="Commercial" checked={selectedPropertyType === 'Commercial'} onChange={handlePropertyType} />
                        <label htmlFor="Commercial" className="text-lg pl-8 cursor-pointer mb-2 text-[#333]">
                            Commercial
                        </label>
                    </div>
                    <div className="options w-1/3">
                        <input type="radio" className="hidden" name="property-type" id="Land / Plot" checked={selectedPropertyType === 'Land / Plot'} onChange={handlePropertyType} />
                        <label htmlFor="Land / Plot" className="text-lg pl-8 cursor-pointer mb-2 text-[#333]">
                            Land / Plot
                        </label>
                    </div>
                </div>
                {selectedPropertyType === 'Residential' && property1}
                {selectedPropertyType === 'Commercial' && property2}
            </div>

            {/* Build Up Area, Carpet Area, Property On Floor, Total Floor */}

            <div className="block4 flex w-full flex-wrap">
                <div className="sub-block1 relative w-1/2 mb-8">
                    <p className="mt-2.5 mb-1.5">Build Up Area <span className="required">*</span></p>
                    <input type="number" className="w-4/5 py-4 px-1.5 h-10" name="user-type" id="your-name" placeholder="0" value={BuildUpArea} onChange={handleBuildUpArea} required />
                    <span className={`input-suffix p-2.5 absolute right-[21%] ${isFilled(BuildUpArea)}`}>Sq. Ft.</span>
                </div>
                <div className="sub-block2 relative w-1/2 mb-8">
                    <p className="mt-2.5 mb-1.5">Carpet Area <span className="required">*</span></p>
                    <input type="number" className="w-4/5 py-4 px-1.5 h-10" name="user-type" id="your-name" placeholder="0" value={CarpetArea} onChange={handleCarpetArea} required />
                    <span className={`input-suffix p-2.5 absolute right-[21%] ${isFilled(CarpetArea)}`}>Sq. Ft.</span>
                </div>
                <div className="sub-block3 relative w-1/4 mb-8">
                    <p className="mt-2.5 mb-1.5">Property On Floor <span className="required">*</span></p>
                    <input type="text" className="w-4/5 py-4 px-1.5 h-10" name="user-type" id="your-name" placeholder="Floor" required />
                    {/* <span className="input-suffix p-2.5 absolute right-[21%] text-[#00000034]">Sq. Ft.</span> */}
                </div>
                <div className="sub-block4 relative w-1/4 mb-8">
                    <p className="mt-2.5 mb-1.5">Total Floor <span className="required">*</span></p>
                    <input type="number" className="w-4/5 py-4 px-1.5 h-10" name="user-type" id="your-name" placeholder="Total Floor" required />
                    {/* <span className="input-suffix p-2.5 absolute right-[21%] text-[#00000034]">Sq. Ft.</span> */}
                </div>
                <div className="sub-block5 w-1/2 mb-8">
                    <div className="country-selector flex flex-col items-start">
                        <p className="mt-2.5 mb-1.5">Property Facing <span className="required">*</span></p>
                        <select
                            id="countries"
                            className="py-2 px-4 w-4/5 text-base border-2 border-[#ccc] bg-white rounded-sm text-[#333]"
                            name="countries"
                            value={selectedPropertyFacing}
                            onChange={handlePropertyFacing}
                            required
                        >
                            <option value="" disabled hidden>
                                Select
                            </option>
                            <option value="North">North</option>
                            <option value="South">South</option>
                            <option value="East">East</option>
                            <option value="West">West</option>
                            <option value="North- East">North- East</option>
                            <option value="North- West">North- West</option>
                            <option value="South- East">South- East</option>
                            <option value="South- West">South- West</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Property Age  */}

            <div className="block5 w-full mt-4">
                <p className="mt-2.5 mb-1.5">Property Age <span className="required">*</span></p>
                <div className="flex w-11/12  pt-0.5 pr-6 pl-2">
                    <div className="long-options mr-4 my-2">
                        <input type="radio" name="property-age" id="Less Than 1 year" checked={selectedPropertyAge1 === 'Less Than 1 year'} onChange={handlePropertyAge1} />
                        <label htmlFor="Less Than 1 year">Less Than 1 year</label>
                    </div>
                    <div className="long-options mr-4 my-2">
                        <input type="radio" name="property-age" id="1- 3 Years" checked={selectedPropertyAge1 === '1- 3 Years'} onChange={handlePropertyAge1} />
                        <label htmlFor="1- 3 Years">1- 3 Years</label>
                    </div>
                    <div className="long-options mr-4 my-2">
                        <input type="radio" name="property-age" id="3- 5 Years" checked={selectedPropertyAge1 === '3- 5 Years'} onChange={handlePropertyAge1} />
                        <label htmlFor="3- 5 Years">3- 5 Years</label>
                    </div>
                    <div className="long-options mr-4 my-2">
                        <input type="radio" name="property-age" id="5- 10 Years" checked={selectedPropertyAge1 === '5- 10 Years'} onChange={handlePropertyAge1} />
                        <label htmlFor="5- 10 Years">5- 10 Years</label>
                    </div>
                    <div className="long-options mr-4 my-2">
                        <input type="radio" name="property-age" id="Greater Than 10 Years" checked={selectedPropertyAge1 === 'Greater Than 10 Years'} onChange={handlePropertyAge1} />
                        <label htmlFor="Greater Than 10 Years">Greater Than 10 Years</label>
                    </div>
                </div>
            </div>

            {/* BHK Type  */}

            <div className="block6 w-full mt-10">
                <p className="mt-2.5 mb-1.5">BHK Type <span className="required">*</span></p>
                <div className="flex w-11/12  pt-0.5 pr-6 pl-2">
                    <div className="long-options mr-4 my-2">
                        <input type="radio" name="BHK-Type" id="1 RK" checked={selectedBHKType === '1 RK'} onChange={handleBHKType} />
                        <label htmlFor="1 RK">1 RK</label>
                    </div>
                    <div className="long-options mr-4 my-2">
                        <input type="radio" name="BHK-Type" id="1 BHK" checked={selectedBHKType === '1 BHK'} onChange={handleBHKType} />
                        <label htmlFor="1 BHK">1 BHK</label>
                    </div>
                    <div className="long-options mr-4 my-2">
                        <input type="radio" name="BHK-Type" id="2 BHK" checked={selectedBHKType === '2 BHK'} onChange={handleBHKType} />
                        <label htmlFor="2 BHK">2 BHK</label>
                    </div>
                    <div className="long-options mr-4 my-2">
                        <input type="radio" name="BHK-Type" id="3 BHK" checked={selectedBHKType === '3 BHK'} onChange={handleBHKType} />
                        <label htmlFor="3 BHK">3 BHK</label>
                    </div>
                    <div className="long-options mr-4 my-2">
                        <input type="radio" name="BHK-Type" id="4 BHK" checked={selectedBHKType === '4 BHK'} onChange={handleBHKType} />
                        <label htmlFor="4 BHK">4 BHK</label>
                    </div>
                    <div className="long-options mr-4 my-2">
                        <input type="radio" name="BHK-Type" id="5+ BHK" checked={selectedBHKType === '5+ BHK'} onChange={handleBHKType} />
                        <label htmlFor="5+ BHK">5+ BHK</label>
                    </div>
                </div>
            </div>

            {/* Bathroom/ Toilets  */}

            <div className="block7 w-full mt-10">
                <p className="mt-2.5 mb-1.5">Bathroom/ Toilets <span className="required">*</span></p>
                <div className="flex w-11/12  pt-0.5 pr-6 pl-2">
                    <div className="long-options mr-4 my-2">
                        <input type="radio" name="Bathroom" id="Bathroom = 1" checked={selectedBathroom === 'Bathroom = 1'} onChange={handleBathroom} />
                        <label htmlFor="Bathroom = 1">1</label>
                    </div>
                    <div className="long-options mr-4 my-2">
                        <input type="radio" name="Bathroom" id="Bathroom = 2" checked={selectedBathroom === 'Bathroom = 2'} onChange={handleBathroom} />
                        <label htmlFor="Bathroom = 2">2</label>
                    </div>
                    <div className="long-options mr-4 my-2">
                        <input type="radio" name="Bathroom" id="Bathroom = 3" checked={selectedBathroom === 'Bathroom = 3'} onChange={handleBathroom} />
                        <label htmlFor="Bathroom = 3">3</label>
                    </div>
                    <div className="long-options mr-4 my-2">
                        <input type="radio" name="Bathroom" id="Bathroom = 4" checked={selectedBathroom === 'Bathroom = 4'} onChange={handleBathroom} />
                        <label htmlFor="Bathroom = 4">4</label>
                    </div>
                    <div className="long-options mr-4 my-2">
                        <input type="radio" name="Bathroom" id="Bathroom = 5" checked={selectedBathroom === 'Bathroom = 5'} onChange={handleBathroom} />
                        <label htmlFor="Bathroom = 5">5</label>
                    </div>
                    <div className="long-options mr-4 my-2">
                        <input type="radio" name="Bathroom" id="Bathroom = 6+" checked={selectedBathroom === 'Bathroom = 6+'} onChange={handleBathroom} />
                        <label htmlFor="Bathroom = 6+">6+</label>
                    </div>
                </div>
            </div>

            {/* Balcony  */}

            <div className="block8 w-full mt-10">
                <p className="mt-2.5 mb-1.5">Balcony <span className="required">*</span></p>
                <div className="flex w-1/2  pt-0.5 pr-6 pl-2">
                    <div className="long-options mr-4 my-2">
                        <input type="radio" name="Balcony" id="balcony = 0" checked={selectedBalcony === 'balcony = 0'} onChange={handleBalcony} />
                        <label htmlFor="balcony = 0">0</label>
                    </div>
                    <div className="long-options mr-4 my-2">
                        <input type="radio" name="Balcony" id="balcony = 1" checked={selectedBalcony === 'balcony = 1'} onChange={handleBalcony} />
                        <label htmlFor="balcony = 1">1</label>
                    </div>
                    <div className="long-options mr-4 my-2">
                        <input type="radio" name="Balcony" id="balcony = 2" checked={selectedBalcony === 'balcony = 2'} onChange={handleBalcony} />
                        <label htmlFor="balcony = 2">2</label>
                    </div>
                    <div className="long-options mr-4 my-2">
                        <input type="radio" name="Balcony" id="balcony = 3" checked={selectedBalcony === 'balcony = 3'} onChange={handleBalcony} />
                        <label htmlFor="balcony = 3">3</label>
                    </div>
                    <div className="long-options mr-4 my-2">
                        <input type="radio" name="Balcony" id="balcony = 4+" checked={selectedBalcony === 'balcony = 4+'} onChange={handleBalcony} />
                        <label htmlFor="balcony = 4+">4+</label>
                    </div>
                </div>
            </div>

            {/* Tenant Preference */}

            <div className="block9 w-full mt-10">
                <p className="mt-2.5 mb-1.5">Tenant Preference <span className="required">*</span></p>
                <div className="flex w-11/12  pt-0.5 pr-6 pl-2">
                    <div className="long-options mr-4 my-2">
                        <input type="radio" name="Tenant Preference" id="Any" checked={selectedTenantPreference === 'Any'} onChange={handleTenantPreference} />
                        <label htmlFor="Any">Any</label>
                    </div>
                    <div className="long-options mr-4 my-2">
                        <input type="radio" name="Tenant Preference" id="Married" checked={selectedTenantPreference === 'Married'} onChange={handleTenantPreference} />
                        <label htmlFor="Married">Married</label>
                    </div>
                    <div className="long-options mr-4 my-2">
                        <input type="radio" name="Tenant Preference" id="Bachelor (Man)" checked={selectedTenantPreference === 'Bachelor (Man)'} onChange={handleTenantPreference} />
                        <label htmlFor="Bachelor (Man)">Bachelor (Man)</label>
                    </div>
                    <div className="long-options mr-4 my-2">
                        <input type="radio" name="Tenant Preference" id="Bachelor (Women)" checked={selectedTenantPreference === 'Bachelor (Women)'} onChange={handleTenantPreference} />
                        <label htmlFor="Bachelor (Women)">Bachelor (Women)</label>
                    </div>
                </div>
            </div>

            {/* Availability */}

            <div className="block10 w-full mt-10">
                <p className="mt-2.5 mb-1.5">Availability <span className="required">*</span></p>
                <div className="flex w-11/12  pt-0.5 pr-6 pl-2">
                    <div className="long-options mr-4 my-2">
                        <input type="radio" name="Availability" id="Immediate" checked={selectedAvailability === 'Immediate'} onChange={handleAvailability} />
                        <label htmlFor="Immediate">Immediate</label>
                    </div>
                    <div className="long-options mr-4 my-2">
                        <input type="radio" name="Availability" id="within 15 days" checked={selectedAvailability === 'within 15 days'} onChange={handleAvailability} />
                        <label htmlFor="within 15 days">within 15 days</label>
                    </div>
                    <div className="long-options mr-4 my-2">
                        <input type="radio" name="Availability" id="within 1 month" checked={selectedAvailability === 'within 1 month'} onChange={handleAvailability} />
                        <label htmlFor="within 1 month">within 1 month</label>
                    </div>
                    <div className="long-options mr-4 my-2">
                        <input type="radio" name="Availability" id="within 2 months" checked={selectedAvailability === 'within 2 months'} onChange={handleAvailability} />
                        <label htmlFor="within 2 months">within 2 months</label>
                    </div>
                </div>
            </div>
            {/* Property Description */}
            <div className="block11 text-area w-full mt-10">
                <p className="mt-2.5 mb-1.5">Property Description<span className="required">*</span></p>
                <div className="flex w-11/12 justify-between pt-0.5 pr-6 ">
                    <input type="text" name="Property Description" className="align-text-top items-start mt-2 mb-4 w-full h-24" placeholder="Add a description for your property to attract the best tenant" />
                </div>
            </div>

        </div>
    </div>;
}

export default PropertyDetailsForm;