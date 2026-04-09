import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import InquiryTable from "@/features/Inquery/InquiryTable"

export default function Inquiry() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Inquiry List</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <InquiryTable />
        </CardContent>
      </Card>
    </div>
  )
}
