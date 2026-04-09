import { Input } from "@/components/ui/input"
import { updateActualQuote } from "@/store-factory/slices/vendor"
import { useDispatch, useSelector } from "react-redux"

export default function ActualQuoteTable() {
  const dispatch = useDispatch()
  const { actualQuotes } = useSelector((s) => s.vendor)

  return (
    <div className="overflow-x-auto">
      <table className="w-full border rounded-lg overflow-hidden">
        <thead className="bg-muted">
          <tr>
            <th className="p-3 text-left">Vendor</th>
            <th className="p-3 text-left">Amount</th>
            <th className="p-3 text-left">Transit Days</th>
            <th className="p-3 text-left">Notes</th>
            <th className="p-3 text-left">Status</th>
          </tr>
        </thead>

        <tbody>
          {actualQuotes.map((q) => (
            <tr key={q.id} className="border-t">
              <td className="p-3">{q.vendorName}</td>

              <td className="p-3 min-w-[120px]">
                <Input
                  type="number"
                  value={q.quotedAmount || ""}
                  onChange={(e) =>
                    dispatch(
                      updateActualQuote({
                        id: q.id,
                        quotedAmount: e.target.value,
                      }),
                    )
                  }
                />
              </td>

              <td className="p-3 min-w-[120px]">
                <Input
                  value={q.transitDays || ""}
                  onChange={(e) =>
                    dispatch(
                      updateActualQuote({
                        id: q.id,
                        transitDays: e.target.value,
                      }),
                    )
                  }
                />
              </td>

              <td className="p-3 min-w-[160px]">
                <Input
                  value={q.notes || ""}
                  onChange={(e) =>
                    dispatch(
                      updateActualQuote({
                        id: q.id,
                        notes: e.target.value,
                      }),
                    )
                  }
                />
              </td>

              <td className="p-3">
                <select
                  className="border rounded-md px-2 py-1 bg-background"
                  value={q.status}
                  onChange={(e) =>
                    dispatch(
                      updateActualQuote({
                        id: q.id,
                        status: e.target.value,
                      }),
                    )
                  }
                >
                  <option value="pending">Pending</option>
                  <option value="received">Received</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
