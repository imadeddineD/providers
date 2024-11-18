import React, { useEffect } from 'react'
import AdminNavbar from './AdminNavbar'
import OrderClient from './OrderClient'
import LanguageDetector from 'i18next-browser-languagedetector'
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import HttpApi from 'i18next-http-backend';
import cookies from "js-cookie";

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

const Admin = () => {


  const { t } = useTranslation();

  const lng = cookies.get("i18next") || "en"

  useEffect(() => {
    window.document.dir = i18n.dir()
  },[lng])

  return (
    <div>
        <AdminNavbar lng={lng} />
        <div className="pt-14 max-w-7xl mx-auto px-4">
          <OrderClient lng={lng} />
        </div>
    </div>
  )
}

export default Admin