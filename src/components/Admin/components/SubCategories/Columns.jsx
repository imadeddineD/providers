import { CellAction } from "./Cells"


export const columns= [
  {
    accessorKey: "name",
    header: "الإسم",
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
    accessorKey: "name",
    header:  "name",
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