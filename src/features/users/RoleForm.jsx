import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { addRole, deleteRole } from "@/store-factory/slices/users"

export function RoleForm({ close }) {
  const dispatch = useDispatch()
  const { register, handleSubmit, reset } = useForm()

  const onSubmit = (data) => {
    dispatch(addRole(data))
    reset()
    close()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex gap-2">
      <Input
        placeholder="Role Name"
        {...register("name", { required: true })}
      />
      <Input placeholder="Description" {...register("description")} />
      <Button type="submit">Add</Button>
    </form>
  )
}

export function RoleTable() {
  const { roles } = useSelector((s) => s.users)
  const dispatch = useDispatch()

  return (
    <ul className="space-y-2">
      {roles.map((r) => (
        <li key={r.id} className="flex justify-between border p-2">
          <h2>{r.name}</h2>
          <span>{r.description}</span>
          <Button
            size="sm"
            variant="destructive"
            onClick={() => dispatch(deleteRole(r.id))}
          >
            Delete
          </Button>
        </li>
      ))}
    </ul>
  )
}
