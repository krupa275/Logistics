import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import InquiryReport from "@/features/reports/InqueryReport"
import VendorReport from "@/features/reports/VendorReport"

export default function ReportsPage() {
  return (
    <div className="p-3 sm:p-4 md:p-6 space-y-6">
      <div className="flex flex-col gap-1">
        <h1 className="text-xl sm:text-2xl font-semibold tracking-tight">
          Reports
        </h1>
        <p className="text-sm text-muted-foreground">
          Analyze inquiries and vendor quotes
        </p>
      </div>

      <Tabs defaultValue="inquiry" className="w-full flex-col">
        <TabsList>
          <TabsTrigger value="inquiry">Inquiry Report</TabsTrigger>
          <TabsTrigger value="vendor">Vendor Report</TabsTrigger>
        </TabsList>

        <TabsContent value="inquiry" className="mt-4">
          <Card className="rounded-2xl shadow-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Inquiry Report</CardTitle>
            </CardHeader>
            <CardContent className="overflow-x-auto">
              <InquiryReport />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="vendor" className="mt-4">
          <Card className="rounded-2xl shadow-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Vendor Quote Report</CardTitle>
            </CardHeader>
            <CardContent className="overflow-x-auto">
              <VendorReport />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
