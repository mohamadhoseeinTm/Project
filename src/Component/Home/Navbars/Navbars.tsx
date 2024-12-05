import { useState, useRef, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Navbars.scss";
import icon from '../../../assets/icon.png'
const Navbars = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [indicatorPosition, setIndicatorPosition] = useState(0);
    const location = useLocation();


    const allowedPaths = ["/", "/Profile", "/Products", "/Contact"];


    const isAllowedPage = allowedPaths.includes(location.pathname);
    console.log(isAllowedPage);


    const navItemsRef = useRef<(HTMLLIElement | null)[]>([]);

    useEffect(() => {
        const activeItem = navItemsRef.current[activeIndex];
        if (activeItem) {
            setIndicatorPosition(activeItem.offsetLeft);
        }
    }, [activeIndex]);

    const navItems = [
        { to: "/", icon: "🏠", label: "خانه" },
        { to: "/Products", icon: "💬", label: "محصولات" },
        { to: "/Contact", icon: "⚙️", label: "تماس با ما" },
    ];

    return (
        <div
            className="Main"
            style={{ display: isAllowedPage ? "block" : "none" }}
        >
            {/* mobile */}
            <div className="navigation">
                <div style={{ position: "absolute" }}>
                    <ul className="flex justify-center space-x-4">
                        {navItems.map((item, index) => (
                            <li
                                key={index}
                                className={`nav-item ${activeIndex === index ? "active" : ""}`}
                                ref={(el) => (navItemsRef.current[index] = el)}
                            >
                                <NavLink
                                    to={item.to}
                                    onClick={() => setActiveIndex(index)}
                                    className="nav-link flex items-center space-x-2"
                                >
                                    <span className="icon">{item.icon}</span>

                                    {activeIndex === index && (
                                        <span className="label">{item.label}</span>
                                    )}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                    <div
                        className="indicator"
                        style={{
                            left: `${indicatorPosition}px`,
                            transition: "0.5s",
                        }}
                    >
                        <span className="block h-1 bg-blue-500 w-full"></span>
                    </div>
                </div>
            </div>

            {/* desktop */}
            <div className="navigation-desktop">
                <div className="header">
                    <div className="header-nav">
                        <div className="icon">
                            <img src={icon} alt="" />
                        </div>
                        <div className="item-menu">
                            {navItems.map((item) => {
                                return (
                                    <NavLink to={item.to}>
                                        <p>{item.label}</p>
                                    </NavLink>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbars;

