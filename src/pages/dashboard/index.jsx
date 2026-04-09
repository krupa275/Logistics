import SummaryCard from "@/features/dashboard/summaryCard"
import { useMemo } from "react"
import { useSelector } from "react-redux"

export default function Dashboard() {
  const { list: inquiries } = useSelector((s) => s.inquiry)
  // const { actualQuotes, requests } = useSelector((s) => s.vendor)

  const stats = useMemo(() => {
    const totalInquiries = inquiries.length

    const pendingQuotes = 1 /* actualQuotes.filter(
      (q) => q.status === "pending"
    ).length */

    const approvedQuotes = 1 /* actualQuotes.filter(
      (q) => q.status === "received"
    ).length */

    const vendorsCount = 1 /* new Set(
      requests.map((r) => r.vendorName)
    ).size */

    return {
      totalInquiries,
      pendingQuotes,
      approvedQuotes,
      vendorsCount,
    }
  }, [inquiries /* , actualQuotes, requests */])

  return (
    <div className="space-y-6">
      <h1 className="text-xl font-semibold">Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <SummaryCard title="Total Inquiries" value={stats.totalInquiries} />
        <SummaryCard title="Pending Quotes" value={stats.pendingQuotes} />
        <SummaryCard title="Approved Quotes" value={stats.approvedQuotes} />
        <SummaryCard title="Vendors Count" value={stats.vendorsCount} />
      </div>
    </div>
  )
}
