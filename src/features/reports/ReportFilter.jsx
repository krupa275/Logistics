import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function ReportFilters({ onApply }) {
  const [filters, setFilters] = useState({
    search: "",
    fromDate: "",
    toDate: "",
    status: "",
  })

  return (
    <div className="flex flex-wrap gap-3">
      <Input
        placeholder="Search..."
        onChange={(e) => setFilters({ ...filters, search: e.target.value })}
      />

      <Input
        type="date"
        onChange={(e) => setFilters({ ...filters, fromDate: e.target.value })}
      />

      <Input
        type="date"
        onChange={(e) => setFilters({ ...filters, toDate: e.target.value })}
      />

      <select
        className="border px-2 rounded"
        onChange={(e) => setFilters({ ...filters, status: e.target.value })}
      >
        <option value="">All Status</option>
        <option value="pending">Pending</option>
        <option value="completed">Completed</option>
        <option value="received">Received</option>
      </select>

      <Button onClick={() => onApply(filters)}>Apply</Button>
    </div>
  )
}
