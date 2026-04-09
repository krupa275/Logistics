import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { addInquiry, updateInquiry } from "@/store-factory/slices/inquiry"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function InquiryForm({ defaultValues, onClose }) {
  const dispatch = useDispatch()

  const { register, handleSubmit } = useForm({ defaultValues })

  const onSubmit = (data) => {
    if (defaultValues?.id) {
      dispatch(updateInquiry({ ...defaultValues, ...data }))
    } else {
      dispatch(addInquiry(data))
    }
    onClose()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-4">
      <div>
        <Label>Date</Label>
        <Input type="date" {...register("date", { required: true })} />
      </div>

      <div>
        <Label>Customer</Label>
        <Input {...register("customer", { required: true })} />
      </div>

      <div>
        <Label>From</Label>
        <Input {...register("from", { required: true })} />
      </div>

      <div>
        <Label>To</Label>
        <Input {...register("to", { required: true })} />
      </div>

      <div>
        <Label>Vehicle</Label>
        <Input {...register("vehicleType", { required: true })} />
      </div>

      <div>
        <Label>Material</Label>
        <Input {...register("materialType", { required: true })} />
      </div>

      <div>
        <Label>Weight</Label>
        <Input type="number" {...register("weight", { required: true })} />
      </div>

      <div className="col-span-2">
        <Label>Notes</Label>
        <Input {...register("notes")} />
      </div>

      <div className="col-span-2">
        <Button type="submit" className="w-full">
          {defaultValues ? "Update" : "Create"}
        </Button>
      </div>
    </form>
  )
}
