import React, { useState } from 'react';


const PriceDetailsForm = () => {
    const [Rent, setRent] = useState('');
    const [Security, setSecurity] = useState('');
    const [selectedMaintainance, setMaintainance] = useState('');
    const [selectedMaintainanceTerm, setMaintainanceTerm] = useState('');
    
    const handleRent = (e) => {
        setRent(e.target.value);
    }

    const handleSecurity = (e) => {
        setSecurity(e.target.value);
    }

    const handleMaintainance = (e) => {
        setMaintainance(e.target.value);
    };

    const handleMaintainanceTerm = (e) => {
        setMaintainanceTerm(e.target.value);
    };

    function isFilled(String) {
        return String.length === 0 ? "text-[#00000034]" : "text-[#122B49]"
    }


    return <div className='pt-0 pl-12 h-3/4 font-medium text-base '>
        <div className="form top heading bg-red h-full scroll pdl-20 pdt-10 pdr-30">

            {/* Rent, Security, Maintainance*/}

            <div className="block1 flex w-full flex-wrap">

                <div className="sub-block1 relative w-1/2 mb-8">
                    <p className="mt-2.5 mb-1.5">Rent <span className="required">*</span></p>
                    <input type="number" className="w-4/5 py-4 px-1.5 h-10" name="Rent" id="Rent" placeholder="₹" value={Rent} onChange={handleRent} required />
                    <span className={`input-suffix p-2.5 absolute right-[21%] ${isFilled(Rent)}`}>/ Month</span>
                </div>

                <div className="sub-block2 relative w-1/2 mb-8">
                    <p className="mt-2.5 mb-1.5">Security <span className="required">*</span></p>
                    <input type="number" className="w-4/5 py-4 px-1.5 h-10" name="security" id="security" placeholder="₹" value={Security} onChange={handleSecurity} required />
                    <span className={`input-suffix p-2.5 absolute right-[21%] ${isFilled(Security)}`}>/ Month</span>
                </div>

                <div className="sub-block3 w-1/2 mb-8">
                    <div className="country-selector flex flex-col items-start">
                        <p className="mt-2.5 mb-1.5">Maintainance <span className="required">*</span></p>
                        <select
                            id="countries"
                            className="py-2 px-4 w-4/5 text-base border-2 border-[#ccc] bg-white rounded-sm text-[#333]"
                            name="countries"
                            value={selectedMaintainance}
                            onChange={handleMaintainance}
                            required
                        >
                            <option value="" disabled hidden>
                                Select
                            </option>
                            <option value="Included in Rent">Included in Rent</option>
                            <option value="Extra Maintainance">Extra Maintainance</option>
                        </select>
                    </div>
                </div>

                {selectedMaintainance === 'Extra Maintainance' && <>
                    <div className="sub-block4 relative w-1/2 mb-8">
                        <p className="mt-2.5 mb-1.5">Maintainance <span className="required">*</span></p>
                        <input type="text" className="w-[38%] py-4 px-1.5 mr-4 h-10" name="user-type" id="maintainance" placeholder="₹    Maintainance" required />
                        {/* <span className="input-suffix p-2.5 absolute right-[21%] text-[#00000034]">Sq. Ft.</span> */}
                    {/* </div>
                    <div className="sub-block5 relative w-1/4 mb-8"> */}
                        <select
                            id="countries"
                            className="py-2 px-4 w-[38%] text-base border-2 border-[#ccc] bg-white rounded-sm text-[#333]"
                            name="countries"
                            value={selectedMaintainanceTerm}
                            onChange={handleMaintainanceTerm}
                            required
                        >
                            <option value="" disabled hidden>
                                Select
                            </option>
                            <option value="Monthly">Monthly</option>
                            <option value="Quaterly">Quaterly</option>
                            <option value="Half Yearly">Half Yearly</option>
                            <option value="Yearly">Yearly</option>
                        </select>                    {/* <span className="input-suffix p-2.5 absolute right-[21%] text-[#00000034]">Sq. Ft.</span> */}
                    </div>
                </>}
            </div>

            {/* Property Description */}
            <div className="block2 text-area w-full mt-4">
                <p className="mt-2.5 mb-1.5">Additional Pricing details to convey to agent?<span className="required">*</span></p>
                <div className="flex w-11/12 justify-between pt-0.5 pr-6 ">
                    <input type="text" name="Property Description" className="align-text-top items-start mt-2 mb-4 w-full h-24" placeholder="Do you have any concerns regarding pricing of your property? Add your concerns here or call us. " />
                </div>
            </div>

        </div>
    </div>;
}

export default PriceDetailsForm;