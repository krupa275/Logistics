import { useSelector } from "react-redux"
import { useState } from "react"
import ReportFilters from "./ReportFilter"
import { exportToPDF } from "@/lib/ExportPDF"
import { Button } from "@/components/ui/button"

export default function VendorRexport() {
  const { actualQuotes } = useSelector((s) => s.vendor)
  const [data, setData] = useState(actualQuotes)

  const applyFilters = (f) => {
    let filtered = [...actualQuotes]

    if (f.search) {
      filtered = filtered.filter((v) =>
        v.vendorName.toLowerCase().includes(f.search.toLowerCase()),
      )
    }

    if (f.status) {
      filtered = filtered.filter((v) => v.status === f.status)
    }

    setData(filtered)
  }
  const handleExport = () => {
    exportToPDF({
      title: "Vendor Report",
      columns: ["Vendor", "Amount", "Transit", "Status"],
      data: data.map((v) => [
        v.vendorName,
        v.quotedAmount,
        v.transitDays,
        v.status,
      ]),
    })
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
            <th>Vendor</th>
            <th>Amount</th>
            <th>Transit</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {data.map((v) => (
            <tr key={v.id} className="border-t text-center">
              <td>{v.vendorName}</td>
              <td>{v.quotedAmount}</td>
              <td>{v.transitDays}</td>
              <td>{v.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
