import { useState, useEffect } from "react";
import logo from "../assets/shared/desktop/logo.svg";
import menu from "../assets/shared/mobile/menu.svg";
import close from "../assets/shared/mobile/close.svg";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  const [hideMenuOnScroll, setHideMenuOnScroll] = useState(false);
  const pathname = window.location.pathname;

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setHideMenuOnScroll(true);
      setToggle(false);
    } else {
      setHideMenuOnScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        !hideMenuOnScroll ? "top-0 opacity-100" : "top-[-72px] opacity-0"
      } transition-all duration-500 ease-in-out fixed z-10 bg-white w-full py-[28px] md:py-[16px] `}
    >
      <div className="mx-auto px-[29px] flex justify-between items-center md:px-10 xl:px-[165px]">
        <a href="/">
          <img
            src={logo}
            alt="logo"
            className="object-contain object-left w-full h-4"
          />
        </a>
        <nav>
          <ul
            className={`${
              !toggle ? "hidden" : "flex"
            } z-10 absolute bg-white top-[72px] left-0 right-0 font-bold text-[15px] tracking-[2.5px] flex-col py-8 space-y-5 justify-center items-center text-center px-[29px] md:w-full md:flex md:relative md:flex-row md:space-y-0 md:top-0 md:p-0 md:mb-0 md:space-x-[37px] md:text-[12px] md:tracking-[2px]`}
          >
            <li className="fadein">
              <a
                href="/stories"
                className={pathname == "/stories" ? "opacity-30" : ""}
              >
                STORIES
              </a>
            </li>
            <li className="fadein">
              <a
                href="/features"
                className={pathname == "/features" ? "opacity-30" : ""}
              >
                FEATURES
              </a>
            </li>
            <li className="w-full border-b-[1px] pb-5 fadein md:border-none md:pb-0 md:w-auto">
              <a
                href="/pricing"
                className={pathname == "/pricing" ? "opacity-30" : ""}
              >
                PRICING
              </a>
            </li>

            <a
              href="/pricing"
              className="w-full mt-5 cta fadein py-[14px] bg-black text-white hover:text-black hover:bg-lightGrey md:mt-0 md:px-6"
            >
              GET AN INVITE
            </a>
          </ul>

          {/* overlay */}
          <div
            className={`${
              !toggle ? "hidden" : "fixed"
            } top-[72px] bottom-0 left-0 right-0 bg-black/50`}
            onClick={() => setToggle(!toggle)}
          />

          {/* open/close buttons */}
          <img
            src={toggle ? close : menu}
            alt="menu"
            onClick={() => setToggle(!toggle)}
            className="cursor-pointer md:hidden"
          />
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
