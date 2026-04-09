import { useMemo, useState } from "react"
import { motion } from "framer-motion"
import { Eye, EyeOff } from "lucide-react"
import { Input } from "@/components/ui/input"

const getStrength = (password) => {
  let score = 0
  if (password.length >= 6) score++
  if (/[A-Z]/.test(password)) score++
  if (/[0-9]/.test(password)) score++
  if (/[^A-Za-z0-9]/.test(password)) score++
  return score
}
export function PasswordInput({ value, onChange, error }) {
  const [show, setShow] = useState(false)

  const strength = useMemo(() => getStrength(value || ""), [value])

  const strengthMeta = [
    { label: "Weak", class: "bg-red-500 w-1/4" },
    { label: "Fair", class: "bg-orange-500 w-2/4" },
    { label: "Good", class: "bg-yellow-500 w-3/4" },
    { label: "Strong", class: "bg-green-500 w-full" },
  ]

  return (
    <div className="space-y-2">
      <div className="relative">
        <Input
          type={show ? "text" : "password"}
          value={value}
          onChange={onChange}
          placeholder="Enter password"
          className="pr-10"
        />
        <button
          type="button"
          onClick={() => setShow((p) => !p)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
        >
          {show ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>

      <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          key={strength}
          //   initial={{ width: 0 }}/
          //   animate={{ width: `${(strength / 4) * 100}%` }}
          //   transition={{ duration: 0.4 }}
          className={`h-full ${
            strength > 0 ? strengthMeta[strength - 1].class : ""
          }`}
        />
      </div>

      {value && (
        <p className="text-xs text-muted-foreground">
          {strength > 0 ? strengthMeta[strength - 1].label : "Too weak"}
        </p>
      )}

      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  )
}
