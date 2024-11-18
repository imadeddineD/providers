import React from "react";
import logo from "../assets/logo.png";
import { CiLogin } from "react-icons/ci";
import i18n from "i18next";
import arab from "../assets/ar.png"
import eng from "../assets/en.png"
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu"


 
const NavBar = ({ lng , label }) => {
  // Function to change the language
  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
  };

  const Provider = lng === 'en' ? "Service Provider" : "مزود الخدمة";
  const Client = lng === 'en' ? "Client" : "عميل";
  const Admin = lng === 'en' ? "Website Admin" : "مشرف الموقع";
  const Dashboard = lng === 'en' ? "Dashboard" : "لوحة تحكم";

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 m-2">
      <div className="text-neutral-800 bg-white/60 backdrop-blur-md max-w-7xl mx-auto px-4 py-3 flex justify-between items-center rounded-xl border border-neutral-400">
        <a href="/"><img src={logo} alt="logo" width={50} height={24} /></a>
        <div className="flex justify-center items-center gap-4">
          <div className="flex gap-4 items-center">
            <a
              href="/auth/login"
              className="bg-[#2d9bff] text-white py-2 px-4 rounded-lg hover:bg-blue-500 transition-all duration-75 ease-linear flex justify-between gap-2 items-center font-[500]"
            >
              <span className="hidden sm:inline-block">{label}</span> <CiLogin className="text-[22px]" />
            </a>
            
            <DropdownMenu>
              <DropdownMenuTrigger>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className=" mt-[13px]">
                <DropdownMenuLabel>{Dashboard}</DropdownMenuLabel>
                <DropdownMenuSeparator /> 
                <a href="/dashboard/admin"><DropdownMenuItem>{Admin}</DropdownMenuItem></a>
                <a href="/dashboard/client"><DropdownMenuItem>{Client}</DropdownMenuItem></a>
                <a href="/dashboard/provider"><DropdownMenuItem>{Provider}</DropdownMenuItem></a>
              </DropdownMenuContent>
            </DropdownMenu>


          </div>
          <div className=" flex justify-center items-center">
            {lng === "en" ? (
              <button onClick={() => handleLanguageChange("ar")}><img src={arab} alt="logo" width={40} height={24} /></button>
            ) : (
              <button onClick={() => handleLanguageChange("en")}><img src={eng} alt="logo" width={40} height={24} /></button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
