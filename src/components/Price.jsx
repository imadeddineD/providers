import { PLANS_CONTENT } from './constants'
import React, { useEffect } from "react";
import LanguageDetector from 'i18next-browser-languagedetector'
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import HttpApi from 'i18next-http-backend';
import cookies from "js-cookie";
import NavBar from './NavBar';


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

const Price = () => {

    const { t } = useTranslation();

    const lng = cookies.get("i18next") || "en"
  
    useEffect(() => {
      window.document.dir = i18n.dir()
    },[lng])

  return (
    <section id="pricing">
        <NavBar lng={lng} label={t("NavLang")}/>
        <div className="max-w-7xl mx-auto px-4 mt-28">
            <div className="text-center mb-12">
                <h2 className="text-4xl lg:text-6xl my-4 font-semibold tracking-tighter bg-gradient-to-b from-blue-800 via-blue-600 to-blue-400 bg-clip-text text-transparent ">
                    {PLANS_CONTENT.sectionTitle}
                </h2>
                {/* <p className='mt-4'>{PLANS_CONTENT.sectionDescription}</p> */}
            </div>


            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {PLANS_CONTENT.plans.map((plan , index) => (
                    <div className={`p-8 rounded-xl shadow-lg bg-white ${
                        plan.popular ? "border border-[#2d9bff]" : "border border-neutral-500"
                    }`}>
                        {plan.popular && (
                            <div className='text-center mb-4'>
                                <span className=' bg-blue-600 text-white text-xs py-1 px-3 rounded-full uppercase'>
                                    {PLANS_CONTENT.popularBadge}
                                </span>
                            </div>
                        )}
                        <h3 className="text-lg lg:text-xl mb-4 tracking-tighter uppercase">
  {plan.name}
</h3>
<p className="text-neutral-600 mb-6">
  {plan.description}
</p>
<div className="text-2xl lg:text-3xl font-medium mb-6">
  {plan.price}
</div>
<ul className="mb-8 space-y-2 text-neutral-600">
  {plan.features.map((feature, i) => (
    <li key={i} className="flex items-center">
      {feature}
    </li>
  ))}
</ul>
<button className=' w-full py-3 px-4 bg-blue-600 hover:bg-blue-500 rounded-lg'>
    {PLANS_CONTENT.ctaText}
</button>

                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Price