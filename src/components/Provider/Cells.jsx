// import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
// import toast from "react-hot-toast";
// import axios from "axios";

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Copy, Edit, MoreHorizontal, Trash } from "lucide-react";
import { useNavigate } from "react-router-dom";
// import { AlertModal } from "@/components/modal/alertModal";



export const CellAction = ({
    data
}) => {
    // const params = useParams();
    // const router = useRouter();

    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const onCopy = (id) => {
        navigator.clipboard.writeText(id);
        // toast.success("تم نسخ id الفئات إلى الحافظة.")
    }

    const navigate = useNavigate(); 

    const onDelete = async () => {
        // try {
        //     setLoading(true);
        //     await axios.delete(`/api/categories/${data.id}`)
        //     router.refresh();
        //     toast.success("حدف الفئة.")
        // } catch (error) {
        //     toast.error("تأكد من إزالة كافة الفئات باستخدام هذه الصفحة الفئات أولاً.");
        // } finally {
        //     setLoading(false);
        //     setOpen(false);
        // }
    }

    return (
        <>
            {/* <AlertModal isOpen={open} onClose={() => setOpen(false)} onConfirm={onDelete} loading={loading} /> */}
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">فتح القائمة</span>
                        <MoreHorizontal className="h-4 w-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuLabel>
                    أجراءات
                    </DropdownMenuLabel>
                    <DropdownMenuItem onClick={() => onCopy(data.id)}>
                        <Copy className="mr-2 h-4 w-4" />
                        نسخ id
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => navigate(`/dashboard/admin/categories/${data.id}`)}>
                        <Edit className="mr-2 h-4 w-4" />
                        تجديد
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setOpen(true)} className="!text-red-500">
                        <Trash className="mr-2 h-4 w-4" />
                        حذف
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    );
}