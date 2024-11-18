import React from "react";

const NavbarBanner = ({lng}) => {
  const [isOpen, setIsOpen] = React.useState(true);

  const activate = lng === "en" ? "Your Account Is Not Active ... If You Want to Activate the account Click on the underlined link at the end " : "حسابك غير نشط... إذا كنت تريد تفعيل الحساب انقر على الرابط الذي تحته خط في النهاية"
  
  const active = lng === "en" ? "Activate Account!" : "تفعيل الحساب!"


  return (
    isOpen && (
      <div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="bg-red-500 text-sm text-center text-white font-semibold p-2 block relative"
      >
        {activate}
        <a href="/pricing" className=" mx-2 font-bold underline text-blue-700">
          {active}
        </a>
      </div>
    )
  );
};

export default NavbarBanner;