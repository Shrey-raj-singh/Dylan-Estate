import LoginBox from './loginBox';
import LoginLeftContent from './loginLeftContent';

const LoginPage = () => {

    return <main className="mainContent h-[100vh] bg-[#122B49] text-white w-full font-normal content-center">
        <div className='w-3/4 h-2/3 mx-auto relative'>
            <div className="main-heading">
                <p className="title-head mb-2 text-4xl">Sell or Rent your Property For Free</p>
                <p className="detail text-base font-light">some sort of statements or sentence here as per UI given by company</p>
            </div>
            <div className="main-description justify-around flex absolute w-full pl-0 mt-12 h-2/3">
                <LoginLeftContent />
                <LoginBox />
            </div>
        </div>
    </main>
}

export default LoginPage;