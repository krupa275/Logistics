import { Outlet } from "react-router-dom"
import { useState } from "react"
import { Sheet, SheetContent } from "@/components/ui/sheet"
import { Sidebar } from "./component/Sidebar"
import { Header } from "./component/Header"

export function Authenticated() {
  const [open, setOpen] = useState(false)
  return (
    <div className="h-screen flex overflow-hidden">
      <div className="hidden md:block">
        <Sidebar open />
      </div>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="left" className="p-0 w-64">
          <Sidebar open onClose={() => setOpen(false)} />
        </SheetContent>
      </Sheet>
      <div className="flex flex-col flex-1">
        <Header onToggle={() => setOpen(true)} />
        <main className="flex-1 overflow-auto p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
