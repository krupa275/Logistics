import { Button } from "@/components/ui/button"
import { Menu, User } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { memo } from "react"
import { useSelector } from "react-redux"
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export const Header = memo(function Header({ onToggle }) {
  const data = useSelector((state) => state.users)
  console.log(data)
  return (
    <header className="h-16 border-b bg-background flex items-center justify-between px-4">
      <Button
        variant="ghost"
        size="icon"
        onClick={onToggle}
        className="md:hidden"
      >
        <Menu size={20} />
      </Button>

      <div className="flex-1" />

      <Avatar className="h-9 w-9 cursor-pointer">
        <AvatarFallback>
          <User size={18} />
        </AvatarFallback>
      </Avatar>
    </header>
  )
})
