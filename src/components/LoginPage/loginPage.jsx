import '../css/loginPage/loginPage.css'
import '../css/loginPage/loginOtp.css'
import '../css/loginPage/loginLeftContent.css'
import '../css/loginPage/loginDetails.css'
import '../css/loginPage/loginOtp.css'

import LoginBox from './loginBox';
import LoginLeftContent from './loginLeftContent';
const LoginPage = () =>{
    return <main class=" mainContent">
    <div class="main-heading">
        <p class="title-head">Sell or Rent your Property For Free</p>
        <p class="detail">some sort of statements or sentence here as per UI given by company</p>
    </div>
    <div class="main-description w-70 bg-red h-60 flex center align-center space-around">
        <LoginLeftContent/>
        <LoginBox/>
    </div>
</main>
}

export default LoginPage;