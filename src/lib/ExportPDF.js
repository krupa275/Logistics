import jsPDF from "jspdf"
import autoTable from "jspdf-autotable"

export const exportToPDF = ({ title, columns, data }) => {
  const doc = new jsPDF()

  doc.setFontSize(16)
  doc.text(title, 14, 15)

  autoTable(doc, {
    startY: 25,
    head: [columns],
    body: data,
  })

  doc.save(`${title}.pdf`)
}
