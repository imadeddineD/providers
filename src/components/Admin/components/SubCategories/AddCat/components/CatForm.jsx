// "use client";

// import { Categories, Home } from "@prisma/client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/Heading";
import { useNavigate } from "react-router-dom";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
// import { useParams } from "next/navigation";
// import { useRouter } from "next/navigation";
// import toast from "react-hot-toast";
// import axios from "axios";

// // import { Heading } from "@/components/ui/heading";
// // import { Button } from "@/components/ui/button";
// // import { Separator } from "@/components/ui/separator";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
// // import { AlertModal } from "@/components/modals/alert-modal";
// // import ImageUpload from "@/components/ui/image-upload";
import { ChevronLeft, Trash } from "lucide-react";
import { Separator } from "@radix-ui/react-separator";
import {Select, SelectContent, SelectTrigger, SelectItem, SelectValue } from "@radix-ui/react-select";
// import { Heading } from "@/components/ui/Heading";
// import { Button } from "@/components/ui/button";
// import { Textarea } from "@/components/ui/textarea";
// import ImageUpload from "@/components/ui/imageupload";
// import { Separator } from "@/components/ui/Separator";

const formSchema = z.object({
    nameAr: z.string().min(1),
    nameEn: z.string().min(1),
    categoryId: z.string().min(1),
});


export const CategoriesForm = ({
    initialData , 
    lng
}) => {
    

    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const title = initialData ? `${lng === "en" ? "edit categories" : "تعديل الفئات"}` : `${lng === "en" ? "create categories":"إنشاء الفئات"}`
    const description = initialData ? `${lng === "en" ? "edit categories" : "تعديل الفئات"}` : `${lng === "en" ? "Add New Content" : "إضافة صفحة رئيسية جديدة"}`
    // const toastMessage = initialData ? "تم تحديث الفئات" : "تم إنشاء الفئات"
    const action = initialData ? `${lng === "en" ? "Save Changes" :  "حفظ التغييرات"}` : `${lng === "en" ? "Create" : "إنشاء"}`

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: initialData || {
            nameAr: '',
            nameEn : '',
            categoryId: "",
        }
    });

    const categoriesAr = [
        { id : "1" ,name: "كهربائي", color: '#2d9bff' ,  delay: 0.2 , subCat : ["تركيب سبوت لايت" , "تغيير لمبات داخليه" , "تركيب فيش" , "تركيب مفتاح مكيف" , "تركيب شفاط مطبخ" , "تركيب كشاف خارجي" , "تركيب شريط ليد" , "مفتاح سخان" , "تركيب ثريا صغيرة" , "تركيب ثريا كبيرة" , "تأسيس الكهرباء" , "تركيب قاطع" , "تغيير قاطع" , "تركيب طبلون جديد" , "تركيب مروحة سقف"]},
        { id : "2" ,name: "سباك", color: '#2d9bff' , delay: 0.3 , subCat : ["تغيير شطاف و تركيب جديد" , "تغيير خلاط مغسلة" , "تغيير سخان مياه" , "تركيب سخانة جديد" , "تركيب خلاط مطبخ" , "تركيب مغسلة يد" , "تغيير مغسلة يد" , "تركيب دش كامل" , "تغيير خلاط دش" , "تغيير كرسي حمام" , "تركيب كرسي جديد" , "تركيب كرسي جديد" , "تركيب بانيو خارجي" , "تغيير أو تركيب عوامة الماء " , "تغيير أو تركيب عوامة عادية" , "تغيير مضخة مياه ( دينمو)" , "تركيب ماكينة سايفون عربي" , "تغيير محبس زاوية" , "تغيير ليات سخان"]},
        { id : "3" ,name: "التكييف", color: '#2d9bff' ,  delay: 0.4 , subCat : ["تنظيف مكيف السبليت" , "تنظيف مكيف مركزى" , "تركيب مكيف اسبليت" , "تركيب مكيف شباك" , "فك مكيف اسبليت" , "فك مكيف شباك" , "فك و تركيب مكيف اسبلت" , "فك و تركيب مكيف شباك" , "تركيب تكييف دولابى" , "فك مكيف دولابى" , "فك واعاده تركيب تكييف دولابى" , "تعبئة فريون هندي" , "تعبئة فريون امريكي" ]},
        { id : "4" ,name: "كاميرات مراقبة", color: '#2d9bff' ,  delay: 0.5 , subCat : ["صيانة كاميرات" , "تركيب كاميرات" , "تغيير كاميرا" , "تغيير جهاز" , "سحب التسجيل" ]},
        { id : "5" ,name: "دهان", color: '#2d9bff' , delay: 0.6 , subCat : ["دهان غرفة جديد" , "اعادة دهان غرفة" , "دهان شقة صغيرة جديد" , "اعادة دهان شقة صغيرة" , "دهان شقة كبيرة" , "اعادة دهان شقة كبيرة" , "دهان عمارة جديد" , "دهان خارجي جديد" , "اعادة دهان خارجي" ]},
        { id : "6" ,name: "مكافحة حشرات", color: '#2d9bff' ,  delay: 0.7 , subCat : ["مكافحة حشرات شقة صغيرة" , "مكافحة الحشرات لدوبلكس - 250م" , "مكافحة حشرات فيلا - 400 متر" , "رش حوش" , "تنظيف خزان ارضي" , "تنظيف خزان علوي" , "مكافحة حشرات مستودعات" ]},
        { id : "7" ,name: "الأجهزة المنزلية", color: '#2d9bff' ,  delay: 0.2 , subCat : ["صيانة غسالة ملابس" , "صيانة ثلاجة" , "صيانة فرن" , "صيانة غسالة صحون" ]},
        { id : "8" ,name: "نجارة", color: '#2d9bff' , delay: 0.3 , subCat : ["تركيب الأثاث" , "تركيب الستائر" , "تركيب الأبواب الخشبية" , "تصليح وصيانة الأثاث" , "اللوحات الفنية والديكورية" , "تجميع وتركيب أثاث ايكيا" , "تصنيع دواليب" , "تصنيع غرف النوم" ]},
        { id : "9" ,name: "شبكات", color: '#2d9bff' ,  delay: 0.4 , subCat : ["تركيب راوتر واي فاي" , "صيانة راوتر واي فاي" , "تركيب وتمديد شبكات" , "صيانة شبكات" , "اعادة برمجة راوتر" ]},
        { id : "10" ,name: "ستلايت", color: '#2d9bff' ,  delay: 0.5 , subCat : ["تركيب دش جديد" , "تركيب رسيفر جديد" , "صيانة دش قديم" , "شبكات الدش المركزي" , "تركيب شاشة" ]},
        { id : "11" ,name: "مبلط", color: '#2d9bff' , delay: 0.6 , subCat : ["تركيب بلاط جديد" , "اعادة تركيب بلاط" , "بلاط حوش" , "تغيير بلاط مطبخ" , "تغيير بلاط حمام" ]},
        { id : "12" ,name: "ديكورات", color: '#2d9bff' ,  delay: 0.7 , subCat : ["ديكور محلات" , "ديكور للمنزل" , "ديكور خارجي" , "تركيب كلايدنج" , "تركيب جبس بورد"]},
      ];
    
      const categoriesEn = [
        { id : "1" ,name: 'electrical', color: '#2d9bff' ,  delay: 0.2 , subCat : ["Spotlight installation" , "Change interior bulbs" , "Fish installation" , "Installing an air conditioner switch" , "Kitchen hood installation" , "Installing an outdoor floodlight" , "LED strip installation" , "Heater switch" , "Installing a small chandelier" , "Installing a large chandelier" , "Establishment of electricity" , "Cutter installation" , "Conclusive change" , "Installing a new drum" , "Installing a ceiling fan"]},
        { id : "2" ,name: 'plumber', color: '#2d9bff' , delay: 0.3 , subCat : ["Shattaf replacement" , "Changing the mixer" , "Change water heater" , "New heater installation" , "Installing a kitchen mixer" , "Installing a hand sink" , "Change hand sink" , "Shower installation" , "Change shower mixer" , "Changing a bathroom chair" , "Installing a new chair" , "Installing an outdoor bathtub" , "Installing a water float" , "Installing a regular float" , "Changing the water pump (dynamo)" , "Installing an Arabic siphon machine" ,"Change the angle valve" , "Change heater valves" ]}, 
        { id : "3" ,name: 'Air conditioning', color: '#2d9bff' ,  delay: 0.4 , subCat : ["Split air conditioner cleaning" , "Central air conditioning cleaning" , "Split air conditioner installation" , "Window air conditioner installation" , "Removing split air conditioner" , "Remove window air conditioner" , "Installing a split air conditioner" , "Installing a window air conditioner" , "Cabinet air conditioning installation" , "Dismantle the closet air conditioner" , "Reinstalling a closet air conditioner" , "Indian Freon filling" , "American Freon refill" ]},
        { id : "4" ,name: 'Surveillance cameras', color: '#2d9bff' ,  delay: 0.5 , subCat : ["Camera maintenance" , "Installing cameras" , "Change camera" , "Change device" , "Withdrawal of registration"]},
        { id : "5" ,name: 'Paint', color: '#2d9bff' , delay: 0.6 , subCat : ["New room paint" , "Repainting a room" , "New small apartment paint" , "Repainting a small apartment" , "Painting a large apartment" , "Repainting a large apartment" , "New building paint" , "New exterior paint" , "External repainting" ]},
        { id : "6" ,name: 'Insect control', color: '#2d9bff' ,  delay: 0.7 , subCat : ["Small apartment pest control" , "Insect control for duplex - 250 m" , "Villa pest control - 400 m" , "Spraying the yard" , "Cleaning a ground tank" , "Cleaning the upper tank" , "Warehouse pest control" ]},
        { id : "7" ,name: 'Home appliances', color: '#2d9bff' ,  delay: 0.2 , subCat : ["Washing machine maintenance" , "Refrigerator maintenance" , "Oven maintenance" , "Dishwasher maintenance" ]},
        { id : "8" ,name: 'Carpentry', color: '#2d9bff' ,  air: 0.3 , subCat : ["Furniture installation" , "Installing curtains" , "Installing wooden doors" , "Furniture repair and maintenance" , "Artistic and decorative paintings" , "Installing IKEA furniture" , "Manufacture of cupboards" , "Bedroom manufacturing" ]}, 
        { id : "9" ,name: 'Networks', color: '#2d9bff' ,  delay: 0.4 , subCat : ["Installing a Wi-Fi router" , "Wi-Fi router maintenance" , "Installation of networks" , "Network maintenance" , "Reprogram router" ]},
        { id : "10" ,name: 'Satellite', color: '#2d9bff' ,  delay: 0.5 , subCat : ["Installing a new dush" , "Installing a new receiver" , "Old dush maintenance" , "Central dush networks" , "Screen installation" ]},
        { id : "11" ,name: 'Tiled', color: '#2d9bff' , delay: 0.6 , subCat : ["Installing new tiles" , "Reinstalling tiles" , "Courtyard tiles" , "Changing kitchen tiles" , "Changing bathroom tiles"]},
        { id : "12" ,name: 'Decorations', color: '#2d9bff' ,  delay: 0.7 , subCat : ["Shops decor" , "Home decor" , "External decor" , "Cladding installation" , "Installation of gypsum board" ]},
      ];
    
      const categories = lng === 'en' ? categoriesEn : categoriesAr;

      const cat = lng === "en" ? "Category" : "الفئة"

    const onSubmit = async (data) => {
        // try {
        //     setLoading(true);
        //     if (initialData) {
        //         await axios.patch(`/api/categories/${params.categoriesId}`, data);
        //     } else {
        //         await axios.post(`/api/categories`, data);
        //     }
        //     router.push(`/dashboard/categories`)
        //     router.refresh();
        //     toast.success(toastMessage);
        // } catch (error) {
        //     toast.error("هناك خطأ ما");
        // } finally {
        //     setLoading(false);
        // }
    }

    const onDelete = async () => {
        // try {
        //     setLoading(true);
        //     await axios.delete(`/api/categories/${params.categoriesId}`)
        //     router.refresh();
        //     router.push(`/dashboard/categories`)
        //     toast.success("تم حذف الفئات")
        // } catch (error) {
        //     toast.error("تأكد من إزالة كافة الفئات باستخدام هذه الفئات أولاً");
        // } finally {
        //     setLoading(false);
        //     setOpen(false);
        // }
    }

    const navigate = useNavigate()
    
    return (
        <>
            {/* <AlertModal
                isOpen={open}
                onClose={() => setOpen(false)}
                onConfirm={onDelete}
                loading={loading}
            /> */}
            <div className="flex items-center justify-between">
                <Heading
                    title={title}
                    description={description}
                />
                {initialData
                    ? (
                        <Button
                            disabled={loading}
                            variant="destructive"
                            size="icon"
                            onClick={() => setOpen(true)}
                            className=" rounded-[6px]"
                        >
                            <Trash className="h-4 w-4" />
                        </Button>  
                    )
                    : (
                        <Button
                            disabled={loading}
                            variant="outline"
                            size="icon"
                            onClick={() => navigate(`/dashboard/admin/subcategories`)}
                            className=" rounded-[6px]"
                        >
                            <ChevronLeft className="h-4 w-4" />
                        </Button>  
                    )
                }
            </div>
            <Separator />
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
                
                    <div className="grid grid-cols-3 gap-8">
                        <FormField
                            control={form.control}
                            name="nameAr"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>{`${lng === "en" ? "Name (arabic)" : "الاسم (عربي)"}`}</FormLabel>
                                        <FormControl>
                                            <Input className="md:w-full w-60" disabled={loading} placeholder={`${lng === "en" ? "Name (arabic)" : "الاسم (عربي)"}`} {...field} />
                                        </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="nameEn"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>{`${lng === "en" ? "Name (english)" : "الاسم (انجليزي)"}`}</FormLabel>
                                        <FormControl>
                                            <Input className="md:w-full w-60" disabled={loading} placeholder={`${lng === "en" ? "Name (english)" : "الاسم (انجليزي)"}`} {...field} />
                                        </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        /> 
                        <FormField
                            control={form.control}
                            name="categoryId"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>{cat}</FormLabel>
                                    <Select
                                        disabled={loading}
                                        onValueChange={field.onChange}
                                        value={field.value}
                                        defaultValue={field.value}
                                    >
                                        <FormControl>
                                            <SelectTrigger className="md:w-full w-60">
                                                <SelectValue defaultValue={field.value} placeholder={cat} />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            {categories.map((category) => (
                                                <SelectItem
                                                    key={category.id}
                                                    value={category.id}
                                                >
                                                    {category.name}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                                 )}
                                 /> 
                    </div>
                    <Button disabled={loading} className="ml-auto" type="submit">
                        {action}
                    </Button>
                </form>
            </Form>
        </>
    )
}