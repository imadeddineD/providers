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
import elec from "../assets/elec.jpg"
import air from "../assets/air.jpg"
import plom from "../assets/plom.jpg"
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
    { id : "1" ,name: "كهربائي", color: '#2d9bff' , image : elec, delay: 0.2 , subCat : ["تركيب سبوت لايت" , "تغيير لمبات داخليه" , "تركيب فيش" , "تركيب مفتاح مكيف" , "تركيب شفاط مطبخ" , "تركيب كشاف خارجي" , "تركيب شريط ليد" , "مفتاح سخان" , "تركيب ثريا صغيرة" , "تركيب ثريا كبيرة" , "تأسيس الكهرباء" , "تركيب قاطع" , "تغيير قاطع" , "تركيب طبلون جديد" , "تركيب مروحة سقف"]},
    { id : "2" ,name: "سباك", color: '#2d9bff' , image : air, delay: 0.3 , subCat : ["تغيير شطاف و تركيب جديد" , "تغيير خلاط مغسلة" , "تغيير سخان مياه" , "تركيب سخانة جديد" , "تركيب خلاط مطبخ" , "تركيب مغسلة يد" , "تغيير مغسلة يد" , "تركيب دش كامل" , "تغيير خلاط دش" , "تغيير كرسي حمام" , "تركيب كرسي جديد" , "تركيب كرسي جديد" , "تركيب بانيو خارجي" , "تغيير أو تركيب عوامة الماء " , "تغيير أو تركيب عوامة عادية" , "تغيير مضخة مياه ( دينمو)" , "تركيب ماكينة سايفون عربي" , "تغيير محبس زاوية" , "تغيير ليات سخان"]},
    { id : "3" ,name: "التكييف", color: '#2d9bff' , image : plom, delay: 0.4 , subCat : ["تنظيف مكيف السبليت" , "تنظيف مكيف مركزى" , "تركيب مكيف اسبليت" , "تركيب مكيف شباك" , "فك مكيف اسبليت" , "فك مكيف شباك" , "فك و تركيب مكيف اسبلت" , "فك و تركيب مكيف شباك" , "تركيب تكييف دولابى" , "فك مكيف دولابى" , "فك واعاده تركيب تكييف دولابى" , "تعبئة فريون هندي" , "تعبئة فريون امريكي" ]},
    { id : "4" ,name: "كاميرات مراقبة", color: '#2d9bff' , image : elec, delay: 0.5 , subCat : ["صيانة كاميرات" , "تركيب كاميرات" , "تغيير كاميرا" , "تغيير جهاز" , "سحب التسجيل" ]},
    { id : "5" ,name: "دهان", color: '#2d9bff' , image : air, delay: 0.6 , subCat : ["دهان غرفة جديد" , "اعادة دهان غرفة" , "دهان شقة صغيرة جديد" , "اعادة دهان شقة صغيرة" , "دهان شقة كبيرة" , "اعادة دهان شقة كبيرة" , "دهان عمارة جديد" , "دهان خارجي جديد" , "اعادة دهان خارجي" ]},
    { id : "6" ,name: "مكافحة حشرات", color: '#2d9bff' , image : plom, delay: 0.7 , subCat : ["مكافحة حشرات شقة صغيرة" , "مكافحة الحشرات لدوبلكس - 250م" , "مكافحة حشرات فيلا - 400 متر" , "رش حوش" , "تنظيف خزان ارضي" , "تنظيف خزان علوي" , "مكافحة حشرات مستودعات" ]},
    { id : "7" ,name: "الأجهزة المنزلية", color: '#2d9bff' , image : elec, delay: 0.2 , subCat : ["صيانة غسالة ملابس" , "صيانة ثلاجة" , "صيانة فرن" , "صيانة غسالة صحون" ]},
    { id : "8" ,name: "نجارة", color: '#2d9bff' , image : air, delay: 0.3 , subCat : ["تركيب الأثاث" , "تركيب الستائر" , "تركيب الأبواب الخشبية" , "تصليح وصيانة الأثاث" , "اللوحات الفنية والديكورية" , "تجميع وتركيب أثاث ايكيا" , "تصنيع دواليب" , "تصنيع غرف النوم" ]},
    { id : "9" ,name: "شبكات", color: '#2d9bff' , image : plom, delay: 0.4 , subCat : ["تركيب راوتر واي فاي" , "صيانة راوتر واي فاي" , "تركيب وتمديد شبكات" , "صيانة شبكات" , "اعادة برمجة راوتر" ]},
    { id : "10" ,name: "ستلايت", color: '#2d9bff' , image : elec, delay: 0.5 , subCat : ["تركيب دش جديد" , "تركيب رسيفر جديد" , "صيانة دش قديم" , "شبكات الدش المركزي" , "تركيب شاشة" ]},
    { id : "11" ,name: "مبلط", color: '#2d9bff' , image : air, delay: 0.6 , subCat : ["تركيب بلاط جديد" , "اعادة تركيب بلاط" , "بلاط حوش" , "تغيير بلاط مطبخ" , "تغيير بلاط حمام" ]},
    { id : "12" ,name: "ديكورات", color: '#2d9bff' , image : plom, delay: 0.7 , subCat : ["ديكور محلات" , "ديكور للمنزل" , "ديكور خارجي" , "تركيب كلايدنج" , "تركيب جبس بورد"]},
  ];

  const categoriesEn = [
    { id : "1" ,name: 'electrical', color: '#2d9bff' , image : elec, delay: 0.2 , subCat : ["Spotlight installation" , "Change interior bulbs" , "Fish installation" , "Installing an air conditioner switch" , "Kitchen hood installation" , "Installing an outdoor floodlight" , "LED strip installation" , "Heater switch" , "Installing a small chandelier" , "Installing a large chandelier" , "Establishment of electricity" , "Cutter installation" , "Conclusive change" , "Installing a new drum" , "Installing a ceiling fan"]},
    { id : "2" ,name: 'plumber', color: '#2d9bff' , image : air, delay: 0.3 , subCat : ["Shattaf replacement" , "Changing the mixer" , "Change water heater" , "New heater installation" , "Installing a kitchen mixer" , "Installing a hand sink" , "Change hand sink" , "Shower installation" , "Change shower mixer" , "Changing a bathroom chair" , "Installing a new chair" , "Installing an outdoor bathtub" , "Installing a water float" , "Installing a regular float" , "Changing the water pump (dynamo)" , "Installing an Arabic siphon machine" ,"Change the angle valve" , "Change heater valves" ]}, 
    { id : "3" ,name: 'Air conditioning', color: '#2d9bff' , image : plom, delay: 0.4 , subCat : ["Split air conditioner cleaning" , "Central air conditioning cleaning" , "Split air conditioner installation" , "Window air conditioner installation" , "Removing split air conditioner" , "Remove window air conditioner" , "Installing a split air conditioner" , "Installing a window air conditioner" , "Cabinet air conditioning installation" , "Dismantle the closet air conditioner" , "Reinstalling a closet air conditioner" , "Indian Freon filling" , "American Freon refill" ]},
    { id : "4" ,name: 'Surveillance cameras', color: '#2d9bff' , image : elec, delay: 0.5 , subCat : ["Camera maintenance" , "Installing cameras" , "Change camera" , "Change device" , "Withdrawal of registration"]},
    { id : "5" ,name: 'Paint', color: '#2d9bff' , image : air, delay: 0.6 , subCat : ["New room paint" , "Repainting a room" , "New small apartment paint" , "Repainting a small apartment" , "Painting a large apartment" , "Repainting a large apartment" , "New building paint" , "New exterior paint" , "External repainting" ]},
    { id : "6" ,name: 'Insect control', color: '#2d9bff' , image : plom, delay: 0.7 , subCat : ["Small apartment pest control" , "Insect control for duplex - 250 m" , "Villa pest control - 400 m" , "Spraying the yard" , "Cleaning a ground tank" , "Cleaning the upper tank" , "Warehouse pest control" ]},
    { id : "7" ,name: 'Home appliances', color: '#2d9bff' , image : elec, delay: 0.2 , subCat : ["Washing machine maintenance" , "Refrigerator maintenance" , "Oven maintenance" , "Dishwasher maintenance" ]},
    { id : "8" ,name: 'Carpentry', color: '#2d9bff' , image : elec, air: 0.3 , subCat : ["Furniture installation" , "Installing curtains" , "Installing wooden doors" , "Furniture repair and maintenance" , "Artistic and decorative paintings" , "Installing IKEA furniture" , "Manufacture of cupboards" , "Bedroom manufacturing" ]}, 
    { id : "9" ,name: 'Networks', color: '#2d9bff' , image : plom, delay: 0.4 , subCat : ["Installing a Wi-Fi router" , "Wi-Fi router maintenance" , "Installation of networks" , "Network maintenance" , "Reprogram router" ]},
    { id : "10" ,name: 'Satellite', color: '#2d9bff' , image : elec, delay: 0.5 , subCat : ["Installing a new dush" , "Installing a new receiver" , "Old dush maintenance" , "Central dush networks" , "Screen installation" ]},
    { id : "11" ,name: 'Tiled', color: '#2d9bff' , image : air, delay: 0.6 , subCat : ["Installing new tiles" , "Reinstalling tiles" , "Courtyard tiles" , "Changing kitchen tiles" , "Changing bathroom tiles"]},
    { id : "12" ,name: 'Decorations', color: '#2d9bff' , image : plom, delay: 0.7 , subCat : ["Shops decor" , "Home decor" , "External decor" , "Cladding installation" , "Installation of gypsum board" ]},
  ];


      const { id } = useParams();  // Get the course id from the URL
      const catAr = categoriesAr.find((item) => item.id === id);
      const catEn = categoriesEn.find((item) => item.id === id);


      const cat = lng === 'en' ? catEn : catAr;
      const categories = lng === 'en' ? categoriesEn : categoriesAr;
      const well = lng === 'en' ? "Welcome to Category " : "مرحبا بك في فئة";
      const can = lng === 'en' ? "Cancel" : "إلغاء";
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
          {cat.subCat.map((subject, index) => (
            <>
           <a
  key={index}
  href={``}
  onClick={(e) => {
    e.preventDefault(); // منع إعادة تحميل الصفحة
    openModal();
  }}
>
  <div
    style={{
      color: cat.color,
      backgroundColor: cat.color + "20",
    }}
    className="border rounded-lg border-secondary/20 p-4 flex justify-center items-center hover:!scale-105 hover:!shadow-xl duration-200 cursor-pointer"
  >
    <p>{subject}</p>
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