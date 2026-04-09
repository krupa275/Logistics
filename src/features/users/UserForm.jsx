import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { addUser, updateUser } from "@/store-factory/slices/users"

export default function UserForm({ defaultValues, onClose }) {
  const dispatch = useDispatch()
  const { register, handleSubmit, reset } = useForm({ defaultValues })

  const onSubmit = (data) => {
    defaultValues
      ? dispatch(updateUser({ ...defaultValues, ...data }))
      : dispatch(addUser(data))
    onClose()
    reset()
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-3">
      <Input placeholder="Name" {...register("name", { required: true })} />
      <Input placeholder="Email" {...register("email", { required: true })} />
      <Input
        placeholder="Username"
        {...register("username", { required: true })}
      />
      <Input
        type="password"
        placeholder="Password"
        {...register("password", { required: true })}
      />
      <Input placeholder="Branch" {...register("branch", { required: true })} />

      <select {...register("active")}>
        <option value="true">Active</option>
        <option value="false">Inactive</option>
      </select>

      <Button type="submit" className="col-span-2">
        Save
      </Button>
    </form>
  )
}
