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
import ImageUpload from "@/components/ui/uploadImage";
// import { Heading } from "@/components/ui/Heading";
// import { Button } from "@/components/ui/button";
// import { Textarea } from "@/components/ui/textarea";
// import ImageUpload from "@/components/ui/imageupload";
// import { Separator } from "@/components/ui/Separator";

const formSchema = z.object({
    nameAr: z.string().min(1),
    nameEn: z.string().min(1),
    imageUrl: z.string().min(1),
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
            imageUrl: "",
        }
    });

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
                            onClick={() => navigate(`/dashboard/admin/categories`)}
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
                <FormField
                        control={form.control}
                        name="imageUrl"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel> {`${lng === "en" ? "Image" : "صورة"}`} </FormLabel>
                                <FormControl>
                                    <ImageUpload
                                            lng={lng}
                                            value={field.value ? [field.value] : []}
                                            disabled={loading}
                                            onChange={(url) => field.onChange(url)}
                                            onRemove={() => field.onChange("")}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
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
                    </div>
                    <Button disabled={loading} className="ml-auto" type="submit">
                        {action}
                    </Button>
                </form>
            </Form>
        </>
    )
}