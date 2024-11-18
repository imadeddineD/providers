import { CategoriesForm } from "./components/CatForm";
import LanguageDetector from 'i18next-browser-languagedetector'
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import HttpApi from 'i18next-http-backend';
import cookies from "js-cookie";
import { useEffect } from "react";
import AdminNavbar from "@/components/Admin/AdminNavbar";

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



const CategoriesPage = () => {

    const { t } = useTranslation();

    const lng = cookies.get("i18next") || "en"
  
    useEffect(() => {
      window.document.dir = i18n.dir()
    },[lng])
    const categories = null
    
    return (
        <div className="flex-col">
            <AdminNavbar lng={lng} />
            <div className="flex-1 space-y-4 p-8 pt-6">
                <CategoriesForm initialData={categories} lng={lng} />
            </div>
        </div>
    );
}
 
export default CategoriesPage;