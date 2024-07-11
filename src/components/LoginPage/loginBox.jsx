import { Route, useNavigate } from "react-router-dom";
import { useMultiStepForm } from "../useMultistepForm";
import LoginDetails from "./loginDetails";
import OTPBOX from "./loginOtp";


const LoginBox = () => {
    const navigate = useNavigate();
    const { steps, currentStepIndex, step, next } = useMultiStepForm([
        <LoginDetails />,
        <OTPBOX />,]);
    const onSubmit = (e) => {
        e.preventDefault();
        if (currentStepIndex === steps.length - 1) {
            navigate('/listProperty')
        }
        return next();
    };
    return <div className="right border-2 border-[#D6D6D6] relative h-full bg-white rounded-2xl text-black w-5/12">
        <form onSubmit={onSubmit} >
            <div className="header rounded-t-2xl content-center bg-[#FCF8F4] h-1/5 border-b-4 border-[#FCF8F4] pt-1 text-[#122B49] text-xl pl-12">
                <p>LETS GET YOU STARTED!</p>
            </div>
            {step}

            <div className="footer absolute justify-between bottom-0 items-center flex content-center text-xs w-full bg-[#FCF8F4] h-1/6 rounded-b-2xl">
                <div className="flex ml-6 text-[#7A7A7A]">
                    <p>Need Help? </p><a href="tel:+91 7587845520" className="no-underline font-semibold ml-2  text-[#122B49] ">CALL 9999999999</a>
                </div>
                <input type="submit" className="right-2 rounded-lg cursor-pointer bg-[#122B49] border-2 border-[#122B49] py-1 px-6 text-white float-right font-extralight text-base mr-5" value="NEXT" />
            </div>
        </form>
    </div>
}

export default LoginBox;