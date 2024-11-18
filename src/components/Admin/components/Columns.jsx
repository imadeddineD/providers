import { CellAction } from "./Cell"



export const columns= [
  {
    accessorKey: "label",
    header: "إسم",
  },
  {
    accessorKey: "role",
    header: "الدور",
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
      accessorKey: "role",
      header: "role",
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