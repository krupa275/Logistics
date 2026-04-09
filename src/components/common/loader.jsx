import { Loader2 } from "lucide-react"
import React from "react"

const Loader = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/30 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-3 rounded-2xl ">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        {/* <p className="text-sm text-muted-foreground">Please wait...</p> */}
      </div>
    </div>
  )
}

export default Loader
