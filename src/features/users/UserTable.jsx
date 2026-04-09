import { useSelector, useDispatch } from "react-redux"
import { Button } from "@/components/ui/button"
import { deleteUser } from "@/store-factory/slices/users"

export default function UserTable({ onEdit }) {
  const { users } = useSelector((s) => s.users)
  const dispatch = useDispatch()

  return (
    <table className="w-full border rounded-lg overflow-hidden">
      <thead className="bg-muted">
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Branch</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {users.map((u) => (
          <tr key={u.id} className="border-t text-center">
            <td>{u.name}</td>
            <td>{u.email}</td>
            <td>{u.branch}</td>
            <td>{u.active}</td>
            <td>
              <Button size="sm" onClick={() => onEdit(u)}>
                Edit
              </Button>
              <Button
                size="sm"
                variant="destructive"
                onClick={() => dispatch(deleteUser(u.id))}
              >
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
