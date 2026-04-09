import { useDispatch, useSelector } from "react-redux"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { setBranchAccess } from "@/store-factory/slices/users"

export default function BranchAccessForm() {
  const { roles } = useSelector((s) => s.users)
  const dispatch = useDispatch()

  const [form, setForm] = useState({
    roleId: "",
    branch: "",
    view: false,
    add: false,
    edit: false,
    delete: false,
  })

  return (
    <div className="space-y-3">
      <select onChange={(e) => setForm({ ...form, roleId: e.target.value })}>
        <option>Select Role</option>
        {roles.map((r) => (
          <option key={r.id} value={r.id}>
            {r.name}
          </option>
        ))}
      </select>

      <input
        placeholder="Branch"
        onChange={(e) => setForm({ ...form, branch: e.target.value })}
      />

      <div className="flex gap-3">
        {["view", "add", "edit", "delete"].map((p) => (
          <label key={p}>
            <input
              type="checkbox"
              onChange={(e) => setForm({ ...form, [p]: e.target.checked })}
            />
            {p}
          </label>
        ))}
      </div>

      <Button onClick={() => dispatch(setBranchAccess(form))}>
        Save Access
      </Button>
    </div>
  )
}
