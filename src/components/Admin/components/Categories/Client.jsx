import { DataTable } from '@/components/ui/DataTable'
import { Heading } from '@/components/ui/Heading'
import { Separator } from '@/components/ui/separator'
import React from 'react'
import { columns, columnsEng } from './Columns'
import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'
import { Plus } from 'lucide-react'
import { useMediaQuery } from 'react-responsive'



const Client = ({lng}) => {

  const navigate = useNavigate()

  const isMobile = useMediaQuery({ query: `(max-width: 768px)` });

  const data = []

  return (
    
        <>
            <div className="flex items-center justify-between mb-5">
                <Heading
                    title={lng === "en" ? "Categories Page": `الصفحة الفئات`}
                    description={lng === "en" ? "This page for manage all categories for your platform":"إدارة الصفحة الفئات الخاصة بك لمتجرك"}
                />
                <Button size={isMobile ? "icon" : "default"} onClick={() => navigate(`/dashboard/admin/categories/new`)} className=" bg-[#2d9bff]">
                    {isMobile ? (<Plus className="h-4 w-4" />) : (<Plus className="mr-2 h-4 w-4" />)}
                    {!isMobile && `${lng === "en" ? "Add New" : "أضف الجديد"}`}
                </Button>
            </div>
            <Separator/>
            <DataTable columns={lng === "en" ? columnsEng : columns } data={data} searchKey="label" lng={lng} />
            <Separator />
        </>
  )
}

export default Client