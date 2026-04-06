import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function WalletPage() {
  return (
    <div className="flex flex-col gap-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold text-black-slug">Wallet</h1>
        <p className="text-sm text-peppered-pecan mt-1">Your wallet address & transaction history</p>
      </div>

      {/* Wallet Address */}
      <Card>
        <CardHeader>
          <CardDescription>Wallet Address</CardDescription>
          <CardTitle className="text-sm font-mono text-black-slug break-all">
            0x0000000000000000000000000000000000000000
          </CardTitle>
        </CardHeader>
        <CardContent>
          <button
            type="button"
            className="text-sm text-cassiterite-brown hover:text-chill-con-carne hoverEffect"
          >
            Copy Address
          </button>
        </CardContent>
      </Card>

      {/* Balance */}
      <Card>
        <CardHeader>
          <CardDescription>Balance</CardDescription>
          <CardTitle className="text-3xl font-bold text-black-slug">0.0000 ETH</CardTitle>
          <p className="text-sm text-peppered-pecan">≈ $0.00 USD</p>
        </CardHeader>
      </Card>

      {/* Transaction History */}
      <div>
        <h2 className="text-base font-semibold text-black-slug mb-3">Transaction History</h2>
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
