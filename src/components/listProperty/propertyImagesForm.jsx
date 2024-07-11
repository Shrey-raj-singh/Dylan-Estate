import React, { useState } from 'react';

const PropertyImagesForm = () => {

    const [selectedImages, setSelectedImages] = useState([]);

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        const newImages = files.slice(0, 10 - selectedImages.length).map(file => ({
            file,
            preview: URL.createObjectURL(file)
        }));

        setSelectedImages(prevImages => [...prevImages, ...newImages]);
    };

    const handleRemoveImage = (index) => {
        setSelectedImages(prevImages => prevImages.filter((_, i) => i !== index));
    };


    return <div className='pt-0 pl-12 h-3/4 font-medium text-base '>
        <div className="form top heading bg-red h-full scroll pdl-20 pdt-10 pdr-30">

            <div className="block1 flex w-full flex-wrap">
                <p className="mt-2.5 mb-1.5">Add Photos / videos to attract more tenants! </p><br />
                <p className="mt-2.5 mb-1.5">Add Photos of living room, bedroom, bathroom, floor, doors, kitchen, balcony, location map, neighborhood, etc</p>
            </div>

            {selectedImages.length === 0 && (
                <div className="border-2 border-[#0000003a] content-center image-picker w-11/12 h-[19rem] ">
                    <label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            name="Property Image"
                            multiple
                            className="hidden" />
                        <div className=" w-1/5 h-[27%] mx-auto content-center px-2">
                            <img src="./camera.png" alt="" className=' mx-auto mb-2 w-10 cursor-pointer' />
                            <div className="py-0.5 flex cursor-pointer justify-evenly mx-auto bg-[#122B49] border-[#122B49] text-white font-extralight border-2 rounded-lg"><img src="./add.png" alt="" /> Add Photos Now</div>
                        </div>
                    </label>
                </div>
            )}
            <div className="image-preview-container flex w-full flex-wrap ">
                {selectedImages.map((image, index) => (
                    <div key={index} className="image-preview overflow-hidden border-[#122B49] border-2 rounded-2xl h-[8vw] w-[12vw] my-1 mx-1.5 relative">
                        <img src={image.preview} alt={`Selected ${index}`} className='h-full w-full' />
                        <button onClick={() => handleRemoveImage(index)} className='absolute text-xl top-2 cursor-pointer text-blue-950 font-extrabold right-4'>X</button>
                    </div>
                ))}
            {selectedImages.length > 0 && selectedImages.length < 10 && (
                <label className="image-picker inline-block cursor-pointer relative m-8 justify-center font-bold bg-[#122B49] text-5xl">
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        multiple
                        className='hidden'
                        />
                    <span className="add-icon absolute">+</span>
                </label>
            )}
            </div>

        </div>
    </div>;
}

export default PropertyImagesForm;