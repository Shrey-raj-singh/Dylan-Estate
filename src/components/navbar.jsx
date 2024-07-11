import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link
  } from 'react-router-dom';

const NavBar = () => {
    return <nav className="navBar bg-[#FCF8F4] absolute justify-between top-0 left-0 w-full z-50 flex h-16 pb-2 border-b-2 border-[#F6EFE6]">
        <img src="./LOGO.png" alt="logo " className="navBarLogo mt-2 ml-12 w-[117px] h-[52px]" />
        <div className="navBarTexts text-black justify-between flex relative top-2 w-2/3 pt-3 mr-6">
            <Link to="/" className='py-3.5 font-bold'>PROPERTIES</Link>
            <Link to="/" className='py-3.5 font-bold'>MY DASHBOARD/ACTIVITY</Link>
            <Link to="/listProperty" className='py-3.5 font-bold'>LIST YOUR PROPERTY</Link>
            <Link to="/" className='py-3.5 font-bold'>CONTACT US</Link>
            <Link to="/" className='py-3.5 font-bold'>MORE</Link>
            <span className="icons border-l-2 border-black flex w-28 h-full justify-evenly">
                <Link to="/" className='py-3.5 font-bold'><img src="./translateIcon.png" alt="tr"/></Link>
                <Link to="/" className='py-3.5 font-bold'><img src="./accountIcon.png" alt="ac" /></Link>
            </span>
        </div>
    </nav>
}

export default NavBar;