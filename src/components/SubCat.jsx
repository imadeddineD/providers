import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import LanguageDetector from 'i18next-browser-languagedetector'
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import HttpApi from 'i18next-http-backend';
import cookies from "js-cookie";
import NavBar from './NavBar';
import { Modal } from './Modal';
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { RiCloseCircleLine } from "react-icons/ri";
import toast from 'react-hot-toast';

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

const SubCat = () => {
    const { t } = useTranslation();

  const lng = cookies.get("i18next") || "en"

  useEffect(() => {
    window.document.dir = i18n.dir()
  },[lng])

    const categoriesAr = [
        { id : "1" ,name: 'هندسة', color: '#0063ff', delay: 0.2 },
        { id : "2" ,name: 'إنجليزي', color: '#00c986', delay: 0.3 },
        { id : "3" ,name: 'برمجة', color: '#922aee', delay: 0.4 },
        { id : "4" ,name: 'علوم', color: '#ea7516', delay: 0.5 },
        { id : "5" ,name: 'تاريخ', color: '#075267', delay: 0.6 },
        { id : "6" ,name: 'علم النفس', color: '#986d1d', delay: 0.7 },
        { id : "7" ,name: 'هندسة', color: '#0063ff', delay: 0.2 },
        { id : "8" ,name: 'إنجليزي', color: '#00c986', delay: 0.3 },
        { id : "9" ,name: 'برمجة', color: '#922aee', delay: 0.4 },
        { id : "10" ,name: 'علوم', color: '#ea7516', delay: 0.5 },
        { id : "11" ,name: 'تاريخ', color: '#075267', delay: 0.6 },
        { id : "12" ,name: 'علم النفس', color: '#986d1d', delay: 0.7 },
      ];
    
      const categoriesEn = [
        { id : "1" ,name: 'Engineering', color: '#0063ff', delay: 0.2 },
        { id : "2" ,name: 'English', color: '#00c986', delay: 0.3 }, 
        { id : "3" ,name: 'Programming', color: '#922aee', delay: 0.4 },
        { id : "4" ,name: 'Science', color: '#ea7516', delay: 0.5 },
        { id : "5" ,name: 'History', color: '#075267', delay: 0.6 },
        { id : "6" ,name: 'Psychology', color: '#986d1d', delay: 0.7 },
        { id : "7" ,name: 'Engineering', color: '#0063ff', delay: 0.2 },
        { id : "8" ,name: 'English', color: '#00c986', delay: 0.3 }, 
        { id : "9" ,name: 'Programming', color: '#922aee', delay: 0.4 },
        { id : "10" ,name: 'Science', color: '#ea7516', delay: 0.5 },
        { id : "11" ,name: 'History', color: '#075267', delay: 0.6 },
        { id : "12" ,name: 'Psychology', color: '#986d1d', delay: 0.7 },
      ];

      const { id } = useParams();  // Get the course id from the URL
      const catAr = categoriesAr.find((item) => item.id === id);
      const catEn = categoriesEn.find((item) => item.id === id);


      const cat = lng === 'en' ? catEn : catAr;
      const categories = lng === 'en' ? categoriesEn : categoriesAr;
      const well = lng === 'en' ? "Welcome to Category " : "مرحبا بك في فئة";
      const can = lng === 'en' ? "Cancel" : "حذف";
      const send = lng === 'en' ? "Send" : "أرسل";
      const sub = lng === 'en' ? "Choose The Sub-Category of " : "اختر الفئة الفرعية لـ";
      const text = lng === 'en' ? "Add Some Informations To proviver" : "إضافة بعض المعلومات إلى مزود الخدمة";
      const sendOr = lng === 'en' ? "You are about to send an order to all providers of this service" : "أنت على وشك إرسال طلب إلى جميع مقدمي هذه الخدمة ";

      const [animationParent] = useAutoAnimate();

      const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const [formData, setFormData] = useState({
    message: ''
  });
  const handleChange = (e ) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData)
  }
    

  return (
    <>
        <NavBar lng={lng} label={t("NavLang")}/>
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center text-center" ref={animationParent}>
        <div className="text-5xl font-semibold lg:text-6xl !leading-tight mt-36 mb-20">
           {well} <span className="text-blue-700">{cat.name}</span> 
        </div>
        <div className="text-3xl font-semibold lg:text-4xl !leading-tight mb-10">
             {sub} <span className="text-blue-700">{cat.name}</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10 w-full">
          {categories.map((subject, index) => (
            <>
           <a
  key={index}
  href={`/${subject.id}`}
  onClick={(e) => {
    e.preventDefault(); // منع إعادة تحميل الصفحة
    openModal();
  }}
>
  <div
    style={{
      color: subject.color,
      backgroundColor: subject.color + "20",
    }}
    className="border rounded-lg border-secondary/20 p-4 flex justify-center items-center hover:!scale-105 hover:!shadow-xl duration-200 cursor-pointer"
  >
    <p>{subject.name}</p>
  </div>
</a>

            <Modal
            closeModal={closeModal}
            showModal={modalIsOpen}
            className=" flex flex-col gap-5"
          >
            {/*  */}
            <section className="flex justify-between items-center gap-3">
              <h1 className="text-2xl font-semibold">{sendOr}</h1>
    
              <RiCloseCircleLine
                onClick={closeModal}
                width={25}
                className="text-5xl  cursor-pointer text-red-600 "
              />
            </section>
    
            <form action="" onSubmit={handleSubmit}>
              
              
              <div className="form-group">
                <textarea 
                name="message" 
                id="" 
                placeholder={text}
                value={formData.message}
                onChange={handleChange} ></textarea>
              </div>
              <div className="flex justify-end gap-3">
                <button
                onClick={closeModal}
                className="border-[1px] px-4 py-2 rounded-md hover:bg-gray-100"
                type="button"
              >
                {can}
              </button>
    
              <button
                onClick={closeModal}
                className="border-[1px] px-4 py-2 rounded-md bg-blue-700 text-white hover:bg-opacity-70 "
                type="submit"
              >
                {send}
              </button>
              </div>
            </form>
            
          </Modal>
          </>
          ))}
        </div>
        </div>
    </>
  )
}

export default SubCat