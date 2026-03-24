import { Link } from "react-router-dom";
import { REGISTER_URL } from "../../config";
import HeaderTopV3 from './HeaderTopV3';
import MainMenu from './MainMenu';
import MobileMenu from './MobileMenu';
import useStickyMenu from '../../hooks/useStickyMenu';
import useSidebar from '../../hooks/useSidebar';
import useMobileMenu from '../../hooks/useMobileMenu';
import SidebarV1 from "./SidebarV1";

interface DataType {
    headerStyle?: string;
    parentMenu?: string;
}

const HeaderV3 = ({ headerStyle }: DataType) => {

    const isSticky = useStickyMenu();
    const { openSidebar, toggle: sidebarToggle, close: sidebarClose } = useSidebar();
    const { openMenu, toggle: mobileToggle, close: handleCloseMenu, toggleMenuItem, isMenuItemOpen } = useMobileMenu();

    return (
        <>
            <header className={`main-header header-style-three ${headerStyle ? headerStyle : ""} ${isSticky ? "fixed-header" : ""}`}>

                {isSticky ||
                    <HeaderTopV3 />
                }

                <div className="header-lower">
                    <div className="auto-container clearfix">
                        <div className='main-box'>
                            <div className="logo-box">
                                <div className="logo">
                                    <Link to="/"><img src="/images/logo_fit_zwart.svg" alt="image" /></Link>
                                </div>
                            </div>
                            <div className="header-navbar">
                                <div className="nav-outer clearfix">
                                    <div className="mobile-nav-toggler" onClick={mobileToggle}>
                                        <span className="icon lnr-icon-bars"></span>
                                    </div>

                                    <nav className="nav main-menu navbar-expand-lg navbar-light">
                                        <MainMenu  />
                                    </nav>

                                    <div className="outer-box">
                                        <button className="ui-btn toggle-hidden-bar" onClick={sidebarToggle}>
                                            <i className="icon flaticon-menu-2"></i>
                                        </button>
                                        <div className="btn-box">
                                            <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer" className="theme-btn btn-style-one dark-bg">
                                                <span className="btn-title">Registreren</span>
                                            </a>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <MobileMenu
                    openMenu={openMenu}
                    handleCloseMenu={handleCloseMenu}
                    toggleMenuItem={toggleMenuItem}
                    isMenuItemOpen={isMenuItemOpen}
                />

            </header>


           
            <SidebarV1 openSidebar={openSidebar} sidebarClose={sidebarClose} />
        </>
    );
};

export default HeaderV3;