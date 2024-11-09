import React from 'react';

const Categories = ({ category, lng }) => {
  const categoriesAr = [
    { id : "1" ,name: "كهربائي", color: '#0063ff', delay: 0.2 , subCat : ["تركيب سبوت لايت" , "تغيير لمبات داخليه" , "تركيب فيش" , "تركيب مفتاح مكيف" , "تركيب شفاط مطبخ" , "تركيب كشاف خارجي" , "تركيب شريط ليد" , "مفتاح سخان" , "تركيب ثريا صغيرة" , "تركيب ثريا كبيرة" , "تأسيس الكهرباء" , "تركيب قاطع" , "تغيير قاطع" , "تركيب طبلون جديد" , "تركيب مروحة سقف"]},
    { id : "2" ,name: "سباك", color: '#00c986', delay: 0.3 , subCat : ["تغيير شطاف و تركيب جديد" , "تغيير خلاط مغسلة" , "تغيير سخان مياه" , "تركيب سخانة جديد" , "تركيب خلاط مطبخ" , "تركيب مغسلة يد" , "تغيير مغسلة يد" , "تركيب دش كامل" , "تغيير خلاط دش" , "تغيير كرسي حمام" , "تركيب كرسي جديد" , "تركيب كرسي جديد" , "تركيب بانيو خارجي" , "تغيير أو تركيب عوامة الماء " , "تغيير أو تركيب عوامة عادية" , "تغيير مضخة مياه ( دينمو)" , "تركيب ماكينة سايفون عربي" , "تغيير محبس زاوية" , "تغيير ليات سخان"]},
    { id : "3" ,name: "التكييف", color: '#922aee', delay: 0.4 , subCat : ["تنظيف مكيف السبليت" , "تنظيف مكيف مركزى" , "تركيب مكيف اسبليت" , "تركيب مكيف شباك" , "فك مكيف اسبليت" , "فك مكيف شباك" , "فك و تركيب مكيف اسبلت" , "فك و تركيب مكيف شباك" , "تركيب تكييف دولابى" , "فك مكيف دولابى" , "فك واعاده تركيب تكييف دولابى" , "تعبئة فريون هندي" , "تعبئة فريون امريكي" ]},
    { id : "4" ,name: "كاميرات مراقبة", color: '#ea7516', delay: 0.5 , subCat : ["صيانة كاميرات" , "تركيب كاميرات" , "تغيير كاميرا" , "تغيير جهاز" , "سحب التسجيل" ]},
    { id : "5" ,name: "دهان", color: '#075267', delay: 0.6 , subCat : ["دهان غرفة جديد" , "اعادة دهان غرفة" , "دهان شقة صغيرة جديد" , "اعادة دهان شقة صغيرة" , "دهان شقة كبيرة" , "اعادة دهان شقة كبيرة" , "دهان عمارة جديد" , "دهان خارجي جديد" , "اعادة دهان خارجي" ]},
    { id : "6" ,name: "مكافحة حشرات", color: '#986d1d', delay: 0.7 , subCat : ["مكافحة حشرات شقة صغيرة" , "مكافحة الحشرات لدوبلكس - 250م" , "مكافحة حشرات فيلا - 400 متر" , "رش حوش" , "تنظيف خزان ارضي" , "تنظيف خزان علوي" , "مكافحة حشرات مستودعات" ]},
    { id : "7" ,name: "الأجهزة المنزلية", color: '#0063ff', delay: 0.2 , subCat : ["صيانة غسالة ملابس" , "صيانة ثلاجة" , "صيانة فرن" , "صيانة غسالة صحون" ]},
    { id : "8" ,name: "نجارة", color: '#00c986', delay: 0.3 , subCat : ["تركيب الأثاث" , "تركيب الستائر" , "تركيب الأبواب الخشبية" , "تصليح وصيانة الأثاث" , "اللوحات الفنية والديكورية" , "تجميع وتركيب أثاث ايكيا" , "تصنيع دواليب" , "تصنيع غرف النوم" ]},
    { id : "9" ,name: "شبكات", color: '#922aee', delay: 0.4 , subCat : ["تركيب راوتر واي فاي" , "صيانة راوتر واي فاي" , "تركيب وتمديد شبكات" , "صيانة شبكات" , "اعادة برمجة راوتر" ]},
    { id : "10" ,name: "ستلايت", color: '#ea7516', delay: 0.5 , subCat : ["تركيب دش جديد" , "تركيب رسيفر جديد" , "صيانة دش قديم" , "شبكات الدش المركزي" , "تركيب شاشة" ]},
    { id : "11" ,name: "مبلط", color: '#075267', delay: 0.6 , subCat : ["تركيب بلاط جديد" , "اعادة تركيب بلاط" , "بلاط حوش" , "تغيير بلاط مطبخ" , "تغيير بلاط حمام" ]},
    { id : "12" ,name: "ديكورات", color: '#986d1d', delay: 0.7 , subCat : ["ديكور محلات" , "ديكور للمنزل" , "ديكور خارجي" , "تركيب كلايدنج" , "تركيب جبس بورد"]},
  ];

  const categoriesEn = [
    { id : "1" ,name: 'electrical', color: '#0063ff', delay: 0.2 , subCat : ["Spotlight installation" , "Change interior bulbs" , "Fish installation" , "Installing an air conditioner switch" , "Kitchen hood installation" , "Installing an outdoor floodlight" , "LED strip installation" , "Heater switch" , "Installing a small chandelier" , "Installing a large chandelier" , "Establishment of electricity" , "Cutter installation" , "Conclusive change" , "Installing a new drum" , "Installing a ceiling fan"]},
    { id : "2" ,name: 'plumber', color: '#00c986', delay: 0.3 , subCat : ["Shattaf replacement" , "Changing the mixer" , "Change water heater" , "New heater installation" , "Installing a kitchen mixer" , "Installing a hand sink" , "Change hand sink" , "Shower installation" , "Change shower mixer" , "Changing a bathroom chair" , "Installing a new chair" , "Installing an outdoor bathtub" , "Installing a water float" , "Installing a regular float" , "Changing the water pump (dynamo)" , "Installing an Arabic siphon machine" ,"Change the angle valve" , "Change heater valves" ]}, 
    { id : "3" ,name: 'Air conditioning', color: '#922aee', delay: 0.4 , subCat : ["Split air conditioner cleaning" , "Central air conditioning cleaning" , "Split air conditioner installation" , "Window air conditioner installation" , "Removing split air conditioner" , "Remove window air conditioner" , "Installing a split air conditioner" , "Installing a window air conditioner" , "Cabinet air conditioning installation" , "Dismantle the closet air conditioner" , "Reinstalling a closet air conditioner" , "Indian Freon filling" , "American Freon refill" ]},
    { id : "4" ,name: 'Surveillance cameras', color: '#ea7516', delay: 0.5 , subCat : ["Camera maintenance" , "Installing cameras" , "Change camera" , "Change device" , "Withdrawal of registration"]},
    { id : "5" ,name: 'Paint', color: '#075267', delay: 0.6 , subCat : ["New room paint" , "Repainting a room" , "New small apartment paint" , "Repainting a small apartment" , "Painting a large apartment" , "Repainting a large apartment" , "New building paint" , "New exterior paint" , "External repainting" ]},
    { id : "6" ,name: 'Insect control', color: '#986d1d', delay: 0.7 , subCat : ["Small apartment pest control" , "Insect control for duplex - 250 m" , "Villa pest control - 400 m" , "Spraying the yard" , "Cleaning a ground tank" , "Cleaning the upper tank" , "Warehouse pest control" ]},
    { id : "7" ,name: 'Home appliances', color: '#0063ff', delay: 0.2 , subCat : ["Washing machine maintenance" , "Refrigerator maintenance" , "Oven maintenance" , "Dishwasher maintenance" ]},
    { id : "8" ,name: 'Carpentry', color: '#00c986', delay: 0.3 , subCat : ["Furniture installation" , "Installing curtains" , "Installing wooden doors" , "Furniture repair and maintenance" , "Artistic and decorative paintings" , "Installing IKEA furniture" , "Manufacture of cupboards" , "Bedroom manufacturing" ]}, 
    { id : "9" ,name: 'Networks', color: '#922aee', delay: 0.4 , subCat : ["Installing a Wi-Fi router" , "Wi-Fi router maintenance" , "Installation of networks" , "Network maintenance" , "Reprogram router" ]},
    { id : "10" ,name: 'Satellite', color: '#ea7516', delay: 0.5 , subCat : ["Installing a new dush" , "Installing a new receiver" , "Old dush maintenance" , "Central dush networks" , "Screen installation" ]},
    { id : "11" ,name: 'Tiled', color: '#075267', delay: 0.6 , subCat : ["Installing new tiles" , "Reinstalling tiles" , "Courtyard tiles" , "Changing kitchen tiles" , "Changing bathroom tiles"]},
    { id : "12" ,name: 'Decorations', color: '#986d1d', delay: 0.7 , subCat : ["Shops decor" , "Home decor" , "External decor" , "Cladding installation" , "Installation of gypsum board" ]},
  ];

  const categories = lng === 'en' ? categoriesEn : categoriesAr;
  

  return (
    <section className="my-6 lg:mt-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col justify-center items-center">
        <p className="font-semibold text-3xl text-neutral-800">{category}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8 w-full">
          {categories.map((subject, index) => (
            <a key={index} href={`/${subject.id}`} >
              <div style={{
                    color: subject.color,
                    backgroundColor: subject.color + "20",
                  }} className="border rounded-lg border-secondary/20 p-4 flex justify-center items-center hover:!scale-105 hover:!shadow-xl duration-200 cursor-pointer">
                <p>
                    {subject.name}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
