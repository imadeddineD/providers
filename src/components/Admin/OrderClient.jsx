import React from 'react'
import { Heading } from '../ui/Heading'
import { Separator } from '../ui/separator'
import { DataTable } from '../ui/DataTable'
import { columns } from './components/Columns'
import { columnsEng } from './components/Columns'


const OrderClient = ({lng}) => {

  const data = []
  return (
    
    <>
            <div className="flex items-center justify-between mb-5">
                <Heading
                    title={lng === "en" ? "All Users" : "كافة المستخدمين"}
                    description={ lng === "en" ? "This page for see the users in the plateform" : "هذه الصفحة لرؤية المستخدمين في المنصة"}
                />
            </div>
            <Separator/>
            <DataTable columns={lng === "en" ? columnsEng :columns} data={data} searchKey="label" lng={lng} />
            <Separator />
        </>
  )
}

export default OrderClient