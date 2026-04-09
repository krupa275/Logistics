import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { RoleForm, RoleTable } from "@/features/users/RoleForm"
import React, { useState } from "react"

const Roles = () => {
  const [open, setOpen] = useState(false)

  const close = () => {
    setOpen(false)
  }
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Roles</CardTitle>
            <Button onClick={() => setOpen(true)}>+ Add Roles</Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <RoleTable />
        </CardContent>
      </Card>

      {/* 
        <RoleTable />
  
        <UserRoleMapping />
        <BranchAccessForm /> */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create Role</DialogTitle>
          </DialogHeader>
          <RoleForm close={close} />
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default Roles
