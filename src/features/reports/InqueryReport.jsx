import { useSelector } from "react-redux"
import { useState } from "react"
import ReportFilters from "./ReportFilter"
import { Button } from "@/components/ui/button"
import { exportToPDF } from "@/lib/ExportPDF"

export default function InquiryReport() {
  const { list } = useSelector((s) => s.inquiry)
  const [data, setData] = useState(list)

  const handleExport = () => {
    exportToPDF({
      title: "Inquiry Report",
      columns: ["No", "Customer", "Route", "Vehicle", "Status"],
      data: data.map((i) => [
        i.inquiryNo,
        i.customer,
        `${i.from} → ${i.to}`,
        i.vehicleType,
        i.status,
      ]),
    })
  }
  const applyFilters = (f) => {
    let filtered = [...list]

    if (f.search) {
      filtered = filtered.filter((i) =>
        i.customer.toLowerCase().includes(f.search.toLowerCase()),
      )
    }

    if (f.status) {
      filtered = filtered.filter((i) => i.status === f.status)
    }

    if (f.fromDate) {
      filtered = filtered.filter((i) => i.date >= f.fromDate)
    }

    if (f.toDate) {
      filtered = filtered.filter((i) => i.date <= f.toDate)
    }

    setData(filtered)
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <ReportFilters onApply={applyFilters} />
        <Button onClick={handleExport}>Download PDF</Button>
      </div>

      <table className="w-full border rounded-lg overflow-hidden">
        <thead className="bg-muted">
          <tr>
            <th>No</th>
            <th>Customer</th>
            <th>Route</th>
            <th>Vehicle</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {data.map((i) => (
            <tr key={i.id} className="border-t text-center">
              <td>{i.inquiryNo}</td>
              <td>{i.customer}</td>
              <td>
                {i.from} → {i.to}
              </td>
              <td>{i.vehicleType}</td>
              <td>{i.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
