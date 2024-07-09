// import LoginDetails from "./loginDetails";
import OTPBOX from "./loginOtp";
import '../css/loginPage/loginBox.css'

const LoginBox = () => {
    return <div class="right bg-blue fixed scrollable h-60 border curve w-40">
        <div class="header">
            <p>LETS GET YOU STARTED!</p>
        </div>
        {/* <LoginDetails /> */}
        <OTPBOX />
        <div class="footer">
            <div>
                <p>Need Help? </p><a href="tel:+91 7587845520">CALL 1234567890</a>
            </div>
            <input type="button" class="" value="NEXT" />
        </div>
    </div>
}

export default LoginBox;