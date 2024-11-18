import React from 'react'
import logo from "../../assets/logo.png"
import { Button } from '../ui/button'
import i18n from "i18next";
import arab from "../../assets/ar.png"
import eng from "../../assets/en.png"
import Notifications from '../Admin/components/Notification';

const ClientNavbar = ({lng}) => {

    const handleLanguageChange = (language) => {
        i18n.changeLanguage(language);
      };

    const Exit = lng === "en" ? "Exit" : "خروج" ;

  return (
    <div className="border-b">
            <div className="flex h-[64px] w-[90%] mx-auto justify-between items-center px-4">
                <div className=" w-[60px]">
                    <img src={logo} width={60} height={40} />
                </div>
                <Notifications/>
                {/* <MainNav lng={lng} />  */}

                <div className=' flex justify-center items-center gap-3'>
                
                    <a href='/'>
                        <Button className="bg-[#2d9bff] text-white py-2 px-4 rounded-lg hover:bg-blue-500 transition-all duration-75 ease-linear flex justify-between gap-2 items-center font-[500]" >{Exit}</Button>
                    </a>
                    <div className=" flex justify-center items-center">
                        {lng === "en" ? (
                        <button onClick={() => handleLanguageChange("ar")}><img src={arab} alt="logo" width={40} height={24} /></button>
                        ) : (
                        <button onClick={() => handleLanguageChange("en")}><img src={eng} alt="logo" width={40} height={24} /></button>
                        )}
                    </div>
                </div>
            </div>
        </div>
  )
}

export default ClientNavbar