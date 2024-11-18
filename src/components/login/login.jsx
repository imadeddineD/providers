import React, { useEffect } from "react";
import verified from "../../assets/verified.png"
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import LanguageDetector from 'i18next-browser-languagedetector'
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import HttpApi from 'i18next-http-backend';
import cookies from "js-cookie";
import arab from "../../assets/ar.png"
import eng from "../../assets/en.png"
import logo from "../../assets/logo.png"

i18n
.use(initReactI18next).use(LanguageDetector).use(HttpApi) 
.init({
  fallbackLng: "en",
  detection : {
    order :[
      "cookie" ,
      "htmlTag" ,  
      "localStorage" , 
      "sessionStorage" , 
      "navigator" , 
      "path" , 
      "subdomain"
    ], 
    caches : ["cookie"]
  },
  backend : {
    loadPath : "/locale/{{lng}}/translation.json"
  }  
});


const Login = () => {

    const { t } = useTranslation();

    const lng = cookies.get("i18next") || "en"
  
    useEffect(() => {
      window.document.dir = i18n.dir()
    },[lng])

    const placePass = lng === 'en' ? "password" : "كلمة المرور";
    const log = lng === 'en' ? "login" : "تسجيل الدخول";
    const sign = lng === 'en' ? "sign up" : "اشتراك";
    const acc = lng === 'en' ? "Don't have an account?" : "ليس لديك حساب؟";
    const lang = lng === 'en' ? "Switch to : " : "التبديل إلى :";


  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/")
  }

  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="flex justify-center items-center bg-gray-200 py-8">
      {/* Login Container */}
      <div className="flex flex-col md:flex-row border rounded-3xl p-3 bg-white shadow-lg max-w-4xl">
        
        {/* Left Box */}
        <div className="hidden md:flex flex-col justify-center items-center bg-[#2d9bff] p-8 rounded-2xl text-center">
          <img
            src={verified}
            alt="Featured"
            className="w-64 mb-4"
          />
          <p className="text-[#333] text-2xl font-bold">
            {t('Verifiy')}
          </p>
          <small className="text-[#333] mt-2 text-base">
            {t('desc')}
          </small>
        </div>

        {/* Right Box */}
        <div className="flex flex-col justify-center p-8 space-y-4 md:w-1/2">

        <div className="flex justify-center items-center">
        <a href="/">
        <img src={logo} alt="logo" className=" w-16 h-16 cursor-pointer" /></a>
        </div>
          <div className="mb-6">
            <h2 className="text-3xl font-bold">{t('salam')}</h2>
            <p className="text-gray-500">{t('happy')}</p>
          </div>
          <div>
            <input
              type="text"
              className="w-full p-4 mb-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary bg-gray-100 text-lg"
              placeholder="(+966) 123456789 "
            />
          </div>
          <div>
            <input
              type="password"
              className="w-full p-4 mb-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary bg-gray-100 text-lg"
              placeholder={placePass}
            />
          </div>

          {/* Remember Me and Forgot Password */}
          <div className="flex justify-between items-center mb-5">
            
            
          </div>

          {/* Login Button */}
          <div>
            <button className="w-full bg-[#2d9bff] text-white py-4 rounded-lg text-lg hover:bg-secondary/70 transition" onClick={handleClick}>
              {log}
            </button>
          </div>

          {/* Sign Up Link */}
          <div className="text-center mt-4">
            <small>
              {acc}{" "}
              <a href="/auth/register" className="text-[#2d9bff] hover:underline">
                {sign}
              </a>
            </small>
          </div>
          <div className="text-center mt-4 text-[18px] font-[500] flex justify-center items-center gap-2">
            {lang} {lng === "en" ? (
              <button onClick={() => handleLanguageChange("ar")}><img src={arab} alt="logo" width={25} height={24} /></button>
            ) : (
              <button onClick={() => handleLanguageChange("en")}><img src={eng} alt="logo" width={25} height={24} /></button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
