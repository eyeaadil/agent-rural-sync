import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type DashboardCardProps = {
  title: string
  value: number
}

export default function DashboardCard({ title, value }: DashboardCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
      </CardContent>
    </Card>
  )
}
