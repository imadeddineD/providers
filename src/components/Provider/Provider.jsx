import React, { useEffect } from 'react'
// import AdminNavbar from './AdminNavbar'
// import OrderClient from './OrderClient'
import LanguageDetector from 'i18next-browser-languagedetector'
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import HttpApi from 'i18next-http-backend';
import cookies from "js-cookie";
import ClientNavbar from './ClientNavbar';
import { columns, columnsEng } from './Columns';
import { DataTable } from '../ui/DataTable';
import NavbarBanner from './NavbarBanner';

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

const Client = () => {

  const data = []


  const { t } = useTranslation();

  const lng = cookies.get("i18next") || "en"

  useEffect(() => {
    window.document.dir = i18n.dir()
  },[lng])

  const Provider = lng === "en" ? "Provider Dashboard" : "لوحة تحكم مزود الخدمة"

  const orders = lng === "en" ? "Clients Orders" : "طلبات العملاء"


  return (
    <div>
        <ClientNavbar lng={lng} />
        <NavbarBanner lng={lng}/>
        <section className=' pt-10'>
            <div className="max-w-7xl mx-auto px-4 flex flex-col items-center text-center">
                <div className="text-4xl lg:text-6xl my-4 font-semibold tracking-tighter bg-gradient-to-b from-blue-800 via-blue-600 to-blue-400 bg-clip-text text-transparent ">
                    {Provider}
                </div>
                
            </div>
        </section>
        <div className="pt-14 max-w-7xl mx-auto px-4">
          <div className=' text-[22px] font-semibold text-neutral-800'>{orders} :  </div>
           <DataTable columns={lng === "en" ? columnsEng : columns } data={data} searchKey="label" lng={lng} />
        </div>
    </div>
  )
}

export default Client