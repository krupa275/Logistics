import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
// import { deleteInquiry, updateInquiry } from "@/store/slices/inquirySlice"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import InquiryForm from "./InqueryForm"
import { deleteInquiry, updateInquiry } from "@/store-factory/slices/inquiry"
import InquiryFilters from "./InquiryFilters"

export default function InquiryTable() {
  const dispatch = useDispatch()
  const { list, filters } = useSelector((s) => s.inquiry)

  const [editData, setEditData] = useState(null)
  const [open, setOpen] = useState(false)

  const filtered = list
    .filter((item) =>
      item.customer.toLowerCase().includes(filters.search.toLowerCase()),
    )
    .filter((item) =>
      filters.status === "all" ? true : item.status === filters.status,
    )
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <InquiryFilters />
        <Button onClick={() => setOpen(true)}>+ Add Inquiry</Button>
      </div>
      <table className="w-full border rounded-lg overflow-hidden">
        <thead className="bg-muted">
          <tr>
            <th>Inquiry No</th>
            <th>Customer</th>
            <th>Route</th>
            <th>Vehicle</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {filtered.map((i) => (
            <tr key={i.id} className="border-t text-center">
              <td>{i.inquiryNo}</td>
              <td>{i.customer}</td>
              <td>
                {i.from} → {i.to}
              </td>
              <td>{i.vehicleType}</td>

              <td>
                <select
                  value={i.status}
                  onChange={(e) =>
                    dispatch(
                      updateInquiry({ id: i.id, status: e.target.value }),
                    )
                  }
                  className="border rounded px-2 py-1"
                >
                  <option value="pending">Pending</option>
                  <option value="completed">Completed</option>
                </select>
              </td>

              <td className="space-x-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setEditData(i)}
                >
                  Edit
                </Button>

                <Button
                  size="sm"
                  variant="destructive"
                  onClick={() => dispatch(deleteInquiry(i.id))}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Dialog open={!!editData} onOpenChange={() => setEditData(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Inquiry</DialogTitle>
          </DialogHeader>
          <InquiryForm
            defaultValues={editData}
            onClose={() => setEditData(null)}
          />
        </DialogContent>
      </Dialog>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create Inquiry</DialogTitle>
          </DialogHeader>
          <InquiryForm onClose={() => setOpen(false)} />
        </DialogContent>
      </Dialog>
    </div>
  )
}
