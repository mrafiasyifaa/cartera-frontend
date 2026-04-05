import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold text-black-slug">Dashboard</h1>
        <p className="text-sm text-peppered-pecan mt-1">
          Last sync: {new Date().toLocaleString()}
        </p>
      </div>

      {/* Balance Card */}
      <Card>
        <CardHeader>
          <CardDescription>Total Balance</CardDescription>
          <CardTitle className="text-3xl font-bold text-black-slug">
            0.0000 ETH
          </CardTitle>
          <p className="text-sm text-peppered-pecan">≈ $0.00 USD</p>
        </CardHeader>
      </Card>

      {/* Shortcuts */}
      <div className="grid grid-cols-2 gap-4">
        <Link href="/dashboard/wallet">
          <Card className="hover:border-cassiterite-brown hoverEffect cursor-pointer">
            <CardContent className="pt-6">
              <p className="font-medium text-black-slug">Wallet</p>
              <p className="text-sm text-peppered-pecan mt-1">
                View address & transaction history
              </p>
            </CardContent>
          </Card>
        </Link>
        <Link href="/dashboard/send">
          <Card className="hover:border-cassiterite-brown hoverEffect cursor-pointer">
            <CardContent className="pt-6">
              <p className="font-medium text-black-slug">Send</p>
              <p className="text-sm text-peppered-pecan mt-1">
                Send ETH to another address
              </p>
            </CardContent>
          </Card>
        </Link>
      </div>

      {/* Recent Transactions */}
      <div>
        <h2 className="text-base font-semibold text-black-slug mb-3">
          Recent Transactions
        </h2>
        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-peppered-pecan text-center py-4">
              No transactions yet
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
