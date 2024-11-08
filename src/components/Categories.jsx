import React from 'react';

const Categories = ({ category, lng }) => {
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
