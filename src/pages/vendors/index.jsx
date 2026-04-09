import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import ActualQuoteTable from "@/features/feature/ActualQuoteTable"
import VendorQuoteForm from "@/features/feature/VendorQuoteForm"
import VendorQuoteTable from "@/features/feature/VendorQuoteTable"

export default function VendorPage() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Vendor Quote Request</CardTitle>
        </CardHeader>
        <CardContent>
          <VendorQuoteForm />
          <VendorQuoteTable />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Actual Vendor Quotes</CardTitle>
        </CardHeader>
        <CardContent>
          <ActualQuoteTable />
        </CardContent>
      </Card>
    </div>
  )
}
