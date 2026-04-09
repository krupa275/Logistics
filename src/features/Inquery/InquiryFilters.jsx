import { useDispatch, useSelector } from "react-redux"
import { Input } from "@/components/ui/input"
import { setFilters } from "@/store-factory/slices/inquiry"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function InquiryFilters() {
  const dispatch = useDispatch()
  const { search, status } = useSelector((s) => s.inquiry.filters)

  return (
    <div className="flex gap-3">
      <Input
        placeholder="Search customer..."
        value={search}
        onChange={(e) =>
          dispatch(setFilters({ search: e.target.value, page: 1 }))
        }
      />

      <Select
        value={status}
        onValueChange={(val) => dispatch(setFilters({ status: val, page: 1 }))}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Filter Status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All</SelectItem>
          <SelectItem value="pending">Pending</SelectItem>
          <SelectItem value="completed">Completed</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}
