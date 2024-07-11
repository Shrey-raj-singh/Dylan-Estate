// import '../css/listProperty/listPropertyFrame.css'
import React, { useState } from 'react';

import { useMultiStepForm } from "../useMultistepForm";
import FeatureAndAmenitiesForm from "./featureAndAmenitiesForm";
import LocationDetailsForm from "./locationDetailsForm";
import PriceDetailsForm from "./priceDetailsForm";
import PropertyDetailsForm from "./propertyDetailsForm";
import PropertyImagesForm from "./propertyImagesForm";
// onClick={goTo(0)}
// onClick={goTo(1)}
// onClick={goTo(2)}
// onClick={goTo(3)}
// onClick={goTo(4)}
const ListPropertyFrame = () => {
    const [isCompleted, setIsCompleted] = useState(false);

    const { steps, currentStepIndex, step, back, next, goTo } = useMultiStepForm([
        <PropertyDetailsForm />,
        <LocationDetailsForm />,
        <FeatureAndAmenitiesForm />,
        <PriceDetailsForm />,
        <PropertyImagesForm />,]);

    const progress = (input) => {
        console.log(input, currentStepIndex);
        var value = "";
        if (input < currentStepIndex) {
            value = "border-[#122B49]";
        } else if (input === currentStepIndex) {
            value = "bg-[#EDF2F8] shadow-[#b7cde7] shadow-inner";
        } else {
            value = "border-[#D6D6D6]";
        }
        return value;
    }

    const onSubmit = (e) => {
        e.preventDefault();
        return next();
    };
    function handlePopUp() {
        console.log(isCompleted);
        // print(isCompleted)
        setIsCompleted(!isCompleted)
    }

    function handleSubmit() {
        console.log(isCompleted);
        // print(isCompleted)
        alert("Successfully Posted")
    }

    return <main className="listing-form w-[100vw] h-[100vh] content-center">
        <form onSubmit={onSubmit} className="relative listing-form-box shadow-sm mx-auto h-[63vh] text-[#122B49] rounded-2xl shadow-[#7A7A7A] w-[72vw]">
            <div className="form-header h-1/6 rounded-t-2xl flex w-full bg-[#FCF8F4] text-[#7A7A7A]">
                <button type="button" onClick={() => goTo(0)} id="first" className={`w-2/3 h-full cursor-pointer content-center justify-center text-sm border-b-8 ${progress(0)} rounded-tl-2xl`}><p className="w-2/5 text-center mx-auto">PROPERTY DETAILS</p></button >
                <button type="button" onClick={() => goTo(1)} id="second" className={`w-2/3 h-full cursor-pointer content-center justify-center text-sm border-b-8 ${progress(1)}`}><p className="w-2/5 text-center mx-auto">LOCATION DETAILS</p></button>
                <button type="button" onClick={() => goTo(2)} id="third" className={`w-2/3 h-full cursor-pointer content-center justify-center text-sm border-b-8 ${progress(2)}`}><p className="w-2/5 text-center mx-auto">FEATURES & AMENITIES</p></button>
                <button type="button" onClick={() => goTo(3)} id="fourth" className={`w-2/3 h-full cursor-pointer content-center justify-center text-sm border-b-8 ${progress(3)}`}><p className="w-2/5 text-center mx-auto">PRICE DETAILS</p></button>
                <button type="button" onClick={() => goTo(4)} id="fifth" className={`w-2/3 h-full cursor-pointer content-center justify-center text-sm border-b-8 rounded-tr-2xl ${progress(4)}`}><p className="w-2/5 text-center mx-auto">PROPERTY IMAGES</p></button>
            </div>

            <div className="form-content overflow-y-auto text-base w-full h-[70%]">
                <section className="text-lg text-black">
                    {/* {currentStepIndex + 1}/{steps.length} */}
                    {step}

                </section>
            </div>

            <div className="form-footer absolute bottom-0 rounded-b-2xl h-[12%] w-full flex items-center bg-[#121212] shadow-sm shadow-[#7A7A7A] text-white text-xs">
                <div className="flex ml-5 absolute w-1/2 l-3">
                    <p>Need Help? </p><a href="tel:+91 7587845520" className="no-underline font-medium ml-2 text-white">CALL 1234567890</a>
                </div>
                <div className="absolute right-3 flex mr-[3%]">
                    {currentStepIndex !== 0 && <input type="button" onClick={back} className="py-1.5 px-8 mr-4 bg-[#122B49] border-[#122B49] border-2 rounded-lg" value="BACK" />}
                    {currentStepIndex < steps.length - 1 ?
                        <input type="submit" className="py-1.5 px-8 mr-[3%] bg-[#122B49] border-[#122B49] border-2 rounded-lg" value="NEXT" /> :
                        <input type="button" onClick={handlePopUp} className="py-1.5 px-8 mr-[3%] bg-[#122B49] border-[#122B49] border-2 rounded-lg" value="SAVE & POST" />
                    }
                </div>
            </div>
        </form>
        {isCompleted && <div className='w-[100vw] h-[100vh] fixed top-0 left-0 z-50'  onClick={handlePopUp}>
            <div className="fixed top-[33%] left-[36%]  w-1/3 content-center justify-center text-center h-1/3 bg-[#fafafa] px-8  rounded-lg bg-whit border-2 border-[#4F4F4F]">
                <p className='text-black text-base w-5/6 mx-auto font-sans' style={{ fontFamily: 'Inter' }}>POST PROPERTY ON DYLAN ESTATE?<span className="required">*</span></p>
                <input type="button" onClick={handleSubmit} className="w-5/6 mt-4  bg-[#122B49] border-[#122B49] py-1 font-bold border-2 rounded-md text-white" value="Continue" />
                <p className='text-[#122B49] text-xs w-full mt-2' style={{ fontFamily: 'Inter' }}>By continuing you agree to our <span className="underline font-semibold">Terms and Conditions & Privacy Policy</span></p>
            </div>
        </div>}
    </main>
}

export default ListPropertyFrame;