import { useDispatch, useSelector } from "react-redux"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { assignRole } from "@/store-factory/slices/users"

export default function UserRoleMapping() {
  const { users, roles } = useSelector((s) => s.users)
  const dispatch = useDispatch()

  const [userId, setUserId] = useState("")
  const [roleId, setRoleId] = useState("")

  return (
    <div className="flex gap-2">
      <select onChange={(e) => setUserId(e.target.value)}>
        <option>Select User</option>
        {users.map((u) => (
          <option key={u.id} value={u.id}>
            {u.name}
          </option>
        ))}
      </select>

      <select onChange={(e) => setRoleId(e.target.value)}>
        <option>Select Role</option>
        {roles.map((r) => (
          <option key={r.id} value={r.id}>
            {r.name}
          </option>
        ))}
      </select>

      <Button onClick={() => dispatch(assignRole({ userId, roleId }))}>
        Save
      </Button>
    </div>
  )
}
