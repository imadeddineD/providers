import { CellAction } from "./Cells"



export const columns= [
  {
    accessorKey: "label",
    header: "إسم",
  },
  {
    accessorKey: "number",
    header: "رقم الهاتف",
  },
  {
    accessorKey: "createdAt",
    header: "التاريخ",
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />
  }
]

export const columnsEng= [
    {
      accessorKey: "label",
      header: "name",
    },
    {
      accessorKey: "number",
      header: "phone number",
    },
    {
      accessorKey: "createdAt",
      header: "date",
    },
    {
      id: "actions",
      cell: ({ row }) => <CellAction data={row.original} />
    }
  ]