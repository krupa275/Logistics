import { memo } from "react"
import { Card, CardContent } from "@/components/ui/card"

const SummaryCard = memo(function SummaryCard({ title, value }) {
  return (
    <Card className="rounded-2xl shadow-sm">
      <CardContent className="p-5 flex flex-col gap-1">
        <p className="text-sm text-muted-foreground">{title}</p>
        <p className="text-2xl font-semibold">{value}</p>
      </CardContent>
    </Card>
  )
})

export default SummaryCard
