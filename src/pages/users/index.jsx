import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { ROUTES } from "@/constant/routes"
import UserForm from "@/features/users/UserForm"
import UserTable from "@/features/users/UserTable"
import { Activity } from "lucide-react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Users() {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const [defaultValues, setDefaultValues] = useState(null)

  const onEdit = (values) => {
    setDefaultValues(values)
    setOpen(true)
  }

  const onClose = () => {
    setOpen(false)
    setDefaultValues(null)
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Users</CardTitle>
            <div className="box flex gap-2">
              <Button onClick={() => setOpen(true)}>+ Add User</Button>
              <Button variant="outline" onClick={() => navigate(ROUTES.ROLES)}>
                <Activity />
                Roles
              </Button>
              <Button variant="link" onClick={() => navigate(ROUTES.ASSIGN)}>
                <Activity />
                Assign Roles
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <UserTable onEdit={onEdit} />
        </CardContent>
      </Card>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create User</DialogTitle>
          </DialogHeader>
          <UserForm defaultValues={defaultValues} onClose={onClose} />
        </DialogContent>
      </Dialog>
    </div>
  )
}
