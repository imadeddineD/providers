import React, { useEffect } from "react";
import LanguageDetector from 'i18next-browser-languagedetector'
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import HttpApi from 'i18next-http-backend';
import cookies from "js-cookie";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero"; 
import Categories from "./components/Categories";

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

const App = () => {
    const { t } = useTranslation();

  const lng = cookies.get("i18next") || "en"

  useEffect(() => {
    window.document.dir = i18n.dir()
  },[lng])
  return (
    <>
      <NavBar lng={lng} label={t("NavLang")} />
      <Hero label={t("HeroPrincple")} login={t("Login")} /> 
      <Categories lng={lng} category={t("Category")} />
    </>
  )
}



export default App
