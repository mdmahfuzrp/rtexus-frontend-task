import { BarIcon, OffMenu } from "../assets/icons";
import DarkMode from "../components/DarkMode/DarkMode";
import UserImg from "../assets/Avatar.png";
import { useEffect, useState } from "react";

const Navbar = ({ open, setOpen }) => {

  // Here are scroll effect
  const [scrolled, setScrolled] = useState(false);

// //   Scroll Effect
//   useEffect(() => {
//     const handleScroll = () => {
//       const mainPageContent = document.getElementById("mainPageContent");
//       if (mainPageContent.scrollTop > 25) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     const mainPageContent = document.getElementById("mainPageContent");
//     if (mainPageContent) {
//       mainPageContent.addEventListener("scroll", handleScroll);
//     }

//     return () => {
//       if (mainPageContent) {
//         mainPageContent.removeEventListener("scroll", handleScroll);
//       }
//     };
//   }, [setScrolled]);

  return (
    <div
      id="navbar"
      className={`w-full flex z-[99999999] items-center justify-between md:py-[12px] px-5 ${
        scrolled ? "scrolled" : ""
      }`}
    >
      {/* Open Menu Button */}
      <div className="flex items-center justify-start">
        <div
          onClick={() => setOpen(!open)}
          className="flex md:hidden items-center gap-2.5 font-medium barStyles !ml-[-2px] !mr-[10px]"
        >
          <BarIcon />
        </div>
        <h1
          className={`text-[20px] mt-[1px] ${scrolled ? "!text-white" : ""}`}
          id="pageTitle"
        >
          Home
        </h1>
      </div>

      {/* Dark Mode and User Profile */}
      <div className="flex items-center gap-4 mt-[]">
        <DarkMode />
        <div className="flex items-center gap-2">
          <img
            src={UserImg}
            alt=""
            className="w-[35px] h-[35px] mb-[-3px] border-2 rounded-full"
            id="userIcon"
          />
          <div
            id="openProfile"
            className={`cursor-pointer !shadow-none -rotate-90 flex items-center justify-center rounded-full mt-1 fill-white`}
            style={{ backgroundColor: "transparent" }}
          >
            <OffMenu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
