import React, { useState } from 'react';

const FeatureAndAmenitiesForm = () => {
    const [selectedNonVeg, setSelectedNonVeg] = useState('');
    const [selectedPetsAllowed, setSelectedPetsAllowed] = useState('');
    const [selectedElectricity, setSelectedElectricity] = useState('');
    const [selectedWaterSupply, setSelectedWaterSupply] = useState('');

    const imagesList = ["24/7 Security", "CCTV Camera", "Lift", "Reserved Parking", "Regular water supply", "Power Back up-Partial","Power Back up-Full","Maintenance staff","Garden-Park","Kids Play area","Sport","Property Gym","Community Hall","Shopping center","Club House","Swimming pool","Intercom","Fire Safety","Coaching","Pond"]

    const handleNonVeg = (e) => {
        setSelectedNonVeg(e.target.id);
    };

    const handlePetsAllowed = (e) => {
        // setSelectedPetsAllowed2([]);
        setSelectedPetsAllowed(e.target.id);
    };

    const handleElectricity = (e) => {
        // setSelectedElectricity2([]);
        setSelectedElectricity(e.target.id);
    };
    const handleWaterSupply = (e) => {
        // setSelectedPetsAllowed2([]);
        setSelectedWaterSupply(e.target.id);
    };

    // FOR CHECKBOX INPUT
    const [selectedFurnishing, setSelectedFurnishing] = useState([]);
    const handleFurnishing = (e) => {
        const { id, checked } = e.target;
        if (checked) {
            setSelectedFurnishing((prevSelected) => [...prevSelected, id]);
        } else {
            setSelectedFurnishing((prevSelected) =>
                prevSelected.filter((item) => item !== id)
            );
        }
    };
    const [selectedAdditionalFeatures, setSelectedAdditionalFeatures] = useState([]);
    const handleAdditionalFeatures = (e) => {
        const { id, checked } = e.target;
        if (checked) {
            setSelectedAdditionalFeatures((prevSelected) => [...prevSelected, id]);
        } else {
            setSelectedAdditionalFeatures((prevSelected) =>
                prevSelected.filter((item) => item !== id)
            );
        }
    };

    const [selectedTiles, setSelectedTiles] = useState([]);
    const handleTiles = (e) => {
        const { id, checked } = e.target;
        if (checked) {
            setSelectedTiles((prevSelected) => [...prevSelected, id]);
        } else {
            setSelectedTiles((prevSelected) =>
                prevSelected.filter((item) => item !== id)
            );
        }
    };

    const [selectedSafety, setSelectedSafety] = useState([]);
    const handleSafety = (e) => {
        const { id, checked } = e.target;
        if (checked) {
            setSelectedSafety((prevSelected) => [...prevSelected, id]);
        } else {
            setSelectedSafety((prevSelected) =>
                prevSelected.filter((item) => item !== id)
            );
        }
    };

    const [selectedSOCIETYAMENITIES, setSelectedSOCIETYAMENITIES] = useState([]);
    const handleSOCIETYAMENITIES = (e) => {
        const { id, checked } = e.target;
        if (checked) {
            setSelectedSOCIETYAMENITIES((prevSelected) => [...prevSelected, id]);
        } else {
            setSelectedSOCIETYAMENITIES((prevSelected) =>
                prevSelected.filter((item) => item !== id)
            );
        }
    };

    return <div className='pt-0 pl-12 h-3/4 font-medium text-base '>
        <div className="form top heading bg-red h-full scroll pdl-20 pdt-10 pdr-30">

            {/* Property For */}

            <div className="block1 w-full mb-8">
                <p className="mt-2.5 mb-1.5">General Features</p>
            </div>

            {/* Non Veg  */}

            <div className="block1 w-full mb-12">
                <p className="mt-2.5 mb-1.5"><span className="required">*</span>Non- Veg</p>
                <div className="flex w-11/12 pt-0.5 pr-6 pl-2">
                    <div className="options w-1/3 radio-group">
                        <input type="radio" className="hidden" name="Non- Veg" id="Allowed" checked={selectedNonVeg === 'Allowed'} onChange={handleNonVeg} />
                        <label htmlFor="Allowed" className="text-lg pl-8 cursor-pointer mb-2 text-[#333]">
                            Allowed
                        </label>
                    </div>
                    <div className="options w-1/3 radio-group">
                        <input type="radio" className="hidden" name="Non- Veg" id="Not Allowed" checked={selectedNonVeg === 'Not Allowed'} onChange={handleNonVeg} />
                        <label htmlFor="Not Allowed" className="text-lg pl-8 cursor-pointer mb-2 text-[#333]">
                            Not Allowed
                        </label>
                    </div>
                </div>
            </div>

            {/* Pets Allowed */}

            <div className="block1 w-full mb-12">
                <p className="mt-2.5 mb-1.5"><span className="required">*</span>Pets Allowed</p>
                <div className=" flex w-11/12 pt-1 pr-6 pl-2">
                    <div className="options w-1/3">
                        <input type="radio" className="hidden" name="Pets Allowed" id="Yes" checked={selectedPetsAllowed === 'Yes'} onChange={handlePetsAllowed} />
                        <label htmlFor="Yes" className="text-lg pl-8 cursor-pointer mb-2 text-[#333]">
                            Yes
                        </label>
                    </div>
                    <div className="options w-1/3">
                        <input type="radio" className="hidden" name="Pets Allowed" id="No" checked={selectedPetsAllowed === 'No'} onChange={handlePetsAllowed} />
                        <label htmlFor="No" className="text-lg pl-8 cursor-pointer mb-2 text-[#333]">
                            No
                        </label>
                    </div>
                </div>
            </div>

            {/* Electricity */}

            <div className="block1 w-full mb-12">
                <p className="mt-2.5 mb-1.5"><span className="required">*</span>Electricity</p>
                <div className=" flex w-11/12 pt-1 pr-6 pl-2">
                    <div className="options w-1/3">
                        <input type="radio" className="hidden" name="Electricity" id="Rare/No Powercut" checked={selectedElectricity === 'Rare/No Powercut'} onChange={handleElectricity} />
                        <label htmlFor="Rare/No Powercut" className="text-lg pl-8 cursor-pointer mb-2 text-[#333]">
                            Rare/No Powercut
                        </label>
                    </div>
                    <div className="options w-1/3">
                        <input type="radio" className="hidden" name="Electricity" id="Frequent Powercut" checked={selectedElectricity === 'Frequent Powercut'} onChange={handleElectricity} />
                        <label htmlFor="Frequent Powercut" className="text-lg pl-8 cursor-pointer mb-2 text-[#333]">
                            Frequent Powercut
                        </label>
                    </div>
                </div>
            </div>

            {/* Water Supply */}

            <div className="block1 w-full mb-12 pb-14 border-b-[1px] border-[#0000003a]">
                <p className="mt-2.5 mb-1.5"><span className="required">*</span>Water Supply</p>
                <div className=" flex w-11/12 pt-1 pr-6 pl-2">
                    <div className="options w-1/3">
                        <input type="radio" className="hidden" name="Water Supply" id="Municipal Corporation (BMC)" checked={selectedWaterSupply === 'Municipal Corporation (BMC)'} onChange={handleWaterSupply} />
                        <label htmlFor="Municipal Corporation (BMC)" className="text-lg pl-8 cursor-pointer mb-2 text-[#333]">
                            Municipal Corporation (BMC)
                        </label>
                    </div>
                    <div className="options w-1/3">
                        <input type="radio" className="hidden" name="Water Supply" id="Borewell" checked={selectedWaterSupply === 'Borewell'} onChange={handleWaterSupply} />
                        <label htmlFor="Borewell" className="text-lg pl-8 cursor-pointer mb-2 text-[#333]">
                            Borewell
                        </label>
                    </div>
                    <div className="options w-1/3">
                        <input type="radio" className="hidden" name="Water Supply" id="Both" checked={selectedWaterSupply === 'Both'} onChange={handleWaterSupply} />
                        <label htmlFor="Both" className="text-lg pl-8 cursor-pointer mb-2 text-[#333]">
                            Both
                        </label>
                    </div>
                </div>
            </div>

            {/* Furnished  */}

            <div className="block6 w-full mt-10 pb-14 border-b-[1px] border-[#0000003a]">
                <p className="mt-2.5 mb-1.5">Furnishing <span className="required">*</span></p>
                <div className="flex w-11/12  pt-0.5 pr-6 pl-2">
                    <div className="square-options w-1/3 mt-2">
                        <input type="checkbox" name="Furnishing" id="Fully Furnished" checked={selectedFurnishing.includes('Fully Furnished')} onChange={handleFurnishing} />
                        <label htmlFor="Fully Furnished">Fully Furnished</label>
                    </div>
                    <div className="square-options w-1/3 mt-2">
                        <input type="checkbox" name="Furnishing" id="Semi Furnished" checked={selectedFurnishing.includes('Semi Furnished')} onChange={handleFurnishing} />
                        <label htmlFor="Semi Furnished">Semi Furnished</label>
                    </div>
                    <div className="square-options w-1/3 mt-2">
                        <input type="checkbox" name="Furnishing" id="Unfurnished" checked={selectedFurnishing.includes('Unfurnished')} onChange={handleFurnishing} />
                        <label htmlFor="Unfurnished">Unfurnished</label>
                    </div>
                </div>
            </div>

            {/* Additional Feature  */}

            <div className="block6 w-full mt-10 pb-14 border-b-[1px] border-[#0000003a]">
                <p className="mt-2.5 mb-1.5">Additional Features <span className="required">*</span></p>
                <div className="flex flex-wrap w-11/12  pt-0.5 pr-6 pl-2">
                    <div className="square-options w-1/3 mt-2">
                        <input type="checkbox" name="Additional Features" id="Air Conditioning" checked={selectedAdditionalFeatures.includes('Air Conditioning')} onChange={handleAdditionalFeatures} />
                        <label htmlFor="Air Conditioning">Air Conditioning</label>
                    </div>
                    <div className="square-options w-1/3 mt-2">
                        <input type="checkbox" name="Additional Features" id="Ceiling Fans" checked={selectedAdditionalFeatures.includes('Ceiling Fans')} onChange={handleAdditionalFeatures} />
                        <label htmlFor="Ceiling Fans">Ceiling Fans</label>
                    </div>
                    <div className="square-options w-1/3 mt-2">
                        <input type="checkbox" name="Additional Features" id="Refrigator" checked={selectedAdditionalFeatures.includes('Refrigator')} onChange={handleAdditionalFeatures} />
                        <label htmlFor="Refrigator">Refrigator</label>
                    </div>
                    <div className="square-options w-1/3 mt-2">
                        <input type="checkbox" name="Additional Features" id="Washing Machine" checked={selectedAdditionalFeatures.includes('Washing Machine')} onChange={handleAdditionalFeatures} />
                        <label htmlFor="Washing Machine">Washing Machine</label>
                    </div>
                    <div className="square-options w-1/3 mt-2">
                        <input type="checkbox" name="Additional Features" id="Microwave" checked={selectedAdditionalFeatures.includes('Microwave')} onChange={handleAdditionalFeatures} />
                        <label htmlFor="Microwave">Microwave</label>
                    </div>
                    <div className="square-options w-1/3 mt-2">
                        <input type="checkbox" name="Additional Features" id="Oven" checked={selectedAdditionalFeatures.includes('Oven')} onChange={handleAdditionalFeatures} />
                        <label htmlFor="Oven">Oven</label>
                    </div>
                </div>
            </div>

            {/* Tiles  */}

            <div className="block6 w-full mt-10 pb-14 border-b-[1px] border-[#0000003a]">
                <p className="mt-2.5 mb-1.5">Tiles <span className="required">*</span></p>
                <div className="flex flex-wrap w-11/12  pt-0.5 pr-6 pl-2">
                    <div className="square-options w-1/3 mt-2">
                        <input type="checkbox" name="Tiles" id="Normal White Tiles" checked={selectedTiles.includes('Normal White Tiles')} onChange={handleTiles} />
                        <label htmlFor="Normal White Tiles">Normal White Tiles</label>
                    </div>
                    <div className="square-options w-1/3 mt-2">
                        <input type="checkbox" name="Tiles" id="Marble" checked={selectedTiles.includes('Marble')} onChange={handleTiles} />
                        <label htmlFor="Marble">Marble</label>
                    </div>
                    <div className="square-options w-1/3 mt-2">
                        <input type="checkbox" name="Tiles" id="Vitrified Tiles" checked={selectedTiles.includes('Vitrified Tiles')} onChange={handleTiles} />
                        <label htmlFor="Vitrified Tiles">Vitrified Tiles</label>
                    </div>
                </div>
            </div>

            {/* Safety  */}

            <div className="block6 w-full mt-10 pb-14 border-b-[1px] border-[#0000003a]">
                <p className="mt-2.5 mb-1.5">Safety <span className="required">*</span></p>
                <div className="flex flex-wrap w-11/12  pt-0.5 pr-6 pl-2">
                    <div className="square-options w-2/3 mt-2">
                        <input type="checkbox" name="Safety" id="24/7 Security personnel (Gated Security)" checked={selectedSafety.includes('24/7 Security personnel (Gated Security)')} onChange={handleSafety} />
                        <label htmlFor="24/7 Security personnel (Gated Security)">24/7 Security personnel (Gated Security)</label>
                    </div>
                    <div className="square-options w-1/3 mt-2">
                        <input type="checkbox" name="Safety" id="Security Systems- CCTV" checked={selectedSafety.includes('Security Systems- CCTV')} onChange={handleSafety} />
                        <label htmlFor="Security Systems- CCTV">Security Systems- CCTV</label>
                    </div>
                </div>
            </div>

            {/* SOCIETY AMENITIES  */}

            <div className="block6 w-full mt-10 pb-14 border-b-[1px] border-[#0000003a]">
                <p className="mt-2.5 mb-1.5 font-bold">SOCIETY AMENITIES</p>
                <div className="flex flex-wrap w-full justify-between pt-0.5 pr-6 pl-2">

                    {imagesList.map((image, i) => {
                        return <div className="w-1/4 mb-6">
                            <div className="image-options w-12 mt-2 ">
                                <input type="checkbox" name="SOCIETY AMENITIES" id={image} checked={selectedSOCIETYAMENITIES.includes({ image })} onChange={handleSOCIETYAMENITIES} />
                                <label htmlFor={image}><img src={`./formIcons/${image}.png`} alt="" /><p className='text-xs text-nowrap mx-2 w-full '>{image}</p></label>
                            </div>
                        </div>
                    })}
                </div>
            </div>


        </div>
    </div>;
}

export default FeatureAndAmenitiesForm;