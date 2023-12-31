import { useEffect } from "react";
import { useRef } from "react";
import { motion } from "framer-motion";

import { Link, NavLink, useLocation } from "react-router-dom";
import "./SideBar.css";
import {
  BarIcon,
  BrandLogo,
  CalenderIcon,
  HistoryIcon,
  HomeIcon,
  NewAppointment,
  SettingsIcon,
  UserIcon,
} from "../../assets/icons";

const Sidebar = ({ isTabletMid, open, setOpen }) => {
  const sidebarRef = useRef();
  const { pathname } = useLocation();

  useEffect(() => {
    if (isTabletMid) {
      setOpen(false);
    } else {
      setOpen(false);
    }
  }, [isTabletMid]);

  useEffect(() => {
    isTabletMid && setOpen(false);
  }, [pathname]);

  // For Responsive Design
  const Nav_animation = isTabletMid
    ? {
        open: {
          x: 0,
          width: "202px",
          transition: {
            damping: 40,
          },
        },
        closed: {
          x: -250,
          width: 0,
          transition: {
            damping: 40,
            delay: 0.15,
          },
        },
      }
    : {
        open: {
          width: "202px",
          transition: {
            damping: 40,
          },
        },
        closed: {
          width: "4rem",
          transition: {
            damping: 40,
          },
        },
      };

  return (
    // All Side Bar
    <div id="sidebar">
      <div
        onClick={() => setOpen(false)}
        className={`md:hidden fixed inset-0 h-screen z-[998] bg-black/50 ${
          open ? "block" : "hidden"
        } `}
      ></div>
      
      <motion.div
        ref={sidebarRef}
        variants={Nav_animation}
        initial={{ x: isTabletMid ? -250 : 0 }}
        animate={open ? "open" : "closed"}
        className=" text-gray shadow-xl z-[999] 
             md:relative fixed
             overflow-hidden
         h-screen "
        id="sidebar"
      >
        {/* Hamburger and Logo Switch Logic */}
        <div className="flex items-center h-[35px] mt-[12px] mb-6">
          {!open ? (
            <>
              <div
                onClick={() => setOpen(!open)}
                className="hidden md:flex items-center gap-2.5 font-medium barStyles mx-3"
              >
                <BarIcon />
              </div>
              <div className="md:hidden flex items-center gap-2 font-medium mx-3">
                <BrandLogo />
                <h1 className="text-[24px] font-medium" id="brandLogo">
                  <span id="">Medi</span>Doc
                </h1>
              </div>
            </>
          ) : (
            <div className="flex items-center gap-2 font-medium mx-3">
              <BrandLogo />
              <h1 className="text-[24px] font-medium" id="brandLogo">
                <span id="">Medi</span>Doc
              </h1>
            </div>
          )}
        </div>

        <div className="flex flex-col overflow-x-hidden scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-100 md:h-[80%]">

          {/* Sidebar Items */}
          <ul className="whitespace-pre px-2.5 text-[0.9rem] py-5 flex flex-col gap-7 font-medium ">
            <li className="no-underline">
              <NavLink
                to={"/"}
                className="flex special-icon text-base items-center no-underline pl-[6px] rounded-md"
              >
                <span className="mr-[15px] iconStyles special">
                  <HomeIcon />
                </span>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/products"}
                className="flex special items-center text-base no-underline pl-[6px] rounded-md"
              >
                <span className="mr-[16px] iconStyles-path">
                  <UserIcon className="min-w-max pr-1 mr-4" />
                </span>
                Patient Profile
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/orders"}
                className="flex special items-center text-base no-underline pl-[6px] rounded-md"
              >
                <span className="mr-[15px] iconStyles-path">
                  <CalenderIcon className="min-w-max pr-1 mr-4" />
                </span>
                Appointments
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/reports"}
                className="flex special items-center text-base no-underline  pl-[6px] rounded-md"
              >
                <span className="mr-[15px] iconStyles">
                  <HistoryIcon className="min-w-max pr-1 mr-4" />
                </span>
                Medical History
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/customers"}
                className="flex special items-center text-base font-medium no-underline pl-[6px] rounded-md"
              >
                <span className="mr-[15px] iconStyles-path">
                  <SettingsIcon className="min-w-max pr-1 mr-4 " />
                </span>
                Settings
              </NavLink>
            </li>
          </ul>
          
          
          {/* New Appointment Section */}
          {open ? (
            <motion.div
              className="flex w-[150px] mx-auto mt-[30px] md:mt-[60px]"
              initial={{ "--opacity": "0" }}
              animate={{ "--opacity": "1" }}
              transition={{ duration: 3 }}
            >
              <Link
                className="appointment-btn"
                style={{ opacity: "var(--opacity)" }}
              >
                New Appointment
              </Link>
            </motion.div>
          ) : (
            <div
              className="relative  mt-[30px] md:mt-[60px] cursor-pointer flex items-center justify-center w-full"
            >
              <NewAppointment />
              <div className="animatedButton"></div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Sidebar;
