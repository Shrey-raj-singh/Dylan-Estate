import '../css/loginPage/loginOtp.css'

const OTPBOX = () => {
    return <section>
        <div class="otpBox">
            <div class="block5">
                <p>Enter OTP sent on 999-999-9999<span class="required">*</span> <span class="resendOTP underLine">Change</span></p>
                <input type="number" name="OTP" class="otp" placeholder="0 0 0 0" />
            </div>
            <a href='./' onclick="alert('you are using demo version! for demonstration purpose OTP is 7889')" class="resendOTP">Resend OTP</a>
        </div>
    </section>
}

export default OTPBOX;