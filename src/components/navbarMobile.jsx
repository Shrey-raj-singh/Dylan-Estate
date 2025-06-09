const NavBarMobile = () => {
    const isOpen = false;
    return <nav className="navBarMobile bg-[#FCF8F4] absolute justify-between top-0 left-0 w-full z-50 flex h-16 pb-2 border-b-2 border-[#F6EFE6]">
        <img src="./LOGO.png" alt="logo " className="navBarMobileLogo mt-2 ml-12 w-[117px] h-[52px]" />
        <div className="navBarMobileTexts text-black justify-between flex relative top-2 w-2/3 pt-3 mr-6">
            <a href="./" className='py-3.5 font-bold'>PROPERTIES</a>
            <a href="./" className='py-3.5 font-bold'>MY ACTIVITY</a>
            <a href="./listProperty" className='py-3.5 font-bold'>LIST YOUR PROPERTY</a>
            <a href="./" className='py-3.5 font-bold'>CONTACT US</a>
            <a href="./" className='py-3.5 font-bold'>MORE</a>
            <span className="icons border-l-2 border-black flex w-28 h-full justify-evenly">
                <a href="./" className='py-3.5 font-bold'><img src="./translateIcon.png" alt="tr"/></a>
                <a href="./" className='py-3.5 font-bold'><img src="./accountIcon.png" alt="ac" /></a>
            </span>
        </div>
    </nav>
}

export default NavBarMobile;
