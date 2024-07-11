import '../css/loginPage/loginDetails.css'

const LoginDetails = () => {
    return <div className='pt-6 pl-12 overflow-y-scroll h-2/3 font-medium text-base '>
        <div className="form top heading bg-red h-48 scroll pdl-20 pdt-10 pdr-30">
            <p className="mt-2.5 mb-1.5"><span className="required">*</span>I am</p>
            <div className="block1 justify-around flex w-11/12 pr-6">
                <div className="options radio-group w-5/12 ">
                    <input required type="radio" className="hidden" name="user-type" id="owner" checked />
                    <label for="owner" className="text-lg pl-8 cursor-pointer mb-2 text-[#333]">Owner</label>
                </div>
                <div className="options radio-group">
                    <input required type="radio" className="hidden" name="user-type" id="builder" />
                    <label for="builder" className="text-lg pl-8 cursor-pointer mb-2 text-[#333]">Builder</label>
                </div>
            </div>
            <div className="block2">
                <p className="mt-2.5 mb-1.5">YOUR NAME<span className="required">*</span></p>
                <input required type="text" className="w-4/5 py-4 px-1.5 h-10" name="user-type" id="your-name" placeholder="NAME" />
            </div>
            <div className="country-selector flex flex-col items-start">
                <p className="mt-2.5 mb-1.5">Country<span className="required">*</span></p>
                <select id="countries" className="py-2.5 px-4 w-4/5 text-base border-2 border-[#ccc] bg-white rounded-sm text-[#333]" name="countries">
                    <option value="af">Afghanistan</option>
                    <option value="al">Albania</option>
                    <option value="dz">Algeria</option>
                    <option value="as">American Samoa</option>
                    <option value="ad">Andorra</option>
                    <option value="ao">Angola</option>
                    <option value="ao" selected>India</option>
                    <option value="us">United States</option>
                    <option value="ca">Canada</option>
                    <option value="gb">United Kingdom</option>
                    <option value="au">Australia</option>
                </select>
            </div>
            <div>
                <p className="mt-2.5 mb-1.5">Phone<span className="required">*</span></p>
                <div className="block3">
                    <select id="countriesCode" className="py-2 px-1 w-1/6 text-base border-2 border-[#7A7A7A] bg-[#F6F8FF] rounded-md text-[#333]" name="countries">
                        <option value="af">+1</option>
                        <option value="al">+2</option>
                        <option value="dz">+3</option>
                        <option value="as">+922</option>
                        <option value="ad">+10</option>
                        <option value="ao">+89</option>
                        <option value="ao" selected>+91</option>
                        <option value="us">+1</option>
                        <option value="ca">+90</option>
                        <option value="gb">+78</option>
                        <option value="au">+65</option>
                    </select>
                    <input required type="number" className="ml-3 w-3/5 h-10" name="phone" placeholder="000-000-0000" />
                </div>
            </div>
            <h2 className='font-semibold my-4'>OR</h2>
            <div className="block4">
                <p className="">Email<span className="required">*</span></p>
                <input required type="email" name="Email" className="end mt-2 mb-4 w-4/5 h-10" placeholder="email" />
            </div>
        </div>
    </div>;
}

export default LoginDetails;