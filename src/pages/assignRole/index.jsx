import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import BranchAccessForm from "@/features/users/branchAccess"
import UserRoleMapping from "@/features/users/rolle-mapping"

const AssignRole = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Assign Role</CardTitle>
            <div className="box flex gap-2"></div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <UserRoleMapping />
          <BranchAccessForm />
          {/* <UserTable onEdit={onEdit} /> */}
        </CardContent>
      </Card>
      {/* <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create User</DialogTitle>
          </DialogHeader>
          <UserForm defaultValues={defaultValues} onClose={onClose} />
        </DialogContent>
      </Dialog> */}
    </div>
  )
}

export default AssignRole
