import { Button } from "@/components/ui/button"
import { addActualQuoteFromRequest } from "@/store-factory/slices/vendor"
import { useDispatch, useSelector } from "react-redux"

export default function VendorQuoteTable() {
  const dispatch = useDispatch()
  const { requests } = useSelector((s) => s.vendor)

  return (
    <table className="w-full border">
      <thead>
        <tr>
          <th>Inquiry</th>
          <th>Vendor</th>
          <th>Expected Rate</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {requests.map((r) => (
          <tr key={r.id}>
            <td>{r.inquiryNo}</td>
            <td>{r.vendorName}</td>
            <td>{r.expectedRate}</td>

            <td>
              <Button
                size="sm"
                onClick={() => dispatch(addActualQuoteFromRequest(r.id))}
              >
                Get Quote
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
