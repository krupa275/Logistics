import { useForm, useFieldArray } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { addVendorRequest } from "@/store-factory/slices/vendor"

export default function VendorQuoteForm() {
  const dispatch = useDispatch()
  const { list } = useSelector((s) => s.inquiry)

  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      inquiryNo: "",
      vendors: [{ name: "", rate: "", remarks: "" }],
    },
  })

  const { fields, append, remove } = useFieldArray({
    control,
    name: "vendors",
  })

  const onSubmit = (data) => {
    data.vendors.forEach((v) => {
      dispatch(
        addVendorRequest({
          inquiryNo: data.inquiryNo,
          vendorName: v.name,
          expectedRate: v.rate,
          remarks: v.remarks,
        }),
      )
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Label>Inquiry No</Label>
        <select {...register("inquiryNo")} className="border p-2 w-full">
          <option value="">Select Inquiry</option>
          {list.map((i) => (
            <option key={i.id} value={i.inquiryNo}>
              {i.inquiryNo}
            </option>
          ))}
        </select>
      </div>

      {fields.map((field, index) => (
        <div key={field.id} className="grid grid-cols-3 gap-3">
          <Input
            placeholder="Vendor Name"
            {...register(`vendors.${index}.name`)}
          />
          <Input
            placeholder="Expected Rate"
            type="number"
            {...register(`vendors.${index}.rate`)}
          />
          <Input
            placeholder="Remarks"
            {...register(`vendors.${index}.remarks`)}
          />

          <Button
            type="button"
            variant="destructive"
            onClick={() => remove(index)}
          >
            Remove
          </Button>
        </div>
      ))}

      <Button type="button" onClick={() => append({})}>
        + Add Vendor
      </Button>

      <Button type="submit" className="w-full">
        Submit Requests
      </Button>
    </form>
  )
}
