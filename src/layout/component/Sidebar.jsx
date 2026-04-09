import { memo } from "react"

import { cn } from "@/lib/utils"
import { NavLink } from "react-router-dom"
import { sidebarRoutes } from "@/constant/routes"
import { Button } from "@/components/ui/button"
import { useDispatch } from "react-redux"
import { logout } from "@/store-factory/slices/auth"

export const Sidebar = memo(function Sidebar({ open, onClose }) {
  const dispatch = useDispatch()
  const logoutUser = () => dispatch(logout())
  return (
    <aside
      className={cn(
        "h-full w-64 bg-background border-r shadow-sm flex flex-col",
        "transition-transform duration-300",
        open ? "translate-x-0" : "-translate-x-full md:translate-x-0",
      )}
    >
      <div className="h-16 flex items-center px-4 border-b text-lg font-semibold">
        Logistics
      </div>

      <nav className="flex-1 p-3 space-y-1">
        {sidebarRoutes.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === "/"}
            onClick={onClose}
            className={({ isActive }) =>
              cn(
                "block px-3 py-2 rounded-lg text-sm transition-colors",
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-muted",
              )
            }
          >
            {item.name}
          </NavLink>
          //   <button
          //     key={item.key}
          //     onClick={() => {
          //       onSelect(item.key)
          //       onClose?.()
          //     }}
          //     className={cn(
          //       "w-full text-left px-3 py-2 rounded-lg text-sm transition-colors",
          //       active === item.key
          //         ? "bg-primary text-primary-foreground"
          //         : "hover:bg-muted"
          //     )}
          //   >
          //     {item.name}
          //   </button>
        ))}
      </nav>
      <Button onClick={logoutUser}>Logout</Button>
    </aside>
  )
})
