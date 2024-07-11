
const OTPBOX = () => {
    var message = "you are using demo version! for demonstration purpose OTP is 7889";
    return <section className='pt-6 pl-12 h-2/3'>
        <div className="otpBox w-full">
            <div className="block5 relative w-10/12">
                <p className="text-base">Enter OTP sent on 999-999-9999
                    <span className="required"> *</span>
                    <span className="resendOTP underline text-xs right-0 absolute">Change</span>
                </p>
                <input type="text" name="OTP" className="otp mt-4 w-full h-10" placeholder="0 0 0 0" />
            <button className="resendOTP cursor-pointer text-xs mt-4 font-medium text-[#122B49] float-end ">Resend OTP</button>
            </div>
        </div>
    </section>
}

export default OTPBOX;