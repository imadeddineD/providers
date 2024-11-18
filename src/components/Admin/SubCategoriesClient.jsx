import React from 'react'
import { Heading } from '../ui/Heading'
import { Separator } from '../ui/separator'
import { DataTable } from '../ui/DataTable'
import { columns, columnsEng } from './components/SubCategories/Columns'
import { Button } from '../ui/button'
import { Plus } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'



const OrderClient = ({lng}) => {

  const navigate = useNavigate()

  const isMobile = useMediaQuery({ query: `(max-width: 768px)` });

  const data = [] 
  return (
    
    <>
            <div className="flex items-center justify-between mb-5">
            <Heading
                    title={lng === "en" ? "Subcategories Page": "صفحة الفئات الفرعية"}
                    description={lng === "en" ? "This page for manage all subcategories for your platform" : "إدارة الصفحة الفئات الفرعية الخاصة بك لمتجرك"}
                />
                <Button size={isMobile ? "icon" : "default"} onClick={() => navigate(`/dashboard/admin/subcategories/new`)} className=" bg-[#2d9bff]">
                    {isMobile ? (<Plus className="h-4 w-4" />) : (<Plus className="mr-2 h-4 w-4" />)}
                    {!isMobile && `${lng === "en" ? "Add New" : "أضف الجديد"}`}
                </Button>
            </div>
            <Separator/>
            <DataTable columns={lng === "en" ? columnsEng :columns} data={data} searchKey="label" lng={lng} />
            <Separator />
        </>
  )
}

export default OrderClient