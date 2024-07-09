import './css/navBar.css'
const NavBar = () => {
    return <nav class="navBar">
        <img src="./LOGO.png" alt="logo " class="navBarLogo mgl-30" />
        <div class="navBarTexts flex black w-50 space-between">
            <a href="./">PROPERTIES</a>
            <a href="./">MY DASHBOARD/ACTIVITY</a>
            <a href="./">LIST YOUR PROPERTY</a>
            <a href="./">CONTACT US</a>
            <a href="./">MORE</a>
            <span class="icons right left-border mgr-40 pdl-20">
                <a href="./"><img src="./translateIcon.png" alt="tr" /></a>
                <a href="./"><img src="./accountIcon.png" alt="ac" /></a>
            </span>
        </div>
    </nav>
}

export default NavBar;